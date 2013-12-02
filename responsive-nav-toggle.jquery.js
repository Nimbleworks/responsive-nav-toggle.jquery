(function ($) {
    'use strict';
    $(document).ready(function () {
        $('.nimbleworks-nav').each(function () {
            var that, navBtn, closedClass, openClass, isOpen, btnClickHandler;
            that = this;
            navBtn = $('#' + $(this).attr('data-toggleBtn'));
            closedClass = 'nimbleworks-nav-closed';
            openClass = 'nimbleworks-nav-open';
            btnClickHandler = function (evt) {
                if (!isOpen && evt.target === navBtn[0]) {
                    $(that).removeClass(closedClass);
                    $(that).addClass(openClass);
                    isOpen = true;
                } else if (isOpen && !$(that).find(evt.target).length) {
                    $(that).addClass(closedClass);
                    $(that).removeClass(openClass);
                    isOpen = false;
                }
            };
            $(document).on('click.nimbleworks.navToggle', btnClickHandler);
        });
    });
}(jQuery));