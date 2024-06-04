let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let output = document.querySelector("output");
  let firstNum = document.querySelector("#first-num").value;
  let secondNum = document.querySelector("#second-num").value;
  let operator = document.querySelector("#operator").value;
  output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll("#error-btns > button"));

function buttonPress(i, func) {
  errorBtns[i].addEventListener("click", func);
}

buttonPress(0, () => {
  console.log("Console Log");
});
buttonPress(1, () => {
  console.error("Console Error");
});
buttonPress(2, () => {
  console.count("Console Count");
});
buttonPress(3, () => {
  console.warn("Console Warn");
});
buttonPress(4, () => {
  console.assert(2 == 20, "Console Assert: 2 is expected to be equal to 20");
});
buttonPress(5, () => {
  console.clear();
});
buttonPress(6, () => {
  console.dir(console);
});
buttonPress(7, () => {
  console.dirxml(document);
});
buttonPress(8, () => {
  console.group("Console Group Start");
});
buttonPress(9, () => {
  console.groupEnd("Console Group End");
});
buttonPress(10, () => {
  console.table([1, 2, 3, 4]);
});
buttonPress(11, () => {
  console.time("Start Timer");
});
buttonPress(12, () => {
  console.timeEnd("Start Timer");
});
buttonPress(13, () => {
  console.trace();
});
buttonPress(14, () => {
  is_not_defined;
});

// calculate math function from the user's input, using try/catch
function solve(firstNum, operator, secondNum) {
  try {
    isNumber(firstNum);
    isNumber(secondNum);

    return eval(`${firstNum} ${operator} ${secondNum}`);
  } catch (error) {
    console.error();
    return null;
  }
}

// validate that the input is a number, using throw
function isNumber(input) {
  if (isNaN(input) || input === Infinity) {
    throw new CustomError("Invalid input: ${input}");
  }
}

// custom error
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

// global error handler error message
window.addEventListener("error", (e) => {
  console.warn("Global Error Handler: ${e.message}");
});

TrackJS.track("Testing TrackJS!");
