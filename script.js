document.addEventListener('DOMContentLoaded', function () {
    const nameEl = document.querySelector('.Name');
    const form = document.querySelector('.contact-form');
    const submitButton = document.querySelector('.submit');

    const nameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const requirementInput = document.getElementById('requirement');
    const Phone = document.getElementById('contactnumber');

    function toggleText() {
        if (nameEl.textContent === "Tanmay Seth") {
            nameEl.textContent = "Developer";
        } else {
            nameEl.textContent = "Tanmay Seth";
        }
    }

    setInterval(toggleText, 3500);

    function sendEmail() {
        const fromAddress = emailInput.value.trim();
        const toAddress = 'sethtanmay72@gmail.com';

        if (!fromAddress) {
            Swal.fire({
                title: "Error",
                text: "Please provide a valid email address.",
                icon: "error"
            });
            return;
        }

        const body = `Name: ${nameInput.value}<br>Message: ${messageInput.value}<br>Requirement: ${requirementInput.value}<br>Phone: ${Phone.value}<br> Email: ${emailInput.value}`;

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "sethtanmay72@gmail.com",
            Password: "CD1B3A68A12344DD0AA63EB915E136401589",
            To: toAddress,
            From: toAddress,
            Subject: "Contact Form Submission",
            Body: body
        }).then(
            message => {
                if (message === "OK") {
                    Swal.fire({
                        title: "Success",
                        text: "Email sent successfully!",
                        icon: "success"
                    });
                    form.reset();
                } else {
                    Swal.fire({
                        title: "Error",
                        text: "Failed to send email. Please try again later.",
                        icon: "error"
                    });
                    console.log(message);
                    form.reset();
                }
            }
        ).catch(error => {
            Swal.fire({
                title: "Error",
                text: "An error occurred while sending the email. Please try again later.",
                icon: "error"
            });
            console.error("Email sending error:", error);
        });
    }

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        sendEmail();
    });
});
