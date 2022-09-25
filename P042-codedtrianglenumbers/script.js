import { readFileSync } from "fs";
import { alphabet } from "../eulib.js";

function getTriangleWordCount(path) {
  const isTriangle = (num) => {
    const index = Math.floor((Math.sqrt(8 * num + 1) - 1) / 2);
    return (index * (index + 1)) / 2 === num;
  };

  const getWords = (path) => {
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

  let count = 0;
  const words = removeCharacters(['"', '"'], getWords(path));

  for (const word of words) {
    const wordValue = word
      .split("")
      .reduce((acc, letter) => (acc += alphabet[letter]), 0);

    if (isTriangle(wordValue)) count++;
  }
  return count;
}
