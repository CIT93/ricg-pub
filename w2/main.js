//variables
let householdMembers = 10;
let houseSize = 4;
let foodChoices = 14;
let waterConsumption = 2;
let newHouseItems = 4;
let wasteProduced = 20;
let wasteRecycled = 4;
let transportationScore = 4;

//Addition
let carbonFootprintNumber = householdMembers
 + houseSize
 + foodChoices
 + waterConsumption
 + newHouseItems
 + wasteProduced
 + wasteRecycled
 + transportationScore;

//Header modifier
const myHeading = document.querySelector("h2");
myHeading.textContent = carbonFootprintNumber;
