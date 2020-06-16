 
let oneNumShots = 1

const oneShots = document.querySelector("#teamone-shoot-button");
let oneNumShotsElements = document.querySelector('#teamone-numshots');
let teamOneNumGoals = document.querySelector('#teamone-numgoals');
oneShots.addEventListener("click", function Random() {
    console.log ("Team one shot taken");
    oneNumShotsElements.innerHTML = Number(oneNumShotsElements.innerHTML) + 1
    
    if (Math.random() * 100 < 65) {
        teamOneNumGoals.innerHTML = Number(teamOneNumGoals.innerHTML) + 1;
        }
   
})



        



let twoNumShots = 1
const twoShots = document.querySelector("#teamtwo-shoot-button");
let twoNumShotsElements = document.querySelector ('#teamtwo-numshots');
let teamTwoNumGoals = document.querySelector ('#teamtwo-numgoals')
twoShots.addEventListener("click", function Random() {
    console.log ("Team two shot taken");
    twoNumShotsElements.innerHTML = Number(twoNumShotsElements.innerHTML) + 1
    
    if (Math.random() * 100 < 65) {
        teamTwoNumGoals.innerHTML = Number(teamTwoNumGoals.innerHTML) + 1;
        }
    })


    
let numResets = 1
const resets = document.querySelector("#reset-button");
resets.addEventListener("click", function () {
    console.log ("Game Reset");
    document.getElementById("num-resets").innerText +++ numResets;
    document.getElementById("teamone-numshots").innerText = 0;
    document.getElementById("teamone-numgoals").innerText = 0;
    document.getElementById("teamtwo-numshots").innerText = 0;
    document.getElementById("teamtwo-numgoals").innerText = 0;
})