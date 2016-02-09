function makeAjaxCall(ajaxParam) {
    $("#container").load("./views/" + ajaxParam);
}

$(document).ready(function () {

    $.getJSON("route.json", function (params) {
        for (var i = 0; i < params.length; i++) {
            $("#nav").append("<a  id='nav" + (i) + "'>" + params[i].name + "</a>&nbsp;");
            
            $("#nav" + (i)).attr("href", "#" + params[i].url);
            
             $("#nav" + (i)).attr("data-view",  params[i].view_url);
             
              $("#nav" + (i)).click(function() {
                  makeAjaxCall($(this).attr("data-view"));
              });
        }
               
         $("#container").load("./views/" + params[0].view_url)
    });   
    // makeAjaxCall(null);
});