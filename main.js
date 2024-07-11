const total = document.querySelector(".total");
const btnGroup = document.querySelector(".btn-group");
const mathBtns = document.querySelectorAll(".math-btn");
const operatorBtn = document.querySelector("button:nth-of-type(15)");
const calculateBtn = document.querySelector(".calculate-btn");
const resetBtn = document.querySelector(".reset-btn");

// eval(): Bir metin dizesi veya sayısal değerle sonuçlayan bir ifade değerlendirmek için Eval işlevini kullanabilirsiniz.

let calculate = "";
let isCalculating = false;
let isFinish = false;

btnGroup.addEventListener("click", (e) => {
  const ele = e.target;

  if (ele.className === "btn") {
    calculateBtn.classList.remove("disabled");
    operatorBtn.classList.remove("disabled");

    if (!isFinish) {
      calculate += ele.textContent;
    } else {
      calculate = "";
      calculate += ele.textContent;
    }

    isFinish = false;
    total.textContent = calculate;
    isCalculating = true;
  }

  if (ele.className === "math-btn") {
    calculateBtn.classList.add("disabled");
    if (total.textContent === "0") {
      calculate = "0";
    }
    calculate += ele.textContent;
    total.textContent = calculate;
    isFinish = false;
    isCalculating = false;
  }

  if (ele.textContent === ".") {
    calculate += ele.textContent;
    total.textContent = calculate;
    ele.classList.add("disabled");
    calculateBtn.classList.add("disabled");
    isFinish = false;
  }

  if (!isCalculating) {
    mathBtns.forEach((mathBtn) => {
      mathBtn.classList.add("disabled");
    });
  } else {
    mathBtns.forEach((mathBtn) => {
      mathBtn.classList.remove("disabled");
    });
  }
});

const resetCalculate = () => {
  calculateBtn.classList.add("disabled");
  calculate = "";
  total.textContent = "0";
  calculate = total.textContent;
};

const calculator = () => {
  calculateBtn.classList.add("disabled");
  isFinish = true;
  total.textContent = eval(calculate);
  calculate = "";
  calculate = total.textContent;
};
