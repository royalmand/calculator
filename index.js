let calculatorDisplay = ""
let calculatorTwoDisplay = ""

function btnClick(e) {
    if (e == "1" || e == "2" || e == "3" || e == "4" || e == "5" || e == "6" || e == "7" || e == "8" || e == "9" || e == "0" || e == "+" || e == "-" || e == "*" || e == "/" || e == "AC" || e == "." || e == "+-" || e == "C") {

        if (e == "AC") {
            calculatorDisplay = ""
            console.log("clear");
        } else if (e == "+-") {
            calculatorDisplay = "-" + calculatorDisplay
            console.log(calculatorDisplay);
        } else if (e == ".") {
            calculatorDisplay = calculatorDisplay + "."
            console.log(calculatorDisplay);
        } else if (e == "C") {
            calculatorDisplay = calculatorDisplay.slice(0, -1)
            console.log(calculatorDisplay);
        } else {
            // so user could use 11 or 24
            calculatorDisplay = calculatorDisplay + e
            console.log(calculatorDisplay);
        }
        // show the number that would be press and display into the input element 
        document.getElementById("display1").value = calculatorDisplay;
    } else {
        console.log("Input suppose to be a number dan operator");
    }
}

function calculate() {
/**
 * Evaluates the mathematical expression in the display input field and updates the field with the result.
 *
 * @return {void}
 */
    const display = document.getElementById("display1")
    try {
        display.value = eval(display.value)
    } catch (error) {
        alert("Invalid Input")
    }

}

function buttonClick(e) {
    if (e == "1" || e == "2" || e == "3" || e == "4" || e == "5" || e == "6" || e == "7" || e == "8" || e == "9" || e == "0" || e == "+" || e == "-" || e == "*" || e == "/" || e == "AC" || e == "." || e == "+-" || e == "C") {

        if (e == "AC") {
            calculatorTwoDisplay = ""
            console.log("clear");
        } else if (e == "+-") {
            calculatorTwoDisplay = "-" + calculatorTwoDisplay
            console.log(calculatorTwoDisplay);
        } else if (e == ".") {
            calculatorTwoDisplay = calculatorTwoDisplay + "."
            console.log(calculatorTwoDisplay);
        } else if (e == "C") {
            calculatorTwoDisplay = calculatorTwoDisplay.slice(0, -1)
            console.log(calculatorTwoDisplay);
        } else {
            // so user could use 11 or 24
            calculatorTwoDisplay = calculatorTwoDisplay + e
            console.log(calculatorTwoDisplay);
        }
        // show the number that would be press and display into the input element 
        document.getElementById("display2").value = calculatorTwoDisplay;
    } else {
        console.log("Input suppose to be a number dan operator");
    }
}

function equalsTo() {
    /**
     * Evaluates the mathematical expression in the display input field and updates the field with the result.
     *
     * @return {void}
     */
        const displayNumber = document.getElementById("display2")
        try {
            displayNumber.value = eval(displayNumber.value)
        } catch (error) {
            alert("Invalid Input")
        }
    
}



