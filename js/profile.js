let profile = ""
$("img.profile").on("click", function () {
    $("div.cover").fadeIn(500)
    $("div.cover>div.modal").fadeIn()
    // $("div.cover").append("<div class='parent></div>")
    // $("div.cover>div.modal").removeClass(fadeOut)
    // $("div.cover>div.modal").addClass(fadeIn)
    
})
$("div.close").on("click", function () {
    $("div.cover").fadeOut(700)
    $("div.cover>div.modal").fadeOut(700)
})
export default profile