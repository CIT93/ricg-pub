  function determineHouseMemPts(houseMembers){
    console.log("Inside the function");

    if (houseMembers==1){
        carbFtprPoints = carbFtprPoints + 14;
      } else if (houseMembers==2){
        carbFtprPoints = carbFtprPoints + 12;
      } else if (houseMembers==3) {
        carbFtprPoints = carbFtprPoints + 10;
      } else if (houseMembers==4) {
      carbFtprPoints = carbFtprPoints + 8;
      } else if (houseMembers==5) {
        carbFtprPoints = carbFtprPoints + 6;
      } else if (houseMembers==6) {
        carbFtprPoints = carbFtprPoints + 4;
      } else if (houseMembers>6){
        carbFtprPoints = carbFtprPoints + 2;
      }
      console.log(`Based on the number of members in the household which is ${houseMembers}, the amount of points for our Carbon Footprint is ${carbFtprPoints}`);
  }
  
  //const houseMembers = 5;
  let carbFtprPoints = 0;

  //global scope

  determineHouseMemPts(5);