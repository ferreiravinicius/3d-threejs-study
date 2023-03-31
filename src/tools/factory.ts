import {
  Color,
  PerspectiveCamera,
  Renderer,
  Scene,
  WebGLRenderer,
} from "three";
import { Canvas } from "../components/Canvas";

interface Animated {
  onTick: () => void
}

export interface SizeProps {
  height: number
  width: number
}

export interface Resizable {
  onResize: (props: SizeProps) => void
}

export function createCanvas(container: Element) {
  console.log("creating canvas...");

  return new Canvas({
    container: container,
    scene: createScene(),
    renderer: createRenderer(container),
    camera: createPersperctiveCamera(),
  });
}

function createPersperctiveCamera(): PerspectiveCamera {
  console.log("creating camera...");
  const camera = new PerspectiveCamera(
    40, // fov (50)
    1,
    0.1, // near frustum plane (0.1)
    1000 // far frustum plane (2000)
  );
  camera.position.set(0, 0, 10);
  return camera;
}

function createScene() {
  console.log("creating scene...");

  const scene = new Scene();
  scene.background = new Color("grey");
  return scene;
}

function createRenderer(container: Element): Renderer {
  console.log("creating renderer...");

  const renderer = new WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  if (window) {
    renderer.setPixelRatio(window.devicePixelRatio);
  }
  return renderer;
}
