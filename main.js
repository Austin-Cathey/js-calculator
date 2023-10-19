let outputWindow = document.getElementById('output');
let numOps = document.querySelectorAll('.number, .operator');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let misMath = false

for (let button of numOps) {
    button.addEventListener('click', (EventTarget) => {
        if (outputWindow.innerText.length <= 20) {
            if (button.classList.contains('number') &&  misMath) {
                outputWindow.innerText = button.innerText;
            }
            else {
                outputWindow.innerText += button.innerText;
            }
            misMath = false
        }
    })
}
