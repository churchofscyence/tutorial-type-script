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
