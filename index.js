// Code your solution here!

function printString(str) {
    if (str.length === 1) return console.log(str);
    return console.log(str[0]) + printString(str.substring((1)))
}

function reverseString(str) {
    if (str.length === 1) return str;
    return reverseString(str.substring(1)) + str[0]
}

function isPalindrome(str) {
    if (str[0] !== str[str.length-1]) return false;
    if (str.length >= 2) {
        return isPalindrome(str.substring(1,str.length-1))
    } else {
        return true
    }
}

function addUpTo(arr,idx) {
    if (idx === 0) return arr[0];
    return arr[0] + addUpTo(arr.slice(1), idx-1)
}

function maxOf(arr, max = arr[0]) {
    if (arr.length === 1) return max;
    if (arr[0] > max) max = arr[0]
    return maxOf(arr.slice(1), max)
}


function includesNumber(arr, num) {
    if (arr[0] === num) return true;
    if (arr.length === 1) {
        return false
    } else {
        return includesNumber(arr.slice(1), num)
    }
}