import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";
import "./styles/style.css";

import { createCanvas } from "./tools/factory";

function createCubeMesh() {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshBasicMaterial({ color: 0xff00ff });
  return new Mesh(geometry, material);
}

const container = document.querySelector("div#container")!;
const canvas = createCanvas(container);

const main = () => {
  const cubeMesh = createCubeMesh();
  canvas.scene.add(cubeMesh);

  canvas.render();
};

if (window) {
  window.addEventListener(
    "resize",
    () => {
      canvas.onResize({
        width: container.clientWidth,
        height: container.clientHeight,
      });
    },
    false
  );
}

main();
