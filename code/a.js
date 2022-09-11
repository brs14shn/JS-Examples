



function findLongestWord(str) {
    const splitText=str.split(" ").sort()
    const longestWord=splitText.sort(function(a, b) { return b.length - a.length; }); 
    //! [ 'jumped','brown','quick','lazy','over','The','dog','fox','the' ]
    //! [ 'Turkish', 'breed', 'cats', 'like', 'Van', 'the', 'of', 'I' ]
    return longestWord
   
   
  }
  
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // jumped
  console.log(findLongestWord("I like cats of the Turkish Van breed")); // Turkish
 

  //* ==============REDUCE=====================

  function findLongestWord(str) {
     let longestWord = str.split(' ')
     .reduce(function(longest, currentWord) 
     { return currentWord.length > longest.length ? currentWord : longest; }, ""); 
     return longestWord; } 
     
     
    console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));