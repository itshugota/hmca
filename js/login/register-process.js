var registerWarned = false;

$("#register-form-real input").focusout(function(e) {
    if (registerWarned) {
        $("#register-email-warning").style("display", "none", "important");
        $("input[name='user-email']").toggleClass("is-invalid-input");
        registerWarned = false;
    }
});

$("#register-form-real").on('submit', function(e) {
    e.preventDefault();
});
$("#register-form-real").on('reset', function(e) {
    $("#register-email-warning").style("display", "none", "important");
});

$(document).on("formvalid.zf.abide", function(ev, frm) {
    if (frm.attr('id') == "register-form-real") {
        var data = $("#register-form-real").serialize();

        $.ajax({
            type: 'POST',
            url: 'php/login/register-process.php',
            data: data,
            beforeSend: function() {
                $("#btn-register").toggleClass("processing");
            },
            success: function(response) {
                if (response == "OK") {
                    alert("Đăng ký thành công!");
                } else {
                    if (response == "Duplicate") {
                        $("#register-email-warning").css("display", "block");
                        $("input[name='register-user-email']").toggleClass("is-invalid-input");
                        registerWarned = true;
                    }
                }
            }
        });

        $("#btn-register").toggleClass("processing");

        return false;
    }
});
