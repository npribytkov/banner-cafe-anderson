var $elem = $('.cookie.animate-hide-show');

function change() {
    $elem.each(function (i, el) {
        setTimeout(function () {
            console.log(i)
            $elem.removeClass('hide');
            $(el).addClass('hide');
        }, 1000 * i);
    });
}
change();
setInterval(change, 4000);