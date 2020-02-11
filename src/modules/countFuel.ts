export default function countFuel(masses: number[]): number {
    let sum = 0;
    for (let mass of masses) {
        let totalFuel = [calculateFuel(mass)]
        while (totalFuel[totalFuel.length - 1] > 0) {
            let newFuel = calculateFuel(totalFuel[totalFuel.length - 1])
            totalFuel.push(newFuel > 0 ? newFuel : 0)
        }
        sum += totalFuel.reduce((acc, v) => { return acc + v }, 0);
    }
    return sum
}

export function calculateFuel(mass: number): number {
    return Math.floor(mass / 3) - 2;
}
