export { };

let message = 'Hello World';
console.log(message);

let x = 10;
const y = 20;

x = 30;
// y = 40; // Error

let isBeginner:boolean = true;
let total:number = 0;
let name:string = 'David';

let sentence:string = `My name is ${name} and I am a beginner in TypeScript`;
console.log(sentence);

let n:null = null;
let u:undefined = undefined;

let isNew:boolean|null = null;
let myName:string|undefined = undefined;

let list1:number[] = [1, 2, 3];
let list2:Array<number> = [1, 2, 3];

let person1:[string, number] = ['Chris', 2];

enum Color {Red = "Red", Green = "Green", Blue = "Blue"};

let c:Color = Color.Green;
console.log(c);

let randomValue:any = 10;
randomValue = true;
randomValue = 'David';

let myVariable:unknown = 10;

function hasName(obj:any):obj is {name:string} {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj
}
if(hasName(myVariable)){
    console.log(myVariable.name);
}

myVariable = "David";
(myVariable as string).toUpperCase();

let a;
a  = 10;
a = true;

let b:any = 20;
b = true;

let multiType: number|string;
multiType = 20;
multiType.toFixed(2);
multiType = "David";
multiType.toUpperCase();

function add(num1:number, num2?:number):number {
    return num2 ? num1 + num2 : num1;
}

console.log(add(5,10));
//add(5, '10'); // Error

console.log(add(5));

interface Person {
    firstName: string;
    lastName?: string;
}

function fullName(person:Person) {
    console.log(`${person.lastName ? person.firstName.concat(person.lastName) : person.firstName}`);
}

let p = {
    firstName: 'Bruce'
};

fullName(p);

class Employee {
    protected employeeName: string;

    constructor(name:string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('David');
emp1.greet();

class Manager extends Employee {
    constructor(managerName:string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager ${this.employeeName} delegating tasks`);
    }
}

let m1 = new Manager('Bruce');
m1.greet();
m1.delegateWork();