

function findLongestWordLength(str) {
    const splitText=str.split(" ")
    let numericArray=[]
    for (let i =0 ;i<splitText.length;i++){
      numericArray.push(splitText[i].length)
    }
   return (Math.max(...numericArray))  //?--- 6 ---
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));