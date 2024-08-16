var msg = "Hello World!";
console.log(msg);
var firstName = " Julia    ";
var lastName = "  Hund  ";
var fullName = firstName.trim().concat(" ", lastName.trim());
console.log(fullName);
var amount = 10000.98;
console.log(amount.toLocaleString("de-DE"));
var keywords = new Array();
var reviews = new Array();
keywords.push("Alex", "Macedonia", "Pela");
console.log(keywords);
var sentence = keywords.reduce(function (previousValue, currentValue) { return previousValue + " " + currentValue; });
console.log(sentence);
reviews.push(4, 2, 5, 1, 5);
var max = reviews.reduce(function (previousValue, currentValue) { return Math.max(previousValue, currentValue); });
console.log(max);
var avg = reviews.reduce(function (previousValue, currentValue) { return previousValue + currentValue; }) / reviews.length;
console.log(avg);
var isValid = reviews.every(function (value) { return value <= 5 && value >= 0; });
console.log(isValid);
var isEven = reviews.every(function (value) { return value % 2 == 0; });
console.log(isEven);
reviews = reviews.map(function (value) { return value + 2; });
console.log(reviews);
var Project = /** @class */ (function () {
    function Project(title) {
        if (title !== undefined)
            this._title = title;
    }
    Object.defineProperty(Project.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            if (value === undefined || value.length > 100)
                throw new Error("invalid title");
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    return Project;
}());
var p = new Project();
p.title = "Der Gerät";
p.description = "Der Gerät schläft nie ein.";
p.isFWsponsored = true;
p.isFFGsponsored = false;
console.log(p);
