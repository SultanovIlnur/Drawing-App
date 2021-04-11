window.onload = function() {
    var canvas = document.getElementById('drawingCanvas');
    var context = canvas.getContext('2d');
    var boundings = canvas.getBoundingClientRect();

    var operationButtons = document.getElementsByClassName('operationButtons')[0];
    var currentOpButton = 0;

    var fillStyle = 'black';
    var fillStyles = ['black', 'white', 'red', 'green', 'yellow'];

    var lineWidth = 1;

    var mode = 'paint';

    var mouse = {
        X: 0,
        Y: 0
    };
    var isDrawing = false;

    function setMousePosition(event) {
        mouse.X = event.clientX - boundings.left;
        mouse.Y = event.clientY - boundings.top;
    }

    var clearButton = document.getElementById('clearButton');

    canvas.addEventListener('mousedown', function(event) {
        isDrawing = true;
        setMousePosition(event);
        context.beginPath();
        context.moveTo(mouse.X, mouse.Y);
    });

    canvas.addEventListener('mousemove', function(event) {
        setMousePosition(event);
        if (isDrawing) {
            context.lineTo(mouse.X, mouse.Y);
            context.stroke();
        }
    });

    canvas.addEventListener('mouseup', function(event) {
        setMousePosition(event);
        isDrawing = false;
    });

    canvas.addEventListener('', function() {

    });
};