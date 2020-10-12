let removeDuplicateLetters = function(s) {
    if(!s)  return;

    if(s.length == 1) return s;
    s = s.split('').sort();

    let temp = s[0];
    let newStr = [];
    newStr.push(temp);
    for(let i=1; i < s.length; i++) {
        if(s[i] !== s[i-1]) {
            newStr.push(s[i])
        }
    }
    return newStr;
};


let s = "cbacdcbc";
console.log("Result: ", removeDuplicateLetters(s));