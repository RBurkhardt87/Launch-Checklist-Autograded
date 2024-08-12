// Write your helper functions here!


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
    const form = document.getElementsByName("testForm");

    //TODO: set up object variables for the list items
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const launchStatus = document.getElementById("launchStatus");

    //TODO: set up form and buttons
    const launchForm = document.getElementById("launchForm");
    const formSubmit = document.getElementById("formSubmit");
    const faultyItems = document.getElementById("FaultyItems");
    let testInput = [pilotName, copilotName, fuelLevel, cargoMass];


   

 function validateInput(testInput) {


    //TODO: setup validation for inputs
    if (pilotName.value === ""){
        window.alert("You must enter the Pilot's name.");
        return "Empty";        
    } 
    
    if (copilotName.value === "") {
        window.alert("You must enter the copilot's name.");
        return "Empty";
    } 
    
    if (isNaN(fuelLevel.value)) {
        window.alert("You must enter a valid number for the fuel level.");
        return "Not a Number";
    } else if (!isNaN(fuelLevel.value)){
        return "Is a Number";
    }

    if (isNaN(cargoMass.value)) {
        window.alert("You must enter a valid number for the cargo mass.")
        return "Not a Number";
    } else if (!isNaN(cargoMass.value)) {
        return "Is a Number";
    } else {
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    }
    

 };


 


 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    console.log("is anything happening");
    validateInput(testInput);

    // TODO: update shuttle requirements
    faultyItems.style.visibility = "visible";

    //pilotStatus    
    pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;

    //copilotStatus
    copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch` ;

    //fuelStatus --- need to make if statement for fuel levels    
    if (fuelLevel < 10000) {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        fuelStatus.innerHTML = "Fuel level too low for launch";
    }

    if (fuelLevel > 10000) {
        fuelStatus.innerHTML ="Fuel level high enough for launch";
    }


    //cargoStatus -- need to make if statement for cargo mass    
    if (cargoMass > 10000) {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    } 

    if (cargoMass < 10000) {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    if (cargoMass < 10000 && fuelLevel > 10000){
        launchStatus.innerHTML = "Shuttle is Ready for Launch"
        launchStatus.style.color = "green";
    }
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



 