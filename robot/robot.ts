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

    points:Array<Point> = new Array<Point>();

    undonePoints:Array<Point> = new Array<Point>();

    constructor(robot: Robot) {
        this.robot = robot;
    }

    moveUp(): void {
        robot.y += 1;
        this.points.push(new Point(robot.x, robot.y));
    }

    moveDown(): void {
        robot.y -= 1;
        this.points.push(new Point(robot.x, robot.y));
    }

    moveRight(): void {
        robot.x += 1;
        this.points.push(new Point(robot.x,robot.y));

    }

    moveLeft(): void {
        robot.x -= 1;
        this.points.push(new Point(robot.x,robot.y));
    }

    do(): void {
        let p:Point = this.points.pop();
        this.undonePoints.push(p);
        robot.x = p.x;
        robot.y = p.y;
    }

    undo(): void {
        let p:Point = this.points.pop();
        this.undonePoints.push(p);
        robot.x = p.x;
        robot.y = p.y;

    }


}


let robot: Robot = new Robot("r2d2", 0, 0);

let remote: RemoteControl = new RemoteControl(robot);

