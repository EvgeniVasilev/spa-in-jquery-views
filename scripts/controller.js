function makeAjaxCall(ajaxParam) {
    $("#container").load("./views/" + ajaxParam);
}

$(document).ready(function () {


    $.getJSON("route.json", function (params) {
        for (var i = 0; i < params.length; i++) {
            $("#nav").append("<a  id='nav" + (i) + "'>" + params[i].name + "</a>&nbsp;");

            $("#nav" + (i)).attr("href", "#" + params[i].url);

            $("#nav" + (i)).attr("data-view", params[i].view_url);

            $("#nav" + (i)).click(function () {
                makeAjaxCall($(this).attr("data-view"));
            });
        }
    });

    window.addEventListener("load", function () {
        
        var my_path = window.location.hash;
        
        if (my_path !== "#new_zealand" && my_path !== "#bulgaria") {
            $("#container").load("./views/australia.html");
        } else if (my_path === "#new_zealand") {
            $("#container").load("./views/new_zealand.html");
        } else if (my_path === "#bulgaria") {
            $("#container").load("./views/bulgaria.html");
        } else if (my_path === "#australa") {
            $("#container").load("./views/australia.html");
        }
    }, false);

});
