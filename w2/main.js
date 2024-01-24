//variables
const householdMembers = 10;
const houseSize = 4;
const foodChoices = 14;
const waterConsumption = 2;
const newHouseItems = 4;
const wasteProduced = 20;
const wasteRecycled = 4;
const transportationScore = 4;

//Addition
const carbonFootprintNumber = householdMembers
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
