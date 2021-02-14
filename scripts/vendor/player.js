var player = new function() {
    this.x = [50, 50, 50, 50, 50, 50];
    this.y = [20, 80, 140, 200, 260, 320];
    this.xSpeed = [0, 0, 0, 0, 0, 0];    
    
    this.img1 = new Image();
    this.img1.src = "images/horse1.png";

    this.img2 = new Image();
    this.img2.src = "images/horse2.png";

    this.img3 = new Image();
    this.img3.src = "images/horse1.png";

    this.img4 = new Image();
    this.img4.src = "images/horse2.png";

    this.img5 = new Image();
    this.img5.src = "images/horse1.png";

    this.img6 = new Image();
    this.img6.src = "images/horse2.png";

    this.draw = function(){
        ctx.drawImage(player.img1, player.x[0], player.y[0], 45, 40);  
        ctx.drawImage(player.img2, player.x[1], player.y[1], 45, 40);
        ctx.drawImage(player.img3, player.x[2], player.y[2], 45, 40);  
        ctx.drawImage(player.img4, player.x[3], player.y[3], 45, 40);
        ctx.drawImage(player.img5, player.x[4], player.y[4], 45, 40);  
        ctx.drawImage(player.img6, player.x[5], player.y[5], 45, 40);
    };    
};