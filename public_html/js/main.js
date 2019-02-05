$(function ($) {
    $('#test').click(function () {
        var allright = true;
        $.each($('.checked_row').find('input[type=number]'), function (index, elem) {
            if (!$(elem).val())
                $(elem).tooltip({
                    title: "Пустое поле",
                    delay: { show: 20, hide: 200 }
                });
                $(elem).tooltip('show');
                allright = false;
        });
        return allright;//if (!allright) alert("Есть пустые значения");
    });

    $('tr').click(function () {
        $(this).toggleClass("checked_row");
        var checkBox = $(this).find('input[type=checkbox]');
        if ($(checkBox).prop("checked")) {
            $(checkBox).prop({checked: false});
        } else {
            $(checkBox).prop({checked: true});
        }
    });
});