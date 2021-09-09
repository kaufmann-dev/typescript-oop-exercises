let msg:string="Hello World!";
console.log(msg);

let firstName: string = " Julia    ";
let lastName: string = "  Hund  ";
let fullName: string = firstName.trim().concat(" ", lastName.trim());
console.log(fullName);

let amount: number = 10000.98;
console.log(amount.toLocaleString("de-DE"));

let keywords: Array<string> = new Array<string>();
let reviews: Array<number> = new Array<number>();

keywords.push("Alex", "Macedonia", "Pela");
console.log(keywords);

let sentence: string = keywords.reduce((previousValue, currentValue)=>previousValue+" "+currentValue);
console.log(sentence);

reviews.push(4,2,5,1,5);
let max: number = reviews.reduce((previousValue, currentValue)=>Math.max(previousValue, currentValue));
console.log(max);

let avg: number = reviews.reduce((previousValue, currentValue) => previousValue + currentValue) / reviews.length;
console.log(avg);

let isValid: boolean = reviews.every(value => value <= 5 && value >= 0);
console.log(isValid);

let isEven: boolean = reviews.every(value => value%2 == 0);
console.log(isEven);

reviews = reviews.map(value => value + 2);
console.log(reviews);

class Project{
    constructor()
    constructor(title: string)
    constructor(title?: string) {
        if(title !== undefined)
            this._title = title;
    }
    private _title: string;
    set title(value:string){
        if(value === undefined || value.length > 100)
            throw new Error("invalid title");
        this._title = value;
    }
    get title(){
        return this._title;
    }
    description: string;
    isFWsponsored: boolean;
    isFFGsponsored: boolean;
}

let p: Project = new Project();
p.title = "Der Gerät";
p.description = "Der Gerät schläft nie ein.";
p.isFWsponsored  = true;
p.isFFGsponsored = false;

console.log(p);