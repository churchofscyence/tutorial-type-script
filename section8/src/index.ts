console.log("<------------------------- Arrow Functions ------------------------->");

console.log(" *** Arrow Functions ***");

let fruits = ["Apple", "Orange", "Banana", "Mango", "Grapes", "Watermelon", "Pineapple"];

let isEmpty = (checkArray:string[]) => {
    return checkArray.length > 0;
}

console.log("Is Array is not empty ? " + isEmpty(fruits));

console.log(" *** Some Functions ***");

let thereMango = fruits.some((fruit) => {
    return fruit === "Mango";
});

console.log("Is Mango in the fruits array ? " + thereMango);

console.log(" *** Every Functions ***");

 let oranges =["Apple", "Orange", "Banana", "Mango", "Grapes", "Watermelon", "Pineapple"];

oranges.fill("Orange");

let everyOrange = oranges.every((fruit) => {
    return fruit === "Orange";
});


console.log("After fill all elements with Orange them check all elements for Orange ? " + everyOrange);


console.log(" *** Filter Functions ***");

let lengthGreatNine = fruits.filter((fruit) => {
    return fruit.length > 9;
});

console.log("Each element in the array the length is greater then nine ? " + lengthGreatNine.join());
