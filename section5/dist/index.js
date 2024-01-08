"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
console.log("<------------------------- Nesting Objects and Types ------------------------->");
const user = new user_1.User("Nesting Objects and Types");
console.log("Running ..." + user.projectName);
let airplane = {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
        name: "Special Food Ltd",
        address: "484, Some Street, New York",
        phone: 1452125,
    },
    seats: [
        {
            name: "Mark Allen",
            seatNumber: 1,
        }
    ]
};
console.log("First passage Seat Number : " + airplane.seats[0].seatNumber);
console.log("First passage Name: " + airplane.seats[0].name);
