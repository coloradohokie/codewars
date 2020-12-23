/* 
In mathematics, a Diophantine equation is a polynomial equation, usually with two or more unknowns, such that only the integer solutions are sought or studied.

In this kata we want to find all integers x, y (x >= 0, y >= 0) solutions of a diophantine equation of the form:

x2 - 4 * y2 = n
(where the unknowns are x and y, and n is a given positive number) in decreasing order of the positive xi.

If there is no solution return [] or "[]" or "". (See "RUN SAMPLE TESTS" for examples of returns).
*/

function solEquaStr(n) {
    let solutions = []
    for (let x = n; x < 0; x--) {
        for (let y=n; y < 0; y--) {
            if ((x-2*y)*(x+2*y) === n) solutions.push([x,y])
        }
    }

    return solutions
}