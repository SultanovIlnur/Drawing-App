window.onload = function() {
    var canvas = document.getElementById('drawingCanvas');
    var context = canvas.getContext('2d');
    var boundings = canvas.getBoundingClientRect();

    const modes = ['Paint', 'Fill', 'Erase', 'Clear'];
    var mode = modes[0];

    var modeButtons = document.getElementById('modeButtons');

    var color = "#000000";

    var lineWidth = 1;

    const currentModeText = document.getElementById('currentMode');
    currentModeText.innerHTML = "Paint";
    const currentMouseCoords = document.getElementById('currentMouseCoords');
    const colorPicker = document.getElementById('colorPicker');

    var mouse = {
        X: 0,
        Y: 0
    };
    var isDrawing = false;

    colorPicker.addEventListener("change", function(event){
        color = event.target.value;
        context.strokeStyle = color;
    });

    function setMousePosition(event) {
        mouse.X = event.clientX - boundings.left;
        mouse.Y = event.clientY - boundings.top;
        currentMouseCoords.innerHTML = mouse.X + ", " + mouse.Y;
    }

    var clearButton = document.getElementById('clearButton');

    canvas.addEventListener('mousedown', function(event) {
        if (mode == modes[0]){
            isDrawing = true;
        setMousePosition(event);
        context.beginPath();
        context.moveTo(mouse.X, mouse.Y);
        }
    });

    canvas.addEventListener('mousemove', function(event) {
        if (mode == modes[0]){
            setMousePosition(event);
            if (isDrawing) {
                context.lineTo(mouse.X, mouse.Y);
                context.stroke();
            }
        }
    });

    canvas.addEventListener('mouseup', function(event) {
        if(mode == modes[0]){
            setMousePosition(event);
        isDrawing = false;
        }
    });

    modeButtons.addEventListener("click", function(event){
        let currentButton = event.target;
        currentModeText.innerHTML = currentButton.innerHTML;
        mode = currentButton.innerHTML;
        switch (currentButton.innerHTML){
            case modes[0]:
                mode = modes[0];
                break;
            case modes[1]:
                mode = modes[1];
                break;
            case modes[2]:
                mode = modes[2];
                break;
            case modes[3]:
                mode = modes[3];
                break;
        }
    });
};