class Point {
    constructor(x, y) {
        if (x !== undefined && y !== undefined) {
            this.x = x;
            this.y = y;
        }
    }
}
class Robot extends Point {
    constructor(code, x, y) {
        super(x, y);
        this.code = code;
    }
}
class RemoteControl {
    constructor(robot) {
        this.points = new Array();
        this.undonePoints = new Array();
        this.robot = robot;
    }
    moveUp() {
        robot.y += 1;
        this.points.push(new Point(robot.x, robot.y));
    }
    moveDown() {
        robot.y -= 1;
        this.points.push(new Point(robot.x, robot.y));
    }
    moveRight() {
        robot.x += 1;
        this.points.push(new Point(robot.x, robot.y));
    }
    moveLeft() {
        robot.x -= 1;
        this.points.push(new Point(robot.x, robot.y));
    }
    do() {
        let p = this.points.pop();
        this.undonePoints.push(p);
        robot.x = p.x;
        robot.y = p.y;
    }
    undo() {
        let p = this.points.pop();
        this.undonePoints.push(p);
        robot.x = p.x;
        robot.y = p.y;
    }
}
let robot = new Robot("r2d2", 0, 0);
let remote = new RemoteControl(robot);
//# sourceMappingURL=robot.js.map