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

    //or will it be planetsReturned??? Do I need to call pickPlanet()?
    

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

  
 }



function validateInput(testInput) {

    if (testInput.trim() === ""){
        return "Empty";        
    } 

    if (isNaN(Number(testInput.trim()))){
        return "Not a Number"
    }

    if (!isNaN(Number(testInput.trim()))) {
        return "Is a Number"
    }
}; 




function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    //NOTE: variables for the formSubmission/update LaunchStatus
    const launchStatus = document.getElementById("launchStatus");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const faultyItemsList = document.getElementById("faultyItems");


    //NOTE: this was coming back correctly. This is most likely how I am suppose to call the function and pass in the inputs as arguments. Then I take those validated returns to write my if statements for formSubmission <---maybe?
    const validPilotName = validateInput(pilot);
    const validCopilotName = validateInput(copilot);
    const validFuelInput = validateInput(fuelLevel);
    const validCargoInput = validateInput(cargoLevel);
               
 


        if (validPilotName === "Empty") {
            window.alert("All field are required!");
        } else if (validPilotName === "Not a Number" ){
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        } else {
            pilotStatus.innerHTML = "Awaiting a Valid Pilot Name";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";   
        }


        if (validCopilotName === "Empty"){  
            window.alert("All field are required!"); 
        }else if (validCopilotName === "Not a Number" ){
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        } else {
            copilotStatus.innerHTML = "Awaiting a Valid Co-pilot Name";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red"; 
        }


        if (validFuelInput=== "Empty"){
            window.alert("All field are required!");
        } else if (validFuelInput === "Not a Number"){
            fuelStatus.innerHTML = "Awaiting a Proper Fuel Level to Launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
        } else if (validFuelInput === "Is a Number" ){
            if (Number(fuelLevel) < 10000) {
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "red";
                fuelStatus.innerHTML = "Fuel level too low for launch";
            } else if (Number(fuelLevel) >= 10000) {
                fuelStatus.innerHTML ="Fuel level high enough for launch";
            
            }
        }


          
        if (validCargoInput === "Empty") {
            window.alert("All field are required!");
        } else if (validCargoInput === "Not a Number"){
            cargoStatus.innerHTML = "Awaiting a Proper Cargo Mass Level to Launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
        } else if (validCargoInput === "Is a Number" && validCargoInput !== "Empty"){
            if (Number(cargoLevel) > 10000) {
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "red";
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            } else if (Number(cargoLevel) <= 10000) {
                cargoStatus.innerHTML ="Cargo mass low enough for launch";
            }
        }

        if (validPilotName === "Not a Number" && validCopilotName === "Not a Number" && validFuelInput === "Is a Number" && validCargoInput === "Is a Number"){
            if (Number(fuelLevel) >= 10000 && Number(cargoLevel) <= 10000 ){
                launchStatus.innerHTML = "Shuttle is Ready for Launch";
                launchStatus.style.color = "green";
            }
        }
        faultyItemsList.style.visibility= "visible";

};


async function myFetch() {
    let planetsReturned;
 
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then( function (data){
        // console.log(data);


        // allPlanets = [];
        // allPlanets.push(data);
        // console.log(allPlanets);


    });
    });  
    
     return planetsReturned;

}

 //NOTE: I think that's how we did it in Prep Example 1 with an array--- may need to be adjusted to work with a fetched json file.
function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random()* planets.length);
    // console.log(planets[randomIndex]);
    return planets[randomIndex];
}






module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;