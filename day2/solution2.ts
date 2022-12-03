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
    const outcome = row[1]
    let me

    const elfCode = row[0].charCodeAt(0) - 65 // 0 rock 1 paper 2 scissor

    if (outcome == 'Y') {
        me = String.fromCharCode(88 + elfCode)
        totalScore += scoreMe(elf, me)
    } else if (outcome == 'X') { // lose
        me = String.fromCharCode(88 + modulo(elfCode + 2, 3))
        totalScore += scoreMe(elf, me)
    } else if (outcome == 'Z') { // win
        me = String.fromCharCode(88 + modulo(elfCode + 1, 3))
        totalScore += scoreMe(elf, me)
    }
    

}

console.log(totalScore)