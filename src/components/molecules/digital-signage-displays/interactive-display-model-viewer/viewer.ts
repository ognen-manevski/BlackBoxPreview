import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  GLTFLoader,
  type GLTF,
} from "three/examples/jsm/loaders/GLTFLoader.js";
import { disposeObject3D } from "../electronic-shelf-labels/shelf-label-viewer/dispose.ts";

const MODEL_URL = `${import.meta.env.BASE_URL}models/interactive-display/interactive-display.glb`;
const CAMERA_ELEVATION = THREE.MathUtils.degToRad(30);
const CAMERA_AZIMUTH = THREE.MathUtils.degToRad(18);
const RIPPLE_DURATION = 1.2;
const SCREEN_BACKGROUND_URL = `${import.meta.env.BASE_URL}models/interactive-display/background-base.jpg`;
const SCREEN_APP_WIDTH = 1024;
const SCREEN_APP_HEIGHT = 576;
const SCREEN_TEXTURE_SCALE = 2;
const SCREEN_APP_HEADING = "How can we help?";
const SCREEN_APP_INTRO = "Choose a service to get started.";
const SCREEN_APP_OPTIONS = [
  { title: "Find your way", subtitle: "Directories and locations" },
  { title: "Browse products", subtitle: "Explore and compare" },
  { title: "Get assistance", subtitle: "Services and information" },
  { title: "Discover more", subtitle: "Events and offers" },
];
const SCREEN_APP_MARGIN = 40;
const SCREEN_APP_BACK_BUTTON = {
  x: SCREEN_APP_MARGIN,
  y: 24,
  width: 224,
  height: 88,
};

interface ScreenAppButton {
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

function createScreenCanvas(
  canvas: HTMLCanvasElement,
): CanvasRenderingContext2D | undefined {
  canvas.width = SCREEN_APP_WIDTH * SCREEN_TEXTURE_SCALE;
  canvas.height = SCREEN_APP_HEIGHT * SCREEN_TEXTURE_SCALE;
  const context = canvas.getContext("2d");
  context?.setTransform(
    SCREEN_TEXTURE_SCALE,
    0,
    0,
    SCREEN_TEXTURE_SCALE,
    0,
    0,
  );
  return context ?? undefined;
}

function fitScreenUv(geometry: THREE.BufferGeometry): boolean {
  const positions = geometry.getAttribute("position");
  if (!positions || positions.count === 0) return false;

  let minX = Infinity;
  let maxX = -Infinity;
  let minZ = Infinity;
  let maxZ = -Infinity;

  for (let index = 0; index < positions.count; index += 1) {
    const x = positions.getX(index);
    const z = positions.getZ(index);
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minZ = Math.min(minZ, z);
    maxZ = Math.max(maxZ, z);
  }

  const width = maxX - minX;
  const height = maxZ - minZ;
  if (width <= 0 || height <= 0) return false;

  const uv = new Float32Array(positions.count * 2);
  for (let index = 0; index < positions.count; index += 1) {
    uv[index * 2] = (positions.getX(index) - minX) / width;
    uv[index * 2 + 1] = (positions.getZ(index) - minZ) / height;
  }

  geometry.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return true;
}

function drawScreenApp(
  context: CanvasRenderingContext2D,
  background: HTMLImageElement,
  selectedOption: number,
  hoveredOption: number,
): ScreenAppButton[] {
  const width = SCREEN_APP_WIDTH;
  const height = SCREEN_APP_HEIGHT;
  const imageIsReady = background.complete && background.naturalWidth > 0;

  context.clearRect(0, 0, width, height);
  if (imageIsReady) {
    const scale = Math.max(
      width / background.naturalWidth,
      height / background.naturalHeight,
    );
    const imageWidth = background.naturalWidth * scale;
    const imageHeight = background.naturalHeight * scale;
    context.fillStyle = "#07111f";
    context.fillRect(0, 0, width, height);
    context.drawImage(
      background,
      (width - imageWidth) / 2,
      (height - imageHeight) / 2,
      imageWidth,
      imageHeight,
    );
  } else {
    const fallback = context.createLinearGradient(0, 0, width, height);
    fallback.addColorStop(0, "#07111f");
    fallback.addColorStop(0.55, "#2d81ff");
    fallback.addColorStop(1, "#080d19");
    context.fillStyle = fallback;
    context.fillRect(0, 0, width, height);
  }

  const overlay = context.createLinearGradient(0, 0, 0, height);
  overlay.addColorStop(0, "rgba(2, 8, 20, 0.01)");
  overlay.addColorStop(1, "rgba(2, 8, 20, 0.06)");
  context.fillStyle = overlay;
  context.fillRect(0, 0, width, height);

  if (selectedOption >= 0) {
    const option = SCREEN_APP_OPTIONS[selectedOption];
    if (!option) return [];

    const back = SCREEN_APP_BACK_BUTTON;
    context.beginPath();
    context.roundRect(back.x, back.y, back.width, back.height, 18);
    context.fillStyle = hoveredOption === -2
      ? "rgba(31, 119, 229, 0.88)"
      : "rgba(3, 12, 29, 0.7)";
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = hoveredOption === -2
      ? "#ffffff"
      : "rgba(190, 225, 255, 0.78)";
    context.stroke();

    context.beginPath();
    context.moveTo(back.x + 34, back.y + 44);
    context.lineTo(back.x + 64, back.y + 44);
    context.moveTo(back.x + 34, back.y + 44);
    context.lineTo(back.x + 48, back.y + 30);
    context.moveTo(back.x + 34, back.y + 44);
    context.lineTo(back.x + 48, back.y + 58);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 5;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
    context.fillStyle = "#ffffff";
    context.font = "700 32px Inter, Arial, sans-serif";
    context.fillText("Back", back.x + 84, back.y + 54);

    context.fillStyle = "#ffffff";
    context.font = "700 62px Inter, Arial, sans-serif";
    context.fillText(
      option.title,
      SCREEN_APP_MARGIN,
      218,
      width - SCREEN_APP_MARGIN * 2,
    );
    context.fillStyle = "rgba(239, 246, 255, 0.95)";
    context.font = "400 32px Inter, Arial, sans-serif";
    context.fillText(option.subtitle, SCREEN_APP_MARGIN, 272, width - SCREEN_APP_MARGIN * 2);
    return [];
  }

  context.fillStyle = "#ffffff";
  context.font = "700 58px Inter, Arial, sans-serif";
  context.fillText(SCREEN_APP_HEADING, SCREEN_APP_MARGIN, 88);

  context.fillStyle = "rgba(255, 255, 255, 0.96)";
  context.font = "400 27px Inter, Arial, sans-serif";
  context.fillText(SCREEN_APP_INTRO, SCREEN_APP_MARGIN, 134);

  const gap = 18;
  const buttonWidth = (width - SCREEN_APP_MARGIN * 2 - gap) / 2;
  const buttonHeight = 180;
  const firstRow = 154;
  const buttons: ScreenAppButton[] = [];

  SCREEN_APP_OPTIONS.forEach((option, index) => {
    const column = index % 2;
    const row = Math.floor(index / 2);
    const x = SCREEN_APP_MARGIN + column * (buttonWidth + gap);
    const y = firstRow + row * (buttonHeight + gap);
    const isHovered = hoveredOption === index;

    context.beginPath();
    context.roundRect(x, y, buttonWidth, buttonHeight, 18);
    context.fillStyle = isHovered
      ? "rgba(31, 119, 229, 0.82)"
      : "rgba(3, 12, 29, 0.72)";
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = isHovered
      ? "#ffffff"
      : "rgba(190, 225, 255, 0.7)";
    context.stroke();

    context.fillStyle = "#ffffff";
    context.font = "700 37px Inter, Arial, sans-serif";
    context.fillText(option.title, x + 24, y + 68, buttonWidth - 88);

    context.fillStyle = "rgba(255, 255, 255, 0.9)";
    context.font = "400 23px Inter, Arial, sans-serif";
    context.fillText(option.subtitle, x + 24, y + 119, buttonWidth - 88);

    const arrowX = x + buttonWidth - 40;
    const arrowY = y + buttonHeight / 2;
    context.beginPath();
    context.arc(arrowX, arrowY, 25, 0, Math.PI * 2);
    context.fillStyle = "rgba(255, 255, 255, 0.12)";
    context.fill();
    context.beginPath();
    context.moveTo(arrowX - 7, arrowY);
    context.lineTo(arrowX + 7, arrowY);
    context.lineTo(arrowX + 2, arrowY - 6);
    context.moveTo(arrowX + 7, arrowY);
    context.lineTo(arrowX + 2, arrowY + 6);
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

    buttons.push({
      index,
      x,
      y,
      width: buttonWidth,
      height: buttonHeight,
    });
  });

  return buttons;
}

function setStatus(container: HTMLElement, message: string): void {
  const status = container.querySelector<HTMLElement>("[data-model-status]");
  if (status) status.textContent = message;
}

export function initInteractiveDisplayViewer(
  container: HTMLElement,
  signal: AbortSignal,
): void {
  const canvas = container.querySelector("canvas");
  if (!(canvas instanceof HTMLCanvasElement)) return;

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
  } catch (error) {
    console.error("Unable to initialize WebGL for the interactive display model.", error);
    setStatus(container, canvas.dataset.errorLabel ?? "");
    return;
  }
  const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
  renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, isCoarsePointer ? 2 : 1.75),
  );
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.85;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.01, 100);
  const controls = new OrbitControls(camera, canvas);
  const loader = new GLTFLoader();
  const modelGroup = new THREE.Group();
  let animationFrame = 0;
  let isVisible = false;
  let isReady = false;
  let screenMesh: THREE.Mesh | undefined;
  let modelBounds: THREE.Box3 | undefined;
  let rippleStartedAt = -1;
  const rippleCenter = new THREE.Vector2();
  const rippleAge = { value: -1 };

  const frameModel = (direction: THREE.Vector3): void => {
    if (!modelBounds) return;

    direction.normalize();
    const right = new THREE.Vector3(direction.z, 0, -direction.x).normalize();
    const up = direction.clone().cross(right).normalize();
    const verticalTangent = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const horizontalTangent = verticalTangent * camera.aspect;
    let distance = 0;

    for (let index = 0; index < 8; index += 1) {
      const corner = new THREE.Vector3(
        index & 1 ? modelBounds.max.x : modelBounds.min.x,
        index & 2 ? modelBounds.max.y : modelBounds.min.y,
        index & 4 ? modelBounds.max.z : modelBounds.min.z,
      );
      const depth = corner.dot(direction);
      distance = Math.max(
        distance,
        depth + Math.abs(corner.dot(right)) / horizontalTangent,
        depth + Math.abs(corner.dot(up)) / verticalTangent,
      );
    }

    distance *= 1.02;
    const target = new THREE.Vector3();
    camera.position.copy(direction).multiplyScalar(distance).add(target);
    controls.target.copy(target);
    camera.near = Math.max(distance / 100, 0.01);
    camera.far = distance * 100;
    camera.updateProjectionMatrix();
    controls.update();
  };

  scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1.2));

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
  keyLight.position.set(3, 5, 6);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
  fillLight.position.set(-4, 2, 3);
  scene.add(fillLight);

  const auroraValue = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-aurora")
    .trim();
  const blueLight = new THREE.DirectionalLight(auroraValue || 0x2d81ff, 1.2);
  blueLight.position.set(0, -3, 0);
  scene.add(blueLight);

  const rimLight = new THREE.DirectionalLight(0xffffff, 0.9);
  rimLight.position.set(-3, 3, -4);
  scene.add(rimLight);

  scene.add(modelGroup);

  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.rotateSpeed = 0.7;
  controls.listenToKeyEvents(canvas);

  const resize = (): void => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width === 0 || height === 0) return;

    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    if (modelBounds) {
      frameModel(camera.position.clone().sub(controls.target));
    } else {
      camera.updateProjectionMatrix();
    }
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();

  const render = (): void => {
    animationFrame = 0;
    if (signal.aborted || !isVisible || !isReady) return;
    animationFrame = window.requestAnimationFrame(render);
    controls.update();
    if (rippleStartedAt >= 0) {
      const age = performance.now() / 1000 - rippleStartedAt;
      rippleAge.value = age < RIPPLE_DURATION ? age : -1;
      if (age >= RIPPLE_DURATION) rippleStartedAt = -1;
    }
    renderer.render(scene, camera);
  };

  const startRendering = (): void => {
    if (animationFrame === 0) {
      animationFrame = window.requestAnimationFrame(render);
    }
  };

  const visibilityObserver = new IntersectionObserver(([entry]) => {
    isVisible = entry?.isIntersecting ?? false;
    if (isVisible && isReady) {
      startRendering();
    } else {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    }
  });
  visibilityObserver.observe(container);

  const cleanup = (): void => {
    window.cancelAnimationFrame(animationFrame);
    visibilityObserver.disconnect();
    resizeObserver.disconnect();
    controls.dispose();
    disposeObject3D(modelGroup);
    renderer.dispose();
  };
  signal.addEventListener("abort", cleanup, { once: true });

  const screenCanvas = document.createElement("canvas");
  const screenContext = createScreenCanvas(screenCanvas);
  if (!screenContext) {
    console.error("Unable to create the interactive display screen canvas.");
    setStatus(container, canvas.dataset.errorLabel ?? "");
    cleanup();
    return;
  }
  const screenTexture = new THREE.CanvasTexture(screenCanvas);
  screenTexture.colorSpace = THREE.SRGBColorSpace;
  screenTexture.flipY = false;
  screenTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

  let selectedOption = -1;
  let hoveredOption = -1;
  let appButtons: ScreenAppButton[] = [];
  const backgroundImage = new Image();
  backgroundImage.decoding = "async";
  const redrawScreenApp = (): void => {
    appButtons = drawScreenApp(
      screenContext,
      backgroundImage,
      selectedOption,
      hoveredOption,
    );
    screenTexture.needsUpdate = true;
  };
  redrawScreenApp();
  backgroundImage.onload = () => {
    if (!signal.aborted) redrawScreenApp();
  };
  backgroundImage.onerror = (error) => {
    if (!signal.aborted) {
      console.error("Unable to load the interactive display background image.", error);
    }
  };
  backgroundImage.src = SCREEN_BACKGROUND_URL;

  loader.load(
    MODEL_URL,
    (gltf: GLTF) => {
      if (signal.aborted) {
        disposeObject3D(gltf.scene);
        return;
      }

      const createScreenMaterial = (
        sourceMaterial: THREE.Material,
      ): THREE.MeshPhysicalMaterial | undefined => {
        const material = sourceMaterial.clone();
        if (!(material instanceof THREE.MeshPhysicalMaterial)) {
          material.dispose();
          return undefined;
        }

        material.map = screenTexture;
        material.color.set(0xffffff);
        material.roughness = 0.24;
        material.metalness = 0;
        material.specularIntensity = 0.35;
        material.onBeforeCompile = (shader) => {
          shader.uniforms.uRippleCenter = { value: rippleCenter };
          shader.uniforms.uRippleAge = rippleAge;
          shader.fragmentShader = shader.fragmentShader.replace(
            "#include <common>",
            `#include <common>
uniform vec2 uRippleCenter;
uniform float uRippleAge;`,
          );
          shader.fragmentShader = shader.fragmentShader.replace(
            "#include <map_fragment>",
            `#ifdef USE_MAP
vec2 rippleUv = vMapUv;
if (uRippleAge >= 0.0 && uRippleAge < ${RIPPLE_DURATION.toFixed(1)}) {
  vec2 delta = rippleUv - uRippleCenter;
  float distanceToCenter = length(delta);
  if (distanceToCenter > 0.0001) {
    float radius = uRippleAge * 0.32;
    float envelope = exp(-abs(distanceToCenter - radius) * 24.0) * exp(-uRippleAge * 1.6);
    float wave = sin((distanceToCenter - radius) * 90.0);
    rippleUv += normalize(delta) * wave * envelope * 0.014;
  }
}
vec4 sampledDiffuseColor = texture2D( map, rippleUv );
diffuseColor *= sampledDiffuseColor;
#endif`,
          );
        };
        material.customProgramCacheKey = () => "interactive-display-screen-ripple-v1";

        return material;
      };

      let screenMaterialMissing = false;
      gltf.scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return;

        const materials = Array.isArray(object.material)
          ? object.material
          : [object.material];
        materials.forEach((material) => {
          if (material.name !== "Body.002") return;
          if (material instanceof THREE.MeshStandardMaterial) {
            material.roughness = 0.38;
            material.metalness = 0;
          }
          if (material instanceof THREE.MeshPhysicalMaterial) {
            material.specularIntensity = 0.3;
          }
        });

        if (object.name !== "glass") return;
        if (!fitScreenUv(object.geometry)) {
          screenMaterialMissing = true;
          return;
        }

        const sourceMaterial = materials[0];
        if (!sourceMaterial) {
          screenMaterialMissing = true;
          return;
        }

        const screenMaterial = createScreenMaterial(sourceMaterial);
        if (!screenMaterial) {
          screenMaterialMissing = true;
          return;
        }

        object.material = screenMaterial;
        screenMesh = object;
      });

      if (!screenMesh || screenMaterialMissing) {
        console.error("Interactive display model is missing a supported screen material.");
        setStatus(container, canvas.dataset.errorLabel ?? "");
        screenTexture.dispose();
        disposeObject3D(gltf.scene);
        cleanup();
        return;
      }

      const bounds = new THREE.Box3().setFromObject(gltf.scene);
      const size = bounds.getSize(new THREE.Vector3());
      if (size.y <= 0) {
        setStatus(container, container.dataset.errorLabel ?? "");
        console.error("Interactive display model has invalid dimensions.");
        cleanup();
        return;
      }

      gltf.scene.scale.setScalar(2.2 / size.y);
      modelGroup.add(gltf.scene);

      const scaledBounds = new THREE.Box3().setFromObject(modelGroup);
      const scaledCenter = scaledBounds.getCenter(new THREE.Vector3());
      gltf.scene.position.sub(scaledCenter);
      modelBounds = new THREE.Box3().setFromObject(modelGroup);
      frameModel(
        new THREE.Vector3(
          Math.sin(CAMERA_AZIMUTH) * Math.cos(CAMERA_ELEVATION),
          Math.sin(CAMERA_ELEVATION),
          Math.cos(CAMERA_AZIMUTH) * Math.cos(CAMERA_ELEVATION),
        ),
      );

      const raycaster = new THREE.Raycaster();
      const normalizedPointer = new THREE.Vector2();
      const getScreenUv = (event: MouseEvent): THREE.Vector2 | undefined => {
        if (!screenMesh) return;

        const bounds = canvas.getBoundingClientRect();
        if (bounds.width === 0 || bounds.height === 0) return;

        normalizedPointer.set(
          ((event.clientX - bounds.left) / bounds.width) * 2 - 1,
          -((event.clientY - bounds.top) / bounds.height) * 2 + 1,
        );
        scene.updateMatrixWorld(true);
        camera.updateMatrixWorld();
        raycaster.setFromCamera(normalizedPointer, camera);

        const intersection = raycaster.intersectObject(screenMesh, false)[0];
        return intersection?.uv?.clone();
      };

      const findOptionAtUv = (uv: THREE.Vector2): number => {
        const x = uv.x * SCREEN_APP_WIDTH;
        const y = uv.y * SCREEN_APP_HEIGHT;
        return appButtons.find((button) =>
          x >= button.x &&
          x <= button.x + button.width &&
          y >= button.y &&
          y <= button.y + button.height
        )?.index ?? -1;
      };

      const findBackButtonAtUv = (uv: THREE.Vector2): boolean => {
        const x = uv.x * SCREEN_APP_WIDTH;
        const y = uv.y * SCREEN_APP_HEIGHT;
        const back = SCREEN_APP_BACK_BUTTON;
        return (
          x >= back.x &&
          x <= back.x + back.width &&
          y >= back.y &&
          y <= back.y + back.height
        );
      };

      canvas.addEventListener(
        "pointermove",
        (event) => {
          if (event.pointerType !== "mouse") return;
          const uv = getScreenUv(event);
          const nextHoveredOption =
            selectedOption < 0 && uv ? findOptionAtUv(uv) : -1;
          const nextHoveredBack =
            selectedOption >= 0 && uv && findBackButtonAtUv(uv) ? -2 : -1;
          const nextHovered =
            nextHoveredBack !== -1 ? nextHoveredBack : nextHoveredOption;
          if (nextHovered === hoveredOption) return;

          hoveredOption = nextHovered;
          canvas.style.cursor = hoveredOption >= 0 || hoveredOption === -2
            ? "pointer"
            : "";
          redrawScreenApp();
        },
        { signal },
      );
      canvas.addEventListener(
        "pointerleave",
        () => {
          if (hoveredOption === -1) return;
          hoveredOption = -1;
          canvas.style.cursor = "";
          redrawScreenApp();
        },
        { signal },
      );

      canvas.addEventListener(
        "click",
        (event) => {
          const uv = getScreenUv(event);
          if (!uv) return;
          rippleCenter.copy(uv);
          rippleStartedAt = performance.now() / 1000;
          rippleAge.value = 0;
          if (isVisible) startRendering();

          if (selectedOption >= 0) {
            if (findBackButtonAtUv(uv)) {
              selectedOption = -1;
              hoveredOption = -1;
            }
          } else {
            selectedOption = findOptionAtUv(uv);
            hoveredOption = -1;
          }
          canvas.style.cursor = "";
          redrawScreenApp();
        },
        { signal },
      );

      isReady = true;
      setStatus(container, "");
      const loadingOverlay = container.querySelector<HTMLElement>(
        "[data-model-loading]",
      );
      if (loadingOverlay) {
        loadingOverlay.hidden = true;
        loadingOverlay.setAttribute("aria-hidden", "true");
      }
      if (isVisible) startRendering();
    },
    undefined,
    (error: unknown) => {
      if (signal.aborted) return;
      console.error("Unable to load interactive display model.", error);
      setStatus(container, container.dataset.errorLabel ?? "");
      cleanup();
    },
  );
}
