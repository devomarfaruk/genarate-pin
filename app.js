function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    // console.log(pin)
    const pinField = document.getElementById('pin-field');
    const pinString = pin + '';
    if (pinString.length === 4) {
        pinField.value = pin
    } else {
        return generatePin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function () {
    generatePin();
})

document.getElementById('btn-calculate').addEventListener('click', function (event) {
    const btnCalculate = event.target.innerText;
    const calculateField = document.getElementById('calculate-field');
    const previousNumber = calculateField.value;
    if (isNaN(btnCalculate)) {
        if (btnCalculate === 'C') {
            calculateField.value = '';
        }
        else if (btnCalculate === '<') {
            const digits = previousNumber.split('')
            digits.pop();
            const remainDigits = digits.join('')
            calculateField.value = remainDigits
        }
    } else {
        const newNumber = previousNumber + btnCalculate;
        calculateField.value = newNumber;
    }
})

document.getElementById('pin-submit').addEventListener('click', function () {
    const pinField = document.getElementById('pin-field');
    const pin = pinField.value;
    const calculateField = document.getElementById('calculate-field');
    const calculate = calculateField.value;
    const pinSuccess = document.getElementById('pin-success');
    const pinError = document.getElementById('pin-error');
    if (pin === calculate) {
        pinSuccess.style.display = 'block';
        pinError.style.display = 'none';
    } else {
        pinError.style.display = 'block';
        pinSuccess.style.display = 'none';
    }
})