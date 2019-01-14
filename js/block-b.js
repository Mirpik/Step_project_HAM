// general variables
let block = $(".pictures-item");
let button = $("#load-more_block-b");

let categoryButton = $("#workpics-switch-filter .switch-items");
let graphicDesign = $("[data-category='graphic-design']");
let webDesign = $("[data-category='web-design']");
let landingPages = $("[data-category='landing-pages']");
let wordpress = $("[data-category='wordpress']");

// events
laodFirstPhotos();
$(button).on("click", loadMore);

// event handlers

// load first photos
function laodFirstPhotos() {
    for (let i = 0; i < 12; i++) {
        $((block)[i]).removeClass("_hiden");
    }
}

// event on button, load 12 more photos

function loadMore() {
    $(".pictures-item._hiden").each(function (index, element) {
        if (index < 12) {
            $(element).removeClass("_hiden");

            if ($(".pictures-item._hiden").length == 0) {
                $("#load-more_block-b").addClass("_hiden");
            }
        }
    });
}
// --------------------------

$(categoryButton).on("click", function (event) {
    console.log(($(event.target).text()));
    console.dir(($(event.target).text()));
    if($(event.target).text().trim() == "All") {
        $(block).addClass("_hiden");
        laodFirstPhotos();
        if(($(".pictures-item._hiden").length != 0) && ($("#load-more_block-b").hasClass("_hiden"))) {
            $("#load-more_block-b").removeClass("_hiden");
        }
    } else if($(event.target).text().trim() == "Graphic Design") {
        $(block).addClass("_hiden");
        $(graphicDesign).each(function (index, element) {
            if(index < 12) {
                $(element).removeClass("_hiden");
            }
        });
    } else if($(event.target).text().trim() == "Web Design") {
        $(block).addClass("_hiden");
        $(webDesign).each(function (index, element) {
            if(index < 12) {
                $(element).removeClass("_hiden");
            }
        });
    } else if($(event.target).text().trim() == "Landing Pages") {
        $(block).addClass("_hiden");
        $(landingPages).each(function (index, element) {
            if(index < 12) {
                $(element).removeClass("_hiden");
            }
        });
    }  else if($(event.target).text().trim() == "Wordpress") {
        $(block).addClass("_hiden");
        $(wordpress).each(function (index, element) {
            if(index < 12) {
                $(element).removeClass("_hiden");
            }
        });
    }

    
    console.log(landingPages);
    
    // $(categoryButton).each(function (index, element) {
    //     // element == this
    //     // let text = $(event.target).text();
    //     let text = $(element).text();
            
        
    // });
});


// event on button, load 12 more photos
// let button = $("#load-more_block-b");
// $(button).on("click", function (event) {
//     $(".pictures-item._hiden").each(function (index, element) {
//         if (index < 12) {
//             $(this).removeClass("_hiden");

//             if ($(".pictures-item._hiden").length == 0) {
//                 $("#load-more_block-b").addClass("_hiden");
//             }
//         }
//     });
// });

