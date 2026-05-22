function validateForm(event) {
    // 1. Prevents the page from instantly reloading so the user can see the custom popup
    if (event) event.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // 2. Simple validation check
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields");
        return false;
    }

    // 3. Find and display the custom centered popup
    let customAlert = document.getElementById("customAlert");
    if (customAlert) {
        customAlert.style.display = "flex"; // "flex" activates the centering magic
    }

    return false; 
}

// 4. Handle closing the popup when the user clicks "OK"
document.addEventListener("DOMContentLoaded", function() {
    let alertOkBtn = document.getElementById("alertOkBtn");
    if (alertOkBtn) {
        alertOkBtn.addEventListener("click", function() {
            let customAlert = document.getElementById("customAlert");
            if (customAlert) customAlert.style.display = "none"; // Hide the box
            
            // Clear out the 3 lines after a successful submission
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        });
    }
});
