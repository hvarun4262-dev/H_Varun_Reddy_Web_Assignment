$(document).ready(function () {
    // Display the current year in the footer.
    $("#currentYear").text(new Date().getFullYear());

    // Validate the contact form.
    $("#contactForm").on("submit", function (event) {
        event.preventDefault();

        let valid = true;

        $(".error").text("");
        $("#successMessage").hide();

        const name = $("#fullName").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();

        if (name.length < 2) {
            $("#nameError").text("Enter a name with at least 2 characters.");
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            $("#emailError").text("Enter a valid email address.");
            valid = false;
        }

        if (message.length < 10) {
            $("#messageError").text("Enter a message with at least 10 characters.");
            valid = false;
        }

        if (valid) {
            $("#successMessage").fadeIn(200);
        }
    });

    // Clear validation messages when the form is reset.
    $("#contactForm").on("reset", function () {
        $(".error").text("");
        $("#successMessage").hide();
    });

    // Show or hide the bio-data declaration.
    $("#toggleDeclaration").on("click", function () {
        $("#declarationText").slideToggle(200);

        const hidden = $(this).text() === "Hide Declaration";

        $(this).text(
            hidden ? "Show Declaration" : "Hide Declaration"
        );
    });

    // Print the resume or save it as a PDF.
    $(".print-page").on("click", function () {
        window.print();
    });
});