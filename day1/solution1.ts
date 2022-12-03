import { readFileSync } from 'fs';


const result = readFileSync('day1/input.txt', 'utf-8')

const chars = result.split('\n')

let max = 0
let accum = 0

for (let i = 0; i < chars.length; i++) {
    if (chars[i] === '') {
        max = Math.max(max, accum)
        accum = 0
    } else {
        accum += parseInt(chars[i])
    }
}

console.log(max)
