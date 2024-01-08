console.log("<------------------------- Literal Types ------------------------->");

type CardinalDirection =
    | "North"
    | "East"
    | "South"
    | "West";

function move(miles: number, direction: CardinalDirection) {
    console.log(    "Miles: " + miles + " Directions: " + direction );
}
move(10,"North");
