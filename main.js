window.onload = function() {
    var canvas = document.getElementById('drawingCanvas');
    var context = canvas.getContext('2d');
    var boundings = canvas.getBoundingClientRect();

    const modes = ['Paint', 'Fill', 'Erase', 'Clear'];
    var mode = modes[0];

    var modeButtons = document.getElementById('modeButtons');

    const fillStyles = ['Black', 'White', 'Red', 'Green', 'Yellow'];
    var fillStyle = fillStyles[0];

    var lineWidth = 1;

    const currentModeText = document.getElementById('currentMode');
    currentModeText.innerHTML = "Paint";
    const currentMouseCoords = document.getElementById('currentMouseCoords');

    var mouse = {
        X: 0,
        Y: 0
    };
    var isDrawing = false;

    function setMousePosition(event) {
        mouse.X = event.clientX - boundings.left;
        mouse.Y = event.clientY - boundings.top;
        currentMouseCoords.innerHTML = mouse.X + ", " + mouse.Y;
    }

    var clearButton = document.getElementById('clearButton');

    canvas.addEventListener('mousedown', function(event) {
        if (fillStyle == fillStyles[0]){
            isDrawing = true;
        setMousePosition(event);
        context.beginPath();
        context.moveTo(mouse.X, mouse.Y);
        }
    });

    canvas.addEventListener('mousemove', function(event) {
        if (fillStyle == fillStyles[0]){
            setMousePosition(event);
            if (isDrawing) {
                context.lineTo(mouse.X, mouse.Y);
                context.stroke();
            }
        }
    });

    canvas.addEventListener('mouseup', function(event) {
        if(fillStyle == fillStyles[0]){
            setMousePosition(event);
        isDrawing = false;
        }
    });

    modeButtons.addEventListener("click", function(event){
        const currentButton = event.target;
        switch (currentButton.innerHTML){
            case fillStyles[0]:
                currentModeText.innerHTML = currentButton.innerHTML;
                fillStyle = fillStyles[0];
                break;
            case fillStyles[1]:
                currentModeText.innerHTML = currentButton.innerHTML;
                fillStyle = fillStyles[1];
                break;
            case fillStyles[2]:
                currentModeText.innerHTML = currentButton.innerHTML;
                fillStyle = fillStyles[2];
                break;
            case fillStyles[3]:
                currentModeText.innerHTML = currentButton.innerHTML;
                fillStyle = fillStyles[3];
                break;
        }
    });
};