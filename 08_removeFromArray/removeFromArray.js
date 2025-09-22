const removeFromArray = function(array, ...theArgs) {
    return array.filter(el => theArgs.includes(el) ? false : true);
};

// Do not edit below this line
module.exports = removeFromArray;
