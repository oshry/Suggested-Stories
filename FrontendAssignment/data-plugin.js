$(document).ready(function(){
    $.ajax({
        url: "http://localhost:3088/",
        success: function(res){
            $("#suggested-stories-container").html(res);
        }
    });
});