import { GlFramework } from './gl';

main();

function main() {
    const canvas: HTMLCanvasElement = document.querySelector("#pixgrnd") as HTMLCanvasElement;
    let gl: GlFramework = new GlFramework(canvas, "shaders/square.vert", "shaders/square.frag");
}