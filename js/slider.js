async function slider(){
    let slider=""
    let data=await fetch ("http://localhost:4000/slider")
    let res=await data.json()
    res.forEach(element => {
        slider+=`
        <div class="swiper-slide"><img src="${element.image}" alt="${element.alt}"></div>
        `
    });

    document.querySelector("div.swiper div.swiper-wrapper ").innerHTML=slider
}


console.log(slider());

export default slider;