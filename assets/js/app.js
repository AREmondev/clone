
$( document ).ready(function() {
    
    $("body").click(function (e) {
        if(e.target.id == "dropdown"){
            $(".dropdown-menu").toggleClass("active")
        } else
        {
            $(".dropdown-menu").removeClass("active")
        }
    })
});