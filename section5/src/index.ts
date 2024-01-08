import { User } from "./user";

console.log("<------------------------- Nesting Objects and Types ------------------------->");

const user = new User("Nesting Objects and Types");
console.log( "Running ..." + user.projectName );

type Caterer = {
    name: string;
    address: string;
    phone: number;
};

type Seat = {
    [index: string]: string | number;
};

type Airplane = {
    model: string;
    flightNumber: string;
    timeOfDeparture: Date;
    timeOfArrival: Date;
    caterer: Caterer;
    seats: Seat[];

};


let airplane: Airplane = {
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



