var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var frame = new function() {
    this.fill = function() {
        ctx.fillStyle = "#66FF33";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
};