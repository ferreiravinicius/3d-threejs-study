import { Camera, PerspectiveCamera, Renderer, Scene } from "three";
import { Resizable, SizeProps } from "../tools/factory";

export interface CanvasProps {
  scene: Scene;
  camera: Camera;
  container: Element;
  renderer: Renderer;
}

/**
 * Canvas (context)
 */
export class Canvas implements Resizable {
  scene: Scene;
  camera: Camera;
  private renderer: Renderer;
  private container: Element;

  constructor(props: CanvasProps) {
    const { scene, camera, renderer, container } = props;
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.container = container;
    this.setup();
  }

  public onResize({ width, height }: SizeProps) {
    // update camera aspect ratio and projection matrix (?)
    if (this.camera instanceof PerspectiveCamera) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix;
      this.camera.lookAt(this.scene.position);
    }

    // update renderer sizes
    this.renderer.setSize(width, height);
    this.render();

    console.log("updated size", width, height);
  }

  private setup(): void {
    // insert the <canvas> inside the `div container`
    this.container.append(this.renderer.domElement);

    // add objects to scene
    this.scene.add(this.camera);

    this.onResize({
      width: this.container.clientWidth,
      height: this.container.clientHeight,
    });
  }

  public render() {
    // renderer
    this.renderer.render(this.scene, this.camera);
  }
}
