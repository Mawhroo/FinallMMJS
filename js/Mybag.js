let Mybag=""
$("img.bag").on("click", function () {
    $("div.openbag").fadeIn(500)

})
$("div.close").on("click", function () {
    $("div.openbag").fadeOut(700)

})
export default Mybag