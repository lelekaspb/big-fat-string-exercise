"use strict";

const btn = document.querySelector("button");
let result;

btn.addEventListener("click", getInputs);

function getInputs() {
  console.log("getInputs");
  const inputValue = document.querySelector("input.input").value;
  const selectValue = document.querySelector("select").value;

  generateResult(inputValue, selectValue);
}

function generateResult(string, action) {
  console.log("generateResult");
  string = string.trim();
  switch (action) {
    case "1":
      result =
        string.substring(0, 1).toUpperCase() +
        string.substring(1).toLowerCase();
      break;
    case "2":
      result = string.substring(0, string.indexOf(" "));
      break;
    case "3":
      result = string.substring(0, string.indexOf(" ")).length;
      break;
    case "4":
      const middleName = string.substring(
        string.indexOf(" "),
        string.lastIndexOf(" ")
      );
      const middleNameStart = string.indexOf(" ") + 1;
      const middleNameEnd = string.lastIndexOf(" ") - 1;
      result = `Middle name is: ${middleName}. It starts at index: ${middleNameStart} and ends at index: ${middleNameEnd}`;
      break;
    case "5":
      if (string.endsWith(".png")) {
        result = "This is a png file";
      } else if (string.endsWith(".jpg")) {
        result = "This is a jpg file";
      } else {
        result = "This is an unknown file";
      }
      break;
    case "6":
      const symbol = "*";
      result = symbol.repeat(string.length);
      break;
    case "7":
      result =
        string.substring(0, 2) +
        string.substring(2, 3).toUpperCase() +
        string.substring(3);
      break;
    case "8":
      hyphensAndSpaces(string);
      // split with " ", make every element start with capital letter, concatenate
      // and repeat with "-"
      break;
  }

  outputResult();
}

function outputResult() {
  console.log("outputResult");
  document.querySelector("input.output").value = result;
}

function hyphensAndSpaces(string) {
  console.log("hyphensAndSpaces");
  n;
  const wordArray = string.split(/[- ]+/);
  let fullinput = "";
  wordArray.forEach((element) => {
    let firstletter = element.substring(0, 1);
    let editfirst = firstletter.toUpperCase();
    let rest = element.substring(1);
    fullinput = fullinput + editfirst + rest + " ";
  });

  result = fullinput.trim();
}
