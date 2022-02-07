// Bsp. Infrastruktur Krankenhaus

enum EJobSpecification{
    GENERAL_PRACTITIONER, DIAGNOSTICIAN
}

class AEmployee {
    employeeeid: number;
    svnr: number;
    firstName: string;
    lastName: string;

    constructor()
    constructor(firstName: string, lastName: string)
    constructor(firstName?: string, lastName?: string) {
        if(firstName !== undefined) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

    }

    fullName(): string{
        return this.firstName?.concat(" ", this.lastName);
    }
}

class Physician extends AEmployee{
    jobSpecification: EJobSpecification;
}

class Caretaker extends AEmployee{
    manager: Caretaker;

}

class Facility {
    name: string;
    phoneNr: string;
    wards: Array<Ward> = new Array<Ward>();

    constructor()
    constructor(n1: string)

    constructor(n1?: string) {
        this.name = n1;
    }

}

class Ward {
    name: string;
    capacity: number;
    manager: Physician;

    constructor()
    constructor(name: string)
    constructor(name?: string) {
        this.name = name;
    }
}

class Occupation{
    readonly employee: AEmployee;
    readonly ward: Ward;
    readonly wokringHours: number;

    constructor(employee: AEmployee, ward: Ward, workingHours: number) {
        // if(employee === undefined || ward === undefined || workingHours === undefined){
        //     throw new Error("invalid data");
        // }

        this.employee = employee;
        this.ward = ward;
        this.wokringHours = workingHours;
    }
}

// -- ------------------------- --
// -- Program --
let p: Physician = new Physician("Franz","Kammer");

p.employeeeid = 1;
p.svnr = 12345678;
p.jobSpecification = EJobSpecification.DIAGNOSTICIAN;

console.log(p);
console.log(p.firstName + " " + p.lastName);
console.log(`${p.firstName} ${p.lastName}`);
console.log(p.fullName());

let c: Caretaker = new Caretaker("Briti", "Chef");
c.employeeeid = 2;
c.svnr = 23456789;

let c2: Caretaker = new Caretaker("Brabos", "Brutum");
c2.employeeeid = 3;
c2.svnr = 13456789;
c2.manager = c;

console.log(c2);

// -- Facility
let lkhKrems: Facility = new Facility("LKH Krems");
lkhKrems.phoneNr = "+43 272 / 37723";

lkhKrems.wards.push(new Ward("7a"), new Ward("7b"));
lkhKrems.wards[0].capacity = 40;
lkhKrems.wards[0].manager = p;

console.log(lkhKrems);

// -- Occupation
let o:Occupation = new Occupation(p, lkhKrems.wards[0],8);
console.log(o);