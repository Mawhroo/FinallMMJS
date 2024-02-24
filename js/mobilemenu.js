let mobilemenu=""
$("i.fas").on("click", function () {
    $("div.opensubmenu").fadeIn(100).css({
        "display": "width:fixed"
    })

})
$("div.close").on("click", function () {
    $("div.opensubmenu").fadeOut(100)

})


$("a.shop").on("click", function () {
    
    $("ul.subshop").fadeIn(100)

})
$("div.backtomenu").on("click", function () {
    
    $("ul.subshop").fadeOut(100)

})


$("a.celebrate").on("click", function () {
    
    $("ul.subcelebrate").fadeIn(100)

})
$("div.backtomenu").on("click", function () {
    
    $("ul.subcelebrate").fadeOut(100)

})

$("a.explore").on("click", function () {
    
    $("ul.subexplore").fadeIn(100)

})
$("div.backtomenu").on("click", function () {
    
    $("ul.subexplore").fadeOut(100)

})

$("a.business").on("click", function () {
    
    $("ul.subbusiness").fadeIn(100)

})
$("div.backtomenu").on("click", function () {
    
    $("ul.subbusiness").fadeOut(100)

})
export default mobilemenu