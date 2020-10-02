var combinationSum = function(candidates, target) {
    var results = [];
    let result = [];
    if(candidates == null && candidates.length == 0) {
        return results;
    }

    candidates.sort((a, b) => a - b);
    function sumRecur(start, candidates, target, result, results) {
        if(target == 0 ) {
            const temp = result.slice();
            results.push(temp);

            console.og
            return;
        }
        for(let i=start; i < candidates.length; i++) {
            if (candidates[i] > target) {
                break;
            }

            result.push(candidates[i]);
            sumRecur(i, candidates, target - candidates[i], result, results);
            result.pop(candidates[i]);
        }
    }
    sumRecur(0, candidates, target, result, results);
    return results;
};

let candidates = [8,7,4,3];
let target =11;

let result = combinationSum(candidates, target);
console.log("Result: ", result);
