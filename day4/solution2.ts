import { readFileSync } from 'fs';
import { run } from '../util';


run(() => {

    const result = readFileSync('day4/input.txt', 'utf-8')

    const lines = result.trim().split('\n')

    let overlap = 0
    for (let i = 0; i < lines.length; i++) {
        const row = lines[i].split(',')
        const a = row[0].split('-')
        const b = row[1].split('-')

        if (parseInt(a[0]) === parseInt(b[0])) {
            overlap++
        }
        else if (parseInt(a[0]) < parseInt(b[0])) {
            if (parseInt(b[0]) <= parseInt(a[1])) {
                overlap++
            }
        } else {
            if (parseInt(a[0]) <= parseInt(b[1])) {
                overlap++
            }
        }

    }

    console.log(overlap)

})

