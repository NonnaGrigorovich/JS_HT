const findLongestWord = function (string) {
    let arr = string.split(" ");
    let LongestWord = arr[0]
    for (let words of arr) {
        if (
            LongestWord.length < words.length
        ) {
            LongestWord = words
        }
    }
    return LongestWord
  };
  
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'