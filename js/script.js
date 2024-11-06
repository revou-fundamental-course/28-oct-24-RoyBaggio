// ini java script

function calculateBMI() {
    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Validate inputs
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0 || age <= 0) {
        alert('Please enter valid values for weight, height, and age.');
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    document.getElementById('bmi-result').textContent = bmi.toFixed(1);

    // Determine BMI category
    let status = "";
    if (bmi < 18.5) {
        status = "Kekurangan Berat Badan";
    } else if (bmi < 24.9) {
        status = "Berat Badan Kamu Ideal";
    } else if (bmi < 29.9) {
        status = "Kamu Kelebihan berat Badan";
    } else {
        status = "Obesitas";
    }

    document.getElementById('bmi-status').textContent = `Status: ${status}`;

    // Show result section in full screen
    document.body.classList.add('show-result');
}

function resetForm() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('age').value = '';
    document.body.classList.remove('show-result');
    document.getElementById('result').style.display = 'none';
}

function goBack() {
    // Return to input form
    document.body.classList.remove('show-result');
}
