var jqBar = jQuery(".skill_block");
var jqBarStatus = true;
jQuery(window).scroll(function () {
    var scrollEvent =
        jQuery(window).scrollTop() >
        jqBar.position().top - jQuery(window).height();
    if (scrollEvent && jqBarStatus) {
        jqBarStatus = false;
        jQuery(".skill_block__value").each(function () {
            jQuery(this)
                .find(".skill_block__bar")
                .animate({
                        width: jQuery(this).attr("data-percent")
                    },
                    4000
                );
        });
    }
});
