document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hobby-button").addEventListener("click", function() {
        document.getElementById("hobby-message").textContent = "Thanks for your interest in my hobby!";
    });

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("form-response").textContent = "Thank you for your message!";
    });
});
