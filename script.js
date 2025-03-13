
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    try {
        let expression = document.getElementById('display').value;
        document.getElementById('display').value = eval(expression);
    } catch (e) {
        document.getElementById('display').value = "Error";
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function sqrt() {
    let value = document.getElementById('display').value;
    document.getElementById('display').value = Math.sqrt(value);
}

function log() {
    let value = document.getElementById('display').value;
    document.getElementById('display').value = Math.log10(value);
}

function pow() {
    let value = document.getElementById('display').value;
    document.getElementById('display').value = Math.pow(value, 2);
}

function exp() {
    let value = document.getElementById('display').value;
    document.getElementById('display').value = Math.exp(value);
}

function negate() {
    let value = document.getElementById('display').value;
    if (value) {
        document.getElementById('display').value = value.startsWith('-') ? value.slice(1) : '-' + value;
    }
}