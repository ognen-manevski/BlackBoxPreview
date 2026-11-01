import type * as THREE from "three";

export type ShelfLabelColor = "white" | "black" | "wood";

export type SupportedMaterial =
  | THREE.MeshStandardMaterial
  | THREE.MeshPhysicalMaterial
  | THREE.MeshBasicMaterial;

export interface BodyMaterialEntry {
  geometry: THREE.BufferGeometry;
  material: SupportedMaterial;
}
