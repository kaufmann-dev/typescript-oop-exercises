class Point {

    x: number;
    y: number;

    constructor()
    constructor(x: number, y: number)
    constructor(x?: number, y?: number) {
        if (x !== undefined && y !== undefined) {
            this.x = x;
            this.y = y;
        }
    }


}

class Robot extends Point {
    readonly code: string;

    constructor(code: string, x: number, y: number) {
        super(x, y);
        this.code = code;
    }
}


class RemoteControl {
    readonly robot: Robot;

    constructor(robot: Robot) {
        this.robot = robot;
    }

    moveUp(): void {

    }

    moveDown(): void {

    }

    moveRight(): void {

    }

    moveLeft(): void {

    }

    do(): void {

    }

    undo(): void {

    }


}


let robot: Robot = new Robot("r2d2", 0, 0);

let remote: RemoteControl = new RemoteControl(robot);

remote.moveUp();
// (0, 1)
remote.moveUp();
// (0, 2)
remote.moveLeft();
// (-1, 2)
remote.moveLeft();
// (-2, 2)
remote.undo();
// (-1, 2)
remote.undo();
// 0, 2
remote.do();
// -1, 2
remote.moveRight();
//0, 2
remote.do();
//0,2
remote.undo();
// -1, 2
remote.undo();
//0,2

const createCounter = () => {
    return {
        value: 0,

        increment() {
            this.value += 1;
        },

        decrement() {
            this.value -= 1;
        }
    }
}
const createUndoableCounter = () => {
    let history = [0];
    let position = 0;

    return {
        value() {
            return history[position];
        },

        // rest of implementation here...

    }
}