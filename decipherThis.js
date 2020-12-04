/* You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces
 */

function decipherThis(str) {
    let words = str.split(' ')
    return words
      .map(word => {
        word = replaceFirstChar(word)
        word = swapChars(word)
        return word
      })
      .join(' ')
      .trim()
      
    function replaceFirstChar(word) {
        let i = 0
        while (i < word.length) {
          if (word.charCodeAt(i) >= 65) break
          i++
        }
        const firstChar = String.fromCharCode(parseInt(word.slice(0, i)))
        return (firstChar + word.slice(i))
    }
    
    function swapChars(word) {
      if (word.length < 3) return word
      const wordArray = word.split('')
      let temp
      temp = wordArray[wordArray.length -1]
      wordArray[wordArray.length -1] = wordArray[1]
      wordArray[1] = temp
      return wordArray.join('')
    }
}; 