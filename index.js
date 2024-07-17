// Example: Testing
// Result Output: T

// Write a javascript function that finds the first non-repeating character in a string
const originalString = 'Testing';

const firstNonRepeatingCharacter = (str) => {
	let charCount = new Map();

	for (let char of str) {
		charCount.set(char, (charCount.get(char) || 0) + 1);
	}

	for (let char of str) {
		if (charCount.get(char) === 1) {
			return char;
		}
	}

	return null; // No non-repeating character is found
};

let result = firstNonRepeatingCharacter(originalString);
console.log(result);

