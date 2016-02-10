function makeAjaxCall(ajaxParam) {
    "use strict";

    $("#container").load("./views/" + ajaxParam);

}

$(document).ready(function() {
    "use strict";

    $.getJSON("route.json", function(params) {
        for (var i = 0; i < params.length; i++) {
            $("#nav").append("<a  id='nav" + (i) + "'>" + params[i].name + "</a>&nbsp;");

            $("#nav" + (i)).attr("href", "#" + params[i].url);

            $("#nav" + (i)).attr("data-view", params[i].view_url);

            $("#nav" + (i)).click(function() {
                makeAjaxCall($(this).attr("data-view"));
                self.close();
            });
        }
    });

<<<<<<< HEAD
    window.addEventListener("load", function() {


        var myPath = window.location.hash;

        if (myPath !== "#new_zealand" && myPath !== "#bulgaria") {

=======
    window.addEventListener("load", function () {
        
        var my_path = window.location.hash;
        
        if (my_path !== "#new_zealand" && my_path !== "#bulgaria") {
>>>>>>> origin/gh-pages
            $("#container").load("./views/australia.html");
            self.close();

        } else if (myPath === "#new_zealand") {

            $("#container").load("./views/new_zealand.html");
            self.close();

        } else if (myPath === "#bulgaria") {

            $("#container").load("./views/bulgaria.html");
<<<<<<< HEAD
            self.close();

        } else if (myPath === "#australa") {

            $("#container").load("./views/australi.html");
            self.close();
        }
    }, false);


});


// trick back button
setInterval("checkUrl()", 50);

function checkUrl() {
    "use strict";

    var myPath = window.location.hash;

    if (myPath !== "#new_zealand" && myPath !== "#bulgaria") {

        $("#container").load("./views/australia.html");


    } else if (myPath === "#new_zealand") {

        $("#container").load("./views/new_zealand.html");


    } else if (myPath === "#bulgaria") {

        $("#container").load("./views/bulgaria.html");


    } else if (myPath === "#australa") {

        $("#container").load("./views/australi.html");

    }    
}
=======
        } else if (my_path === "#australa") {
            $("#container").load("./views/australia.html");
        }
    }, false);

});
>>>>>>> origin/gh-pages
