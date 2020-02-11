export default function countFuel(masses: number[]): number {
    let sum = 0;
    for (let mass of masses) {
        sum += calculateFuel(mass);
    }
    return sum
}

export function calculateFuel(mass: number): number {
    return Math.floor(mass / 3) - 2;
}
