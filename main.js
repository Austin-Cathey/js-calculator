const outputWindow = document.getElementById('output');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator'); 
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');
const math = document.querySelectorAll('.operator, #equal')
const misMath = false;
let numbers = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
]


//insert numbers

for (let button of number) {
    button.addEventListener('click', (e) => {
        outputWindow.textContent += e.target.textContent
    })
};

//insert operators

for (let button of operator) {
    button.addEventListener('click', (e) => {
        outputWindow.textContent += e.target.textContent
    })
};

//single clear

document.getElementById('clear').addEventListener('click', function(){
    outputWindow.textContent = outputWindow.textContent.slice(0, -1);
  }
  )

//ran out of time to make work

  equal.addEventListener('click', (e) => {
    let answer = eval(outputWindow.textContent.replace());
    outputWindow.textContent = answer;
    misMath = true;
  }
  )
 
  

 