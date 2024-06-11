const inputText = document.getElementById("inputText");
const clearBtn = document.getElementById("C");
const delBtn = document.getElementById("DEL");
const equalBtn = document.getElementById("equal");
const btnEL = document.querySelectorAll(".btn");

btnEL.forEach((val) => {
  val.addEventListener("click", () => {
    inputText.value += val.value;
  });
});

clearBtn.addEventListener("click", () => {
  inputText.value = "";
});

delBtn.addEventListener("click", () => {
  inputText.value = inputText.value.slice(0, -1);
});
equalBtn.addEventListener("click", () => {
  inputText.value = eval(inputText.value);
});
