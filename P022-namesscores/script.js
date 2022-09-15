const alphabet = [
  "",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const fs = require("fs");

const getNames = (path) => {
  return fs.readFileSync(path, "utf8").split(",");
};

function calcTotalNamesScore(arr) {
  arr.sort();
  let total = 0;
  arr.forEach((name, index) => {
    const alphValue = name.split("").reduce((acc, letter) => {
      if (letter !== '"') return (acc += alphabet.indexOf(letter));
      else return acc;
    }, 0);
    const score = alphValue * (index + 1);
    total += score;
  });
  return total;
}

console.log(calcTotalNamesScore(getNames("p022_names.txt")));
