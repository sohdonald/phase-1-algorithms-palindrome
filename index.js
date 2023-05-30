function isPalindrome(word) {
  // Write your algorithm here
  // word is the placeholder for string
    
  const splitString = word.split('');
  // word.split is a method
  // that divides the string into a list of substrings
  
  // substrings are the parts that make up a string

  // thus, each letter is turned into a substring 
  
  const reverseArray = splitString.reverse();
  // splitString.reverse method
  // takes the list created by word.split
  // then reverses the order of substrings
  // from last to first
  // returns it as a new array


  const newString = reverseArray.join('');
  //reverseArray.join takes the new array
  // created by reverseArray
  // glues it together
  // then returns it back as a new string 

  if(word === newString) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('madam'));

/* 
  Add your pseudocode here
need a boolean function

if word spelled backwards is the same like 'tacocat', then true
if not, false

'madam' assigned numbers would be
0 for m
1 for a
2 for d
3 for a
4 for m

function would state that if 01234 = 43210, then it's true

we need something that will spell the string backwards


*/

/*
  Add written explanation of your solution here



*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
