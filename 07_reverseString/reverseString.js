const reverseString = function(word) {
    let arr = [];
    for (let i = 0; i < word.length; i++) {
        arr.unshift(word.slice(i, i + 1));
    }
    return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
