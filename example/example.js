var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x !== undefined && y !== undefined) {
            this.x = x;
            this.y = y;
        }
    }
    return Point;
}());
var Robot = /** @class */ (function (_super) {
    __extends(Robot, _super);
    function Robot(code, x, y) {
        var _this = _super.call(this, x, y) || this;
        _this.code = code;
        return _this;
    }
    return Robot;
}(Point));
var RemoteControl = /** @class */ (function () {
    function RemoteControl(robot) {
        this.robot = robot;
    }
    RemoteControl.prototype.moveUp = function () {
    };
    RemoteControl.prototype.moveDown = function () {
    };
    RemoteControl.prototype.moveRight = function () {
    };
    RemoteControl.prototype.moveLeft = function () {
    };
    RemoteControl.prototype.do = function () {
    };
    RemoteControl.prototype.undo = function () {
    };
    return RemoteControl;
}());
var robot = new Robot("r2d2", 0, 0);
var remote = new RemoteControl(robot);
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
var createCounter = function () {
    return {
        value: 0,
        increment: function () {
            this.value += 1;
        },
        decrement: function () {
            this.value -= 1;
        }
    };
};
var createUndoableCounter = function () {
    var history = [0];
    var position = 0;
    return {
        value: function () {
            return history[position];
        },
        // rest of implementation here...
    };
};
