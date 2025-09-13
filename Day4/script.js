const add = document.getElementById("add");
const modulo = document.getElementById("modulo");
const equals = document.getElementById("equals");
const cbrt = document.getElementById("cbrt");
const sqrt = document.getElementById("sqrt");
const divide = document.getElementById("divide");
const power = document.getElementById("power");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const square = document.getElementById("square");
const cube = document.getElementById("cube");
const num0 = document.getElementById("num0");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7= document.getElementById("num7");
const num8= document.getElementById("num8");
const num9= document.getElementById("num9");

const inputField = document.getElementById('display');
const clear = document.getElementById('clear')


// Initialize input field
inputField.value = "";

// Add event listeners for number buttons
[num0, num1, num2, num3, num4, num5, num6, num7, num8, num9].forEach((button, index) => {
    button.addEventListener('click', () => {
        inputField.value += index; // Append the number to the input field
    });
});

add.addEventListener('click', () => {
    inputField.value += '+';
});
multiply.addEventListener('click', () => {
    inputField.value += '*';
});
subtract.addEventListener('click', () => {
    inputField.value += '-';
});
divide.addEventListener('click', () => {
    inputField.value += '/';
});
modulo.addEventListener('click', () => {
    inputField.value += '%';
});
square.addEventListener('click', () => {
    inputField.value += "²";
    
    
    
});
cube.addEventListener('click', () => {
    inputField.value *=inputField.value*inputField.value;
});
sqrt.addEventListener('click', () => {
    inputField.value *= inputField.value;
});
cbrt.addEventListener('click', () => {
    inputField.value *=inputField.value*inputField.value;
});
power.addEventListener('click', () => {
    inputField.value ;
});
clear1.addEventListener('click', () => {
    inputField.value = inputField.value.slice(0,-1);
});
clearAll.addEventListener('click', () => {
    inputField.value = "";
});
equals.addEventListener('click', () => {
    let expression = inputField.value;
    let lastchar = inputField.value.slice(-1);
    let result = eval(expression)
    inputField.value=result;
    if(lastchar === "²"){
        let num = inputField.value.slice(0,-1);
        inputField.value  = num * num;

    }
   
});
