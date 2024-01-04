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