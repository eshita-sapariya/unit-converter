// Length
let feet = document.querySelector("#feet");
let inch = document.querySelector("#inch");
let metre = document.querySelector("#metre");
let centimeter = document.querySelector("#centimeter");
let kilometer = document.querySelector("#kilometer");

// Mass
let kilogram = document.querySelector("#kilogram");
let gram = document.querySelector("#gram");
let milligram = document.querySelector("#milligram");
let pound = document.querySelector("#pound");

// Temperature
let degreeCelcius = document.querySelector("#degreeCelcius");
let fahrenheit = document.querySelector("#fahrenheit");
let kelvin = document.querySelector("#kelvin");

//For Length
function feetToOther(val) {
  inch.value = val * 12;
  metre.value = val / 3.281;
  centimeter.value = val * 30.48;
  kilometer.value = val / 3281;
}

function inchToOther(val) {
  feet.value = val / 12;
  metre.value = val / 39.37;
  centimeter.value = val * 3.54;
  kilometer.value = val / 39370;
}

function metreToOther(val) {
  inch.value = val * 39.37;
  feet.value = val * 3.281;
  centimeter.value = val * 100;
  kilometer.value = val / 1000;
}

function centimeterToOther(val) {
  inch.value = val / 2.54;
  metre.value = val / 100;
  feet.value = val / 30.48;
  kilometer.value = val / 100000;
}

function kilometerToOther(val) {
  centimeter.value = val * 100000;
  metre.value = val * 1000;
  inch.value = val * 39370;
  feet.value = val * 3281;
}

//For Mass

function kgToOther(val) {
  gram.value = val * 1000;
  milligram.value = val * 1000000;
  pound.value = val * 2.205;
}

function gToOther(val) {
  kilogram.value = val / 1000;
  milligram.value = val * 1000;
  pound.value = val / 453.6;
}

function mgToOther(val) {
  gram.value = val / 1000;
  kilogram.value = val / 1000000;
  pound.value = val / 453600;
}

function poundToOther(val) {
  gram.value = val * 453.6;
  milligram.value = val * 453600;
  kilogram.value = val / 2.205;
}

// For Temperature

function dgToOther(val) {
  fahrenheit.value = val * (9 / 5) + 32;
  kelvin.value = val + 273.15;
}

function fahrenheitToOther(val) {
  degreeCelcius.value = (val - 32) * (5 / 9);
  kelvin.value = (val - 32) * (5 / 9) + 273.15;
}

function kelvinToOther(val) {
  degreeCelcius.value = val - 273.15;
  fahrenheit.value = (val - 273.15) * (9 / 5) + 32;
}

function convertToOthers(convertFrom, value) {
  switch (convertFrom) {
    case "feet":
      feetToOther(parseFloat(value));
      break;
    case "inch":
      inchToOther(parseFloat(value));
      break;
    case "metre":
      metreToOther(parseFloat(value));
      break;
    case "centimeter":
      centimeterToOther(parseFloat(value));
      break;
    case "kilometer":
      kilometerToOther(parseFloat(value));
      break;
    case "kilogram":
      kgToOther(parseFloat(value));
      break;
    case "gram":
      gToOther(parseFloat(value));
      break;
    case "milligram":
      mgToOther(parseFloat(value));
      break;
    case "pound":
      poundToOther(parseFloat(value));
      break;
    case "degreeCelcius":
      dgToOther(parseFloat(value));
      break;
    case "fahrenheit":
      fahrenheitToOther(parseFloat(value));
      break;
    case "kelvin":
      kelvinToOther(parseFloat(value));
      break;
  }
}

const selectElement = document.querySelector("#select-options");
const submitBtn = document.querySelector(".submit-btn");
const lContainer = document.querySelector(".lContainer");
const mContainer = document.querySelector(".mContainer");
const tContainer = document.querySelector(".tContainer");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let selectedEl = selectElement.value;
  console.log(selectedEl);
  console.log(typeof selectedEl);
  if (selectedEl == "length") {
    lContainer.classList.remove("hidden");
    mContainer.classList.add("hidden");
    tContainer.classList.add("hidden");
  } else if (selectedEl == "mass") {
    lContainer.classList.add("hidden");
    mContainer.classList.remove("hidden");
    tContainer.classList.add("hidden");
  } else if (selectedEl == "temperature") {
    lContainer.classList.add("hidden");
    mContainer.classList.add("hidden");
    tContainer.classList.remove("hidden");
  } else {
    lContainer.classList.add("hidden");
    mContainer.classList.add("hidden");
    tContainer.classList.add("hidden");
  }
});
