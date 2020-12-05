/* Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
 */

function encryptThis(text) {
    const textArray = text.split(' ')
    return textArray
    .map(word => {
        const ascii = word.charCodeAt(0)
        const wordArray = word.split('')
        if (wordArray.length >= 3) {
            [wordArray[1], wordArray[wordArray.length-1]] = [wordArray[wordArray.length-1], wordArray[1]]
        }
        word = ascii.toString() + wordArray.slice(1).join('')
        return word
    })
    .join(' ')
    .trim()
}




console.log(encryptThis("A wise old owl lived in an oak"))