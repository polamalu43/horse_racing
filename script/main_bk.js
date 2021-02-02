var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var start = document.getElementById("stratButton");

var player = new function() {
    this.x = 50;
    this.x2 = 50;
    this.y = (canvas.height / 8);
    this.y2 = (canvas.height / 8) + 70;
    this.xSpeed = 0;
    this.x2Speed = 0;
    
    
    this.img = new Image();
    this.img.src = "images/horse1.png";

    this.img2 = new Image();
    this.img2.src = "images/horse2.png";

    this.draw = function(){
        ctx.drawImage(player.img, player.x, player.y, 40, 40);  
        ctx.drawImage(player.img2, player.x2, player.y2, 35, 35);
    };    
};




var random = 0;
randomVal1 = function() {
    random = Math.floor(1+Math.random() * 7);
    player.xSpeed = random;
    player.x += player.xSpeed;
};
randomVal2 = function() {
    random = Math.floor(1+Math.random() * 7);
    player.x2Speed = random;
    player.x2 += player.x2Speed;
};
finish = function() {
    player.xSpeed = 0;
    player.x += player.xSpeed;
};


var click = 0;
var strat= document.getElementById("stratButton");
strat.addEventListener("click", function(){
    click = 1;
});


var now = new Date();
var sec = now.getSeconds();
console.log(sec);

var flag1 = 0;
var flag2 = 0;
var motor = new function() {
    this.horse1 = function(){
        if(click == 1){
            if(player.x >= 0 && player.x < 100) {
                randomVal1();
            }else if(player.x >= 100 && player.x < 200){
                randomVal1();
            }else if(player.x >= 200 && player.x < 300){
                randomVal1();
            }else if(player.x >= 300 && player.x < 400){
                randomVal1();
            }else if(player.x >= 400 && player.x < 500){
                randomVal1();          
            }else if(player.x >= 500){
                flag1 = 1;
                finish();
            }
        }
    }

    this.horse2 = function(){
        if(click == 1){
            if(player.x2 >= 0 && player.x2 < 100) {
                randomVal2();
            }else if(player.x2 >= 100 && player.x2 < 200){
                randomVal2();
            }else if(player.x2 >= 200 && player.x2 < 300){
                randomVal2();
            }else if(player.x2 >= 300 && player.x2 < 400){
                randomVal2();
            }else if(player.x2 >= 400 && player.x2 < 500){
                randomVal2();          
            }else if(player.x2 >= 500){
                flag2 = 1;
                finish();
            }
        }
    }
};


    


function loop() {
    ctx.fillStyle = "#66FF33";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    motor.horse1();
    motor.horse2();

   

    ctx.save();    
    player.draw(); 
    ctx.translate(player.x, player.y);
    ctx.translate(player.x2, player.y2);
    ctx.restore();

    requestAnimationFrame(loop);
};

loop();

var reset= document.getElementById("resetButton");
 
reset.addEventListener("click", function(){    
    click = 0;    
    player.x = 50;
    player.x2 = 50; 
    flag1 = 0;
    flag2 = 0;
});





