// Console Based Calculator with Extra Features

function calculator() {

    console.log("------ Console Calculator ------");

    let num1 = parseFloat(prompt("Enter first number: "));
    let operator = prompt("Enter operator (+, -, *, /, %, power): ");
    let num2 = parseFloat(prompt("Enter second number: "));

    let result;

    switch(operator) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if(num2 == 0){
                console.log("Cannot divide by zero");
                return;
            }
            result = num1 / num2;
            break;

        case "%":
            result = num1 % num2;
            break;

        case "power":
            result = num1 ** num2;
            break;

        default:
            console.log("Invalid Operator");
            return;
    }

    console.log("Result =", result);
      alert("Result: " + result);
}

calculator();