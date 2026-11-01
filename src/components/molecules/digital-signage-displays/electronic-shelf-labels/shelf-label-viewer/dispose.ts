import * as THREE from "three";

/** Dispose each shared Three.js resource exactly once. */
export function disposeObject3D(root: THREE.Object3D): void {
  const geometries = new Set<THREE.BufferGeometry>();
  const materials = new Set<THREE.Material>();
  const textures = new Set<THREE.Texture>();

  root.traverse((object) => {
    if (!(object instanceof THREE.Mesh)) return;

    geometries.add(object.geometry);

    const objectMaterials = Array.isArray(object.material)
      ? object.material
      : [object.material];

    for (const material of objectMaterials) {
      materials.add(material);

      for (const value of Object.values(
        material as unknown as Record<string, unknown>,
      )) {
        if (value instanceof THREE.Texture) textures.add(value);
      }
    }
  });

  for (const texture of textures) texture.dispose();
  for (const material of materials) material.dispose();
  for (const geometry of geometries) geometry.dispose();
}
