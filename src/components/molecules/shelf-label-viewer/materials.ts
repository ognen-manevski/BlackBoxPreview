import * as THREE from "three";
import type {
  BodyMaterialEntry,
  ShelfLabelColor,
  SupportedMaterial,
} from "./types";

export function isSupportedMaterial(
  material: THREE.Material,
): material is SupportedMaterial {
  return (
    material instanceof THREE.MeshStandardMaterial ||
    material instanceof THREE.MeshPhysicalMaterial ||
    material instanceof THREE.MeshBasicMaterial
  );
}

export function ensureUv(geometry: THREE.BufferGeometry): void {
  if (geometry.getAttribute("uv")) return;

  geometry.computeBoundingBox();
  const boundingBox = geometry.boundingBox;
  if (!boundingBox) return;

  const position = geometry.getAttribute("position");
  if (!(position instanceof THREE.BufferAttribute)) return;

  const size = boundingBox.getSize(new THREE.Vector3());
  const axes = [
    { axis: "x" as const, size: size.x },
    { axis: "y" as const, size: size.y },
    { axis: "z" as const, size: size.z },
  ].sort((left, right) => right.size - left.size);

  const uAxis = axes[0].axis;
  const vAxis = axes[1].axis;
  const uRange = boundingBox.max[uAxis] - boundingBox.min[uAxis] || 1;
  const vRange = boundingBox.max[vAxis] - boundingBox.min[vAxis] || 1;
  const uv = new Float32Array(position.count * 2);

  for (let index = 0; index < position.count; index += 1) {
    const coordinates = {
      x: position.getX(index),
      y: position.getY(index),
      z: position.getZ(index),
    };

    uv[index * 2] = (coordinates[uAxis] - boundingBox.min[uAxis]) / uRange;
    uv[index * 2 + 1] =
      (coordinates[vAxis] - boundingBox.min[vAxis]) / vRange;
  }

  geometry.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
}

export function applyBodyColor(
  color: ShelfLabelColor,
  bodyMaterials: readonly BodyMaterialEntry[],
  hiddenMaterials: readonly THREE.Material[],
  labelMaterials: readonly SupportedMaterial[],
  woodTexture: THREE.Texture,
): void {
  for (const material of hiddenMaterials) material.visible = false;

  for (const { geometry, material } of bodyMaterials) {
    material.visible = true;
    material.transparent = false;
    material.opacity = 1;
    material.vertexColors = false;

    if (color === "black") {
      material.map = null;
      material.color.set(0x121212);

      if (!(material instanceof THREE.MeshBasicMaterial)) {
        material.roughness = 0.7;
        material.metalness = 0.05;
        material.envMapIntensity = 0;
        material.emissiveMap = null;
        material.emissive.set(0x000000);
        material.emissiveIntensity = 1;
      }
    } else if (color === "wood") {
      ensureUv(geometry);
      material.map = woodTexture;
      material.color.set(0xffffff);

      if (!(material instanceof THREE.MeshBasicMaterial)) {
        material.roughness = 1;
        material.metalness = 0.7;
        material.envMapIntensity = 0;
        material.emissiveMap = woodTexture;
        material.emissive.set(0xffa500);
        material.emissiveIntensity = 0.2;
      }
    } else {
      material.map = null;
      material.color.set(0xd7d7d7);

      if (!(material instanceof THREE.MeshBasicMaterial)) {
        material.roughness = 0.45;
        material.metalness = 0;
        material.envMapIntensity = 0;
        material.emissiveMap = null;
        material.emissive.set(0x000000);
        material.emissiveIntensity = 1;
      }
    }

    material.needsUpdate = true;
  }

  for (const material of labelMaterials) {
    material.color.set(color === "black" ? 0xffffff : 0x000000);
    material.needsUpdate = true;
  }
}
