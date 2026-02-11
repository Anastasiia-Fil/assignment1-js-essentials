//FOOTER
(function () {
  const now = new Date();

  const year = document.getElementById("year");
  const today = document.getElementById("today");

  if (year !== null) {
    year.textContent = now.getFullYear();
  }

  if (today !== null) {
    today.textContent = now.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
})();

   //Function 
  function markToGrade() {
    const input = document.getElementById("markInput").value.trim();
    const messageEl = document.getElementById("validationMessage");
    const resultEl = document.getElementById("gradeResult");
  
    // Reset messages
    messageEl.style.display = "none";
    resultEl.style.display = "none";
    messageEl.textContent = "";
    resultEl.textContent = "";
  
    // Empty input
    if (input === "") {
      showMessage("Please enter a mark.", messageEl);
      return;
    }
  
    // Convert to number
    const mark = parseInt(input);
  
    // Not a number
    if (isNaN(mark)) {
      showMessage("Mark must be a numeric value.", messageEl);
      return;
    }
  
    // Negative number
    if (mark < 0) {
      showMessage("Mark cannot be negative.", messageEl);
      return;
    }
  
    // Above 100
    if (mark > 100) {
      showMessage("Mark must be less than or equal to 100.", messageEl);
      return;
    }
  
    // Determine grade
    let grade = "";
  
    if (mark >= 90) {
      grade = "A";
    } else if (mark >= 80) {
      grade = "B";
    } else if (mark >= 70) {
      grade = "C";
    } else if (mark >= 60) {
      grade = "D";
    } else if (mark >= 50) {
      grade = "E";
    } else {
      grade = "F";
    }
  
    // Show result
    resultEl.textContent = `Your grade is: ${grade}`;
    resultEl.style.display = "block";
  }
  
  function showMessage(text, element) {
    element.textContent = text;
    element.style.display = "block";
  }
  