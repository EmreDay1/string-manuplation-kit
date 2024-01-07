# string-manipulation-kit

This repository contains a collection of JavaScript functions for string manipulation.

## Functions

### `reverseString(str)`

Reverses the characters in a string.

### `capitalizeFirstLetter(str)`

Capitalizes the first letter of a string.

### `truncateString(str, maxLength, ender = '...')`

Truncates a string to a specified length and appends an optional ender.

### `countWords(str)`

Counts the number of words in a string.

### `isPalindrome(str)`

Checks if a string is a palindrome.

### `extractEmails(text)`

Extracts email addresses from a given text.

### `capiltalizeWords(sentence)`

Capitalizes the first letter of each word in a sentence.

### `removeDuplicates(str)`

Removes duplicate characters from a string.

### `caesarCipher(str, shift)`

Applies a Caesar cipher to a string with a specified shift value.

## Usage

```javascript
const stringManipulation = require('string-manuplation-kit');

const reversed = stringManipulation.reverseString('hello');
const capitalized = stringManipulation.capitalizeFirstLetter('world');
const truncated = stringManipulation.truncateString('lorem ipsum dolor sit amet', 10);
// ... (use other functions as needed)
```
