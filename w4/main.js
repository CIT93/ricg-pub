const cfpData = [];

function determineHouseMemPts(houseMembers) {
    let householdMemPts = 0;

    if (houseMembers == 1) {
        householdMemPts = 14;
    } else if (houseMembers == 2) {
        householdMemPts = 12;
    } else if (houseMembers == 3) {
        householdMemPts = 10;
    } else if (houseMembers == 4) {
        householdMemPts = 8;
    } else if (houseMembers == 5) {
        householdMemPts = 6;
    } else if (houseMembers == 6) {
        householdMemPts = 4;
    } else if (houseMembers > 6) {
        householdMemPts = 2;
    }
    return householdMemPts;
}

function determineHouseSizePts(houseSize) {
    let householdSizePts = 0;

    if (houseSize == "Large") {
        householdSizePts = 10; 
    } else if (houseSize == "Medium") {
        householdSizePts = 7; 
    } else if (houseSize == "Small") {
        householdSizePts = 4; 
    } else if (houseSize == "Apartment") {
        householdSizePts = 2; 
    }
    return householdSizePts;
}

function start(members,size){
    const houseMembPoints = determineHouseMemPts(members);
    const houseSizePoints = determineHouseSizePts(size); 
    const totalCarbFtprPoints = houseMembPoints + houseSizePoints;
    cfpData.push([members,size,houseMembPoints,houseSizePoints,totalCarbFtprPoints]); 
}

function displayOutput(){
    for (arr of cfpData){
        console.log(arr);
        const output = document.getElementById("output");
        const newP = document.createElement("p");
        if (arr[0]<7)
            newP.textContent = `Carbon Footprint Total is ${arr[4]}. For a ${arr[1]} sized house (points:${arr[3]}) with ${arr[0]} members. (points:${arr[2]})`;
        else
            newP.textContent = `Carbon Footprint Total is ${arr[4]}. For a ${arr[1]} sized house (points:${arr[3]}) with 6 or more members. (points:${arr[2]})`;
        output.appendChild(newP);
    }
}

let calls = 0;

for (let i = 0; i<4; i++){
    for (let j = 0; j<7; j++){
        switch(i){
            case 0:
                start(j+1, "Large");
                break;
            case 1:
                start(j+1, "Medium");
                break;
            case 2:
                start(j+1, "Small");
                break;
            case 3:
                start(j+1, "Apartment");
                break;
        }
        calls++;
    }
}

//number of calls
console.log(`number of calls: ${calls}`);

displayOutput()