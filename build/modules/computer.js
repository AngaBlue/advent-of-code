"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compute(intcode) {
    let i = 0;
    while (true) {
        switch (true) {
            case intcode[i] === 1:
                //Add
                intcode[intcode[i + 3]] = intcode[intcode[i + 1]] + intcode[intcode[i + 2]];
                break;
            case intcode[i] === 2:
                //Multiply
                intcode[intcode[i + 3]] = intcode[intcode[i + 1]] * intcode[intcode[i + 2]];
                break;
            case intcode[i] === 99:
                return intcode;
            default:
                throw new Error(`Unknown opcode ${intcode[i]} at ${i},\n${JSON.stringify(intcode)}`);
        }
        //Next opcode
        i += 4;
    }
}
exports.default = compute;
