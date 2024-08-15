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
    let planet = data[randomIndex];

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

    return planet;
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


    const pilotInput = document.getElementById("pilotName");
    const copilotInput = document.getElementsByName("copilotName")[0];
    const fuelInput = document.getElementsByName("fuelLevel")[0];
    const cargoInput = document.getElementsByName("cargoMass")[0];


    //NOTE: this was coming back correctly. This is most likely how I am suppose to call the function and pass in the inputs as arguments. Then I take those validated returns to write my if statements for formSubmission <---maybe?



    const validPilotName = validateInput(pilot);
    const validCopilotName = validateInput(copilot);
    const validFuelInput = validateInput(fuelLevel);
    const validCargoInput = validateInput(cargoLevel);
   


    if (pilotInput.value.trim() === "" || copilotInput.value.trim() === "" || fuelInput.value.trim() === "" || cargoInput.value.trim() === "") {
        window.alert("All field are required!");            
    }


    if (validPilotName === "Not a Number" && validCopilotName === "Not a Number" && validFuelInput === "Is a Number" && validCargoInput === "Is a Number"){
        if (Number(fuelInput.value) >= 10000 && Number(fuelInput.value) <= 10000 ){
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "green";
        }
    }


        if (validPilotName === "Not a Number" ){
            pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
        } else {
            alert("Pilot name must contain letters only")
            pilotStatus.innerHTML = "Awaiting a Valid Pilot Name";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red"; 
        }


        if (validCopilotName === "Not a Number" ){
            copilotStatus.innerHTML = `Co-pilot ${copilotInput.value} is ready for launch`;
        } else {
            alert("Co-pilot name must contain letters only")
            copilotStatus.innerHTML = "Awaiting a Valid Co-pilot Name";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red"; 
        }


        if (validFuelInput === "Empty" || validFuelInput === "Not a Number"){
            alert("Fuel level must be a number of 10,000 or greater to launch");
            fuelStatus.innerHTML = "Awaiting a Proper Fuel Level to Launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
        } else {
            if (Number(fuelInput.value) < 10000) {
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "red";
                fuelStatus.innerHTML = "Fuel level too low for launch";
            } else if (Number(fuelInput.value) >= 10000) {
                fuelStatus.innerHTML ="Fuel level high enough for launch";
            
            }
        }


        if (validCargoInput === "Empty" || validCargoInput === "Not a Number"){
            alert("Cargo mass must be a number of 10,000 or less to launch");
            cargoStatus.innerHTML = "Awaiting a Proper Cargo Mass Level to Launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
        } else {
            if (Number(cargoInput.value) > 10000) {
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "red";
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            } else if (Number(fuelInput.value) <= 10000) {
                cargoStatus.innerHTML ="Cargo mass low enough for launch";
            }
        }
        
        faultyItemsList.style.visibility = "visible";

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