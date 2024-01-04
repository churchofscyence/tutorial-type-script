import { User } from "./user";

console.log("<------------------------- Decorator ------------------------->");

const user = new User("Decorator","exampleUser", "example@exmaple.com");
user.addressLine1 = "1, New Avenue";
user.addressLine2 = "Bahcelievler, Istanbul";

console.log( "Running ..." + user.projectName );

console.log( "Address : \n" + user.address() );


