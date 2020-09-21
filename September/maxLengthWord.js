var lengthOfLastWord = function(s) {
    if(!s || s.length == 0) return s;
    let str = s.trim().split(" ");
    
    console.log(str[str.length -1].length);
};

lengthOfLastWord("a ");
