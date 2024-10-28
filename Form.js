// JavaScript validation function
function validateForm(event) {
    event.preventDefault();
    
    // Retrieve form elements
    const name = document.getElementById("name").value.trim();
    const education = document.querySelector('input[name="education"]:checked');
    const gender = document.querySelector('input[name="gender"]:checked');
    const position = document.getElementById("position").value;
    
    // Validation checks
    if (!name) {
    alert("Please enter your name.");
    return false;
    }
    
    if (!education) {
    alert("Please select your educational qualification.");
    return false;
    }
    
    if (!gender) {
    alert("Please select your gender.");
    return false;
    }
    
    if (!position) {
    alert("Please select a position to apply for.");
    return false;
    }
    
    // If all validations pass
    alert("Your job application form is valid and ready to be submitted!");
    document.getElementById("jobApplicationForm").submit(); // Submit the form
    }
    
    
    