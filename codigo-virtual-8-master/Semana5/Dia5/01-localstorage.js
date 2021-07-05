const formulario = document.querySelector("#formulario");
const inputColor = document.querySelector("#inputColor");
const btnGuardar = document.querySelector("#btnGuardar");
const btnBorrar = document.querySelector("#btnBorrar");
const body = document.querySelector("body");

const setBodyColor = (color) => {
  body.style.backgroundColor = color;
};

const setInputValue = (value) => {
  inputColor.value = value;
};

formulario.onsubmit = (e) => {
  e.preventDefault();
  const color = inputColor.value;
  setBodyColor(color);
  localStorage.setItem("colorFondo", color);
};

(() => {
  if (localStorage.getItem("colorFondo")) {
    setBodyColor(localStorage.getItem("colorFondo"));
    setInputValue(localStorage.getItem("colorFondo"));
  }
})();

btnBorrar.onclick = () => {
  localStorage.removeItem("colorFondo");
  setBodyColor("#FFF");
  setInputValue("#000");
};
