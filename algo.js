// 2413. Smallest Even Multiple



// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n









/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    
    if(n % 2  == 0){
        return n
    }else{
        return n * 2
    }
};