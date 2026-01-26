/*
function parseInlineCode(markdown) {
  // let indexesOfTicks;
  let iteratorOddEven = 0;
  let newMarkdown = markdown;

  for (let i=0; i<=markdown.length-1; i++) {
    if (markdown[i] == "`") {
       // indexesOfTicks.push(i);
       iteratorOddEven+=1;
   
       if (iteratorOddEven%2==0) {
          newMarkdown.replace("`", "</code>")
       } else {
          newMarkdown.replace("`", "<code>")
       }
    }
  }
  return newMarkdown;
}
*/


function parseInlineCode(markdown) {
  let isOpen = false; 

  return markdown.split("").map(char => {
    if (char === "`") {
      isOpen = !isOpen; 
      return isOpen ? "<code>" : "</code>"; 
    }
    return char; 
  }).join(""); 
}
    