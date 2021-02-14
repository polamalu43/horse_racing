var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var frame = new function() {
    this.fill = function() {
        ctx.fillStyle = "#66FF33";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    this.startLine = function() {
        ctx.fillStyle = "#fff";
        ctx.fillRect(95, 10, 1, 360);
    }

    this.goalLine = function() {
            ctx.fillStyle = "#fff";
            ctx.fillRect(500, 10, 1, 360);
    }
};