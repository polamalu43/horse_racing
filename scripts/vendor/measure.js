var cn = Array(6).fill(0);
var tm = Array(6).fill(0);

var measure = new function() {
    this.timer = function() {
        for(let i=0; i<6; i++) {
            tm[i] = setInterval(function() {
                cn[i] += 1;
            }, 1);
        };
    }
};
