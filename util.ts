export function modulo(n: number, d: number): number {
    return ((n % d) + d) % d
}

export function run(fn: () => void) {
    const start = Date.now()
    fn()
    const end = Date.now()
    console.log(`Took ${end - start}ms`)
}