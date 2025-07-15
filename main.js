"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Hello World';
console.log(message);
var x = 10;
var y = 20;
x = 30;
// y = 40; // Error
var isBeginner = true;
var total = 0;
var name = 'David';
var sentence = "My name is ".concat(name, " and I am a beginner in TypeScript");
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Chris', 2];
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'David';
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
myVariable = "David";
myVariable.toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
b = true;
var multiType;
multiType = 20;
multiType.toFixed(2);
multiType = "David";
multiType.toUpperCase();
function add(num1, num2) {
    return num2 ? num1 + num2 : num1;
}
console.log(add(5, 10));
//add(5, '10'); // Error
console.log(add(5));
function fullName(person) {
    console.log("".concat(person.lastName ? person.firstName.concat(person.lastName) : person.firstName));
}
var p = {
    firstName: 'Bruce'
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('David');
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager ".concat(this.employeeName, " delegating tasks"));
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.greet();
m1.delegateWork();
