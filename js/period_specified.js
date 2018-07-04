$(function () {
    $("html").keyup(function (e) {
        if (e.which == 81 && document.activeElement.id != "lst-ib") {
            console.log(document.activeElement.id);
            var period = window.prompt("Please input the period(default is 1 year)", "y1");
            var currentURI = location.href;
            var periodSpecifiedURI = currentURI + "&tbs=qdr:" + period;
            location.href = periodSpecifiedURI;
        }
    });
});