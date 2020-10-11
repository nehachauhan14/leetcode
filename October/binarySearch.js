var search = function(nums, target) {
    function bs(nums, left, right, target) {
        while (left <= right ) {
            let mid = Math.floor((right + left)/2);
            if(nums[mid] == target){
                return mid;            
            }
            else if(nums[mid] < target) {
                left = mid+1;
            } else {
                right = mid-1;
            }
        }
        return -1;
    }
    
    return bs(nums, 0, nums.length - 1, target)
};

let arr = [-1,0,3,5,9,12];
let target = 9;
let result = search(arr, target);
console.log("Result", result);
