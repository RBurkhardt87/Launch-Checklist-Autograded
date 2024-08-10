// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }


     //TODO: Set up object variables for input
    const pilotName = document.getElementById("pilotName");
    const copilotName = document.getElementsByName("copilotName");
    const fuelLevel = document.getElementsByName("fuelLevel");
    const cargoMass = document.getElementsByName("cargoMass");
    const form = document.querySelector("form");

    //TODO: set up object variables for the list items
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");


 function validateInput(testInput) {
    



    //TODO: setup validation for inputs
    if (pilotName === ""){
        window.alert("You must enter the Pilot's name.");
        return "Empty";
    } 
    
    if (copilotName === "") {
        window.alert("You must enter the copilot's name.");
        return "Empty";
    } 
    
    if (isNaN(fuelLevel)) {
        window.alert("You must enter a valid number for the fuel level.");
        return "Not a Number";
    } else if (!isNaN(fuelLevel)){
        return "Is a Number";
    }

    if (isNaN(cargoMass)) {
        window.alert("You must enter a valid number for the cargo mass.")
        return "Not a Number";
    } else if (!isNaN(cargoMass)) {
        return "Is a Number";
    }

 };


 //------------------------------------------------------------------------------------------------------------------------------------------------
 //NOTE: pilot ".getElementById("pilotName")" and copilot ".getElementsByName("copilotName")" values = "strings"     NOTE: will return as "" (empty) if no input
 //NOTE: fuel level ")" and cargo mass ".getElementsByName("cargoMass")" values = "numbers"    NOTE: will return NaN or is a number 

 //NOTE: If you want to check if something is NaN, you cannot use == or ===. Instead, JavaScript has a built-in method called isNaN(value) that returns true if value is NaN and false if value is not NaN.

 //NOTE: the validateInput() will complete the formSubmission() 

 //NOTE: formSubmission() will take in a document parameter and strings representing the pilot, co-pilot, fuel level and cargo mass. 

 //NOTE: using the values in those strings and the document parameter for your HTML document, update the shuttle requirements as described below:

        //TODO: the <div> "faultyItems" should update if something is NOT ready for launch

        //TODO: Use template literals, update the <li> elements "pilotStatus" and "copilotStatus" to include the names of pilot and copilot. 

        //TODO: If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey.

        //TODO: The text of the h2 element, launchStatus, should also change to “Shuttle not ready for launch” and the color should change to red.

        //TODO: If the user submits a cargo mass that is too large (more than 10,000 kilograms), change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off.

        //TODO: The text of launchStatus should also change to “Shuttle not ready for launch” and the color should change to red.

        //TODO: If the shuttle is ready to launch, change the text of launchStatus to green and display “Shuttle is ready for launch”. 

 //NOTE: make sure to call formSubmission() at the appropriate time in your script.js file

 //-----------------------------------------------------------------------------------------------------------------------------------------------
 
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    validateInput();

    // TODO: update shuttle requirements

    //pilotStatus or maybe just make faultyItem visible on the cargo status line since the form will be completed
    faultyItems.pilotStatus.style.visibility = "visible";
    pilotStatus.innerHTML = pilotName;

    //copilotStatus
    copilotStatus.innerHTML = copilotName;

    //fuelStatus --- need to make if statement for fuel levels
    fuelStatus.innerHTML = fuelLevel;


    //cargoStatus -- need to make if statement for cargo mass
    cargoStatus.innerHTML = cargoMass;
 };




 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;