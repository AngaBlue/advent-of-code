export function compute(intcode: number[], inputs: number[]) {
    let i = 0;
    intcode[1] = inputs[0]
    intcode[2] = inputs[1]
    while (true) {
        switch (true) {
            case intcode[i] === 1:
                //Add
                intcode[intcode[i + 3]] = intcode[intcode[i + 1]] + intcode[intcode[i + 2]]
                break;
            case intcode[i] === 2:
                //Multiply
                intcode[intcode[i + 3]] = intcode[intcode[i + 1]] * intcode[intcode[i + 2]]
                break;
            case intcode[i] === 99:
                return intcode[0];
            default:
                throw new Error(`Unknown opcode ${intcode[i]} at ${i},\n${JSON.stringify(intcode)}`)
        }
        //Next opcode
        i += 4
    }
}

export function inverseCompute(intcode: number[], output: number): number {
    let noun = 0;
    while (noun < 100) {
        for (let verb = 0; verb <= noun; verb++) {
            if (compute([...intcode], [noun, verb]) === output) return 100 * noun + verb;
        }
        noun++;
    }
    return 0;
}