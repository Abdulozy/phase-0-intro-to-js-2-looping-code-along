// Code your solutions in this file
function countdown(i) {
    //initialize the variable to be returned with the initial i
    var ret = i;
    //in each iteration, assigns i to i-1 then checks if i >= 0
    while (--i >= 0) {
        //concatenates a space and the current i value to the return string
        ret += ' ' + i;
    }
    //returns the string
    return ret;
}