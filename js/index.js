$(document).foundation();

function isScrolledIntoView(elem) {
    //alert("method invoked");
    var docViewTop = $(window).scrollTop() * 1.2;
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((docViewBottom >= elemBottom) || (elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

var passed = [false, false, false];

$(document).ready(function() {
    $("#feature-1").css("visibility", "hidden");
    $("#feature-2").css("visibility", "hidden");
    $("#feature-3").css("visibility", "hidden");

    function checkScroll() {
        if (isScrolledIntoView($('#feature-1'))) {
            if (!passed[0]) {
                passed[0] = true;
                $("#feature-1").css("visibility", "visible");
                $("#feature-1 img:nth-child(1)").addClass('animated fadeInRight');
                $("#feature-1 img:nth-child(2)").addClass('animated fadeInDown');
            }
        }
        if (isScrolledIntoView($('#feature-2'))) {
            if (!passed[1]) {
                passed[1] = true;
                $("#feature-2").css("visibility", "visible");
                $("#feature-2 img:nth-child(1)").addClass('animated fadeInLeft');
                $("#feature-2 img:nth-child(2)").addClass('animated fadeInDown');
            }
        }
        if (isScrolledIntoView($('#feature-3'))) {
            if (!passed[2]) {
                passed[2] = true;
                $("#feature-3").css("visibility", "visible");
                $("#feature-3 img:nth-child(1)").addClass('animated fadeInDown');
                $("#feature-3 img:nth-child(2)").addClass('animated fadeInRight');
                $("#feature-3 img:nth-child(3)").addClass('animated fadeInLeft');
            }
        }
    }
    checkScroll();
    $(window).scroll(checkScroll);
});
