// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

// Find out if, at any point in the team's existence, they've had 
//a win in the Superbowl

// superbowlWin()

// Check for a win
function checkWin(yearRecord){
    return (yearRecord.result === "W");
};

// Output the year the win occured
function superbowlWin(recordArray) {
    let winYear = recordArray.find(checkWin);
    if (typeof winYear === "object"){
        return winYear.year;
    } else {
        return winYear
    }
};

//NOTE: THE CALLBACK FUNCTION SHOULD RETURN BOOLEAN VALUE

// // Try everything in one function
// function superbowlWin(recordArray) {
//     let winYear = recordArray.find( (yearRecord) => {
//         return (yearRecord.result === 'W')
//     });

//     if (typeof winYear === "object"){
//         return winYear.year;
//     } else {
//         return winYear
//     }
// }
// Works the same way as above. BRAVO!!!!!!!!!!!!
