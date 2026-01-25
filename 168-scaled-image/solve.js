function scaleImage(size, scale) {
  const [width, height] = size.split("x").map(Number);
  return `${width * scale}x${height * scale}`;
}

// console.log(scaleImage("800x600", 2)); // "1600x1200"