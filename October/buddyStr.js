var buddyStrings = function(A, B) {
    if(A == B) {
        let map = {};
        let flag = false;
        for( let i of A) {
            if(!map[i]) {
                map[i]  = 1;
            } else {
                flag = true;
                map[i] +=1;
            }
        }

        if(!flag) {
            return false;
        }
    }
    A = A.split("");
    B = B.split("");
    if(A.lenght !== B.lenght) return false;

    let firstIndex, secondIndex, flag = false;    
    for(let i=0; i < A.length; i++) {
        if(A[i] !== B[i] && typeof firstIndex == "undefined") {
            firstIndex = i;
        } else if (A[i] !== B[i] && typeof secondIndex == "undefined") {
            secondIndex = i;
            flag = true;
            break;
        }
    }
    if(typeof firstIndex != "undefined" && typeof secondIndex != "undefined") {
        let Temp = A[firstIndex];
        A[firstIndex] = A[secondIndex];
        A[secondIndex] = Temp;
     
        if(A.join("") == B.join("")) {
            return true 
        }
    }
    
    if(A.join("") == B.join("")) {
        return true 
    }

    return false;
};

let a = "", b = "aa";

console.log("Result: ", buddyStrings(a, b));
