const lengthSlider = document.querySelector(".pass-length input");
const option = document.querySelectorAll(".option input");
const copyicon = document.querySelector(".input-box span");
const passwordInput = document.querySelector(".input-box input");
const passIndicator = document.querySelector(".pass-indicator");
const generateBtn = document.querySelector(".generate-btn");

//Mendefinisikan character untuk passwordnya
const character = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  Uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!$%&|[](){}:;.,*+-#@<>~",
};

//fungsi untuk mengenerate passwordnya
