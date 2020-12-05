/* 
Description:
Introduction
Snakes and Ladders is an ancient Indian board game regarded today as a worldwide classic. It is played between two or more players on a gameboard having numbered, gridded squares. A number of "ladders" and "snakes" are pictured on the board, each connecting two specific board squares. (Source Wikipedia)

Task
Your task is to make a simple class called SnakesLadders. The test cases will call the method play(die1, die2) independantly of the state of the game or the player turn. The variables die1 and die2 are the die thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.
The Board

Rules
1.  There are two players and both start off the board on square 0.
2.  Player 1 starts and alternates with player 2.
3.  You follow the numbers up the board in order 1=>100
4.  If the value of both die are the same then that player will have another go.
5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).
6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).
7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)
8.  If the Player rolled a double and lands on the finish square “100” without any remaining moves then the Player wins the game and does not have to roll again.

Returns
* Return Player n Wins!. Where n is winning player that has landed on square 100 without any remainding moves left.
* Return Game over! if a player has won and another player tries to play.
* Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.

Good luck and enjoy! 

Board can be found here: https://www.codewars.com/kata/587136ba2eefcb92a9000027/javascript
*/




class SnakesLadders {
    constructor() {
        this.board = new Array
        this.board[2] = 38
        this.board[7] = 14
        this.board[8] = 31
        this.board[15] = 26
        this.board[16] = 6
        this.board[21] = 42
        this.board[28] = 84
        this.board[36] = 44
        this.board[46] = 25
        this.board[49] = 11
        this.board[51] = 67
        this.board[62] = 19
        this.board[64] = 60
        this.board[71] = 91
        this.board[74] = 53
        this.board[78] = 98
        this.board[87] = 94
        this.board[89] = 68
        this.board[92] = 88
        this.board[95] = 75
        this.board[99] = 80

        this.currentPlayer = 1
        this.playerLocation = [0, 0]
        this.gameOver = false
    }


    play(die1, die2) {
        if (this.gameOver) return 'Game over!'
        let newLocation = this.playerLocation[this.currentPlayer - 1] + die1 + die2
        if (newLocation === 100) {
            this.gameOver = true   
            return `Player ${this.currentPlayer} Wins!`
        }
        if (newLocation > 100) newLocation = 100 - (newLocation - 100)
        if (this.board[newLocation]) newLocation = this.board[newLocation]
        this.playerLocation[this.currentPlayer - 1] = newLocation
        const lastPlayer = this.currentPlayer
        if (die1 !== die2) this.currentPlayer === 1 ? this.currentPlayer = 2 : this.currentPlayer = 1
        return `Player ${lastPlayer} is on square ${this.playerLocation[lastPlayer - 1]}`
    }
}


const game = new SnakesLadders()
console.log(game.play(1, 5))
console.log(game.play(2, 2))
console.log(game.play(1, 3))
console.log(game.play(11, 11))
console.log(game.play(8, 9))