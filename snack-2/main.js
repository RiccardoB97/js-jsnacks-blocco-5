// Snack 2

var zucchine = [
    {
        variety: "green",
        weight: 20,
        long: 10
    },
    {
        variety: "yellow",
        weight: 61,
        long: 10
    },
    {
        variety: "purple",
        weight: 50,
        long: 12
    },
    {
        variety: "blue",
        weight: 24,
        long: 18
    },
    {
        variety: "red",
        weight: 20,
        long: 20
    },
    {
        variety: "orange",
        weight: 62,
        long: 31
    },
    {
        variety: "brown",
        weight: 81,
        long: 12
    },
    {
        variety: "pink",
        weight: 32,
        long: 18
    },
    {
        variety: "light-green",
        weight: 25,
        long: 16
    },
    {
        variety: "white",
        weight: 20,
        long: 20
    }

]

var isLong = []
var isShort = []
// Divides in two array those who are longer or shorter fo 15cm
for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i].long > 15) {
        isLong.push(zucchine[i])
    } else {
        isShort.push(zucchine[i])
    }
}


// Calculate the sum of lenght in each array
var sumLong = 0;

for (var i = 0; i < isLong.length; i++) {
    sumLong += isLong[i].long
}
console.log(sumLong);

var sumShort = 0;

for (var i = 0; i < isShort.length; i++) {
    sumShort += isShort[i].long
}
console.log(sumShort);
