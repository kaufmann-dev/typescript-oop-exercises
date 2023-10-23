// Bsp. Infrastruktur Krankenhaus
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
var EJobSpecification;
(function (EJobSpecification) {
    EJobSpecification[EJobSpecification["GENERAL_PRACTITIONER"] = 0] = "GENERAL_PRACTITIONER";
    EJobSpecification[EJobSpecification["DIAGNOSTICIAN"] = 1] = "DIAGNOSTICIAN";
})(EJobSpecification || (EJobSpecification = {}));
var AEmployee = /** @class */ (function () {
    function AEmployee(firstName, lastName) {
        if (firstName !== undefined) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    AEmployee.prototype.fullName = function () {
        var _a;
        return (_a = this.firstName) === null || _a === void 0 ? void 0 : _a.concat(" ", this.lastName);
    };
    return AEmployee;
}());
var Physician = /** @class */ (function (_super) {
    __extends(Physician, _super);
    function Physician() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Physician;
}(AEmployee));
var Caretaker = /** @class */ (function (_super) {
    __extends(Caretaker, _super);
    function Caretaker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Caretaker;
}(AEmployee));
var Facility = /** @class */ (function () {
    function Facility(n1) {
        this.wards = new Array();
        this.name = n1;
    }
    return Facility;
}());
var Ward = /** @class */ (function () {
    function Ward(name) {
        this.name = name;
    }
    return Ward;
}());
var Occupation = /** @class */ (function () {
    function Occupation(employee, ward, workingHours) {
        // if(employee === undefined || ward === undefined || workingHours === undefined){
        //     throw new Error("invalid data");
        // }
        this.employee = employee;
        this.ward = ward;
        this.wokringHours = workingHours;
    }
    return Occupation;
}());
// -- ------------------------- --
// -- Program --
var p = new Physician("Franz", "Kammer");
p.employeeeid = 1;
p.svnr = 12345678;
p.jobSpecification = EJobSpecification.DIAGNOSTICIAN;
console.log(p);
console.log(p.firstName + " " + p.lastName);
console.log(p.firstName + " " + p.lastName);
console.log(p.fullName());
var c = new Caretaker("Briti", "Chef");
c.employeeeid = 2;
c.svnr = 23456789;
var c2 = new Caretaker("Brabos", "Brutum");
c2.employeeeid = 3;
c2.svnr = 13456789;
c2.manager = c;
console.log(c2);
// -- Facility
var lkhKrems = new Facility("LKH Krems");
lkhKrems.phoneNr = "+43 272 / 37723";
lkhKrems.wards.push(new Ward("7a"), new Ward("7b"));
lkhKrems.wards[0].capacity = 40;
lkhKrems.wards[0].manager = p;
console.log(lkhKrems);
// -- Occupation
var o = new Occupation(p, lkhKrems.wards[0], 8);
console.log(o);
