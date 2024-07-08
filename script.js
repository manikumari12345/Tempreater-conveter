function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let outputTemperature;

    if (isNaN(inputTemperature)) {
        document.getElementById('result').innerText = 'Please enter a valid temperature.';
        return;
    }

    if (inputUnit === outputUnit) {
        outputTemperature = inputTemperature;
    } else if (inputUnit === 'Celsius') {
        if (outputUnit === 'Fahrenheit') {
            outputTemperature = (inputTemperature * 9/5) + 32;
        } else if (outputUnit === 'Kelvin') {
            outputTemperature = inputTemperature + 273.15;
        }
    } else if (inputUnit === 'Fahrenheit') {
        if (outputUnit === 'Celsius') {
            outputTemperature = (inputTemperature - 32) * 5/9;
        } else if (outputUnit === 'Kelvin') {
            outputTemperature = ((inputTemperature - 32) * 5/9) + 273.15;
        }
    } else if (inputUnit === 'Kelvin') {
        if (outputUnit === 'Celsius') {
            outputTemperature = inputTemperature - 273.15;
        } else if (outputUnit === 'Fahrenheit') {
            outputTemperature = ((inputTemperature - 273.15) * 9/5) + 32;
        }
    }

    document.getElementById('result').innerText = `Result: ${outputTemperature.toFixed(2)} ${outputUnit}`;
}
