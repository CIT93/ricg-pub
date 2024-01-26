function determineHouseMemPts(houseMembers) {
    console.log("Inside the function");

    if (houseMembers == 1) {
        carbFtprPoints = carbFtprPoints + 14;
    } else if (houseMembers == 2) {
        carbFtprPoints = carbFtprPoints + 12;
    } else if (houseMembers == 3) {
        carbFtprPoints = carbFtprPoints + 10;
    } else if (houseMembers == 4) {
        carbFtprPoints = carbFtprPoints + 8;
    } else if (houseMembers == 5) {
        carbFtprPoints = carbFtprPoints + 6;
    } else if (houseMembers == 6) {
        carbFtprPoints = carbFtprPoints + 4;
    } else if (houseMembers > 6) {
        carbFtprPoints = carbFtprPoints + 2;
    }
    console.log(`Based on the number of members in the household which is ${houseMembers}, the amount of points so far, for our Carbon Footprint, is ${carbFtprPoints}`);
}

function determineHouseSizePts(houseSize) {

    if (houseSize == "Large") { // If you have a large house, then add 10 points to your score.
        carbFtprPoints = carbFtprPoints + 10; 
    } else if (houseSize == "Medium") { // If you have a medium-sized house, then add 7 points.
        carbFtprPoints = carbFtprPoints + 7; 
    } else if (houseSize == "Small") { // If you have a small house, then add 4 points.
        carbFtprPoints = carbFtprPoints + 4; 
    } else if (houseSize == "Apartment") { // If you live in an apartment, then add 2 points.
        carbFtprPoints = carbFtprPoints + 2; 
    }
    console.log(`Based on the size of the living space which is ${houseSize}, the amount of points so far, for our Carbon Footprint is ${carbFtprPoints}`);
}

//const houseMembers = 5;
let carbFtprPoints = 0;

//global scope

determineHouseMemPts(3);
determineHouseSizePts("Small");