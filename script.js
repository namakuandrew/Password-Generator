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

// fungsi ini untuk update indikator password
const updatePassIndicator = () => {
  passIndicator.id =
    lengthSlider.value <= 8
      ? "weak"
      : lengthSlider.value <= 16
      ? "medium"
      : "strong";
};

// fungsi untuk update slider tanpa harus tekan generate btn
const updateSlider = () => {
  //update panjang label
  document.querySelector(".pass-length span").innerText = lengthSlider.value;

  //hubungkan ke fungsi generatePassword
  generatePassword();

  //update indicator password
  updatePassIndicator();
};
//initialisasi si slider & generate btn
updateSlider();

const copyPassword = () => {
  navigator.clipboard.writeText(passwordinput.value);
  copyicon.innerText = "check";
  copyicon.style.color = "#4285f4";
  setTimeout(() => {
    copyicon.innerText = "copy_all";
    copyicon.style.color = "#707070";
  }, 1500);
};

lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);
copyicon.addEventListener("click", copyPassword);
