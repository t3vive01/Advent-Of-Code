const fs = require('node:fs');

const input = fs.readFileSync('Day01/input.txt').toString()


/* let answer = Array.from(input).reduce(
    (floor, direction) => {
        if (direction === '(') {
            return (floor + 1);
        } else {
            return (floor - 1);
        }
    }, 0
)
 */

let index = 0;
let answer2 = 0;

let answer1 = Array.from(input).reduce(
    (floor, direction) => {
        if (floor < 0 && !answer2) {
            answer2 = index
        }
        if (direction === '(') {
            index++;
            return (floor + 1);
        } else {
            index++;
            return (floor - 1);
        }
    }, 0
);

console.log("Answer 1: ", answer1, "\nAnswer 2: ", answer2);
