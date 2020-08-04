/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num == 0) {
        return false;
    }
     
     while(num != 1) {
         var rem = num%4;
         if(rem != 0) {
             return false;
         }
         num = num/4;
     }
     return true;
 };