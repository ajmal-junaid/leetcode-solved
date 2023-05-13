var findTheDifference = function (s, t) {
    const freq = {};

  for (let char of s) {
    freq[char] = freq[char] ? freq[char] + 1 : 1;
  }
  //console.log(freq);

  for (let char of t) {
    if (!freq[char]) {
      return char;
    }
    freq[char]--;
  }

  return "";
};

console.log(findTheDifference("abcdea", "abcdeaf"))