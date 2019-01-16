// general variables
let href = $(".menu-a-element-href");
let info = $(".block-a-description");

// events
href.on("click", function (event) {
    $(href).removeClass("clicked");
    $(event.target).addClass("clicked");
    $(href).each(function (index, element) {
        console.log($(index));    
        // element == this
        if($(element).hasClass("clicked")) {
            let i = index;
            
            $(".block-a-description").addClass("_hiden");
            $(`.block-a-description:eq(${i})`).removeClass("_hiden");

        };

    });
    
    
});