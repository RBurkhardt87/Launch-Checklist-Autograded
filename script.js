


// Write your JavaScript code here!

window.addEventListener("load", function() {

   

    myFetch();
    const form = document.querySelector('form');
    form.addEventListener("submit", function(event) {
        
        event.preventDefault(); 

        
        const pilotInput = document.getElementById("pilotName").value;
        const copilotInput = document.getElementsByName("copilotName")[0].value;
        const fuelInput = document.getElementsByName("fuelLevel")[0].value;
        const cargoInput = document.getElementsByName("cargoMass")[0].value;
        const faultyItemsList = document.getElementById("faultyItems");

        
        formSubmission(document, faultyItemsList, pilotInput, copilotInput, fuelInput, cargoInput);
    });


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanetsResponse);
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       console.log(pickPlanet(listedPlanetsResponse));
       console.log(pickPlanet(listedPlanets));
       
        
    })
    
 });