/**
 * Initialize your data structure here.
 */

var MyHashSet = function() {
    this.hs = {};
  };
  
  /** 
   * @param {number} key
   * @return {void}
   */
  MyHashSet.prototype.add = function(key) {
    if (!this.hs[key]) {
      this.hs[key] = true;
    }
  };
  
  /** 
   * @param {number} key
   * @return {void}
   */
  MyHashSet.prototype.remove = function(key) {
    if (this.hs[key]) {
      delete this.hs[key];
    }
  };
  
  /**
   * Returns true if this set contains the specified element 
   * @param {number} key
   * @return {boolean}
   */
  MyHashSet.prototype.contains = function(key) {
    if (this.hs[key]) { 
      return true; 
    } else {
      return false;
    }
  };
  
  /** 
   * Your MyHashSet object will be instantiated and called as such:
   */
   var obj = new MyHashSet()
   obj.add(key)
   obj.remove(key)
   var param_3 = obj.contains(key)
   