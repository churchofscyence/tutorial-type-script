# sandbox-type-script

<img src="https://github.com/churchofscyence/resources/blob/main/banners/banner-thomas-edison.png" alt="Thomas Edison">

# Topics
## Section 1: Setup

### Introduction
 
  TypeScript is a cross-platform language developed by Microsoft that adds static type to JavaScript. TypeScript my be used on client-side or server-side which is compiled into JavaScript. The most popular libraries include jQuery, MongoDB, Node.js and DS.js.

  **jQuery** is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animations, and Ajax. 

  **MongoDB** is a JavaScript library designed as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. 

  **Node.js** is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.

  **D3.js** is a JavaScript library for producing dynamic, interactive data visualizations in web browsers. It makes use of Scalable Vector Graphics, HTML5, and Cascading Style Sheets standards.  

### TypeScript in the Node.js world
TypeScript is well-established in the Node.js world and used by many companies, open-source projects, tools and frameworks. Some of the notable examples of open-source projects using TypeScript are:

* NestJS - robust and fully-featured framework that makes creating scalable and well-architected systems easy and pleasant
* TypeORM - great ORM influenced by other well-known tools from other languages like Hibernate, Doctrine or Entity Framework
* Prisma - next-generation ORM featuring a declarative data model, generated migrations and fully type-safe database queries
* RxJS - widely used library for reactive programming
* AdonisJS - A fully featured web framework with Node.js
* FoalTs - The Elegant Nodejs Framework

### Setup TypeScript with Node.js

Creating directory and change directories of the work space. From the Command Line Terminal run the following commands.
```
% mkdir section1
% cd section1 
```

Setup git to save your changes to your files. 
```
% git init 
```

Create the package.json to manage your changes libaries. The y option will automatically accept all defaults.
```
% npm init -y
```

Create source directory.
```
% mkdir src
```

Install TypeScript.
```
% npm install -D typescript 
```

Create the TypeScript configuration file
```
% npx tsc --init
```

Change following configuration in the tsconfig file
```
"outDir": "./dist", 
"rootDir": "./src", 
```

Change following configuration in the package.json file
```
  "scripts": {
    "build": "tsc",
    "start": "node ./dist/index.ts"
  },
```

Build the project
```
% npm run build
```

Run the project
```
% npm run start
```

### Jest

Change the package.json file
```
  "devDependencies": {
    "@types/jest": "^29.5.11",
    "jest": "^29.7.0",
    "ts-jest": "^29.1.1",
  },
```

Add configuration file jest.config.js

```
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
  };
```

Change the tsconfig.json
```
  "exclude": [
    "node_modules", // would be the default
    "src/spec/*"
  ]
```

Add file in the following directory src/spec/index.spec.ts
```
describe( 'Index', function (){

    beforeEach(function() {

    });

    it('should be true', function(){
        expect(true).toBe(true);
    });
});
```

## Section 2: Basic Types

### Tuple
A tuple is a typed array with a pre-defined length and types for each index.       

Tuples are great because they allow each element in the array to be a known type of value.    

``
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
``
Type 'number' is not assignable to type 'string'.
Type 'string' is not assignable to type 'number'.

### Enum
A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.

```
enum Color {
Red,
Green,
Blue,
}
let c: Color = Color.Green;

```

## Section 3 : Typeof, Instanceof, and Type Guards

In Typescript, we have three ways to work with it using:

* **typeof**: the keyword helps to check values types, like boolean, string, number, etc.

* **instanceof**: the keyword to compare the object instance with a class constructor.

* **type guards**: The powerful way to check types using typescript feature language.

## Section 4 : Decorator

### Decorators
A decorators in TypeScript are a special kind of feature that allows you to enhance or modify your code in a flexible way. 
They provide a way to attach additional functionality to classes, methods, properties, or parameters.

### Class Decorators

Class decorators are a type of decorator that can be applied to classes.
They -

* allow you to modify or extend the behavior of a class or its constructor, and can even replace the entire class with a new one.

* receive the class constructor as their target and can be used to add properties, methods, or modify metadata.

* are executed at runtime when the class is defined. By having access to the class constructor, they enable behavior manipulation 
before any instances are created.

### Method Decorators
Method decorators are a type of decorator that can be applied to class methods (both instance methods and static methods), allowing
you to modify or extend the behavior of a specific method. They -

* have the ability to access and modify method arguments, return values, or even replace the method entirely.

* are functions that receive three parameters: the target object (class prototype), the method name, and the property descriptor 
(an object that describes the attributes and behavior of a property).

* are executed when the class is defined, allowing for modification of method behavior before any instances are created.

### Property Decorators
Property decorators are a type of decorator that can be applied to class properties (both instance and static). They —

* provide a way to customize or enhance the behavior of specific properties within a class before any instances are instantiated. 
For example, by using the static method Object.defineProperty you can customize various aspects of a property, such as its value,
writability, enumerability, and configurability.

* are functions that receive two parameters: the target object (the prototype of the class for an instance member OR the constructor 
function of the class for a static member) and the property name.

* are executed when the class is defined, not when instances of the class are created.

## Section 5 : Nesting Objects and Types

Objects are what you are dealing with working as a JavaScript developer, and needless to say, that holds true for TypeScript as well.
TypeScript provides you with multiple ways to define type definitions for object properties. We'll look at a couple of them throughout this post, 
starting with simple examples and moving on to some advanced type definitions.

Object properties can be assigned type definitions using the type keyword in TypeScript. This is the easiest and preferred method to assign type 
definitions when dealing with simple objects.

## Section 6 : Literal Types

Literals are exact values that are JavaScript primitives.

They are not very useful on their own but can be combined in a type union to create a powerful (and useful) abstraction e.g.:

```
type CardinalDirection =
    | "North"
    | "East"
    | "South"
    | "West";
```

## Section 7 : Aliases and Interfaces

TypeScript allows types to be defined separately from the variables that use them.

Aliases and Interfaces allows types to be easily shared between different variables/objects.

### Type Aliases
Type Aliases allow defining types with a custom name (an Alias).

Type Aliases can be used for primitives like string or more complex types such as objects and arrays

## Section 8 : Arrow Functions

Using fat arrow =>, we dropped the need to use the function keyword. Parameters are passed in the 
parenthesis (), and the function expression is enclosed within the curly brackets { }.

```
let sum = (x: number, y: number): number => {
    return x + y;
}

sum(10, 20); //returns 30
```

In the above example, sum is an arrow function. (x:number, y:number) denotes the parameter types,
:number specifies the return type. The fat arrow => separates the function parameters and the 
function body. The right side of => can contain one or more code statements.

## Section 9 : Spread Operator
* Function Overload
* Destructuring
* Array Assignment
* Object Spread


## Section 10 : Array and Object Destructuring
* 1 Array Destructuring
* 2 Skipping Items in an Array
* 3 Skipping Items in an Array
* 4 Destructuring Assignment with Functions
* 5 Using Default Values
* 6 Swapping Values using the Destructuring Assignment
* 7 Object Destructuring
* 8 Basic Object Destructuring
* 9 Basic Object Destructuring
* 10 Variables declared before being assigned
* 11 Using a new Variable Name
* 12 Using Default Values
* 13 Using Default Values
* 15 Nesting in Object Destructuring
* 16 Rest in Object Destructuring
* 17 Object Destructuring and Functions

## Section 11 : Classes and Interfaces

Interface: Interface is the virtual structure that is used for type-checking. In TypeScript we 
use interface keyword to create the new interface with identity. It create the structure for the
same datatype. Interface is the structure which define the properties and method for object with 
name and type.

## Section 12 : Abstract Class
Define an abstract class in Typescript using the abstract keyword. Abstract classes are mainly for 
inheritance where other classes may derive from them. We cannot create an instance of an abstract 
class.

An abstract class typically includes one or more abstract methods or property declarations. The class 
which extends the abstract class must define all the abstract methods.

## Section 13 : Singleton
Singleton is a creational design pattern, which ensures that only one object of its kind exists and 
provides a single point of access to it for any other code.

Singleton has almost the same pros and cons as global variables. Although they’re super-handy, they 
break the modularity of your code.

You can’t just use a class that depends on a Singleton in some other context, without carrying over 
the Singleton to the other context. Most of the time, this limitation comes up during the creation 
of unit tests.

## Section 14 : Modules

JavaScript has a long history of different ways to handle modularizing code. Having been around since 2012,
TypeScript has implemented support for a lot of these formats, but over time the community and the JavaScript 
specification has converged on a format called ES Modules (or ES6 modules). You might know it as the 
import/export syntax.

ES Modules was added to the JavaScript spec in 2015, and by 2020 had broad support in most web browsers and 
JavaScript runtimes.

For focus, the handbook will cover both ES Modules and its popular pre-cursor CommonJS module.exports = syntax, 
and you can find information about the other module patterns in the reference section under Modules.

## Section 15 : Intersection Types

An intersection type creates a new type by combining multiple existing types. The new type has all features of
the existing types.

To combine types, you use the **&** operator as follows:

```
type typeAB = typeA & typeB;
```

The typeAB will have all properties from both typeA and typeB.

## Section 16 : Discriminated Unions

A discriminated union is a TypeScript feature that enables the creation of a type that can represent several different 
possibilities or variants. By attaching discriminators to each variant, TypeScript's type system can help ensure that we 
handle all possible cases gracefully. Discriminators can be string literals, numeric literals, or even symbols.

### Why are Discriminated Unions important?
Using discriminated unions in your TypeScript code brings numerous benefits:

1. Improved Type Safety: With discriminated unions, TypeScript can ensure that all possible variants of a 
 type are accounted for, eliminating the risk of undefined or unexpected behavior at runtime.

2. Enhanced Autocompletion: IDEs and code editors can leverage the discriminators to provide accurate autocompletion 
suggestions based on the specific variant being handled.

3. Better Code Maintainability: Discriminated unions make code easier to read and understand by explicitly indicating 
the possible cases for a given type.

4. Comprehensive Error Handling: TypeScript's static type checking can help us catch missing or mismatched discriminators, 
reducing the likelihood of introducing bugs.

## Section 17 :  Type Casting
* as
* <>
* Force Casting with ()

## Section 18 :  Index Properties
In this article, we are going to learn about the Indexed Access Types in TypeScript, TypeScript is a powerful language that allows developers to write code with fewer errors and more safety than JavaScript. One feature that makes TypeScript stand out is the Indexed Access Types. Indexed Access Types provide a way to access the properties of an object using an index signature. In TypeScript, an index signature is a way to define the shape of an object with keys that are not known at compile time.

Syntax:

type ObjectKeyType = keyof ObjectType;
type PropertyType = ObjectType[ObjectKeyType];
Where –

ObjectType is the object that we want to access the properties of.
ObjectKeyType is the type of key that we want to use to access the property.
PropertyType is the type of property that we want to access.

## Section 19 :  Function Overloading
TypeScript provides the concept of function overloading. You can have multiple 
functions with the same name but different parameter types and return type. However,
the number of parameters should be the same.

## Section 20 :  Optional Chaining
The optional chaining (?.) operator accesses an object's property or calls a function. 
If the object accessed or function called using this operator is undefined or null, the 
expression short circuits and evaluates to undefined instead of throwing an error.

# Errors

## Section 3: error TS2564 - Has no initializer

src/typeof.ts:4:12 - error TS2564: Property 'amount' has no initializer and is not definitely assigned in the constructor.

4     public amount: number;

#### Answer 
[Angular error TS2564: Property 'users' has no initializer and is not definitely assigned in the constructor - stackoverflow.com](https://stackoverflow.com/questions/66052132/angular-error-ts2564-property-users-has-no-initializer-and-is-not-definitely)

users!: Object;

# References
* [TypeScript Tutorial - Net Ninja - YouTube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI)
* [Shell Scripting for Beginners – How to Write Bash Scripts in Linux - freecodecamp.org](https://dev.to/danywalls/how-to-check-types-in-typescript-o5n)
* [TypeScript - wikipedia.org](https://en.wikipedia.org/wiki/TypeScript)
* [TypeScript - typescriptlang.org](https://www.typescriptlang.org/)
## Section 1 : Setup
* [NodeJs + Typescript Project Setup From Scratch - Before Semicolon - YouTube](https://www.youtube.com/watch?v=Z6kt1N3Lx1c)
## Section 2 Basic Types
* [Basic Types - TypeScript Org](https://www.typescriptlang.org/docs/handbook/basic-types.html)
* [any vs unknown vs never: TypeScript demystified - Andrew Burgess - YouTube](https://www.youtube.com/watch?v=kWmUNChlzVw)
## Section 3 : Typeof, Instanceof, and Type Guards
* [How To Check Types In Typescript - Dany Paredes - Dev.to](https://dev.to/danywalls/how-to-check-types-in-typescript-o5n)
* [TypeScript Type Guards Explained - Software Developer Diaries - YouTube](https://www.youtube.com/watch?v=FEeEItMtDwg)
## Section 4 : Decorator
* [TypeScript Decorators in Brief - refine.dev](https://refine.dev/blog/typescript-decorators/#introduction)
* [TypeScript Decorators: A Comprehensive Guide - Irene Smolchenko - Level Up Coding](https://levelup.gitconnected.com/typescript-decorators-a-comprehensive-guide-3034e0460de9)
## Section 5 : Nesting Objects and Types
* [Assign Types To Nested Objects In TypeScript - Manik - hackernoon.com](https://hackernoon.com/assign-types-to-nested-objects-in-typescript)
* [Using {[key:string]: string} and {[key:string]: any} in TS - Borislav Hadzhiev](https://bobbyhadz.com/blog/typescript-key-string-string)
## Section 6 : Literal Types
* [Literal Types - TypeScript Deep Dive](https://basarat.gitbook.io/typescript/type-system/literal-types)
## Section 7 : Aliases and Interfaces
* [TypeScript Type Aliases and Interfaces - w3schools.com](https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php)
## Section 8 : Arrow Functions
* [TypeScript - Arrow Functions - tutorialsteacher.com](https://www.tutorialsteacher.com/typescript/arrow-function)
## Section 9 : Spread Operator
* [Spread Operator - TypeScript Deep Dive - basarat.gitbook.io](https://basarat.gitbook.io/typescript/future-javascript/spread-operator)
## Section 10 : Array and Object Destructuring
* [How to Use Array and Object Destructuring in JavaScript - Sarah Chima Atuonwu -freecodecamp.org](https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/)
## Section 11 : Classes and Interfaces
* [Difference between interfaces and classes in TypeScript - geeksforgeeks.org](https://www.geeksforgeeks.org/difference-between-interfaces-and-classes-in-typescript/)  
## Section 12 : Abstract Class
* [TypeScript - Abstract Class - tutorialsteacher.com](https://www.tutorialsteacher.com/typescript/abstract-class)
## Section 13 : Singleton
* [Singleton in TypeScript - refactoring.guru](https://refactoring.guru/design-patterns/singleton/typescript/example)
## Section 14 : Modules
* [Modules - typescriptlang.org](https://www.typescriptlang.org/docs/handbook/2/modules.html)
## Section 15 : Intersection Types
* [TypeScript Intersection Types - typescripttutorial.net](https://www.typescripttutorial.net/typescript-tutorial/typescript-intersection-types/)
## Section 16 : Discriminated Unions
* [What are TypeScript Discriminated Unions? - Alessio Michelini - dev.to](https://dev.to/darkmavis1980/what-are-typescript-discriminated-unions-5hbb) 
## Section 17 :  Type Casting
* [TypeScript Casting - w3schools.com](https://www.w3schools.com/typescript/typescript_casting.php)
## Section 18 :  Index Properties
* [TypeScript Indexed Access Types - geeksforgeeks.org](https://www.geeksforgeeks.org/typescript-indexed-access-types/)
## Section 19 :  Function Overloading
* [Function Overloading - tutorialsteacher.com](https://www.tutorialsteacher.com/typescript/function-overloading)
## Section 20 :  Optional Chaining
* [Optional chaining (?.) - developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)







