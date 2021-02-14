//スタートボタン
var click = 0;
var strat = document.getElementById("stratButton");
strat.addEventListener("click", function(){
    if(click == 0) {
        click = 1;
        
        //タイム計測開始
        measure.timer();
    }else{
    }
});

//アニメーション
function loop() {
    //枠の描画
    frame.fill();
    frame.startLine();
    frame.goalLine();

    //馬の速さを調整
    motor.horse1();    
    motor.horse2();
    motor.horse3();
    motor.horse4();
    motor.horse5();
    motor.horse6();

    //馬を動かす
    ctx.save();    
    player.draw();
    motor.horseAct();
    ctx.restore();
    
    //順位計算
    standing.sortStd();

    requestAnimationFrame(loop);
};
loop();


//リセットボタン
var reset = document.getElementById("resetButton");
reset.addEventListener("click", function(){    
    if(click == 1 && sumFlag == 6) {
        click = 0;
        //馬の位置をリセット 
        player.x = Array(6).fill(50);
        
        //タイムと順位をリセット
        for (let i = 0; i < 6; i++) {
            standing.dateReset(i);
        };
        cn = Array(6).fill(0);

        //ゴール判定をリセット
        stdFlag = Array(6).fill(0);
    }else{
    }
});
