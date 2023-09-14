/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const outputLength = document.getElementById("output-length")
const outputVolume = document.getElementById("output-volume")
const outputMass = document.getElementById("output-mass")


convertBtn.addEventListener("click", function() {
    
    const meterToFeet = inputEl.value * 3.281
    const feetToMeter = inputEl.value / 3.281

    let renderLengthOne = ""

    renderLengthOne = `${inputEl.value} meters = ${meterToFeet.toFixed(3)} feet | ${inputEl.value} feet = ${feetToMeter.toFixed(3)} meters`

    outputLength.textContent = renderLengthOne
    
    
    
    const literToGallon = inputEl.value * 0.264
    const gallonToLiter = inputEl.value / 0.264

    let renderLengthTwo = ""

    renderLengthTwo = `${inputEl.value} liters = ${literToGallon.toFixed(3)} gallons | ${inputEl.value} gallons = ${gallonToLiter.toFixed(3)} liters`

    outputVolume.textContent = renderLengthTwo
    
    
    
    const kgToLb = inputEl.value * 2.204
    const lbToKg = inputEl.value / 2.204

    let renderLengthThree = ""

    renderLengthThree = `${inputEl.value} kilos = ${kgToLb.toFixed(3)} pounds | ${inputEl.value} pounds = ${lbToKg.toFixed(3)} kilos`

    outputMass.textContent = renderLengthThree
})



