const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
let displayValue = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("value");

        if (value === "clear") {
            displayValue = "";
        } else if (value === "backspace") {
            displayValue = displayValue.substring(0, displayValue.length - 1);
        } else if (value === "=") {
            displayValue = eval(displayValue);
        } else {
            displayValue += value;
        }

        display.textContent = displayValue;
    });
});
