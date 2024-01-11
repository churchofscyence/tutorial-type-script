console.log("<------------------------- Optional Chaining (?.) ------------------------->");

const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
    },
};

// @ts-ignore
const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

// @ts-ignore
console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined


