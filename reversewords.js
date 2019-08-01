// Given a string, reverse each word in the string.

function reverseStr(str) {
    let newString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    return newString;
}

function reverseSentence(sentence) {
    let newSentence = '';
    let split_str = sentence.split(' ');
    for (let i = 0; i < split_str.length; i++) {
        newSentence += reverseStr(split_str[i]);
        if (i != split_str.length - 1) {
            newSentence += " ";
        }
    }
    return newSentence;
}

console.log(reverseSentence("abcd"));
console.log(reverseSentence("abcd fsdfdsafddf"));
console.log(reverseSentence("Deepanshu Srivastava"));