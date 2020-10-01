var RecentCounter = function() {
    this.totalRequest = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.totalRequest.push(t);
    let startRange = t - 3000;
    
    while(this.totalRequest[0] < startRange) {
        this.totalRequest.shift();
    }
    
    return this.totalRequest.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */