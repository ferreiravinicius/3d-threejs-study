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

const width = container.clientWidth;
const height = container.clientHeight;

// scene
const scene = new Scene();
scene.background = new Color("navy");

// camera
const camera = new PerspectiveCamera();
camera.aspect = width / height;
camera.position.z = 10;

const material = new MeshBasicMaterial({ color: 0xff00ff });
const geometry = new BoxGeometry(2, 2, 2);
const boxMesh = new Mesh(geometry, material);

// putting into scene
scene.add(camera);
scene.add(boxMesh);

// renderer
const renderer = new WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(width, height);
renderer.render(scene, camera);
