const buttons = Array.from(document.getElementsByTagName("button"));
const result = document.getElementById("result");
const erase = document.getElementById("erase");
const pantalla = document.getElementById("pantalla");
const buttonsSign = Array.from(document.getElementsByClassName("sign"));
let operatorPresent = false;

buttons.map((button) => {
  button.addEventListener("click", () => {
    pantalla.innerHTML += button.innerHTML;
  });
});

result.addEventListener("click", () => {
  pantalla.innerHTML = eval(pantalla.innerHTML);
});

erase.addEventListener("click", () => (pantalla.innerHTML = ""));
