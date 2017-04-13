$(function ($) {
    var h = window.outerHeight,
        r,t = window.innerHeight,
        $window=$(window);

        $ToTop = $('#photo-box-4'),
        H=$(document).height();
    ;
    $(window).scroll(function () {
        var r = $window.scrollTop() - t;
        if (r >  H - 400) {
            $ToTop.css({
                opacity: 1
            });
            $ToTop.css({
                display: 'block'
            });
        }
        if (r > 0) {
            var op = r / 650;
            $ToTop.css({
                opacity: op
            });
            $ToTop.css({
                display: 'block'
            });
        } else $ToTop.css({
            display: 'none'
        });
    });
});

$(function ($) {
    var h = window.outerHeight,
        r,t = window.innerHeight,$window=$(window);
        $ToTop2 = $('#photo-box-5'),H=$(document).height();
    ;
    $(window).scroll(function () {
        var r = $window.scrollTop() - t;
        if (r >  H - 400) {
            $ToTop2.css({
                opacity: 1
            });
            $ToTop2.css({
                display: 'block'
            });
        }
        if (r > 0) {
            var op = r / 1100;
            $ToTop2.css({
                opacity: op
            });
            $ToTop2.css({
                display: 'block'
            });
        } else $ToTop2.css({
            display: 'none'
        });
    });
});

$(function ($) {
    var h = window.outerHeight,
        r,t = window.innerHeight,$window=$(window);
        $ToTop3 = $('#photo-box-6'),H=$(document).height();
    ;
    $(window).scroll(function () {
        var r = $window.scrollTop() - t;
        if (r >  H - 200) {
            $ToTop3.css({
                opacity: 1
            });
            $ToTop3.css({
                display: 'block'
            });
        }
        if (r > 0) {
            var op = r / 1800;
            $ToTop3.css({
                opacity: op
            });
            $ToTop3.css({
                display: 'block'
            });
        } else $ToTop3.css({
            display: 'none'
        });
    });
});
