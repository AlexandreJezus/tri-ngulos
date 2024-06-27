const prompt = require("prompt-sync")();

let ladoA = +prompt("Digite o lado A do triângulo.");
let ladoB = +prompt("Digite o lado B do triângulo.");
let ladoC = +prompt("Digite o lado C do triângulo.");

if (ladoA > 0 && ladoB > 0 && ladoC > 0) {
  if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
    console.log("O triângulo é equilátero.");
  } else if (
    (ladoA !== ladoB && ladoA === ladoC) ||
    (ladoA === ladoB && ladoA !== ladoC) ||
    (ladoA !== ladoB && ladoA !== ladoC && ladoB === ladoC)
  ) {
    console.log("O triângulo é isósceles");
  } else {
    console.log("O triângulo é escaleno.");
  }
} else console.log("Triângulo inválido.");
