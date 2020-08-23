
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('default_service', 'template_JoyOOxUq', this)
        .then(function (response) {
            swal("Message Sent Sucessfully", "Thank you for your message. We will get back to you as soon as possible", "success");
            document.getElementById('contact-form').reset();
        }, function (error) {
                swal("Message Error", "Unfortunately your message couldn't be sent at this time. Please try again later or email Liam at liam@lmes.ie directly.", "error");
        });
    });
}

