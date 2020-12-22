
// count the number of fractions that can't be reduced for a given denominator
function reducedFractions(denominator) {
    if (denominator <= 1) return 0
    let count = 0

    for (let numerator=2; numerator < denominator; numerator++) {
        for(let i=2; i <= numerator; i++) {
            if (numerator % i === 0 && denominator % i === 0) {
                count++
                break
            }
        }
    }

    return denominator - count -1
}

console.log(reducedFractions(3)) //2
console.log(reducedFractions(4)) //2
console.log(reducedFractions(5)) //4
console.log(reducedFractions(6)) //2
console.log(reducedFractions(7)) //6
console.log(reducedFractions(8)) //4
console.log(reducedFractions(9)) //6
console.log(reducedFractions(10)) //4