import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";
import "./styles/style.css";

import { createCanvas } from "./tools/factory";

function createCubeMesh() {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshBasicMaterial();
  return new Mesh(geometry, material);
}

const main = () => {
  const container = document.querySelector("div#container")!;
  const canvas = createCanvas(container);  
  
  const cubeMesh = createCubeMesh();
  canvas.scene.add(cubeMesh);

  canvas.render();
};
main();
