console.log("<------------------------- Abstract Class------------------------->");

abstract class Person {
    name: string;

    protected constructor(name: string) {
        this.name = name;
    }

    display(): void{
        console.log(this.name);
    }

    abstract find(name: string): Person;
}

class Employee extends Person {
    empCode: number;

    constructor(name: string, code: number) {
        super(name); // must call super()
        this.empCode = code;
    }

    find(name:string): Person {
        // execute AJAX request to find an employee from a db
        return new Employee(name, 1);
    }
}

console.log(" *** emp *** ");
let emp: Person = new Employee("James", 100);
emp.display(); //James

console.log(" *** emp2 *** ");
let emp2: Person = emp.find('Steve');
emp2.display();

