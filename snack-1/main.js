var zucchine = [
    {
        variety: "green",
        weight: 20,
        length: 10
    },
    {
        variety: "yellow",
        weight: 61,
        length: 105
    },
    {
        variety: "purple",
        weight: 50,
        length: 12
    },
    {
        variety: "blue",
        weight: 24,
        length: 18
    },
    {
        variety: "red",
        weight: 20,
        length: 20
    },
    {
        variety: "orange",
        weight: 62,
        length: 31
    },
    {
        variety: "brown",
        weight: 81,
        length: 12
    },
    {
        variety: "pink",
        weight: 32,
        length: 18
    },
    {
        variety: "light-green",
        weight: 25,
        length: 16
    },
    {
        variety: "white",
        weight: 20,
        length: 20
    }

]

var sum = 0;
// Calculates the total of the weights
for (var i = 0; i < zucchine.length; i++) {
    sum += zucchine[i].weight
}
console.log(sum);