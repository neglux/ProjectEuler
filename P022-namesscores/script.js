import { alphabet } from "../eulib.js";
import { readFileSync } from "fs";

const getNames = (path) => {
  return readFileSync(path, "utf8").split(",");
};

const removeCharacters = (chars, arr) => {
  return arr.map((e) => {
    for (const char of chars) {
      e = e.replace(char, "");
    }
    return e;
  });
};

function calcTotalNamesScore(arr) {
  arr = removeCharacters(['"', '"'], arr);
  arr.sort();
  let total = 0;
  arr.forEach((name, index) => {
    const alphaValue = name.split("").reduce(
      (acc, letter) => (acc += alphabet[letter]),

      0
    );
    const score = alphaValue * (index + 1);
    total += score;
  });
  return total;
}

console.log(calcTotalNamesScore(getNames("p022_names.txt")));
