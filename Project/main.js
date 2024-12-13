document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    const formMessage = document.getElementById("form-message");
    formMessage.textContent = `Thank you for reaching out, ${name}! We will get back to you soon.`;
    formMessage.style.color = "green";


    document.getElementById("contact-form").reset();
});
