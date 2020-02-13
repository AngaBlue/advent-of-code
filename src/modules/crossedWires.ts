interface Point {
    x: number,
    y: number
}

export function closestIntersection(instructions: string): number {
    let grid: Point[] = []
    let lowestDistance: number = Number.MAX_SAFE_INTEGER;

    function drawInstruction(coords: Point, instruction: string, wire: number): Point {
        let distance = parseInt(instruction.slice(1))
        let axis: 'x' | 'y' = 'x';
        switch (instruction[0]) {
            case "U":
                axis = 'x'
                break;
            case "D":
                axis = 'x'
                distance *= -1
                break;
            case "L":
                axis = 'y'
                distance *= -1
            case "R":
                axis = 'y'
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