function isValidHex(str) {
  // const hexPattern = /^#([0-9A-Fa-f]{6})$/;
  const hexPattern = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

  return hexPattern.test(str);
}

isValidHex("#FFFFFF"); // true
isValidHex("#123ABC"); // true
isValidHex("#GHIJKL"); // false
isValidHex("#12345");
isValidHex("#123");