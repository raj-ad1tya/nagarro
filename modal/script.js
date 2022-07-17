$(document).ready(() => {
    function toggleModal() {
        if($("#open-modal").html()=="Open modal") {
            $("#open-modal").html("Close modal");
        }
        else {
            $("#open-modal").html("Open modal");
        }
    }

    $("#open-modal").click( () => {
        $("#box").toggle();
        toggleModal();
    });

    $("#close-btn").click( () => {
        $("#box").hide();
        toggleModal();
    });

    $("#submit-btn").click( () => {
        let isUsernameValid = false;
        let isEmailValid = false;

        let username = $("#username").val();

        if (username.length < 3) {
            isUsernameValid = false;
            $("#username-warning").text("Invalid username");
        }
        else {
            isUsernameValid = true;
            $("#username-warning").text("");
        }

        let email = $("#email").val();
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            isEmailValid = false;
            $("#email-warning").text("Invalid email");
        }
        else {
            isEmailValid = true;
            $("#email-warning").text("");
        }

        if (isUsernameValid && isEmailValid) {
            $("#close-btn").click();
        }
    });
});
