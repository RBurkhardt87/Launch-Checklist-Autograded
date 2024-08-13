
// Write your helper functions here!
  window.addEventListener("load", function() {

        formSubmit.addEventListener("click", function(event){
        event.preventDefault();

        let response = `
        pilot name: ${pilotInput.value}
        copilot name: ${copilotInput.value}
        fuel level: ${fuelInput.value}
        cargo mass: ${cargoInput.value}
        `
        console.log(response); 
        console.log("hello");
        
   });


   //TODO: Set up object variables for input ----> Keep getting an error message when I add .value to the end of these.
   const pilotInput = document.getElementById("pilotName");
   const copilotInput = document.getElementsByName("copilotName")[0];
   const fuelInput = document.getElementsByName("fuelLevel")[0];
   const cargoInput = document.getElementsByName("cargoMass")[0];

   //TODO: get access to the form NOTE: There isn't an id in the <form> 
   const forms = document.getElementsByTagName('form');
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
 
 function validateInput(testInput) {
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }


 });


 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;