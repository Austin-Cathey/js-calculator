const outputWindow = document.getElementById('#output');
const number = document.querySelectorAll('.number,');
const operator = document.querySelectorAll('.operator'); 
const equal = document.getElementById('#equal');
const clear = document.getElementById('#clear');
const misMath = false;
let numbers = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
]


// doesn't work

for (let button of number) {
    button.addEventListener('click', (e) => {
        outputWindow.textContent += e.target.textContent
    })
};

// doesn't work

/* number.forEach(button => {
    button.addEventListener('click', () => {
        outputWindow.appendNumber(button.innerText)
        
    })
}) */