var findRepeatedDnaSequences = function(s) {
    if(!s || s.length < 10) return []
    let map = {};
    let result = [];
    for(let i=0; i < s.length - 10; i++) {
        let currentSeq = s.substr(i, 10);
        if(map.hasOwnProperty(currentSeq)) {
            if(!map[currentSeq]) {
                result.push(currentSeq);
                map[currentSeq] = true;
            }
        } else {
            map[currentSeq] = false;
        }
    }
    return result;
};

let str = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";

console.log("Result: ", findRepeatedDnaSequences(str));