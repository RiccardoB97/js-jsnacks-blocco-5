var lettersArray = ["a", "b", "c"];
var numbersArray = [1, 2, 3];

// It works only if both arrays have the same lenght
function fuseArray(firstArray, secondArray) {
    for (var i = 0; i < firstArray.length; i++) {
        mixedArray.push(firstArray[i]);
        mixedArray.push(secondArray[i])
    }
}

var mixedArray = [];
fuseArray(lettersArray, numbersArray);
console.log(mixedArray);