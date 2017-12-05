var loginWarned = [false, false];

$("#login-form-real input").focusout(function(e) {
    if (loginWarned[0]) {
        $("#login-email-warning").style("display", "none", "important");
        $("input[name='login-user-email']").toggleClass("is-invalid-input");
        loginWarned[0] = false;
    }
    if (loginWarned[1]) {
        $("#login-password-warning").style("display", "none", "important");
        $("input[name='login-user-password']").toggleClass("is-invalid-input");
        loginWarned[1] = false;
    }
});

$("#login-form-real").on('submit', function(e) {
    e.preventDefault();
});
$("#login-form-real").on('reset', function(e) {
    $("#login-email-warning").style("display", "none", "important");
    $("#login-password-warning").style("display", "none", "important");
});

function warnNoEmail() {
    $("#login-email-warning").css("display", "block");
    $("input[name='login-user-email']").toggleClass("is-invalid-input");
    loginWarned[0] = true;
}

function warnWrongPassword() {
    $("#login-password-warning").css("display", "block");
    $("input[name='login-user-password']").toggleClass("is-invalid-input");
    loginWarned[1] = true;
}

function processLoginSuccess() {
    window.location.href = "client/dist/index.html"
}

$(document).on("formvalid.zf.abide", function(ev, frm) {
    if (frm.attr('id') == "login-form-real") {
        var data = $("#login-form-real").serialize();

        $.ajax({
            type: 'POST',
            url: 'php/login/login-process.php',
            data: data,
            beforeSend: function() {
                $("#btn-login").toggleClass("processing");
            },
            success: function(response) {
                if (response == "OK") {
                    processLoginSuccess();
                } else {
                    if (response == "Email doesn't exist") {
                        warnNoEmail();
                    } else if (response == "Wrong password") {
                        warnWrongPassword();
                    }
                }
            },
            error: function(xhr, status, error) {
                if (xhr.responseText == "OK") {
                    processLoginSuccess();
                } else {
                    if (xhr.responseText == "Email doesn't exist") {
                        warnNoEmail();
                    } else if (xhr.responseText == "Wrong password") {
                        warnWrongPassword();
                    }
                }
            }
        });

        $("#btn-login").toggleClass("processing");

        return false;
    }
});
