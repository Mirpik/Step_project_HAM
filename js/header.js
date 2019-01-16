$(document).ready(function () {
    
    
    $(".menu-item").on("mouseenter", function(){

        $(".menu-item").each(function (index, element) {
    //         // element == this
            if(element == event.target){
                let elWidth = $(element).css("width");
                $(".menu-item-style_line").eq(index).css("width", elWidth).removeClass("_hiden");
    //            
            }
        });
    });
    
    $(".menu-item").on("mouseleave", function(){
        $(".menu-item-style_line").addClass("_hiden");
    });
    
});