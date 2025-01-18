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

const result = uniqueHousesVisited(input.trim());
console.log(`Number of houses visited: ${result}`);
