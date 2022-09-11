



function findLongestWord(str) {
    const splitText=str.split(" ").sort()
    const longestWord=splitText.sort(function(a, b) { return b.length - a.length; }); 
    return longestWord[0]
   
   
  }
  
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // jumped
  console.log(findLongestWord("I like cats of the Turkish Van breed")); // Turkish
 