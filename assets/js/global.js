
$(function () {
    $(".include").each(function () {
        var href = "components/" + $(this).attr("href");
        $(this).load(href);
    });
});