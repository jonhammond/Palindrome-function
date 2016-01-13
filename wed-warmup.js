// Declaring a function with a name of palindrome that accepts a 
// single parameter, the name of which is string.
function palindrome (string) {
  // declaring a new variable called noSpace, and assigining it to an
  // empty string
  var noSpace = '';
  // Starting a for-loop. Declaring a variable, n, and assigning it a value of 0.
  // It will continue to iterate until the condition of n <= string.length returns
  // false. At the end of each for loop, we increase and set n by 1.
  for (var n=0; n <=string.length; n++) {
    // We are assigning the variable noSpace a new value of string, where each ' ' 
    // that is encountered is replaced by ''. The position of the index is
    // determined by .charAt.
    noSpace += string.charAt(n).replace(' ', '');
  };

  // console.log(noSpace);
  // We are declaring a new variable, stringArray, and assigning it
  // to an empty array.
  var stringArray = [];
  // We are starting a for-loop. We declare a variable, i, with a value of 
  // noSpace.length. The for-loop will continue to iterate until the condition
  // i >= 0 returns false. At the end of each for-loop we increase and set i
  // by -1.
  for (var i = noSpace.length; i >= 0; i--) {
    // Pushing each return from each new value of i in the for-loop that iterates
    // over the string called noSpace. We are pushing to the empty array  
    // empty array called stringArray.
    stringArray.push(noSpace[i]);
    // We are declaring a new variable, called joinString, and assigning it
    // to the joined array, stringArray. .join brings all of the array indices
    // together. 
    // var joinString = stringArray --> var joinString = ['l', 'i', 'o', 'n']
    // var joinString = stringArray.join('') --> var joinString = 'lion'
    var joinString = stringArray.join('');
  };
  // Beginning an if-statement. The if-statement can be read as follows: if the
  // variable joinString, after all letters have been converted to lower-case, is
  // equal to the variable noSpace, after all letters have been converted to 
  // lower-case, then concatenate the argument, string, with the string
  // " is a palindrome.", and then log the entire statement to the console.
  if (joinString.toLowerCase() === noSpace.toLowerCase()) {
    console.log(string + " is a palindrome.");
  }
  // Setting another condition of the if-statement. So, if the condition above
  // does not return true, then (else) concatenate the argument, string, with
  // the string " is not a palindrome.", and then lof the entire statement
  // to the console.
  else {
    console.log(string + " is not a palindrome.");
  };
};
// call the function, palindrome, and pass through the argument "lion oil".
palindrome("lion oil")