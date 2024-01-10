console.log("<------------------------- Array and Object Destructuring ------------------------->");

console.log(" *** 1 Array Destructuring ***");
let [greeting1, pronoun1] = ["Hello", "I" , "am", "Sarah"];

console.log(greeting1);//"Hello"
console.log(pronoun1);//"I"

console.log(" *** 2 Skipping Items in an Array ***");
let [greeting2,,,name2] = ["Hello", "I" , "am", "Sarah"];

console.log(greeting2);//"Hello"
console.log(name2);//"Sarah"

console.log(" *** 3 Skipping Items in an Array ***");
let [greeting3, ...intro3] = ["Hello", "I" , "am", "Sarah"];
console.log(greeting3);//"Hello"
console.log(intro3);//["I", "am", "Sarah"]

console.log(" *** 4 Destructuring Assignment with Functions ***");
function getArray() {
    return ["Hello", "I" , "am", "Sarah"];
}
let [greeting4,pronoun4] = getArray();

console.log(greeting4);//"Hello"
console.log(pronoun4);//"I"

console.log(" *** 5 Using Default Values ***");
let [greeting5 = "hi",name5 = "Sarah"] = ["hello"];

console.log(greeting5);//"Hello"
console.log(name5);//"Sarah"

console.log(" *** 6 Swapping Values using the Destructuring Assignment ***");
let a6 = 3;
let b6 = 6;

[a6,b6] = [b6,a6];

console.log(a6);//6
console.log(b6);//3

console.log(" *** 7 Object Destructuring ***");
let person7 = {name7: "Sarah", country7: "Nigeria", job7: "Developer"};

let name7 = person7.name7;
let country7 = person7.country7;
let job7 = person7.job7;

console.log(name7);//"Sarah"
console.log(country7);//"Nigeria"
console.log(job7);//Developer"

console.log(" *** 8 Basic Object Destructuring ***");
let person8 = {name8: "Sarah", country8: "Nigeria", job8: "Developer"};

let {name8, country8, job8} = person8;

console.log(name8);//"Sarah"
console.log(country8);//"Nigeria"
console.log(job8);//Developer"

console.log(" *** 9 Basic Object Destructuring ***");
let {name9, country9, job9} = {name9: "Sarah", country9: "Nigeria", job9: "Developer"};

console.log(name9);//"Sarah"
console.log(country9);//"Nigeria"
console.log(job9);//Developer"

console.log(" *** 10 Variables declared before being assigned ***");
let person10 = {name10: "Sarah", country10: "Nigeria", job10: "Developer"};
let name10, country10, job10;

({name10, country10, job10} = person10);

console.log(name10);//"Sarah"
console.log(job10);//"Developer"


console.log(" *** 11 Using a new Variable Name ***");
let person11 = {name11: "Sarah", country11: "Nigeria", job11: "Developer"};

let {name11: foo11, job11: bar11} = person11;

console.log(foo11);//"Sarah"
console.log(bar11);//"Developer"

console.log(" *** 12 Using Default Values ***");
let person12 = {name12: "Sarah", country12: "Nigeria", job12: "Developer", friend12 : undefined};

let {name12 = "myName", friend12 = "Annie"} = person12;

console.log(name12);//"Sarah"
console.log(friend12);//"Annie"

console.log(" *** 13 Using Default Values ***");
let person13 = {name13: "Sarah", country13: "Nigeria", job13: "Developer", friend13 : undefined};

let {name13:foo13 = "myName", friend13: bar13 = "Annie"} = person13;

console.log(foo13);//"Sarah"
console.log(bar13);//"Annie"

console.log(" *** 15 Nesting in Object Destructuring ***");
let person15 = {
    name15: "Sarah",
    place15: {
        country15: "Nigeria",
        city15: "Lagos" },
    friends15 : ["Annie", "Becky"]
};

console.log(" *** 16 Rest in Object Destructuring ***");
let person16 = {name16: "Sarah", country16: "Nigeria", job16: "Developer", friends16: ["Annie", "Becky"]};

let {name16, friends16, ...others16} = person16;

console.log(name16);//"Sarah"
console.log(friends16);//["Annie", "Becky"]
console.log(others16);// {country: "Nigeria", job: "Developer"}

console.log(" *** 17 Object Destructuring and Functions ***");
function person({name: x = "Sarah", job: y = "Developer"} = {}) {
    console.log(x);
}

person();//"Sarah"

















