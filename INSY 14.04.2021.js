// Bsp. Infrastruktur Krankenhaus
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AEmployee = /** @class */ (function () {
    function AEmployee(firstName, lastName) {
        if (firstName !== undefined) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    return AEmployee;
}());
var Physician = /** @class */ (function (_super) {
    __extends(Physician, _super);
    function Physician() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Physician;
}(AEmployee));
// -- Program --
var p = new Physician("Franz", "Kammer");
console.log(p);
console.log(p.firstName + " " + p.lastName);
