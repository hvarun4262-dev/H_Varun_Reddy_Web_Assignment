$(document).ready(function () {


    /* =================================
       CURRENT YEAR
    ================================= */

    $("#currentYear").text(
        new Date().getFullYear()
    );


    /* =================================
       CONTACT FORM VALIDATION
    ================================= */

    $("#contactForm").submit(function (event) {

        event.preventDefault();


        let valid = true;


        // Clear old error messages
        $(".error").text("");

        $("#successMessage").hide();


        // Get values
        let name =
            $("#fullName").val().trim();

        let email =
            $("#email").val().trim();

        let message =
            $("#message").val().trim();


        /* Name Validation */

        if (name.length < 2) {

            $("#nameError").text(
                "Please enter your name."
            );

            valid = false;
        }


        /* Email Validation */

        let emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            $("#emailError").text(
                "Please enter a valid email address."
            );

            valid = false;
        }


        /* Message Validation */

        if (message.length < 10) {

            $("#messageError").text(
                "Message should contain at least 10 characters."
            );

            valid = false;
        }


        /* Successful Submission */

        if (valid) {

            $("#successMessage")
                .fadeIn(300)
                .delay(1500)
                .fadeOut(300);


            $("#contactForm")[0].reset();
        }

    });


    /* =================================
       BIO-DATA DECLARATION TOGGLE
    ================================= */

    $("#toggleDeclaration").click(function () {

        $("#declarationText").slideToggle(300);


        if (
            $(this).text()
            === "Hide Declaration"
        ) {

            $(this).text(
                "Show Declaration"
            );

        } else {

            $(this).text(
                "Hide Declaration"
            );

        }

    });


    /* =================================
       PRINT RESUME
    ================================= */

    $(".print-page").click(function () {

        window.print();

    });

});