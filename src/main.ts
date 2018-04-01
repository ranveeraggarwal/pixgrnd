import { GetShader } from './requests';

main();

function main() {
    const canvas: HTMLCanvasElement = document.querySelector("#pixgrnd") as HTMLCanvasElement;
    const gl: WebGLRenderingContext = canvas.getContext("webgl") as WebGLRenderingContext;

    // Only continue if WebGL is available and working
    if (!gl) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
    GetShader();
    //console.log();
}