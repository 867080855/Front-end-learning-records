class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person{
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
    return "Hello, " + person.firstName + person.lastName;
}

let user = new Student("Jane", "M.", "User");
// Argument of type 'number[]' is not assignable to parameter of type 'string'.
// let user = [0, 1, 2];

document.body.innerHTML = greeter(user);
