let str = "this is a text with hyphens george-wilbur and bro-bro - hey";
outPutTheStringWithOutHyphensAndSpaces();

function outPutTheStringWithOutHyphensAndSpaces() {
  console.log(str);
  // split the string in to an array with one character pr element
  let strArr = str.split("");
  // in foreach we also have a referece to an iterator and the array we're iterating over
  strArr.forEach((elm, iterator, arr) => {
    // if the element is a space or a hyphen ...
    if (elm === " " || elm === "-") {
      // ... uppercase the next letter in the array
      arr[iterator + 1] = arr[iterator + 1].toUpperCase();
    }
  });
  // Turn the array back in to a string with join! We inputted a string so we want a string back
  let outPutStr = strArr.join("");
  console.log(outPutStr);
}