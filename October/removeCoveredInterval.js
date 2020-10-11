var removeCoveredIntervals = function(intervals) {
    if(intervals.length == 1) return 1;

    let count = 0;
    intervals.sort((a, b) => (a[0] - b[0]));
    console.log("intrvals", intervals);

    let end = -100;

    for(let i=0; i < intervals.length ; i++) {
        console.log("i", i, intervals[i], end);

        if(intervals[i][1] >= end) {
            
            end = intervals[i][1]
            count++
        }
    }
    return count;
};


let intervals = [[1,4],[3,6],[2,8]];
let result = removeCoveredIntervals(intervals);

console.log('Result:', result);