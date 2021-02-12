//機能追加予定のため未整理
var random = 0;


function randomVal1() {
    random = Math.floor(1+Math.random() * 4);
    player.xSpeed[0] = random;
    player.x[0] += player.xSpeed[0];
};
function randomVal2() {
    random = Math.floor(1+Math.random() * 4);
    player.xSpeed[1] = random;
    player.x[1] += player.xSpeed[1];
};
function randomVal3() {
    random = Math.floor(1+Math.random() * 4);
    player.xSpeed[2] = random;
    player.x[2] += player.xSpeed[2];
};
function randomVal4() {
    random = Math.floor(1+Math.random() * 4);
    player.xSpeed[3] = random;
    player.x[3] += player.xSpeed[3];
};
function randomVal5() {
    random = Math.floor(1+Math.random() * 4);
    player.xSpeed[4] = random;
    player.x[4] += player.xSpeed[4];
};
function randomVal6() {
    random = Math.floor(1+Math.random() * 4);
    player.xSpeed[5] = random;
    player.x[5] += player.xSpeed[5];
};
function finish(num) {
    player.xSpeed[num] = 0;
    player.x[num] += player.xSpeed[num];
    standing.flagBox(num);
};

var motor = new function() {
    this.horse1 = function(){        
        if(click == 1){              
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
                clearInterval(tm[0]);
                standing.result(0);
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
                clearInterval(tm[1]);
                standing.result(1);
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
                clearInterval(tm[2]);
                standing.result(2);
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
                clearInterval(tm[3]);
                standing.result(3);
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
                clearInterval(tm[4]);
                standing.result(4);
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
                clearInterval(tm[5]);
                standing.result(5);
            }
        }
    };

    this.translate = function(num) {
        ctx.translate(player.x[num], player.y[num]);
    };

    this.horseAct = function() {
        for (let i = 0; i < 6; i++) {
            this.translate(i);
        };  
    };
};

