/* 
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
*/

function solve(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let max = 0
    let currentTotal = 0
    let i = 0

    while (i < s.length) {
        if (vowels.includes(s[i])) {
            max = Math.max(currentTotal, max)
            currentTotal = 0
        } else {
            currentTotal += s.charCodeAt(i) - 96
        }
        i++
    }
    return Math.max(currentTotal, max)
}
