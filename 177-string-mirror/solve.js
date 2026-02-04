function mirror(str) {
  const reversed = str.toString().split('').reverse().join('');
  const mirror = str+reversed;
  return mirror;
}