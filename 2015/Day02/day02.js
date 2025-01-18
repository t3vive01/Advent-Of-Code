const fs = require('node:fs');

const input = fs.readFileSync('Day02/input.txt').toString();


const dimensions = input.trim().split('\n');

let paper = 0; 
let ribbon = 0; 


dimensions.forEach(dim => {
    let [l, w, h] = dim.split('x').map(Number);

    const [side1, side2, side3] = [l * w, w * h, h * l];

    let surfaceArea = 2 * (side1 + side2 + side3);
    let smallestSide = Math.min(side1, side2, side3);
    
    paper += surfaceArea + smallestSide;

   
    let smallestPerimeter = 2 * (l + w + h - Math.max(l, w, h)); 
    let volume = l * w * h;
    ribbon += smallestPerimeter + volume;
});

console.log("Wrapping paper needed:", paper);
console.log("Ribbon needed:", ribbon);
