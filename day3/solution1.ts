import { readFileSync } from 'fs';
import { modulo, run } from '../util';


run(() => {

    const result = readFileSync('day3/input.txt', 'utf-8')

    const lines = result.split('\n')


    function getOverlap(line: string) {
        const frequencies = new Map()

        for (let i = 0; i < line.length/2; i++) {
            frequencies.set(line[i], 1)
        }
        for (let i = line.length/2; i < line.length; i++) {
            if (frequencies.get(line[i])) {
                return line[i]
            }
        }
        return ''

    }

    let sum = 0

    for (let i = 0; i < lines.length - 1; i++) {
        const overlap = getOverlap(lines[i])
        const charCode = overlap.charCodeAt(0)
        const priority = charCode <= 'Z'.charCodeAt(0) ? charCode - 'A'.charCodeAt(0) + 27 :  charCode - 'a'.charCodeAt(0) + 1
        console.log(overlap, priority)

        sum += priority
        
    }

    console.log(sum)

})

