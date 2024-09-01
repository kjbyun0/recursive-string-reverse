function reverseString(str) {
  // type your code here
  if (str.length === 0)
    return str;

  return reverseString(str.slice(1)) + str[0];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString('hi'));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString('catbaby'));

  console.log('');
  console.log("Expecting: ''");
  console.log("=>", reverseString(''));

  console.log('');
  console.log("Expecting: 'a'");
  console.log("=>", reverseString('a'));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
