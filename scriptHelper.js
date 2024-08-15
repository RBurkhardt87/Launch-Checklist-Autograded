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


//Validate for if number is pilot or copilot is number. Same for fuel cargo but for string
    //TODO: pilotStatus and copilotStatus
    if (validPilotName !== "Empty" && validPilotName === "Not a Number"){
        pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
    }

    if (validCopilotName !== "Empty" && validCopilotName === "Not a Number"){
        copilotStatus.innerHTML = `Co-pilot ${copilotInput.value} is ready for launch` ;
    }
        


    //TODO:  If both cargo and fuel level is valid for launch
    if (validFuelInput !== "Empty" && validFuelInput === "Is a Number" && validCargoInput !=="Empty" && validCargoInput === "Is a Number" ){
        if (Number(cargoInput.value) <= 10000 && Number(fuelInput.value) >= 10000){
        launchStatus.innerHTML = "";
        launchStatus.style.color = "green";
        }
    };



    //TODO: fuelStatus --- need to make if statement for fuel levels
    if (validFuelInput !== "Empty" && validFuelInput === "Is a Number"){
        if (Number(fuelInput.value) < 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            fuelStatus.innerHTML = "Fuel level too low for launch";

        } else if (Number(fuelInput.value) >= 10000) {
            fuelStatus.innerHTML ="Fuel level high enough for launch";
        }
    }



    //TODO: cargoStatus -- need to make if statement for cargo mass    
    if (validCargoInput !=="Empty" && validCargoInput === "Is a Number"){
        if (Number(cargoInput.value) > 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
    
        } else if (Number(cargoInput.value) <= 10000) {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
    }

    //TODO: make the faultyItem div box appear with status update
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
    console.log(planets[randomIndex]);
    return planets[randomIndex];
}






module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;