"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countFuel(masses) {
    let sum = 0;
    for (let mass of masses) {
        let totalFuel = [calculateFuel(mass)];
        while (totalFuel[totalFuel.length - 1] > 0) {
            let newFuel = calculateFuel(totalFuel[totalFuel.length - 1]);
            totalFuel.push(newFuel > 0 ? newFuel : 0);
        }
        sum += totalFuel.reduce((acc, v) => acc + v, 0);
    }
    return sum;
}
exports.default = countFuel;
function calculateFuel(mass) {
    return Math.floor(mass / 3) - 2;
}
exports.calculateFuel = calculateFuel;
