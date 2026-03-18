console.log("✅ script.js connected");

// Ambil element
const studentNameInput = document.getElementById("studentName");
const pw1Input = document.getElementById("pw1");
const pw2Input = document.getElementById("pw2");
const calculateBtn = document.getElementById("btnCalc");
const outputBox = document.getElementById("outputBox");

// Event listener untuk button
calculateBtn.addEventListener("click", function() {
    console.log("✅ Button clicked");

    const name = studentNameInput.value.trim();
    const mark1 = Number(pw1Input.value);
    const mark2 = Number(pw2Input.value);

    // Validation
    if (name === "") {
        outputBox.className = "alert alert-danger mt-3 mb-0";
        outputBox.innerHTML = "⚠️ Please enter student name";
        return;
    }

    if (mark1 > 100 || mark2 > 100) {
        outputBox.className = "alert alert-danger mt-3 mb-0";
        outputBox.innerHTML = "⚠️ Marks cannot exceed 100";
        return;
    }

    // Calculation
    const total = mark1 + mark2;
    const average = total / 2;
    let grade = "";

    if (average >= 80) grade = "Excellent";
    else if (average >= 60) grade = "Good";
    else if (average >= 40) grade = "Satisfactory";
    else grade = "Fail";

    // Display result
    outputBox.className = "alert alert-success mt-3 mb-0";
    outputBox.innerHTML = `
        <strong>Student:</strong> ${name}<br>
        <strong>Total:</strong> ${total}<br>
        <strong>Average:</strong> ${average.toFixed(2)}<br>
        <strong>Grade:</strong> ${grade}
    `;
});