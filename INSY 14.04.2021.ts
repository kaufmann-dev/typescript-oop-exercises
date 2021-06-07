// Bsp. Infrastruktur Krankenhaus

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
}

class Physician extends AEmployee{

}

// -- Program --
let p: Physician = new Physician("Franz","Kammer");

console.log(p);
console.log(p.firstName + " " + p.lastName);