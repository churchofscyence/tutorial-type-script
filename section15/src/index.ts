console.log("<------------------------- Intersection Types ------------------------->");

// Suppose that you have three interfaces: Identity, and Contact.
interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

type Employee = Identity & Contact;

let employee: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};

console.log(employee);
