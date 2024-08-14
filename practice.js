// Write your helper functions here!



   //TODO: Set up object variables for input ----> Keep getting an error message when I add .value to the end of these.
   const pilotInput = document.getElementById("pilotName");
   const copilotInput = document.getElementsByName("copilotName")[0];
   const fuelInput = document.getElementsByName("fuelLevel")[0];
   const cargoInput = document.getElementsByName("cargoMass")[0];

   //TODO: get access to the form NOTE: There isn't an id in the <form> 
   const form = document.querySelector('form');
   const launchForm = document.getElementById("launchForm");

   //TODO: set up object variables for the list items of LaunchStatus
   const pilotStatus = document.getElementById("pilotStatus");
   const copilotStatus = document.getElementById("copilotStatus");
   const fuelStatus = document.getElementById("fuelStatus");
   const cargoStatus = document.getElementById("cargoStatus");

   //TODO: setup the <h2> of the LaunchStatusCheck 
   const launchStatus = document.getElementById("launchStatus");

   //TODO: set up submit button   
   const formSubmitButton = document.getElementById("formSubmit");

   //TODO: The div box holding the LaunchStatusCheck items needs to be made visible once form in submitted.
   const faultyItemsList = document.getElementById("FaultyItems");



 
   //NOTE: I commented out the script.js file until I have made sure all parts of task 2 are working. Then I can figure out how to call the functions appropriately within the script.js
   window.addEventListener("load", function() {

    const form = document.querySelector('form');
    form.addEventListener("submit", function(event) {

        const pilotInput = document.getElementById("pilotName");
        const copilotInput = document.getElementsByName("copilotName")[0];
        const fuelInput = document.getElementsByName("fuelLevel")[0];
        const cargoInput = document.getElementsByName("cargoMass")[0];



        //NOTE: Alert for all fields to be entered is working. Stops form from submitting until they are entered in.            
        if (pilotInput.value.trim() === "" || copilotInput.value.trim() === "" || fuelInput.value.trim() === "" || cargoInput.value.trim() === "") {
            alert("All field are required!");
            event.preventDefault();      
        }



        //NOTE: this response is returning the correct input values, and so, the objects are setup correctly. Had to access values here since I could add .value to the ends of the objects when declaring/initializing them.
        let response = `
            pilot name: ${pilotInput.value}
            copilot name: ${copilotInput.value}
            fuel level: ${fuelInput.value}
            cargo mass: ${cargoInput.value}
            `
            console.log(response);
        


        //NOTE: Checking to see if validation is working correctly. All are coming back with the correct return response. At first I added .value to the variables, but i wasn't getting the right response. Maybe because I already have the function looking at the .value in the if statement.
        let validPilotName = validateInput(pilotInput);
        let validCopilotName = validateInput(copilotInput);
        let validFuelInput = validateInput(fuelInput);
        let validCargoInput = validateInput(cargoInput);
        event.preventDefault();
        testInput = [validPilotName, validCopilotName, validFuelInput, validCargoInput];
        console.log(testInput);
        


        formSubmission(launchStatus, faultyItemsList, pilotStatus, copilotStatus, fuelStatus, cargoStatus);
        event.preventDefault();
    
    });

});


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
 


 //NOTE: I believe that validation is correct since it is returning what I would expect when being called with inputs as arguments (up above). However, when I try to use it inside formSubmission--- it says it can't read the .value
 function validateInput(testInput) {

    if (testInput.value === ""){
        return "Empty";        
    } 

    if (isNaN(Number(testInput.value))){
        return "Not a Number"
    }

    if (!isNaN(Number(testInput.value))) {
        return "Is a Number"
    }
}; 



 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    //NOTE: this was coming back correctly. Don't get rid of these. This is most likely how I am suppose to call the function and pass in the inputs as arguments. Then I take those validated returns to write my if statements for formSubmission <---maybe?
    let validPilotName = validateInput(pilotInput);
    let validCopilotName = validateInput(copilotInput);
    let validFuelInput = validateInput(fuelInput);
    let validCargoInput = validateInput(cargoInput);

    //NOTE: Ok, so maybe I need to replace the specific variables in the if statements with the parameter variables. Then, when I call the function I will past in the actual variables that represent the valid inputs as the arguments. -----> NOT SURE WHAT "document" IS SUPPOSED TO REPRESENT THO. 

   
    faultyItemsList.style.visibility = "visible";

    //pilotStatus and copilotStatus
    if (validPilotName !== "Empty" && validPilotName === "Not a Number"){
        pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
    }

    if (validCopilotName !== "Empty" && validCopilotName === "Not a Number"){
        copilotStatus.innerHTML = `Co-pilot ${copilotInput.value} is ready for launch` ;
    }
     
    
    //fuelStatus --- need to make if statement for fuel levels
    if (validFuelInput !== "Empty" && validFuelInput === "Is a Number"){
        if (Number(fuelInput.value) < 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            fuelStatus.innerHTML = "Fuel level too low for launch";

        } else if (Number(fuelInput.value) > 10000) {
            fuelStatus.innerHTML ="Fuel level high enough for launch";
        }
    }

    //cargoStatus -- need to make if statement for cargo mass    
    if (validCargoInput !=="Empty" && validCargoInput === "Is a Number"){
        if (Number(cargoInput.value) > 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    
        } else if (Number(cargoInput.value) < 10000) {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
    }
   
    //If Both fuel level and cargo are correct numbers then shuttle is ready for launch
    // if (validFuelInput !== "Empty" && validFuelInput === "Is a Number" && validCargoInput !=="Empty" && validCargoInput === "Is a Number" ){
    //     if (Number(cargoInput.value) < 10000 && Number(fuelInput.value) > 10000){
    //         launchStatus.innerHTML = "Shuttle is Ready for Launch";
    //         launchStatus.style.color = "green";
    //     }
    // }
    //NOTE: maybe I could just write this instead, seems easier and a little clearer:
    if (fuelStatus.innerHTML === "Fuel level high enough for launch" && cargoStatus === "Cargo mass low enough for launch") {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
    }

};
 
async function myFetch() {
    let planetsReturned;
 
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then( function (data){
        console.log(data);
    });
    });  

     return planetsReturned;
};
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
