console.log("<------------------------- Discriminated Unions ------------------------->");

type Vehicle = {
    type: 'motorbike' | 'car';
    make: string;
    model: string;
    fuel: 'petrol' | 'diesel',
    doors?: number;
    bootSize?: number;
}

const myCar: Vehicle = {
    make: 'vw',
    model: 'golf',
    fuel: 'diesel',
    type: 'car',
    bootSize: 400,
    doors: 5,
};

console.log(myCar);





