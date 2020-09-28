// BAD solution
// var numSubarrayProductLessThanK = function(nums, k) {
//     let count = 0;
//     for(let i=0; i < nums.length; i++) {
//         if (nums[i] < k) {
//             count++;
//         }
//         let mult = nums[i];
//         for(let j = i+1; j < nums.length; j++) {
//             mult = mult * nums[j];
//             if (mult < k) {
//                 count++;
//             } else {
//                 break;
//             }
//         }
//     }
    
//     return count;
// };


let betterSolution = (nums, k) => {
    if(nums.length == 0) {
        return 0;
    }

    if(nums.length == 1 && nums[0] < k) {
        return 1;
    }

    let count = 0;
    let start = 0;
    let end = 1;
    let product = nums[0];
    let newArr = [];
    while(start <= end && end <= nums.length) {
        if(product < k) {
            count = count + (end - start);
            if(end < nums.length) {
               product = product * nums[end];
            }
            end++;
        } else {
            product /= nums[start++];
        }
    }

    return count;
}


arr = [10,9,10,4,3,8,3,3,6,2,10,10,9,3]

k = 19

let result = betterSolution(arr, k);
console.log("Result", result);