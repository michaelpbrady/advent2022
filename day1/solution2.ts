import { readFileSync } from 'fs';



function shift(maxes: number[], candidate: number) {
    if (candidate < maxes[2]) {
        return maxes
    } else if (candidate < maxes[1]) {
        return [maxes[0], maxes[1], candidate]
    } else if (candidate < maxes[0]) {
        return [maxes[0], candidate, maxes[1]]
    } else {
        return [candidate, maxes[0], maxes[1]]
    }
}


const result = readFileSync('day1/input.txt', 'utf-8')

const chars = result.split('\n')

let maxes = [0, 0, 0]
let accum = 0

for (let i = 0; i < chars.length; i++) {
    if (chars[i] === '') {
        maxes = shift(maxes, accum)
        accum = 0
    } else {
        accum += parseInt(chars[i])
    }
}

console.log(maxes.reduce((a,b) => a+b))
