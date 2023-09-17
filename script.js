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
const generatePassword = () => {
  let staticPassword = "";
  let randomPassword = "";
  let exludeDuplicate = false;
  let passLength = lengthSlider.value;

  //looping untuk ulangi setiap option
  option.forEach((option) => {
    if (option.checked) {
      if (option.id !== "exc-dupilcate" && option.id !== "spaces") {
        //menambahkan character to password static jika setiap option itu dipilih
        staticPassword += characters[option.id];
      } else if (option.id == "spaces") {
        staticPassword += ` ${staticPassword} `;
      } else {
        // jika opsi "spaces" dipilih, maka variabel excludeDuplicate akan diaktifkan.
        excludeDuplicate = true;
      }
    }
  });
  // generate password secara acak dengan looping for
  for (let i = 0; i < passLength; i++) {
    let randomChar =
      staticPassword[Math.floor(Math.random() * staticPassword.length)];
    if (exludeDuplicate) {
      if (!randomPassword.includes(randomChar) || randomChar == " ") {
        randomPassword += randomChar;
      } else {
        i--;
      }
    } else {
      // add random character ke password
      randomPassword += randomChar;
    }
  }
  // atur nilai dari input password
  passwordInput.value = randomPassword;
};

generateBtn.addEventListener("click", generatePassword);
