  function findLongestWord(str) {
    let strSplit = str.split(' ');
    let longestWord = 0;
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
}

  findLongestWord("The quick brown fox jumped over the lazy dog");





  // Check if a string (first argument, str) ends with the given target string (second argument, target).


  function confirmEnding(str, target) {
    let currentWord = '';
    let contorTarget = target.length - 1;
  
    for(let i = str.length - 1; i >= 0; i--){
      
      if(str[i] !== target[contorTarget]){
        return false;
      } 
      contorTarget--;
      if(contorTarget < 0){
        break;
      }
    }
  
    return true;
  }
  
  confirmEnding("Bastian", "n");



  // Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.


function repeatStringNumTimes(str, num) {
  let repeatStr = "";
  for(let i=0; i < num; i++){
    repeatStr = repeatStr + str;
  }

  return repeatStr;
}

repeatStringNumTimes("abc", 3);




// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  
  if(str.length > num){
    return str.slice(0,num) + "...";
  } else {
  return str;
  }
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);



// Finders Keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
// This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;

  for(let i = 0; i < arr.length; i++){
    num = arr[i];

    if(func(num) == true){
      return num;
    }
  }

}

findElement([1, 2, 3, 4], num => num % 2 === 0);




// Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {

  return typeof bool === "boolean";

}

booWho(null);






// Slice and Splice
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {

  let newArr = arr2.slice();
  
  for(let i = 0; i < arr1.length; i++){
    newArr.splice(n, 0, arr1[i])
    n++;
  }
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);




// Falsy Bouncer
// Remove all falsy values from an array. Return a new array; do not mutate the original array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {

  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i]){
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

bouncer([7, "ate", "", false, 9]);




