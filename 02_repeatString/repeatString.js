const repeatString = function(givenString, repeatNumber) {
let result = "";

if (repeatNumber < 0){
    return 'ERROR';
}
if (givenString == ""){
    return "";
}
for (let i = 0; i<repeatNumber; i++){
    result += givenString;
}

return result;
};

// Do not edit below this line
module.exports = repeatString;
