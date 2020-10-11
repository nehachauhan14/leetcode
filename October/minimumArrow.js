var findMinArrowShots = function(points) {
    if(!points || points.length == 0) return 0;

    if(points.length == 1) return 1;
    points.sort((a, b) => a[1]-b[1]);

    let end = points[0][1];
    let res = 1;
    for(let p of points) {
        if(p[0] <= end) {
            continue;
        } else {
            res +=1;
            end = p[1];
        }
    }

    return res;
};

let points = [[2,3],[2,3]];
let result = findMinArrowShots(points);
console.log("Result: ", result);