function appendToOutput(value) {
  document.getElementById('output').value += value;
}

function clearOutput() {
  document.getElementById('output').value = '';
}

function calculate() {
  try {
    let result = eval(document.getElementById('output').value);
    document.getElementById('output').value = result;
  } catch (error) {
    document.getElementById('output').value = 'Error';
  }
}