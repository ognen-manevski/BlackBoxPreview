import * as THREE from "three";
import { MeshoptDecoder } from "meshoptimizer/decoder";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import {
  GLTFLoader,
  type GLTF,
} from "three/examples/jsm/loaders/GLTFLoader.js";
import { disposeObject3D } from "./dispose";
import { applyBodyColor, isSupportedMaterial } from "./materials";
import type {
  BodyMaterialEntry,
  ShelfLabelColor,
  SupportedMaterial,
} from "./types";

const MODEL_URL = "/models/shelf-label/Label-optimized.gltf";
const WOOD_TEXTURE_URL = "/models/shelf-label/wood.png";
const VIDEO_URL = "/videos/shelf-labels/product-features-loop.mp4";
const MODEL_ROTATION_X = THREE.MathUtils.degToRad(86);
const VIDEO_ASPECT = 1000 / 700;
const EMITTER_BLINK_SPEED = 0.5;
const EMITTER_MIN_INTENSITY = 0;
const EMITTER_MAX_INTENSITY = 10;

function getInitialColor(container: HTMLElement): ShelfLabelColor {
  const value = container.dataset.initialColor;
  return value === "black" || value === "wood" ? value : "white";
}

function configureRenderer(canvas: HTMLCanvasElement): THREE.WebGLRenderer {
  const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const pixelRatio = Math.min(
    window.devicePixelRatio,
    isCoarsePointer ? 1.25 : 1.75,
  );

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: pixelRatio < 1.5,
    powerPreference: "high-performance",
  });

  renderer.setPixelRatio(pixelRatio);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;

  return renderer;
}

function createVideo(): HTMLVideoElement {
  const video = document.createElement("video");
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.crossOrigin = "anonymous";
  return video;
}

function prepareVideo(video: HTMLVideoElement): void {
  if (video.getAttribute("src")) return;
  video.src = VIDEO_URL;
  video.load();
}

export function initShelfLabelViewer(
  container: HTMLElement,
  signal: AbortSignal,
): void {
  const canvas = container.querySelector("canvas");
  const status = container.querySelector<HTMLElement>("[data-model-status]");
  const loadingOverlay = container.querySelector<HTMLElement>(
    "[data-model-loading]",
  );

  if (!(canvas instanceof HTMLCanvasElement)) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const initialColor = getInitialColor(container);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.01, 100);
  const renderer = configureRenderer(canvas);
  const controls = new OrbitControls(camera, canvas);
  const video = createVideo();
  const videoTexture = new THREE.VideoTexture(video);
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  const textureLoader = new THREE.TextureLoader();

  let model: THREE.Object3D | undefined;
  let woodTexture: THREE.Texture | undefined;
  let screenVideoPlane: THREE.Mesh | undefined;
  let animationFrame = 0;
  let isVisible = false;
  let assetsStarted = false;
  let previousBlinkState: boolean | undefined;

  const bodyMaterials: BodyMaterialEntry[] = [];
  const hiddenMaterials: THREE.Material[] = [];
  const labelMaterials: SupportedMaterial[] = [];
  const emitterMaterials: SupportedMaterial[] = [];
  const replacedScreenMaterials = new Set<THREE.Material>();

  camera.position.set(0, 0.8, 4);

  videoTexture.colorSpace = THREE.SRGBColorSpace;
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;
  videoTexture.generateMipmaps = false;
  videoTexture.flipY = true;

  scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 2.5));

  const keyLight = new THREE.DirectionalLight(0xffffff, 5);
  keyLight.position.set(3, 4, 5);
  scene.add(keyLight);

  const auroraValue = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-aurora")
    .trim();
  const blueLight = new THREE.DirectionalLight(
    auroraValue || 0x2d81ff,
    2,
  );
  blueLight.position.set(0, -3, 0);
  scene.add(blueLight);

  const fillLight = new THREE.DirectionalLight(0xffffff, 2);
  fillLight.position.set(-4, 1, 2);
  scene.add(fillLight);

  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enableRotate = true;
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.rotateSpeed = 0.7;
  controls.target.set(0, 0, 0);

  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);
  loader.setMeshoptDecoder(MeshoptDecoder);

  const resize = (): void => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width === 0 || height === 0) return;

    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();

  const updateEmitter = (): void => {
    if (reduceMotion) return;

    const blinkOn =
      Math.floor(performance.now() * 0.001 * EMITTER_BLINK_SPEED * 2) % 2 === 0;
    if (blinkOn === previousBlinkState) return;
    previousBlinkState = blinkOn;

    for (const material of emitterMaterials) {
      if (material instanceof THREE.MeshBasicMaterial) {
        material.opacity = blinkOn ? 1 : 0;
      } else {
        material.emissiveIntensity = blinkOn
          ? EMITTER_MAX_INTENSITY
          : EMITTER_MIN_INTENSITY;
      }
    }
  };

  const render = (): void => {
    if (signal.aborted || !isVisible) return;

    updateEmitter();
    controls.update();
    renderer.render(scene, camera);
    animationFrame = window.requestAnimationFrame(render);
  };

  const startRendering = (): void => {
    if (signal.aborted || !isVisible || animationFrame !== 0) return;
    animationFrame = window.requestAnimationFrame(render);
  };

  const stopRendering = (): void => {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
  };

  const startVideo = (): void => {
    if (reduceMotion || signal.aborted || !isVisible) return;

    void video.play().catch(() => {
      canvas.addEventListener(
        "pointerdown",
        () => {
          if (!signal.aborted) void video.play();
        },
        { once: true, signal },
      );
    });
  };

  const applyVideoTexture = (): void => {
    if (!model || screenVideoPlane || signal.aborted) return;

    model.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;

      const originalMaterial = object.material;
      const materials = Array.isArray(originalMaterial)
        ? originalMaterial
        : [originalMaterial];
      let foundScreenMaterial = false;

      const updatedMaterials = materials.map((material) => {
        if (material.name !== "Screen-material") return material;
        foundScreenMaterial = true;
        replacedScreenMaterials.add(material);

        return new THREE.MeshBasicMaterial({
          color: 0xffffff,
          toneMapped: false,
          side: THREE.FrontSide,
        });
      });

      if (!foundScreenMaterial) return;

      object.geometry.computeBoundingBox();
      const boundingBox = object.geometry.boundingBox;

      if (boundingBox && !screenVideoPlane) {
        const size = boundingBox.getSize(new THREE.Vector3());
        const dimensions = [size.x, size.y, size.z].sort(
          (left, right) => right - left,
        );
        const planeWidth = dimensions[0];
        const planeHeight = dimensions[1];
        const screenAspect = planeWidth / planeHeight;
        const videoPlaneWidth =
          VIDEO_ASPECT > screenAspect
            ? planeWidth
            : planeHeight * VIDEO_ASPECT;
        const videoPlaneHeight =
          VIDEO_ASPECT > screenAspect
            ? planeWidth / VIDEO_ASPECT
            : planeHeight;

        screenVideoPlane = new THREE.Mesh(
          new THREE.PlaneGeometry(1, 1),
          new THREE.MeshBasicMaterial({
            map: videoTexture,
            toneMapped: false,
            side: THREE.FrontSide,
          }),
        );
        screenVideoPlane.scale.set(videoPlaneWidth, videoPlaneHeight, 1);
        screenVideoPlane.rotation.x =
          -MODEL_ROTATION_X - THREE.MathUtils.degToRad(4);
        screenVideoPlane.position.set(0, 0.001, 0);
        object.add(screenVideoPlane);
      }

      object.material = Array.isArray(originalMaterial)
        ? updatedMaterials
        : updatedMaterials[0];
    });
  };

  const connectVideo = (): void => {
    if (signal.aborted) return;

    prepareVideo(video);

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      applyVideoTexture();
      startVideo();
      return;
    }

    video.addEventListener(
      "loadeddata",
      () => {
        if (signal.aborted) return;
        applyVideoTexture();
        startVideo();
      },
      { once: true, signal },
    );
  };

  const collectMaterials = (): void => {
    if (!model) return;

    model.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;

      const materials = Array.isArray(object.material)
        ? object.material
        : [object.material];

      for (const material of materials) {
        if (material.name === "Plastic-White" && isSupportedMaterial(material)) {
          bodyMaterials.push({ geometry: object.geometry, material });
        } else if (
          material.name === "Plastic-Black" ||
          material.name === "Plastic-Wood"
        ) {
          hiddenMaterials.push(material);
        } else if (
          (material.name === "back-label-black" ||
            material.name === "barcode") &&
          isSupportedMaterial(material)
        ) {
          labelMaterials.push(material);
        }

        if (material.name === "Emitter" && isSupportedMaterial(material)) {
          if (material instanceof THREE.MeshBasicMaterial) {
            material.transparent = true;
          }
          emitterMaterials.push(material);
        }
      }
    });
  };

  const fitCamera = (): void => {
    if (!model) return;

    const bounds = new THREE.Box3().setFromObject(model);
    const center = bounds.getCenter(new THREE.Vector3());
    const size = bounds.getSize(new THREE.Vector3());

    model.position.sub(center);
    model.rotation.x = MODEL_ROTATION_X;

    const maxDimension = Math.max(size.x, size.y, size.z);
    const distance =
      maxDimension /
      (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));

    camera.position.set(0, 0, distance);
    camera.near = Math.max(maxDimension / 100, 0.001);
    camera.far = maxDimension * 100;
    camera.updateProjectionMatrix();
    controls.target.set(0, 0, 0);
    controls.update();
  };

  const loadAssets = (): void => {
    if (assetsStarted || signal.aborted) return;
    assetsStarted = true;

    woodTexture = textureLoader.load(
      WOOD_TEXTURE_URL,
      undefined,
      undefined,
      (error) => {
        if (!signal.aborted) console.error("Could not load wood texture:", error);
      },
    );
    woodTexture.wrapS = THREE.ClampToEdgeWrapping;
    woodTexture.wrapT = THREE.ClampToEdgeWrapping;
    woodTexture.colorSpace = THREE.SRGBColorSpace;
    woodTexture.flipY = false;
    woodTexture.anisotropy = 1;

    loader.load(
      MODEL_URL,
      (gltf: GLTF) => {
        if (signal.aborted) {
          disposeObject3D(gltf.scene);
          return;
        }

        model = gltf.scene;
        scene.add(model);
        collectMaterials();
        fitCamera();

        if (woodTexture) {
          applyBodyColor(
            initialColor,
            bodyMaterials,
            hiddenMaterials,
            labelMaterials,
            woodTexture,
          );
        }

        connectVideo();

        if (loadingOverlay) {
          loadingOverlay.style.display = "none";
          loadingOverlay.setAttribute("aria-hidden", "true");
        }
        if (status) status.hidden = true;

        if (isVisible) startRendering();
      },
      undefined,
      (error: unknown) => {
        if (signal.aborted) return;
        console.error("Could not load shelf-label model:", error);
        if (status) status.textContent = "The 3D model could not be loaded.";
      },
    );
  };

  const onColorChange = (event: Event): void => {
    if (!(event instanceof CustomEvent) || !woodTexture) return;
    const color = event.detail?.color;

    if (color === "white" || color === "black" || color === "wood") {
      applyBodyColor(
        color,
        bodyMaterials,
        hiddenMaterials,
        labelMaterials,
        woodTexture,
      );
    }
  };

  document.addEventListener("shelf-label-color-change", onColorChange, {
    signal,
  });

  const assetObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        loadAssets();
        assetObserver.disconnect();
      }
    },
    { rootMargin: "300px" },
  );

  const visibilityObserver = new IntersectionObserver(
    ([entry]) => {
      isVisible = Boolean(entry?.isIntersecting);

      if (isVisible) {
        loadAssets();
        startRendering();
        startVideo();
      } else {
        stopRendering();
        video.pause();
      }
    },
    { rootMargin: "100px" },
  );

  assetObserver.observe(container);
  visibilityObserver.observe(container);

  signal.addEventListener(
    "abort",
    () => {
      stopRendering();
      assetObserver.disconnect();
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      controls.dispose();
      dracoLoader.dispose();

      video.pause();
      video.removeAttribute("src");
      video.load();

      screenVideoPlane?.removeFromParent();
      if (screenVideoPlane) disposeObject3D(screenVideoPlane);
      if (model) disposeObject3D(model);

      for (const material of replacedScreenMaterials) material.dispose();
      woodTexture?.dispose();
      videoTexture.dispose();

      scene.clear();
      renderer.renderLists.dispose();
      renderer.dispose();
    },
    { once: true },
  );
}
