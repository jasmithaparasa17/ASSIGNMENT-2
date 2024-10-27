function showConfirmation(event) {
event.preventDefault(); // Prevents the default form submission
alert("Your details have been recorded successfully.");
document.querySelector("form").submit(); // Submits the form after the alert
}
    
