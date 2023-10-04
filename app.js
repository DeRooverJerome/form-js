let form = document.querySelector(".form");
let inputName = document.querySelector("#name");
let inputMail = document.querySelector("#mail");
let inputPassword = document.querySelector("#password");
let inputConfirmPassword = document.querySelector("#confirmPassword");
let inputSubmit = document.querySelector("#submit");
let checkMark = document.querySelectorAll(".fa-solid");
let nameCheck = checkMark[0];
let mailCheck = checkMark[1];
let passwordCheck = checkMark[2];
let confirmCheck = checkMark[3];
let userName = "";
let userMail = "";
let userPassword = "";
let userConfirmPassword = "";
let errorMessages = document.querySelectorAll(".msg");
let errorMessageName = errorMessages[0];
let errorMessageMail = errorMessages[1];
let errorMessagePassword = errorMessages[2];
let errorMessageConfirmPassword = errorMessages[3];
let isAllGood = false;
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Evenement pour le formulaire

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   Input UserName Condition **
  //   condition pas remplie
  if (
    userName.length <= 5 ||
    userName.length >= 10 ||
    userName != userName.toLowerCase()
  ) {
    errorMessageName.classList.add("error");
    // condition remplie
  } else {
    errorMessageName.classList.remove("error");
    inputName.classList.add("success");
    nameCheck.classList.add("checkMark");
  }
  //   Input Mail Condition **
  // condition pas remplie
  if (!validateEmail(userMail)) {
    errorMessageMail.classList.add("error");
    // condition remplie
  } else {
    errorMessageMail.classList.remove("error");
    inputMail.classList.add("success");
    mailCheck.classList.add("checkMark");
  }
  // Input Password Condition
  // condition pas remplie
  if (userPassword.length <= 8 || userPassword.length >= 15) {
    errorMessagePassword.classList.add("error");
    // condition remplie
  } else {
    errorMessagePassword.classList.remove("error");
    inputPassword.classList.add("success");
    passwordCheck.classList.add("checkMark");
  }
  // Input Confirm Password Condition
  // condition pas remplie
  if (userConfirmPassword != userPassword || userConfirmPassword == "") {
    errorMessageConfirmPassword.classList.add("error");
    // condition remplie
  } else {
    errorMessageConfirmPassword.classList.remove("error");
    inputConfirmPassword.classList.add("success");
    confirmCheck.classList.add("checkMark");
  }
  //   SI TOUTES les conditions sont remplies, le button submit devient vert sinon il reste gris
  if (
    nameCheck.classList.contains("checkMark") &&
    mailCheck.classList.contains("checkMark") &&
    passwordCheck.classList.contains("checkMark") &&
    confirmCheck.classList.contains("checkMark")
  ) {
    // reset de la page si tout est remplie
    inputSubmit.classList.add("allGood");
    if (inputSubmit.classList.contains("allGood")) {
      inputSubmit.addEventListener("click", () => {
        alert("Formulaire Envoyé");
        location.reload();
      });
    }
  } else {
  }
});

// Evenement pour l'input NAME

inputName.addEventListener("input", (e) => {
  userName = e.target.value;
});

// Evenement pour l'input MAIL

inputMail.addEventListener("input", (e) => {
  userMail = e.target.value;
});

// Evenement pour l'input PASSWORD

inputPassword.addEventListener("input", (e) => {
  userPassword = e.target.value;
});

// Evenement pour l'input de CONFIRMATION du PASSWORD

inputConfirmPassword.addEventListener("input", (e) => {
  userConfirmPassword = e.target.value;
});
