const repeatString = function(word, amount) {
    let combinedString = "";
    if (amount < 0) {
        return "ERROR";}

    for (let i = 0; i < amount; i++) {
        combinedString += word;
    }
    return combinedString;
};

// Do not edit below this line
module.exports = repeatString;
