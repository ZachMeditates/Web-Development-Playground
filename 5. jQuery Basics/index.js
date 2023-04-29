$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
})


/* assorted class notes below

look up jQuery Effect Methods on W3Schools


$("h1").addClass("big-title");

$("button").on("click", function() {
    $("h1").animate({margin: "20%"});
})

$("h1").slideToggle();
$("h1").slideUp();
$("h1").slideDown();

query to see if an element has a specific class
$("h1").hasClass("margin-50"); //returns true or false
$("button");

$("button").html("Don't Click Me!")

$("input").keypress(function(event) {
    console.log(event.key);
}) 

$(document).keypress(function(event) {
    $("h1").text(event.key)
})

end assorted class notes */