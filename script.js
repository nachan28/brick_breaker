const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// cstroke = "#FF0000";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(240, 160, 50, 0, Math.PI * 2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(160, 10, 100, 100);
// ctx.strokeStyle = "rgba(0, 0, 255, 1)";
// ctx.stroke();
// ctx.closePath();

function draw(){
    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, Math.PI * 2, false);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

setInterval(draw, 10);