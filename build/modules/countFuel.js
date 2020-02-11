"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countFuel(masses) {
    let sum = 0;
    for (let mass of masses) {
        sum += calculateFuel(mass);
    }
    return sum;
}
exports.default = countFuel;
function calculateFuel(mass) {
    return Math.floor(mass / 3) - 2;
}
exports.calculateFuel = calculateFuel;
