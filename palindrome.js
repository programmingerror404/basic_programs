// Verify if a word is palindrome (a word, phrase, or sequence that reads the same backwards as forwards)

function is_char(val) {
  return val.charCodeAt(0) >= 65 && val.charCodeAt(0) < 123;
}

let small_str = function (str) {
  let strings = "";
  for (char of str.toLowerCase()) {
    if (is_char(char)) strings += char;
  }
  return strings;
};

function is_palindrome(str) {
  str = small_str(str);
  let lenLeft = 0;
  let lenRight = str.length - 1;

  while (lenLeft < lenRight) {
    if (str.charAt(lenLeft++) != str.charAt(lenRight--)) {
      console.log(str + " is Not a Palindrome");
      return;
    }
  }
  console.log(str + " is a Palindrome");
}


is_palindrome("abbccbba");
is_palindrome("hello");
is_palindrome("madam");
is_palindrome("abcd dcba");
