import { readFileSync } from 'fs';
import { modulo } from '../util';


const result = readFileSync('day2/input.txt', 'utf-8')

const lines = result.split('\n')

const scores: {[action: string]: number} = {"X": 1, "Y": 2, "Z": 3}

function scoreMe(elfAction: string, myAction: string): number {
    scores[myAction] 
    const diff = modulo(elfAction.charCodeAt(0) - (myAction.charCodeAt(0) - 23), 3)
    if (diff == 0) {
        return scores[myAction] + 3
    } else if (diff == 1) {
        return scores[myAction] + 0
    } else if (diff == 2) {
        return scores[myAction] + 6
    }
    return 0
}

let totalScore = 0

for (let i = 0; i < lines.length; i++) {
    const row = lines[i].split(' ')
    if (row.length != 2) {
        continue
    }
    const elf = row[0]
    const me = row[1]

    totalScore += scoreMe(elf, me)
}

console.log(totalScore)