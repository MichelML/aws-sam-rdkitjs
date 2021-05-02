let TIMER_start = process.hrtime();

const elapsed_time = function(){
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(TIMER_start)[1] / 1000000; // divide by a million to get nano to milli
    elapsed = process.hrtime(TIMER_start)[0] + " s, " + elapsed.toFixed(precision) + " ms"; // print message + time
    TIMER_start = process.hrtime(); // reset the timer
    return elapsed;
}

exports.elapsed_time = elapsed_time;