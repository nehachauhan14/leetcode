// Doesnt work for all cases

var findPairs = function(nums, k) {
    if(!nums || nums.length < 2) {
        return 0;
    }

    nums.sort((a, b) => a - b);
    if(nums.length == 2 && (nums[1] - nums[0] == k)) {
        return 1;
    }

    let i = 0;
    let j = i+1;
    let count = 0;
    while(j > i) {
        if(nums[j] - nums[i] == k) {count++; i++; j++;}
        else if (nums[j] - nums[i] < k) {j++;}
        else {i++;}
    }

    return count;
};

var findPairsHashMap = function(nums, k) {
    if(!nums || nums.length < 2) {
        return 0;
    }

    let count = 0;
    let map = {};

    nums.forEach(element => {
        if(map[element]) {
            map[element] +=1;
        } else {
            map[element] = 1;
        }
    });

    console.log("Map", map);

    for(let el in map) {
        if(k == 0) {
            if(map[el] > 1) {
                count++;
            }
        } else {
            let nextNum = Number(el) + Number(k);
            if(map[nextNum]) {
                console.log("el", el, nextNum);
                count++;
            }
        }
    }
    return count;
};

let nums = [1,3,1,5,4];
let k = 0;

let result = findPairsHashMap(nums, k);

console.log("Result: ", result);