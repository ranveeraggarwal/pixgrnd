export function GetShader(): string {
    let shader = "";
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'shaders/vertex.shader', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            shader = xhr.responseText;
        }
        else {
            console.error(xhr.status + "Couldn't fetch vertex shader.");
        }
    };
    xhr.send();
    return shader;
}