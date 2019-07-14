// slide out navigation animation
$(document).ready(function () {
    let isOpen = false;
    $("#nav_hamburger").on("click", function () {
        isOpen = !isOpen;
        if (isOpen) {
            $(".sidenav")
                .addClass("sidenav_slideIn")
                .removeClass("sidenav_slideOut");
        } else {
            $(".sidenav")
                .removeClass("sidenav_slideIn")
                .addClass("sidenav_slideOut");
        }
        $("#nav_hamburger").toggleClass("nav_hamburger-close");
    });
});
