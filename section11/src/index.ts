console.log("<------------------------- Classes and Interfaces ------------------------->");

// Interface for Object with extends function
interface Car {
    _name: string
}

interface Ford extends Car {
    _count: number
}

let newFord: Ford = {
    _name: "Interface for Object",
    _count: 2
};

console.log(newFord);
