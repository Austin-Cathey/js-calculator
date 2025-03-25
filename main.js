// old
/* const display = document.getElementById('output');
// const number = document.querySelectorAll('.number');
const numbsAndOps = document.querySelectorAll('.number, .operator'); 
const enter = document.getElementById('enter');
const clear = document.getElementById('clear');
//const math = document.querySelectorAll('.operator, #equal')
let mathToCompute = '0';



for (let digit of numbsAndOps) { 
    digit.addEventListener('click', function() { 
        display.innerText += digit.innerText; 
        mathToCompute += digit.innerText;
    })
}

enter.addEventListener('click', function() {
    let result = eval(mathToCompute);
    display.innerText = result;
})



clear.addEventListener('click', function() {
    display.innerText = '';
    mathToCompute = '0';
}) */



//insert numbers

/* for (let button of number) {
    button.addEventListener('click', (e) => {
        outputWindow.textContent += e.target.textContent
    })
}; */

//insert operators

/* for (let button of operator) {
    button.addEventListener('click', (e) => {
        outputWindow.textContent += e.target.textContent
    })
}; */





//single clear

/* document.getElementById('clear').addEventListener('click', function(){
    outputWindow.textContent = outputWindow.textContent.slice(0, -1);
  }
  ) */

//ran out of time to make work
/* 
  equal.addEventListener('click', (e) => {
    let answer = eval(outputWindow.textContent.replace());
    outputWindow.textContent = answer;

  }
  )
  */
  
//new
 
 const display = document.getElementById('output');
const numbsAndOps = document.querySelectorAll('.number, .operator'); 
const enter = document.getElementById('enter');
const clear = document.getElementById('clear');
let mathToCompute = '';

for (let digit of numbsAndOps) { 
    digit.addEventListener('click', function() { 
        let char = digit.textContent;
        
        // Prevent multiple decimals in a single number
        if (char === '.' && mathToCompute.match(/[\d]+\.[\d]*$/)) {
            return; 
        }

        mathToCompute += char;
        display.textContent = mathToCompute;
    });
}

enter.addEventListener('click', function() {
    try {
        let result = eval(mathToCompute);
        display.textContent = result;
        mathToCompute = result.toString(); // Store the result for continued calculations
    } catch (error) {
        display.textContent = 'Error';
        mathToCompute = '';
    }
});

clear.addEventListener('click', function() {
    display.textContent = '';
    mathToCompute = '';
});
