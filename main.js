var fillStyle = 'black';
var fillStyles = ['black', 'white', 'red', 'green', 'yellow'];

var mode = 'paint';
var modes = [];

function getMousePosition(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
    canvas.addEventListener('mousemove', function (event) {
        var mousePos = getMousePosition(canvas, event);
    });
}

