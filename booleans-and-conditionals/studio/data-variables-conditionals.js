// Initialize Variables below

const date = "Monday 2019-03-18"
const time = "10:05:34 AM"
const astronautCount = 7
const astronautStatus = "ready"
const averageAstronautMassKg = 80.7
const crewMassKg = astronautCount * averageAstronautMassKg
const fuelMassKg = 760000
const shuttleMassKg = 74842.31
const totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
const maximumMassLimit = 850000
const fuelTempCelsius = -225
const minimumFuelTemp = -300
const maximiumFuelTemp = -150
const fuelLevel = "100%"
const weatherStatus = "clear"
let preparedForLiftOff = true

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7) {
    console.log("Astronaut count good");
} else {
    preparedForLiftOff = false
    console.log("TOO MANY ASTRONAUTS!");
}

// add logic below to verify all astronauts are ready

if (astronautStatus === "ready") {
    console.log("Astronauts Ready");
} else {
    preparedForLiftOff = false
    console.log("ASTRONAUTS NOT READY!");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg <= maximumMassLimit){
    console.log("Mass good");
} else {
    preparedForLiftOff = false
    console.log("LIGHTEN THE LOAD!");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maximiumFuelTemp) {
    console.log("Fuel good");
} else if (fuelTempCelsius < minimumFuelTemp) {
    preparedForLiftOff = false
    console.log("FUEL TOO COLD");
} else {
    preparedForLiftOff = false
    console.log ("FUEL TOO HOT");
}

// add logic below to verify the fuel level is at 100%

if (fuelLevel === "100%") {
    console.log("Fuel level 100%");
} else {
    preparedForLiftOff = false
    console.log("Fuel below 100%");
}

// add logic below to verify the weather status is clear

if (weatherStatus === "clear") {
    console.log("Weather clear");
} else {
    preparedForLiftOff = false
    console.log("Weather not clear");
}
console.log(preparedForLiftOff)

// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff === true) {
console.log("Systems are green. Intializing launch!");
console.log("Date:" , date);
console.log("Time:" , time);
console.log("Astronaut Count:" , astronautCount);
console.log("Crew Mass" , crewMassKg , "kg");
console.log("Fuel Mass:" , fuelMassKg , "kg");
console.log("Shuttle Mass:" , shuttleMassKg , "kg");
console.log("Total Mass:" , totalMassKg , "kg");
console.log("Fuel Temperature:" , fuelTempCelsius , "ºC");
console.log("Weather Status:" , weatherStatus);
console.log("Astronauts return home safe!");
} else {
    console.log("FLIGHT ABORTED");
}