const w = 800;
const h = 600;
const speed = 3;
const rSpeed = 3.5;
var x = w/2;
var y = h/2;
var r = 0;
var rkeydown = 0;


window.onload = function() {
    canvas = document.getElementById("canvas");
    canvas.setAttribute("width", w);
    canvas.setAttribute("height", h);
    c = canvas.getContext("2d");
    drawInit();
    drawUpdate();
}


document.addEventListener('keydown', (e) => {
    if (e.key == "a" || e.key == "ArrowLeft" ) {
        rkeydown = -1;
    } else if (e.key == "d" || e.key == "ArrowRight" ) {
        rkeydown = 1;
    }
});
document.addEventListener('keyup', (e) => {
    if (e.key == "a" || e.key == "ArrowLeft" ) {
        rkeydown = 0;
    } else if (e.key == "d" || e.key == "ArrowRight" ) {
        rkeydown = 0;
    }
});

function drawInit() {
    c.fillStyle = "#000"
    c.fillRect(0,0,w,h);
}

function drawUpdate(){
    c.fillStyle = "#000"
    c.globalAlpha = 0.2;
    c.fillRect(0,0,w,h);
    c.globalAlpha = 1;

    c.strokeStyle = "#fff";
    c.lineWidth = 3;
    c.beginPath();
    // c.moveTo(x,y+10);
    // c.lineTo(x+5,y-10);
    // c.lineTo(x,y-7);
    // c.lineTo(x-5,y-10);
    // c.lineTo(x,y+10);
    c.moveTo(x+Math.cos((r/180)%360*Math.PI)*10, y+Math.sin((r/180)%360*Math.PI)*10);
    c.lineTo(x+Math.cos((r+145)%360/180*Math.PI)*10, y+Math.sin((r+145)%360/180*Math.PI)*10);
    c.lineTo(x+Math.cos((r+180)%360/180*Math.PI)*5, y+Math.sin((r+180)%360/180*Math.PI)*5);
    c.lineTo(x+Math.cos((r+215)%360/180*Math.PI)*10, y+Math.sin((r+215)%360/180*Math.PI)*10);
    c.lineTo(x+Math.cos((r/180)%360*Math.PI)*10, y+Math.sin((r/180)%360*Math.PI)*10);
    c.closePath();
    
    c.stroke();
    c.fill();

    move();

    setTimeout(drawUpdate, 20);
}

function move() {
    r += rkeydown*rSpeed;
    r = (r+360)%360;
    x += Math.cos(r/180*Math.PI) * speed;
    y += Math.sin(r/180*Math.PI) * speed;
    // console.log(x,y,r,rkeydown);
}