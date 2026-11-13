import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  GLTFLoader,
  type GLTF,
} from "three/examples/jsm/loaders/GLTFLoader.js";
import { disposeObject3D } from "../electronic-shelf-labels/shelf-label-viewer/dispose.ts";

const BASE_URL = import.meta.env.BASE_URL;
const MODEL_URL = `${BASE_URL}models/totem/digital-display-screen.glb`;
const VIDEO_URL = `${BASE_URL}videos/totems/sea-creature-10s-loop.mp4`;
const CAMERA_FOV = 35;
const CAMERA_AZIMUTH = THREE.MathUtils.degToRad(20);
const CAMERA_ELEVATION = THREE.MathUtils.degToRad(9);
const MODEL_PADDING = 1.12;

function configureRenderer(canvas: HTMLCanvasElement): THREE.WebGLRenderer {
  const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const pixelRatio = Math.min(
    window.devicePixelRatio || 1,
    isCoarsePointer ? 1.5 : 2,
  );
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });

  renderer.setPixelRatio(pixelRatio);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  return renderer;
}

function createVideo(): HTMLVideoElement {
  const video = document.createElement("video");
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.preload = "none";
  video.crossOrigin = "anonymous";
  return video;
}

function setStatus(
  status: HTMLElement | null,
  message: string,
  hidden = false,
): void {
  if (!status) return;
  status.textContent = message;
  status.hidden = hidden;
}

function isNamedMesh(mesh: THREE.Mesh, name: string): boolean {
  const normalizedName = name.toLowerCase();
  if (mesh.name.toLowerCase() === normalizedName) return true;

  const materials = Array.isArray(mesh.material)
    ? mesh.material
    : [mesh.material];
  return materials.some(
    (material) => material.name.toLowerCase() === normalizedName,
  );
}

function createInvertedTexture(texture: THREE.Texture): THREE.CanvasTexture {
  const image = texture.image;
  if (!(image instanceof HTMLImageElement) && !(image instanceof ImageBitmap)) {
    throw new Error("The totem logo texture image is not supported.");
  }

  const width =
    image instanceof HTMLImageElement ? image.naturalWidth : image.width;
  const height =
    image instanceof HTMLImageElement ? image.naturalHeight : image.height;
  if (width <= 0 || height <= 0) {
    throw new Error("The totem logo texture has invalid dimensions.");
  }

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) {
    throw new Error("Could not create a canvas to invert the totem logo.");
  }

  context.drawImage(image, 0, 0, width, height);
  const imageData = context.getImageData(0, 0, width, height);
  for (let index = 0; index < imageData.data.length; index += 4) {
    imageData.data[index] = 255 - imageData.data[index]!;
    imageData.data[index + 1] = 255 - imageData.data[index + 1]!;
    imageData.data[index + 2] = 255 - imageData.data[index + 2]!;
  }
  context.putImageData(imageData, 0, 0);

  const invertedTexture = new THREE.CanvasTexture(canvas);
  invertedTexture.colorSpace = texture.colorSpace;
  invertedTexture.flipY = texture.flipY;
  invertedTexture.wrapS = texture.wrapS;
  invertedTexture.wrapT = texture.wrapT;
  invertedTexture.minFilter = texture.minFilter;
  invertedTexture.magFilter = texture.magFilter;
  invertedTexture.generateMipmaps = texture.generateMipmaps;
  invertedTexture.anisotropy = texture.anisotropy;
  invertedTexture.channel = texture.channel;
  invertedTexture.repeat.copy(texture.repeat);
  invertedTexture.offset.copy(texture.offset);
  invertedTexture.center.copy(texture.center);
  invertedTexture.rotation = texture.rotation;
  invertedTexture.matrix.copy(texture.matrix);
  invertedTexture.matrixAutoUpdate = texture.matrixAutoUpdate;
  invertedTexture.needsUpdate = true;
  return invertedTexture;
}

function configureModel(
  gltf: GLTF,
  videoTexture: THREE.VideoTexture,
): THREE.Object3D {
  let screenMesh: THREE.Mesh | undefined;
  let glassMesh: THREE.Mesh | undefined;
  let logoMesh: THREE.Mesh | undefined;
  let bodyMeshFound = false;

  gltf.scene.traverse((object) => {
    if (!(object instanceof THREE.Mesh)) return;

    if (isNamedMesh(object, "body")) {
      bodyMeshFound = true;
      const originalMaterials = Array.isArray(object.material)
        ? object.material
        : [object.material];
      const darkMetalMaterials = originalMaterials.map((material) => {
        material.dispose();
        return new THREE.MeshStandardMaterial({
          color: "#2b3036",
          metalness: 0.52,
          roughness: 0.26,
        });
      });
      const darkMetalMaterial = darkMetalMaterials[0];
      if (!darkMetalMaterial) {
        throw new Error("The totem body mesh has no material.");
      }
      object.material = Array.isArray(object.material)
        ? darkMetalMaterials
        : darkMetalMaterial;
    } else if (isNamedMesh(object, "screen")) {
      screenMesh = object;
    } else if (isNamedMesh(object, "glass")) {
      glassMesh = object;
    } else if (isNamedMesh(object, "logo")) {
      logoMesh = object;
    }
  });

  if (!bodyMeshFound || !screenMesh || !logoMesh) {
    throw new Error("The totem model is missing a required body, screen, or logo mesh.");
  }

  const obsoleteGlassMesh = glassMesh;
  if (obsoleteGlassMesh) {
    obsoleteGlassMesh.removeFromParent();
    disposeObject3D(obsoleteGlassMesh);
  }

  const logoMaterials = Array.isArray(logoMesh.material)
    ? logoMesh.material
    : [logoMesh.material];
  let logoTextureFound = false;
  logoMaterials.forEach((material) => {
    if (!(material instanceof THREE.MeshStandardMaterial) || !material.map) {
      return;
    }

    const originalTexture = material.map;
    material.map = createInvertedTexture(originalTexture);
    material.color.set("#ffffff");
    material.needsUpdate = true;
    originalTexture.dispose();
    logoTextureFound = true;
  });
  if (!logoTextureFound) {
    throw new Error("The totem logo mesh has no color texture to invert.");
  }
  logoMesh.scale.z *= 0.9;

  screenMesh.position.z += 0.012;
  const originalScreenMaterials = Array.isArray(screenMesh.material)
    ? screenMesh.material
    : [screenMesh.material];
  originalScreenMaterials.forEach((material) => material.dispose());

  screenMesh.geometry.computeBoundingBox();
  const geometryBounds = screenMesh.geometry.boundingBox;
  if (!geometryBounds) {
    throw new Error("The totem screen mesh has no geometry bounds.");
  }
  const screenSize = geometryBounds.getSize(new THREE.Vector3());
  const screenAspect =
    (screenSize.x * screenMesh.scale.x) /
    (screenSize.z * screenMesh.scale.z);
  if (!Number.isFinite(screenAspect) || screenAspect <= 0) {
    throw new Error("The totem screen mesh has invalid dimensions.");
  }
  const videoAspect = 496 / 864;
  const verticalRepeat = Math.min(1, videoAspect / screenAspect);
  videoTexture.repeat.set(1, verticalRepeat);
  videoTexture.offset.set(0, (1 - verticalRepeat) / 2);
  videoTexture.needsUpdate = true;

  screenMesh.material = new THREE.MeshBasicMaterial({
    map: videoTexture,
    side: THREE.DoubleSide,
    toneMapped: false,
  });

  return gltf.scene;
}

export function initTotemModelViewer(
  container: HTMLElement,
  signal: AbortSignal,
): void {
  const canvas = container.querySelector("canvas");
  const status = container.querySelector<HTMLElement>("[data-model-status]");
  const loadingOverlay = container.querySelector<HTMLElement>(
    "[data-model-loading]",
  );
  const errorLabel =
    canvas?.getAttribute("data-error-label") ?? "The 3D model could not be loaded.";

  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("Totem viewer canvas was not found.");
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(CAMERA_FOV, 1, 0.01, 100);
  let renderer: THREE.WebGLRenderer;

  try {
    renderer = configureRenderer(canvas);
  } catch (error) {
    console.error("Could not create the totem viewer renderer.", error);
    setStatus(status, errorLabel);
    return;
  }

  const controls = new OrbitControls(camera, canvas);
  const video = createVideo();
  const videoTexture = new THREE.VideoTexture(video);
  const loader = new GLTFLoader();
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const lightingRig = new THREE.Group();
  let model: THREE.Object3D | undefined;
  let animationFrame = 0;
  let isVisible = false;
  let assetsStarted = false;
  let resizeObserver: ResizeObserver | undefined;

  videoTexture.colorSpace = THREE.SRGBColorSpace;
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;
  videoTexture.generateMipmaps = false;
  videoTexture.flipY = false;

  lightingRig.add(new THREE.HemisphereLight(0xffffff, 0x18212c, 0.45));

  const keyLight = new THREE.DirectionalLight(0xffffff, 3.3);
  keyLight.position.set(-3, 4, 5);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(1024, 1024);
  keyLight.shadow.bias = -0.00015;
  keyLight.shadow.normalBias = 0.02;
  keyLight.shadow.radius = 4;
  lightingRig.add(keyLight, keyLight.target);

  const auroraValue = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-aurora")
    .trim();
  const blueLight = new THREE.DirectionalLight(
    auroraValue || "#2d81ff",
    0.55,
  );
  blueLight.position.set(0, -3, 2);
  lightingRig.add(blueLight, blueLight.target);

  const fillLight = new THREE.DirectionalLight(0xe4e9ef, 1.5);
  fillLight.position.set(4, 2, 4);
  lightingRig.add(fillLight, fillLight.target);

  const rimLight = new THREE.DirectionalLight(0xd3dce8, 1.4);
  rimLight.position.set(2, 3, -4);
  lightingRig.add(rimLight, rimLight.target);

  const lowerFillLight = new THREE.DirectionalLight(0xe4e9ef, 0.55);
  lowerFillLight.position.set(-1, -2, 4);
  lightingRig.add(lowerFillLight, lowerFillLight.target);

  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enableRotate = true;
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.rotateSpeed = 0.7;
  controls.minPolarAngle = THREE.MathUtils.degToRad(35);
  controls.maxPolarAngle = THREE.MathUtils.degToRad(145);
  controls.target.set(0, 0, 0);

  const resize = (): void => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width === 0 || height === 0) return;

    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    if (model) frameModel();
  };

  function frameModel(): void {
    if (!model) return;

    const bounds = new THREE.Box3().setFromObject(model);
    const size = bounds.getSize(new THREE.Vector3());
    const verticalDistance =
      size.y / (2 * Math.tan(THREE.MathUtils.degToRad(CAMERA_FOV / 2)));
    const horizontalFov =
      2 * Math.atan(
        Math.tan(THREE.MathUtils.degToRad(CAMERA_FOV / 2)) * camera.aspect,
      );
    const horizontalDistance = size.x / (2 * Math.tan(horizontalFov / 2));
    const depthDistance = size.z / (2 * Math.tan(horizontalFov / 2));
    const distance =
      Math.max(verticalDistance, horizontalDistance, depthDistance) *
      MODEL_PADDING;

    const cameraOrbitRadius = distance * Math.cos(CAMERA_ELEVATION);
    camera.position.set(
      cameraOrbitRadius * Math.sin(CAMERA_AZIMUTH),
      distance * Math.sin(CAMERA_ELEVATION),
      cameraOrbitRadius * Math.cos(CAMERA_AZIMUTH),
    );
    camera.near = Math.max(distance / 100, 0.001);
    camera.far = distance * 100;
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    controls.target.set(0, 0, 0);
    controls.update();
  }

  resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();

  const render = (): void => {
    if (signal.aborted || !isVisible) return;
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
    if (!video.src) {
      video.src = VIDEO_URL;
      video.load();
    }
    if (reduceMotion) return;

    void video.play().catch((error: unknown) => {
      if (signal.aborted) return;
      console.warn("Totem screen video autoplay was blocked.", error);
      canvas.addEventListener(
        "pointerdown",
        () => {
          void video.play().catch((playError: unknown) => {
            if (!signal.aborted) {
              console.error("Could not start the totem screen video.", playError);
            }
          });
        },
        { once: true, signal },
      );
    });
  };

  const loadModel = (): void => {
    if (assetsStarted || signal.aborted) return;
    assetsStarted = true;

    loader.load(
      MODEL_URL,
      (gltf: GLTF) => {
        if (signal.aborted) {
          disposeObject3D(gltf.scene);
          return;
        }

        try {
          model = configureModel(gltf, videoTexture);
          const bounds = new THREE.Box3().setFromObject(model);
          const center = bounds.getCenter(new THREE.Vector3());
          const size = bounds.getSize(new THREE.Vector3());
          model.position.sub(center);
          model.add(lightingRig);
          model.traverse((object) => {
            if (!(object instanceof THREE.Mesh)) return;
            object.castShadow = true;
            object.receiveShadow = true;
          });
          const shadowCamera = keyLight.shadow.camera;
          const shadowExtent = Math.max(size.x, size.z) * 1.5;
          shadowCamera.left = -shadowExtent;
          shadowCamera.right = shadowExtent;
          shadowCamera.top = size.y;
          shadowCamera.bottom = -size.y;
          shadowCamera.near = 0.1;
          shadowCamera.far = Math.max(size.length() * 3, 10);
          shadowCamera.updateProjectionMatrix();
          keyLight.shadow.needsUpdate = true;
          scene.add(model);
          frameModel();
          setStatus(status, "", true);
          if (loadingOverlay) {
            loadingOverlay.hidden = true;
            loadingOverlay.setAttribute("aria-hidden", "true");
          }
          if (isVisible) startRendering();
        } catch (error) {
          console.error("Could not prepare the totem model.", error);
          disposeObject3D(gltf.scene);
          setStatus(status, errorLabel);
        }
      },
      undefined,
      (error: unknown) => {
        if (signal.aborted) return;
        console.error("Could not load the totem model.", error);
        setStatus(status, errorLabel);
      },
    );
  };

  const visibilityObserver = new IntersectionObserver(
    ([entry]) => {
      isVisible = Boolean(entry?.isIntersecting);

      if (isVisible) {
        loadModel();
        startVideo();
        startRendering();
      } else {
        stopRendering();
        video.pause();
      }
    },
    { rootMargin: "100px" },
  );
  visibilityObserver.observe(container);

  video.addEventListener(
    "error",
    () => {
      if (signal.aborted) return;
      console.error("Could not load the totem screen video.", video.error);
      setStatus(status, errorLabel);
    },
    { signal },
  );

  signal.addEventListener(
    "abort",
    () => {
      stopRendering();
      visibilityObserver.disconnect();
      resizeObserver?.disconnect();
      controls.dispose();

      video.pause();
      video.removeAttribute("src");
      video.load();

      if (model) disposeObject3D(model);
      else videoTexture.dispose();
      scene.clear();
      renderer.renderLists.dispose();
      renderer.dispose();
    },
    { once: true },
  );
}
