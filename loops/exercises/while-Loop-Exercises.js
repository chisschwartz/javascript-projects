//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.





/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */


const input = require('readline-sync');
let fuel = 0, astros = 0, alt = 0;

while (fuel <= 5000 || fuel > 30000 || isNaN(fuel)) {
  fuel = input.question("Enter the starting fuel level: ");
}
//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  while (astros <= 7 && astros >= 1 || isNaN(astros)) {
    astros = input.question("Enter astronauts aboard: ");
  }
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (fuel - 100 * astros >= 0) {
  alt += 50;
  fuel -= 100 * astros;
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

let output = `The shuttle gained an altitude of ${alt} km.`;

if (alt >= 2000) {
output += " Orbit achieved!";
} else {
  output += "Failed to reach orbit"
}
