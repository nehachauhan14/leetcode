/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let countObj = {};
    let newArr = [];
    for(let i=0; i < nums.length; i++) {
        let el = nums[i];
        if (countObj[el]) {
            countObj[el] +=1;
        } else {
            countObj[el] = 1;
        }
    }
    for(let el in countObj) {
        if(countObj[el] > nums.length/3) {
            newArr.push(el);
        }
    }
    return newArr;
};

console.log(majorityElement([3,2,3]));
