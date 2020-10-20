

var minDominoRotations = function(A, B) {
    var helper = function(a, b, max) {
        console.log(a, b, max);
        let count = 0;
        for(let i=0; i < a.length; i++) {
            
            if(a[i] != max && b[i] == max) {
                a[i] = max;
                b[i] = a[i];
                count+=1;

            } else if(a[i] != max && b[i] != max) {
                return -1;
            }
        }
        
        return count;
    }
    
    if(A.length != B.length) {
        return -1;
    }

    let aMap = {};
    let bMap = {};

    A.forEach(element => {
        if(aMap[element]) {
            aMap[element] +=1;
        } else {
            aMap[element] = 1;
        }
    });

    B.forEach(element => {
        if(bMap[element]) {
            bMap[element] +=1;
        } else {
            bMap[element] = 1;
        }
    });
    let maxCount1 = -10;
    let maxCount2 = -10;
    let max1 = -1;
    let max2 = -1;
    let result = -1;
            for(let el in aMap) {
                if(aMap[el] > maxCount1) {
                    maxCount1 = aMap[el]
                    max1 = el
                }
            }
            for(let el in bMap) {
                if(bMap[el] > maxCount2) {
                    maxCount2 = bMap[el]
                    max2 = el
                }
            }
        if(maxCount1 > maxCount2) {
            result = helper(A, B, max1)
        } else {
            result = helper(B, A, max2)
        }
    return result;
};

let A = [1,2,1,1,1,2,2,2],
B = [2,1,2,2,2,2,2,2]

let result = minDominoRotations(A, B)

console.log("Result:", result);