$(document).ready(function(){
    // Highlight element with id mark
    $("#mark").css("background", "yellow");
});

$(document).ready(function(){
    $("p").text("The DOM is now loaded and can be manipulated.");
});

$(document).ready(function(){
    // Hide displayed paragraphs
    $(".hide-btn").click(function(){
        $("p").hide();
    });
    
    // Show hidden paragraphs
    $(".show-btn").click(function(){
        $("p").show();
    });
});

$(document).ready(function(){
    // Fadeing out displayed paragraphs
    $(".out-btn").click(function(){
        $("p").fadeOut();
    });
    
    // Fading in hidden paragraphs
    $(".in-btn").click(function(){
        $("p").fadeIn();
    });
});

$(document).ready(function(){
    // Slide up displayed paragraphs
    $(".up-btn").click(function(){
        $("p").slideUp();
    });
    
    // Slide down hidden paragraphs
    $(".down-btn").click(function(){
        $("p").slideDown();
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("img").animate({
            left: 300
        });
    });
});

$(document).ready(function(){
    $(".start").click(function(){
        $("p").animate({width: "100%"}).animate({fontSize: "46px"}).animate({borderWidth: 30});
    });
    $(".reset").click(function(){
        $("p").removeAttr("style");
    });
});




