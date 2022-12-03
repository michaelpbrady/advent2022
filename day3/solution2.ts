import { readFileSync } from 'fs';
import { modulo, run } from '../util';


run(() => {

    const result = readFileSync('day3/input.txt', 'utf-8')

    const lines = result.split('\n')


    function getOverlap(group1: string,group2: string,group3: string) {
        const frequencies = new Map()

        for (let i = 0; i < group1.length; i++) {
            frequencies.set(group1[i], 1)
        }
        for (let i = 0; i < group2.length; i++) {
            if (frequencies.get(group2[i]) == 1) {
                frequencies.set(group2[i], 2)
            }
        }

        for (let i = 0; i < group3.length; i++) {
            if (frequencies.get(group3[i]) == 2) {
                return group3[i]
            }
        }
        return ''

    }

    let sum = 0

    for (let i = 0; i < lines.length - 1; i+=3) {
        const overlap = getOverlap(lines[i], lines[i+1], lines[i+2])
        const charCode = overlap.charCodeAt(0)
        const priority = charCode <= 'Z'.charCodeAt(0) ? charCode - 'A'.charCodeAt(0) + 27 :  charCode - 'a'.charCodeAt(0) + 1
        console.log(overlap, priority)

        sum += priority
        
    }

    console.log(sum)

})

