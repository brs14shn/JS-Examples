





//Complete the solution so that the function will break up camel casing, using a space between words.

/*"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""*/


//!SOLUTİON-1

function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }

  console.log(solution("camelCasing"));
  console.log(solution("identifier"));
  console.log(solution(""));

  //!SOLUTİON-2
  function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }





