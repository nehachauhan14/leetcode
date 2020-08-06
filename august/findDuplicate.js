/**
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let hashMap = new Map();
    let repeatingArr = [];
    for(let i=0; i < nums.length; i++) {
        if(hashMap.has(nums[i])) {
            hashMap.set(nums[i], hashMap.get(nums[i]) + 1)
        } else {
            hashMap.set(nums[i], 1);
        }
    }
    
    hashMap.forEach((val, key) => {
        if( val === 2) {
            repeatingArr.push(key);
        }
    })
    
    return repeatingArr;
};