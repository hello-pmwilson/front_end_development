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

function newOperation() {
    let runningNum = 5; //save numtodisplay
    let operationPFT = addNumbers;

    let operaation = function() {
        return console.log(operationPFT(5,6));
    }
    operaation.revealALL = function() {
        return console.log("runningNum is" + runningNum + "and operation is" + operationPFT)
    }
    return operaation;
}

numToDisplay = 6;
var thisoperation = newOperation(); 
thisoperation.revealALL();
console.log(thisoperation);

function theOperation() {
    //an operation key has been hit, not equals
    workingOperation = function() {
        var savedNumber = 5; 
        addNumbers(5,5) 
}}

function doOp(event) {
    //an operation key has been hit
    //log the operation then check if the operation needs to happen yet
    operation = operationDictionary[event.target.value];
    console.log(operation);
    
    if (numToDisplay != "") { 
        console.log("numtodisplay not blank");
        //numToDisplay not blank, something needs to happen
        if (previousNum = "") {
            //previousNum is blank, so this is the first input number
            //save the previous operation for next time
            //set prevNum
            //and reset for the new number
            setUpOperation(operation);
        } else {
            //if previousNum is not blank, an operation should be happening with the new number
            if (previousOperation != "") {
                //check if a different operator has been clicked previously
                console.log("previous operation is not blank, act as equal sign in running total");
                //if multiple operations are happening in a row
                //display the running total as new operators are hit
                currentNum = numToDisplay;
                console.log(previousOperation);
                equals(previousNum, currentNum);

            } else {
                //pass, because this shouldn't be able to happen
            }
        }
            
    } else {
        if (currentNum != "") {
            //previous operations have occured, repeat them
            equals(previousNum, currentNum);                
            displayNumber();
            setUpOperation(operation);
        } else {
            //no operations have occured yet, and nothing has been inputted
           //only one number has been inputted, theyve changed their mind about the operation
            previousOperation = operation; //only change the previousOperation
        }
    }

}

function setUpOperation(operation) {
    //when an operation is set, save the current number
    //and set it so the new number appears after you start typing
    if (operation != "") {
    previousOperation = operation;
    }     
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


