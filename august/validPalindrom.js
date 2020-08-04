/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s == ""){
        return true
    }
    let regex = /[^0-9a-zA-Z]/g;
    s = s.replace(regex, "").toLowerCase();
    let start = 0;
    let end = s.length -1;
    let flag = true;

    while(start <= end) {
        if(s.charAt(start) == s.charAt(end)) {
            start++;
            end --;
        } else {
          flag = false; 
         break;
        }
    }
    
    return flag
};