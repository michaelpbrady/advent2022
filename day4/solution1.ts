import { readFileSync } from 'fs';
import { run } from '../util';


run(() => {

    const result = readFileSync('day4/input.txt', 'utf-8')

    const lines = result.trim().split('\n')

    let contained = 0
    for (let i = 0; i < lines.length; i++) {
        const row = lines[i].split(',')
        const a = row[0].split('-')
        const b = row[1].split('-')

        if (parseInt(a[0]) === parseInt(b[0])) {
            contained++
        }
        else if (parseInt(a[0]) < parseInt(b[0])) {
            if (parseInt(a[1]) >= parseInt(b[1])) {
                contained++
            }
        } else {
            if (parseInt(b[1]) >= parseInt(a[1])) {
                contained++
            }
        }

    }

    console.log(contained)

})

