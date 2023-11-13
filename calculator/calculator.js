//initiate variables we need
var numToDisplay = ""; //set the starting display
let previousNum = 0; //set first number
var clearAfterClick = false; //if true, clear the display after button click
var previousOperation = "";


function appendNum(event) { 
    //when clicked, check and clear if display needs to be cleared
    if (clearAfterClick == true) {
        clearDisplay();
        clearAfterClick = false;
    }
    //when clicked, append the number and display it
    numToDisplay += event.target.value; 
        console.log("this happened");
    displayNumber(); 

} 

function displayNumber() { 
    const display = document.getElementById('display');
    display.innerText = String(numToDisplay);
    }

function clearDisplay() {
    numToDisplay = "";
    displayNumber();
}
function addNumber() {
    console.log("add button hit");
    var operation = "add";
    //accidental button hit before number input
    if (numToDisplay == "") {
        //pass
        console.log("numToDisplay blank, nothing happens");
    } else {
        console.log("numtodisplay not blank");
        //check if a different operator has been clicked previously
        if (previousOperation == "add") {
                console.log("previous operation is add, act as equal sign in running total");
            //if multiple operations are happening in a row
            //display the running total as new operators are hit
            numToDisplay = parseFloat(previousNum) + parseFloat(numToDisplay);
            displayNumber();
            previousOperation = "add";
            setUpOperation(operation);
        } else {
            console.log("first time add is hit, set up future operation");
            //if not doing a running total
            //set previousOperation to add for future operator button presses
            previousOperation = "add";
            setUpOperation(operation);
        }
        
        
    }
}

function setUpOperation(operation) {
    //when an operation is set, save the current number
    //and set it so the new number appears after you start typing
    previousOperation = operation;
    previousNum = numToDisplay; 
    clearAfterClick = true
}

function equals() {
    if (previousOperation == "add") {
        addNumber();
    }
    previousOperation = "";
}

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    display.innerText = numToDisplay;

    //get number buttons and add event listeners
    const numberButtons = document.getElementsByClassName('numberButton');
    for (var i = 0; i < numberButtons.length; i++) {
        numberButtons[i].addEventListener('click', appendNum)
    };  
    
    //add button
    const addButton = document.getElementById('add');
    addButton.addEventListener('click', addNumber);
})