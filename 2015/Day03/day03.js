const fs = require('node:fs');

const input = fs.readFileSync('Day03/input.txt').toString();

function uniqueHousesVisited(directions) {
    let x = 0, y = 0;
    const visited = new Set();
    visited.add(`${x},${y}`);

    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        if (direction === '^') y++;
        else if (direction === 'v') y--;
        else if (direction === '>') x++;
        else if (direction === '<') x--;

        visited.add(`${x},${y}`);
    }

    return visited.size;
}

function uniqueHousesVisited2(directions) {
    let santaX = 0, santaY = 0;
    let roboX = 0, roboY = 0;
    const visited = new Set();
    visited.add(`${santaX},${santaY}`);

    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        if (i % 2 === 0) {
            switch (direction) {
                case '^':
                    santaY++;
                    break;
                case 'v':
                    santaY--;
                    break;
                case '>':
                    santaX++;
                    break;
                case '<':
                    santaX--;
                    break;
            }
            visited.add(`${santaX},${santaY}`);
        } else {
            switch (direction) {
                case '^':
                    roboY++;
                    break;
                case 'v':
                    roboY--;
                    break;
                case '>':
                    roboX++;
                    break;
                case '<':
                    roboX--;
                    break;
            }
            visited.add(`${roboX},${roboY}`);
        }
    }

    return visited.size;
}
const result = uniqueHousesVisited(input.trim());
console.log(`Number of houses visited: ${result}`);


const result2 = uniqueHousesVisited2(input.trim());
console.log(`Houses that got at least one present: ${result2}`);