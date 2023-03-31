import { Camera, Renderer, Scene } from "three";

export interface CanvasProps {
  scene: Scene;
  camera: Camera;
  container: Element;
  renderer: Renderer;
}

/**
 * Canvas (context)
 */
export class Canvas {
  scene: Scene;
  camera: Camera;
  private renderer: Renderer;
  private container: Element

  constructor(props: CanvasProps) {
    const { scene, camera, renderer, container } = props;
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.container = container;
    this.setup();
  }

  private setup() {
    this.container.append(this.renderer.domElement);
    this.scene.add(this.camera)
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
  }
}
