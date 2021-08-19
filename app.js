function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }

}

function generatePin() {
    document.getElementById('pin-input').value = getPin();
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('calc-input');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        else if (number == 'Del') {
            const calcInputStr = calcInput.value;
            calcInput.value = calcInputStr.slice(0, -1);
        }
    }
    else {
        calcInput.value = calcInput.value + number;
    }
});

function matchPin(event) {
    const pin = document.getElementById('pin-input').value;
    const input = document.getElementById('calc-input').value;
    const error = document.getElementById('error');
    const success = document.getElementById('success');
    const tryit = document.getElementById('try');
    tryit.innerText = parseInt(tryit.innerText);
    if (tryit.innerText > 0 && pin.length > 0) {

        if (pin == input) {
            error.style.display = 'none';
            success.style.display = 'block';

        }
        else {
            success.style.display = 'none';
            error.style.display = 'block';
            tryit.innerText -= 1;
        }
    }


}