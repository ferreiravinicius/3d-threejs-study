import { debounce } from "lodash";
import { BoxGeometry, Color, DirectionalLight, Mesh, MeshBasicMaterial, MeshStandardMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three";
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
camera.position.set(0, 0, 10);

// cube
// const material = new MeshBasicMaterial({ color: 0xff00ff });
const cubeMaterial = new MeshStandardMaterial({ color: 0xff00ff });
const cubeGeometry = new BoxGeometry(2, 2, 2);
const cubeMesh = new Mesh(cubeGeometry, cubeMaterial);
cubeMesh.rotation.set(-0.5, -0.1, 0.8);
const cubeTick = () => {
  cubeMesh.rotation.x += 0.01;
  cubeMesh.rotation.y += 0.01;
  cubeMesh.rotation.z += 0.01;
}

/**
 * Ligth
 */
const light = new DirectionalLight();
light.position.set(10, 10, 10);

// putting into scene
scene.add(camera);
scene.add(cubeMesh);
scene.add(light);

/**
 * Renderer
 * Render the scene using WebGL (OpenGL).
 */
const renderer = new WebGLRenderer({
  /**
   * Canvas
   * Our <canvas> in the dom (html).
   */
  canvas: canvas,

  /**
   * Anti Aliasing
   * Lose a bit of performance in mobile if activated.
   * Avoid creating long and thin straight lines (like fences), because it won't work.
   */
  antialias: true,
});

/**
 * Animation Loop
 */
var loop = () => {
  cubeTick();
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(loop);

function configurePanel({ width, height, pixelRatio }: PanelConfig) {
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

// display, container, showcase, presentation, panel
interface PanelConfig {
  width: number;
  height: number;
  pixelRatio: number;
}

const defaultPanelConfig = (): PanelConfig => {
  return {
    width: container.clientWidth,
    height: container.clientHeight,
    pixelRatio: window.devicePixelRatio,
  };
};

window.addEventListener("resize", debounce(() => {
  console.log("resizing (throtled)", defaultPanelConfig());
  configurePanel(defaultPanelConfig());
}, 100)
);

const main = () => {
  configurePanel(defaultPanelConfig());
};
main();
