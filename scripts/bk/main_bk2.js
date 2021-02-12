var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var start = document.getElementById("stratButton");

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
        ctx.drawImage(player.img1, player.x[0], player.y[0], 40, 40);  
        ctx.drawImage(player.img2, player.x[1], player.y[1], 35, 35);
        ctx.drawImage(player.img3, player.x[2], player.y[2], 40, 40);  
        ctx.drawImage(player.img4, player.x[3], player.y[3], 35, 35);
        ctx.drawImage(player.img5, player.x[4], player.y[4], 40, 40);  
        ctx.drawImage(player.img6, player.x[5], player.y[5], 35, 35);
    };    
};


var cn = Array(6).fill(0);
var click = 0;
var strat= document.getElementById("stratButton");
strat.addEventListener("click", function(){
    if(click == 0) {
        click = 1;
    
        tm0 = setInterval(function() {
            cn[0] += 1;
        }, 1);
        
        tm1 = setInterval(function() {
            cn[1] += 1;
        }, 1);
        
        tm2 = setInterval(function() {
            cn[2] += 1;
        }, 1);
    
        tm3 = setInterval(function() {
            cn[3] += 1;
        }, 1);
    
        tm4 = setInterval(function() {
            cn[4] += 1;
        }, 1);
    
        tm5 = setInterval(function() {
            cn[5] += 1;
        }, 1);
    }else{
    }
});


var std = new Array(3);
for(let i=0; i<6; i++) {
    std[i] = new Array(2).fill(0);
};

function result(num) {
    var result = document.getElementById("result" + num);
    std[num] = [cn[num], num, 0];
    result.innerHTML = cn[num];
};

var stdFlag = Array(6).fill(0);
function flagBox(num) {    
    stdFlag[num] = 1;
};
  
var random = 0;
randomVal1 = function() {
    random = Math.floor(1+Math.random() * 4);
    player.xSpeed[0] = random;
    player.x[0] += player.xSpeed[0];
};
randomVal2 = function() {
    random = Math.floor(1+Math.random() * 4);
    player.xSpeed[1] = random;
    player.x[1] += player.xSpeed[1];
};
randomVal3 = function() {
    random = Math.floor(1+Math.random() * 4);
    player.xSpeed[2] = random;
    player.x[2] += player.xSpeed[2];
};
randomVal4 = function() {
    random = Math.floor(1+Math.random() * 4);
    player.xSpeed[3] = random;
    player.x[3] += player.xSpeed[3];
};
randomVal5 = function() {
    random = Math.floor(1+Math.random() * 4);
    player.xSpeed[4] = random;
    player.x[4] += player.xSpeed[4];
};
randomVal6 = function() {
    random = Math.floor(1+Math.random() * 4);
    player.xSpeed[5] = random;
    player.x[5] += player.xSpeed[5];
};
finish = function(num) {
    player.xSpeed[num] = 0;
    player.x[num] += player.xSpeed[num];
    flagBox(num);
};

var motor = new function() {
    this.horse1 = function(){        
        if(click == 1){
            this.time = 0;              
            if(player.x[0] >= 0 && player.x[0] < 100) {
                randomVal1();
            }else if(player.x[0] >= 100 && player.x[0] < 200){
                randomVal1();
            }else if(player.x[0] >= 200 && player.x[0] < 300){
                randomVal1();
            }else if(player.x[0] >= 300 && player.x[0] < 400){
                randomVal1();
            }else if(player.x[0] >= 400 && player.x[0] < 500){
                randomVal1();          
            }else if(player.x[0] >= 500){
                finish(0);
                clearInterval(tm0);
                result(0);
            }     
        }        
    };
    
    this.horse2 = function(){
        if(click == 1){
            if(player.x[1] >= 0 && player.x[1] < 100) {
                randomVal2();
            }else if(player.x[1] >= 100 && player.x[1] < 200){
                randomVal2();
            }else if(player.x[1] >= 200 && player.x[1] < 300){
                randomVal2();
            }else if(player.x[1] >= 300 && player.x[1] < 400){
                randomVal2();
            }else if(player.x[1] >= 400 && player.x[1] < 500){
                randomVal2();          
            }else if(player.x[1] >= 500){
                finish(1);
                clearInterval(tm1);
                result(1);
            }
        }
    };

    this.horse3 = function(){
        if(click == 1){
            if(player.x[2] >= 0 && player.x[2] < 100) {
                randomVal3();
            }else if(player.x[2] >= 100 && player.x[2] < 200){
                randomVal3();
            }else if(player.x[2] >= 200 && player.x[2] < 300){
                randomVal3();
            }else if(player.x[2] >= 300 && player.x[2] < 400){
                randomVal3();
            }else if(player.x[2] >= 400 && player.x[2] < 500){
                randomVal3();          
            }else if(player.x[2] >= 500){
                finish(2);
                clearInterval(tm2);
                result(2);
            }
        }
    };

    this.horse4 = function(){
        if(click == 1){
            if(player.x[3] >= 0 && player.x[3] < 100) {
                randomVal4();
            }else if(player.x[3] >= 100 && player.x[3] < 200){
                randomVal4();
            }else if(player.x[3] >= 200 && player.x[3] < 300){
                randomVal4();
            }else if(player.x[3] >= 300 && player.x[3] < 400){
                randomVal4();
            }else if(player.x[3] >= 400 && player.x[3] < 500){
                randomVal4();          
            }else if(player.x[3] >= 500){
                finish(3);
                clearInterval(tm3);
                result(3);
            }
        }
    };

    this.horse5 = function(){
        if(click == 1){
            if(player.x[4] >= 0 && player.x[4] < 100) {
                randomVal5();
            }else if(player.x[4] >= 100 && player.x[4] < 200){
                randomVal5();
            }else if(player.x[4] >= 200 && player.x[4] < 300){
                randomVal5();
            }else if(player.x[4] >= 300 && player.x[4] < 400){
                randomVal5();
            }else if(player.x[4] >= 400 && player.x[4] < 500){
                randomVal5();          
            }else if(player.x[4] >= 500){
                finish(4);
                clearInterval(tm4);
                result(4);
            }
        }
    };

    this.horse6 = function(){
        if(click == 1){
            if(player.x[5] >= 0 && player.x[5] < 100) {
                randomVal6();
            }else if(player.x[5] >= 100 && player.x[5] < 200){
                randomVal6();
            }else if(player.x[5] >= 200 && player.x[5] < 300){
                randomVal6();
            }else if(player.x[5] >= 300 && player.x[5] < 400){
                randomVal6();
            }else if(player.x[5] >= 400 && player.x[5] < 500){
                randomVal6();          
            }else if(player.x[5] >= 500){
                finish(5);
                clearInterval(tm5);
                result(5);
            }
        }
    };
};

function translate(num) {
    ctx.translate(player.x[num], player.y[num]);
};

var std0 = document.getElementById("standing0");
var std1 = document.getElementById("standing1");
var std2 = document.getElementById("standing2");
var std3 = document.getElementById("standing3");
var std4 = document.getElementById("standing4");
var std5 = document.getElementById("standing5");


var dsp = Array(6).fill(0);
function dspBox(num) {    
    dsp[num] = std.findIndex(function(v){
        return v[1] == num;
    });
    var dspStd = document.getElementById("dspStd" + num);
    dspStd.innerHTML = std[dsp[num]][2];
    console.log(dsp);
};


function loop() {
    //馬を描画
    ctx.fillStyle = "#66FF33";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //馬の速さ調整
    motor.horse1();    
    motor.horse2();
    motor.horse3();
    motor.horse4();
    motor.horse5();
    motor.horse6();       

    //馬を起動
    ctx.save();    
    player.draw();
    for (let i = 0; i < 6; i++) {
        translate(i);
    };    
    ctx.restore();
    
    //順位計算
    std.sort(function(a,b){
        return a[0] - b[0];
    });

    for (let i = 0; i < 5; i++) {
        std[0][2] = 1;
        if(std[i + 1][0] == std[i][0]){
            std[i + 1][2] = std[i][2];
        }else{
            std[i + 1][2] = std[i][2] + 1;
        }        
    };

    var sumFlag = 0;
    sumFlag = stdFlag.reduce(function(a,b){
        return a + b;
    });

    if(sumFlag == 6){
        for (let i = 0; i < 6; i++) {
            dspBox(i);
        };
    }else{
    };

    // if(sumFlag == 6){
    //     test0 = std.findIndex(function(v){
    //         return v[1] == 0;
    //     });
    //     std0.innerHTML = std[test0][2];

    //     test1 = std.findIndex(function(v){
    //         return v[1] == 1;
    //     });
    //     std1.innerHTML = std[test1][2];

    //     test2 = std.findIndex(function(v){
    //         return v[1] == 2;
    //     });
    //     std2.innerHTML = std[test2][2];
        
    //     test3 = std.findIndex(function(v){
    //         return v[1] == 3;
    //     });
    //     std3.innerHTML = std[test3][2];

    //     test4 = std.findIndex(function(v){
    //         return v[1] == 4;
    //     });
    //     std4.innerHTML = std[test4][2];

    //     test5 = std.findIndex(function(v){
    //         return v[1] == 5;
    //     });
    //     std5.innerHTML = std[test5][2]; 
    // };

    // console.log(std);

    requestAnimationFrame(loop);
};
loop();


function dateReset(num) {
    var result = document.getElementById("result" + num);
    result.innerHTML = "-";
};

var reset= document.getElementById("resetButton");
reset.addEventListener("click", function(){    
    if(click == 1) {
        click = 0; 
        player.x = [50, 50, 50, 50, 50, 50];    
        for (let i = 0; i < 6; i++) {
            dateReset(i);
        };
        cn = Array(6).fill(0);
        stdFlag = Array(6).fill(0);
    }else{
    }
});





