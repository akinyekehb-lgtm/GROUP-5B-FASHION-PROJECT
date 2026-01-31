document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("enrollForm");
    const message = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const course = document.getElementById("course").value;

        if (name === "" || email === "" || phone === "" || course === "") {
            alert("Please fill in all required fields.");
            return;
        }

        message.textContent = "✅ Registration successful! We will contact you soon.";
        form.reset();
    });
});
