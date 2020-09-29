// var wordBreak = function(s, wordDict) {
//     if(s.length == 0) {
//         return true;
//     }

//     for(let i=1; i <= s.length; i++) {
//         if(wordDict.indexOf(s.substr(0, i)) >= 0 && wordBreak(s.substr(i, s.length-i+1), wordDict)) {
//             return true;
//         }
//     }
//     return false;
// };

// Word break using DP
var wordBreak = function(s, wordDict) {
    let wb = [];

    if(s.length == 0) {
        return true;
    }

    for(let i=1; i <= s.length; i++) {
        if(wb[i] !== true && wordDict.indexOf(s.substr(0, i)) > -1)
            wb[i] = true;
        
        if(wb[i] == true) {
            if(i == s.length) {
                return true;
            }

            for(let j = i+1; j <= s.length; j++) {
                if(wb[j] !== true && wordDict.indexOf(s.substr(i, j-1))> -1) {
                    wb[j] = true;
                }

                if(j == s.length && wb[j] == true) {
                    return true;
                }
            }
        }
    }
    
    return false;
};


let str = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
let dict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"];

let result = wordBreak(str, dict);

console.log("Result:", result);