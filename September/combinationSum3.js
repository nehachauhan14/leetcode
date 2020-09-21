var combinationSum3 = function(k, n) {
    var out = [];
    
    var pick =  function(number, pickes, total) {
        // console.log("pick", number, pickes, total);
        if(pickes.length == k && total == n) {
        // console.log("HERE", pickes);
            out.push(pickes);
            return;
        }
        
        if(number > 9 || pickes.length > k || total > n) {
            return;
        } 
        pick(number+1, [...pickes, number], total+number);
        pick(number+1, [...pickes], total);
    }
    
    pick(1, [], 0);
    
    return out;
    
};

let output = combinationSum3(3, 7);

console.log("output", output);