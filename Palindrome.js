function isPalindrome(string) {
  // Convert the string to lowercase to ensure case insensitivity
  let lowerCaseString = string.toLowerCase();
  
  // Reverse the string
  let reversedString = lowerCaseString.split('').reverse().join('');
  
  // Compare the original and reversed strings
  if (lowerCaseString === reversedString) {
    return "It's a palindrome!";
  } else {
    return "Not a palindrome!";
  }
}

// Sample Inputs
let input1 = "malayalam";
let input2 = "Dad";

// Outputs
console.log(`Sample input1: ${input1}`);
console.log(`Sample output1: ${isPalindrome(input1)}\n`);

console.log(`Sample input2: ${input2}`);
console.log(`Sample output2: ${isPalindrome(input2)}`);
