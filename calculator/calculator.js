//initiate variables we need
var numToDisplay = ""; //set the starting display
let previousNum = 0; //set first number
var clearAfterClick = false; //if true, clear the display after button click
var previousOperation = "";
var operation = '';
const operationDictionary = {
    'add' : addNumbers,
    'subtract' : subtractNumbers,
    'multiply' : multiplyNumbers,
    'divide' : divideNumbers,
    'equals' : ''
}


function appendNum(event) { 
    //when clicked, check and clear if display needs to be cleared
    if (clearAfterClick == true) {
        console.log("clearafterclick was true, new number started");
        clearDisplay();
        clearAfterClick = false;
    }
    //when clicked, append the number and display it
    numToDisplay += event.target.value; 
    console.log("number added");
    displayNumber(); 
} 

function displayNumber() { 
    const display = document.getElementById('display');
    display.innerText = String(numToDisplay);
    }

function addNumbers(a,b) {
    result = parseFloat(a) + parseFloat(b);
    return result;
}

function subtractNumbers(a,b) {
    result = parseFloat(a) - parseFloat(b);
    return result;
}

function multiplyNumbers(a,b) {
    result = parseFloat(a) * parseFloat(b);
    return result;
}

function divideNumbers(a,b) {
    result = parseFloat(a) / parseFloat(b);
    return result;
}

function equals(a,b) {
    console.log("equals");
    numToDisplay = previousOperation(parseFloat(a),parseFloat(b));
    console.log(numToDisplay);
    return numToDisplay;
}

function doOp(event) {
    operation = operationDictionary[event.target.value];
    console.log(operation);
    
    if (previousNum != "") {
        

    }


    if (numToDisplay == "") { //accidental button hit before number input
        //pass
        console.log("numToDisplay blank, nothing happens");
    } else {
        console.log("numtodisplay not blank");
        //check if a different operator has been clicked previously
        if (previousOperation != "") {
            console.log("previous operation is not blank, act as equal sign in running total");
            //if multiple operations are happening in a row
            //display the running total as new operators are hit
            console.log(previousOperation);
            equals(previousNum, numToDisplay);
            displayNumber();
            setUpOperation(operation);
        } else {
            console.log("first time operation is hit, set up future operation");
            //if not doing a running total
            //set previousOperation to add for future operator button presses
            setUpOperation(operation);
        }
        
        
    }
}

function setUpOperation(operation) {
    //when an operation is set, save the current number
    //and set it so the new number appears after you start typing
    previousOperation = operation;
    previousNum = numToDisplay; 
    numToDisplay = '' //reset numToDisplay so the new number will appear
}

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    display.innerText = numToDisplay;

    //get number buttons and add event listeners
    const numberButtons = document.getElementsByClassName('numberButton');
    for (var i = 0; i < numberButtons.length; i++) {
        numberButtons[i].addEventListener('click', appendNum);
    } 
    
    const operationButtons = document.getElementsByClassName('calculatorButton');
    for (var i = 0; i < operationButtons.length; i++) {
        operationButtons[i].addEventListener('click', doOp);
    }
})


