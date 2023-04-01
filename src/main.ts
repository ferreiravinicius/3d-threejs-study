import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import "./styles/style.css";

// dom
const container = document.querySelector("div#container")!;
const canvas = document.createElement("canvas");
container.appendChild(canvas);

// scene
const scene = new Scene();
scene.background = new Color("navy");

// camera
const camera = new PerspectiveCamera();
camera.position.z = 10;

const material = new MeshBasicMaterial({ color: 0xff00ff });
const geometry = new BoxGeometry(2, 2, 2);
const boxMesh = new Mesh(geometry, material);

// putting into scene
scene.add(camera);
scene.add(boxMesh);

// renderer
const renderer = new WebGLRenderer({ canvas: canvas, antialias: true });

function configureDisplay({ width, height, pixelRatio }: DisplayConfig) {
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

// display, container, showcase, presentation, panel
interface DisplayConfig {
  width: number;
  height: number;
  pixelRatio: number;
}

const canvasDisplayConfig = (): DisplayConfig => {
  return {
    width: container.clientWidth,
    height: container.clientHeight,
    pixelRatio: window.devicePixelRatio,
  };
};

window.addEventListener("resize", () => {
  configureDisplay(canvasDisplayConfig());
  renderer.render(scene, camera);
});

const main = () => {
  configureDisplay(canvasDisplayConfig());
  renderer.render(scene, camera);
};
main();
