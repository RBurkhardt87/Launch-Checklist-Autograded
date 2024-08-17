// Write your JavaScript code here!

window.addEventListener("load", function() {
 
  
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
    listedPlanetsResponse= myFetch();
    listedPlanetsResponse.then(function (result) {
    listedPlanets =result;
    console.log(listedPlanets);
    }).then(function () {
         

    planet = pickPlanet(listedPlanets);
    

    const planetName = planet.name;
    const planetDiameter = planet.diameter;
    const planetStar = planet.star;
    const planetDistance = planet.distance;
    const planetMoons = planet.moons;
    const planetImage = planet.image;
  
    
    addDestinationInfo(document, planetName, planetDiameter, planetStar, planetDistance, planetMoons, planetImage);
});
});





