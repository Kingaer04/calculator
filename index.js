function chooseOperator() {
    if(currentOperand.innerHTML === "")return
    if(previousOperand.innerHTML != "") {
        current = parseFloat(currentOperand.innerHTML)
        previous = parseFloat(previousOperand.innerHTML)
        if(isNaN(previous) || isNaN(current))return;
        switch(operator) {
            case "+":
                compute = previous + current
                break;
            case "-":
                compute = previous - current
                break;
            case "*":
                compute = previous * current
                break;
            case "/":
            compute = previous / current
            break;      
        }
        currentOperand.innerHTML = compute
        previousOperand.innerHTML = ''
    }
    previousOperand.innerHTML = currentOperand.innerHTML
    currentOperand.innerHTML = '' 
    // previousOperand.innerHTML = compute
}

let numberOperand = $(".nor-btn")
let operatorOperand = $(".operand-btn")
const delButton = document.getElementById("del-btn")
let resetButton = document.querySelector("#reset-btn")
let equalButton = document.getElementById("equals-to-btn")
let currentOperand = document.getElementById("current-operand")
let previousOperand = document.querySelector("#previous-operand")
let compute = 0

const toggle = document.getElementById("mode")
const body = document.querySelector("body")
const button = $("button")
let screen = document.getElementById("main-screen")
const mainBody = document.getElementById("calculator")
const h4h = $("h4")
const h6h = $("h6")

periodClicked =false;
let firstinput = true

// Toggle
toggle.onclick = function(){
    toggle.classList.toggle("active");
    body.classList.toggle("active");
    screen.classList.toggle("active");
    mainBody.classList.toggle("active");
    button.toggleClass("act");
    delButton.classList.toggle("active");
    equalButton.classList.toggle("active")
    resetButton.classList.toggle("active")
    currentOperand.classList.toggle("active")
    h4h.toggleClass("active")
    h6h.toggleClass("active")
    previousOperand.classList.toggle("active")
    
}

$(".nor-btn").click(function(){
    if(firstinput){
        currentOperand.innerHTML = $(this).html(); // Using jQuery's html() method
        firstinput = false;
        return;
    }
    if($(this).html() === "."){
        if(periodClicked) return;
        periodClicked = true;
    }
    currentOperand.innerHTML += $(this).html(); // Using jQuery's html() method
});

operatorOperand.each(function(){
    $(this).click(function(){
        operator = $(this).html()
        chooseOperator();
        // previousOperand.innerHTML = compute
    })
})

resetButton.addEventListener("click", function(){
    currentOperand.innerHTML = ""
    periodClicked = false;
    firstinput = true
    currentOperand.innerHTML = "0"
    previousOperand.innerHTML = ""
})

delButton.addEventListener("click", function(){
    currentOperand.innerHTML = currentOperand.innerHTML.toString().slice(0,-1)
})

