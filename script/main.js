var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var start = document.getElementById("stratButton");

var player = new function() {
    this.x = 50;
    this.x2 = 50;
    this.x3 = 50;
    this.x4 = 50;
    this.x5 = 50;
    this.x6 = 50;
    this.y = 20;
    this.y2 = 80;
    this.y3 = 140;
    this.y4 = 200;
    this.y5 = 260;
    this.y6 = 320;
    this.xSpeed = 0;
    this.x2Speed = 0;
    this.x3Speed = 0;
    this.x4Speed = 0;
    this.x5Speed = 0;
    this.x6Speed = 0;
    
    
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
        ctx.drawImage(player.img1, player.x, player.y, 40, 40);  
        ctx.drawImage(player.img2, player.x2, player.y2, 35, 35);
        ctx.drawImage(player.img3, player.x3, player.y3, 40, 40);  
        ctx.drawImage(player.img4, player.x4, player.y4, 35, 35);
        ctx.drawImage(player.img5, player.x5, player.y5, 40, 40);  
        ctx.drawImage(player.img6, player.x6, player.y6, 35, 35);
    };    
};




var random = 0;
randomVal1 = function() {
    random = Math.floor(1+Math.random() * 5);
    player.xSpeed = random;
    player.x += player.xSpeed;
};
randomVal2 = function() {
    random = Math.floor(1+Math.random() * 5);
    player.x2Speed = random;
    player.x2 += player.x2Speed;
};
randomVal3 = function() {
    random = Math.floor(1+Math.random() * 5);
    player.x3Speed = random;
    player.x3 += player.x3Speed;
};
randomVal4 = function() {
    random = Math.floor(1+Math.random() * 5);
    player.x4Speed = random;
    player.x4 += player.x4Speed;
};
randomVal5 = function() {
    random = Math.floor(1+Math.random() * 5);
    player.x5Speed = random;
    player.x5 += player.x5Speed;
};
randomVal6 = function() {
    random = Math.floor(1+Math.random() * 5);
    player.x6Speed = random;
    player.x6 += player.x6Speed;
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
                finish();                
            }
        }
    };
    
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
                finish();
            }
        }
    };

    this.horse3 = function(){
        if(click == 1){
            if(player.x3 >= 0 && player.x3 < 100) {
                randomVal3();
            }else if(player.x3 >= 100 && player.x3 < 200){
                randomVal3();
            }else if(player.x3 >= 200 && player.x3 < 300){
                randomVal3();
            }else if(player.x3 >= 300 && player.x3 < 400){
                randomVal3();
            }else if(player.x3 >= 400 && player.x3 < 500){
                randomVal3();          
            }else if(player.x3 >= 500){
                finish();
            }
        }
    };

    this.horse4 = function(){
        if(click == 1){
            if(player.x4 >= 0 && player.x4 < 100) {
                randomVal4();
            }else if(player.x4 >= 100 && player.x4 < 200){
                randomVal4();
            }else if(player.x4 >= 200 && player.x4 < 300){
                randomVal4();
            }else if(player.x4 >= 300 && player.x4 < 400){
                randomVal4();
            }else if(player.x4 >= 400 && player.x4 < 500){
                randomVal4();          
            }else if(player.x4 >= 500){
                finish();
            }
        }
    };

    this.horse5 = function(){
        if(click == 1){
            if(player.x5 >= 0 && player.x5 < 100) {
                randomVal5();
            }else if(player.x5 >= 100 && player.x5 < 200){
                randomVal5();
            }else if(player.x5 >= 200 && player.x5 < 300){
                randomVal5();
            }else if(player.x5 >= 300 && player.x5 < 400){
                randomVal5();
            }else if(player.x5 >= 400 && player.x5 < 500){
                randomVal5();          
            }else if(player.x5 >= 500){
                finish();
            }
        }
    };

    this.horse6 = function(){
        if(click == 1){
            if(player.x6 >= 0 && player.x6 < 100) {
                randomVal6();
            }else if(player.x6 >= 100 && player.x6 < 200){
                randomVal6();
            }else if(player.x6 >= 200 && player.x6 < 300){
                randomVal6();
            }else if(player.x6 >= 300 && player.x6 < 400){
                randomVal6();
            }else if(player.x6 >= 400 && player.x6 < 500){
                randomVal6();          
            }else if(player.x6 >= 500){
                finish();
            }
        }
    };
};  


function loop() {
    ctx.fillStyle = "#66FF33";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    motor.horse1();
    motor.horse2();
    motor.horse3();
    motor.horse4();
    motor.horse5();
    motor.horse6();   

    ctx.save();    
    player.draw(); 
    ctx.translate(player.x, player.y);
    ctx.translate(player.x2, player.y2);
    ctx.translate(player.x3, player.y3);
    ctx.translate(player.x4, player.y4);
    ctx.translate(player.x5, player.y5);
    ctx.translate(player.x6, player.y6);
    ctx.restore();

    requestAnimationFrame(loop);
};

loop();

var reset= document.getElementById("resetButton");
 
reset.addEventListener("click", function(){    
    click = 0;    
    player.x = 50;
    player.x2 = 50;
    player.x3 = 50;
    player.x4 = 50; 
    player.x5 = 50;
    player.x6 = 50;

    result1.innerHTML = "-";
    result2.innerHTML = "-";
    result3.innerHTML = "-";
    result4.innerHTML = "-";
    result5.innerHTML = "-";
    result6.innerHTML = "-";  
});





