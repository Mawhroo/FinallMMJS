let country=""
$("img.flags").on("click", function () {
    $("div.openflag").fadeIn(500)

})
$("div.close").on("click", function () {
    $("div.openflag").fadeOut(700)

})
export default country