var valueArray = [];
function returnsArrayValue(userArray, a, b) {
    for (var i = 0; i < userArray.length; i++) {
        if (userArray[i] > a && userArray[i] < b) {
            valueArray.push(userArray[i]);
        }
    }
}
var myArray = [23, 4, 15, 8, 2, 55, 24, 54, 6]
returnsArrayValue(myArray, 3, 9)
console.log(valueArray);