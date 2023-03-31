import {
  Color,
  PerspectiveCamera,
  Renderer,
  Scene,
  WebGLRenderer,
} from "three";
import { Canvas } from "../components/Canvas";

export function createCanvas(container: Element) {
  return new Canvas({
    container: container,
    scene: createScene(),
    renderer: createRenderer(container),
    camera: createPersperctiveCamera(container),
  });
}

function createPersperctiveCamera(container: Element): PerspectiveCamera {
  const aspectRatio = container.clientWidth / container.clientHeight;
  const camera = new PerspectiveCamera(
    40, // fov (50)
    aspectRatio,
    0.1, // near frustum plane (0.1)
    100 // far frustum plane (2000)
  );
  camera.position.set(0, 0, 10);
  return camera;
}

function createScene() {
  const scene = new Scene();
  scene.background = new Color("grey");
  return scene;
}

function createRenderer(container: Element): Renderer {
  const renderer = new WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  if (window) {
    renderer.setPixelRatio(window.devicePixelRatio);
  }
  return renderer;
}
