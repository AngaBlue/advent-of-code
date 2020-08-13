interface Point {
    x: number,
    y: number
}

export function shortestIntersection(instructions: string): number {
    let grid: Point[] = [{x: 0, y: 0}]
    let lowestDistance: number = Number.MAX_SAFE_INTEGER;
    let wire2Distance = 0;
    let wireCounter = 0;

    function drawInstruction(coords: Point, instruction: string, wire: number): Point {
        let distance = parseInt(instruction.slice(1))
        let axis: 'x' | 'y' = 'x';
        switch (instruction[0]) {
            case "U":
                axis = 'y'
                break;
            case "D":
                axis = 'y'
                distance *= -1
                break;
            case "L":
                axis = 'x'
                distance *= -1
            case "R":
                axis = 'x'
                break;
        }
        let range = [distance > 0 ? 1 : -1, distance].sort((a, b) => a - b)
        for (let i = range[0]; i < range[1]; i++) {
            let pathCoords = { ...coords };
            pathCoords[axis] += i;
            if (wire === 0) {
                wireCounter++
                grid.push(pathCoords)
            } else {
                wire2Distance++;
                if (wire2Distance >= lowestDistance) continue;
                let wire1Distance = grid.findIndex(point => point.x === pathCoords.x && point.y === pathCoords.y) + 1
                if (wire1Distance > 0 && wire1Distance + wire2Distance < lowestDistance) {
                    lowestDistance = wire1Distance + wire2Distance
                }
            }
        }
        //Return New Coordinate
        coords[axis] += distance
        return coords;
    }
    let wireInstructions = instructions.split('\n').map(i => i.split(","))
    wireInstructions.forEach((wireInstruction, wire) => {
        let coords: Point = {
            x: 0,
            y: 0
        }
        for (let instruction of wireInstruction) {
            coords = drawInstruction(coords, instruction, wire)
        }
    });
    console.log(grid.length, wireCounter, grid)
    //Find Shortest Distance
    return lowestDistance;
}


export function closestIntersection(instructions: string): number {
    let grid: Point[] = []
    let lowestDistance: number = Number.MAX_SAFE_INTEGER;

    function drawInstruction(coords: Point, instruction: string, wire: number): Point {
        let distance = parseInt(instruction.slice(1))
        let axis: 'x' | 'y' = 'x';
        switch (instruction[0]) {
            case "U":
                axis = 'y'
                break;
            case "D":
                axis = 'y'
                distance *= -1
                break;
            case "L":
                axis = 'x'
                distance *= -1
            case "R":
                axis = 'x'
                break;
        }
        let range = [distance > 0 ? 1 : -1, distance].sort((a, b) => a - b)
        for (let i = range[0]; i < range[1]; i++) {
            let pathCoords = { ...coords };
            pathCoords[axis] += i;
            if (wire === 0) {
                grid.push(pathCoords)
            } else {
                let pointDistance = Math.abs(pathCoords.x) + Math.abs(pathCoords.y)
                if (pointDistance >= lowestDistance) continue;
                if (grid.find(point => point.x === pathCoords.x && point.y === pathCoords.y))
                    lowestDistance = pointDistance
            }
        }
        //Return New Coordinate
        coords[axis] += distance
        return coords;
    }
    let wireInstructions = instructions.split('\n').map(i => i.split(","))
    wireInstructions.forEach((wireInstruction, wire) => {
        let coords: Point = {
            x: 0,
            y: 0
        }
        for (let instruction of wireInstruction) {
            coords = drawInstruction(coords, instruction, wire)
        }
    });
    //Find Shortest Distance
    return lowestDistance;
}