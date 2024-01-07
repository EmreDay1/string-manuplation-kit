function reverseString(str) {
    return str.split('').reverse().join('');
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function truncateString(str, maxLength, ender = '...') {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - ender.length)

    }

    return str;
}

function countWords(str) {
    const words = str.match(/\b\w+\b/g)
    return words ? words.length : 0;
}

function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reverseStr = cleanStr.split('').reverse().join('')
    return cleanStr === reversedStr
}


function extractEmails(text) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return text.match(emailRegex) || [];
}

function capiltalizeWords(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase)
}

function removeDuplicates(str) {
    return str
        .split('')
        .filter((char, index, array) => array.indexOf(char) === index)
        .join('');
}

function caesarCipher(str, shift) {
    return str
        .split('')
        .map(char => {
            if (char.match(/[a-zA-Z]/)) {
                const code = char.charCodeAt(0);
                const isUpperCase = char === char.toUpperCase();
                const offset = isUpperCase ? 65 : 97;
                return String.fromCharCode((code - offset + shift) % 26 + offset);
            }
            return char;
        })
        .join('');
}


module.exports = {
    reverseString,
    capitalizeFirstLetter,
    truncateString,
    countWords,
    isPalindrome,
    extractEmails,
    capiltalizeWords,
    removeDuplicates,
    caesarCipher,


};