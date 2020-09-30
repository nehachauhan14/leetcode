/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if (nums.lenght == 0) {
        return 1;
    }
    let missingNum = 1;
    for(let i=0; i < nums.length+1; i++) {
        if(!nums.includes(missingNum)) {
            return missingNum;
        }
        missingNum++;
    }
    return missingNum;
};

let arr = [3,4,-1,1];
let result = firstMissingPositive(arr);
console.log("Result: ", result);