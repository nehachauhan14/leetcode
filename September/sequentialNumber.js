function sequentialNumber(low, high) {
    let minL = low.toString().length;
    let maxL = high.toString().length;

    let str = "123456789";
    let maximumPossibleNumbers = []; 
    
    for( let i=minL; i<=maxL; i++) {
        for(let j=0; j <= (str.length-i); j++) {
            let number = Number(str.substr(j, i));
            if(number > low && number < high)  {
                maximumPossibleNumbers.push(number)
            }  
        }
    }
    return maximumPossibleNumbers;
}


let result = sequentialNumber(1000, 13000);
