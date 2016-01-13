function palindrome (string) {
  noSpace = '';
  for (var n=0; n <=string.length; n++) {
    noSpace += string.charAt(n).replace(' ', '');
  };

  // console.log(noSpace);

  stringArray = [];
  for (var i = noSpace.length; i >= 0; i--) {
    stringArray.push(noSpace[i]);
    var joinString = stringArray.join('');
  };
  if (joinString.toLowerCase() === noSpace.toLowerCase()) {
    console.log(string + " is a palindrome.");
  }
  else {
    console.log(string + " is not a palindrome.");
  };
};

palindrome("lion oil")