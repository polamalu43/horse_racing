var std = new Array(3);
//二次元配列初期化
for(let i=0; i<6; i++) {
    std[i] = new Array(2).fill(0);
};
var sumFlag = 0;
var stdFlag = Array(6).fill(0);
var dsp = Array(6).fill(0);


var standing = new function() {
    this.result = function (num) {
        var result = document.getElementById("result" + num);
        std[num] = [cn[num], num, 0];
        result.innerHTML = (cn[num] * 5) + "ms";
    };
    
    this.flagBox = function(num) {
        stdFlag[num] = 1;
    };
    
    this.dspBox = function(num) {    
        dsp[num] = std.findIndex(function(v){
            return v[1] == num;
        });
        var dspStd = document.getElementById("dspStd" + num);
        dspStd.innerHTML = std[dsp[num]][2] + "位";
    };
    
    this.dspReset = function(num) {  
        var dspStd = document.getElementById("dspStd" + num);
        dspStd.innerHTML = "-";
    };

    this.sortStd = function() {  
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

        sumFlag = stdFlag.reduce(function(a,b){
            return a + b;
        });
    
        if(sumFlag == 6){
            for (let i = 0; i < 6; i++) {
                standing.dspBox(i);
            };
        }else{
            for (let i = 0; i < 6; i++) {
                standing.dspReset(i);
            };
        };
    };

    this.dateReset = function(num) {
        var result = document.getElementById("result" + num);
        result.innerHTML = "-";
    };    
};