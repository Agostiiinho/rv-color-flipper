const colors = ["red", "green", "blue", "magenta", "yellow", "cyan"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const colorText = document.getElementById("bg-color");

//
//Change Simple Color
let ChangeColor = () => {
  const currentColor = GetRandomElement();
  document.body.style.backgroundColor = colors[currentColor];

  colorText.innerHTML = colors[currentColor];
};

let GetRandomElement = () => {
  return Math.floor(Math.random() * colors.length);
};

//
//Change Hex Color
let ChangeColorHEX = () => {
  let hextag = "#";
  for (let i = 0; i < 6; i++) {
    hextag += hex[GetRandomHex()];
  }

  document.body.style.backgroundColor = hextag;
  colorText.innerHTML = hextag;
};

let GetRandomHex = () => {
  return Math.floor(Math.random() * hex.length);
};
