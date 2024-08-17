// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  

    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
                  <ol>
                      <li>Name: ${name} </li>
                      <li>Diameter: ${diameter} </li>
                      <li>Star: ${star}</li>
                      <li>Distance from Earth: ${distance} </li>
                      <li>Number of Moons: ${moons} </li>
                  </ol>
                  <img src="${imageUrl}">`
};



function validateInput(testInput) {

    if (testInput === ""){
        return "Empty";        
    } 

    if (isNaN(Number(testInput))){
        return "Not a Number"
    }

    if (!isNaN(Number(testInput))) {
        return "Is a Number"
    }
}; 




function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {


    const launchStatus = document.getElementById("launchStatus");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const faultyItemsList = document.getElementById("faultyItems");


    const validPilotName = validateInput(pilot);
    const validCopilotName = validateInput(copilot);
    const validFuelInput = validateInput(fuelLevel);
    const validCargoInput = validateInput(cargoLevel);               
    

    if (validPilotName === "Empty" || validCopilotName === "Empty" || validFuelInput=== "Empty" || validCargoInput === "Empty" ) {
        alert("All field are required!");
        launchStatus.innerHTML="Awaiting Information Before Launch";
    } else if (validPilotName === "Is a Number" || validCopilotName === "Is a Number" || validFuelInput=== "Not a Number" || validCargoInput === "Not a Number" ){
        alert("Pilot and copilot must be valid names. Fuel level and cargo mass must be valid numbers");
    } else {  
        faultyItemsList.style.visibility= "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }

    if (validFuelInput !== "Empty" && Number(fuelLevel) < 10000) {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        fuelStatus.innerHTML = "Fuel level too low for launch";
    } else if (Number(fuelLevel) >= 10000) {
        fuelStatus.innerHTML ="Fuel level high enough for launch";        
    }

    if (validCargoInput !== "Empty" && Number(cargoLevel) > 10000) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    } else if (Number(cargoLevel) <= 10000) {
        cargoStatus.innerHTML ="Cargo mass low enough for launch";
    }  

    if(Number(fuelLevel) >= 10000 && Number(cargoLevel) <= 10000 ){
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "green";
        }
    };
    

async function myFetch() {
    let planetsReturned;
    let data;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response){
        data = response.json()
    })

    return data;    
}
   
    
function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random()* planets.length);   
    
    return planets[randomIndex];
}








module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;