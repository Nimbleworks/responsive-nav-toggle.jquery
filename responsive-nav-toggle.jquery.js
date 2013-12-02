(function ($) {
    'use strict';
    $(document).ready(function () {
        $('.nimbleworks-nav').each(function () {
            var $this, navBtn, closedClass, openClass, isOpen, btnClickHandler;
            $this = $(this);
            navBtn = $('#' + $this.attr('data-toggleBtn'));
            closedClass = 'nimbleworks-nav-closed';
            openClass = 'nimbleworks-nav-open';
            btnClickHandler = function (evt) {
                if (!isOpen && evt.target === navBtn[0]) {
                    $this.removeClass(closedClass);
                    $this.addClass(openClass);
                    isOpen = true;
                } else if (isOpen && !$this.find(evt.target).length) {
                    $this.addClass(closedClass);
                    $this.removeClass(openClass);
                    isOpen = false;
                }
            };
            $(document).on('click.nimbleworks.navToggle', btnClickHandler);
        });
    });
}(jQuery));