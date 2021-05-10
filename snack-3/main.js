var userWordArray = []
function reverseString(word) {
    for (var i = 0; i < word.length; i++) {
        userWordArray.push(word[i])
    }
    // Reverse the order of the letters
    userWordArray.reverse()
    // Joins them in 1 string
    console.log(userWordArray.join(''))
}

var userWord = prompt('Insert a word you want to reverse: ')

reverseString(userWord)
