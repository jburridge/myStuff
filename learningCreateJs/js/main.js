(function () {

//creating the canvas element
    canvas = document.createElement('canvas');
    canvas.width = getWidth();
    canvas.height = getHeight();
    document.body.appendChild(canvas);
    document.onkeydown = handleKeyDown;
    document.onmousedown = handleKeyDown;

// initializing the stage
    stage = new Stage(canvas);

//update the stage
    Ticker.setFPS(30);
    Ticker.addListener(tick);

//Adding player to stage
    var img = new Image();
    img.onload = onImageLoaded;
    img.src = 'images/bubble.png';

    var bubble;

    function onImageLoaded() {
        bubble = new Bitmap(img);
        bubble.velocity = {x: 10, y: 8};
        bubble.x = getWidth() / 2;
        stage.addChild(bubble);
        return bubble;
    }

//ontick move image down
    function tick() {
        //this will move the object down by 1 pixel
        bubble.velocity.y += 1;
        bubble.y += bubble.velocity.y;
        //this will update the stage
        stage.update();
    }

//check if a key is pressed
    function handleKeyDown() {
        bubble.y = getHeight() / 2;
        bubble.velocity.y = -15;
    }


    function platforms () {
        x = getHeight()/2;
        y = getWidth()/2;

        var platform = new Bitmap('images/platform.png');
        platform.x = x;
        platform.y = y;

        stage.addChild(platform);
    }

    platforms();
})();
