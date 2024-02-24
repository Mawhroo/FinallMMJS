async function menu(){
    let menu=""
    let data=await fetch ("http://localhost:4000/menu")
    let res=await data.json()
    res.forEach(element => {
        menu+=`
        <li id="${element.id}" class="shop h-auto flex flex-col flex-nowrap  justify-around" > 
            <img class="shop w-[48px] h-[48px] ml-9 justify-center cursor-pointer" src= ${element.image}>
            <a  class="no-underline w-[116px] h-[22px] font-[dinbold2] text-[#592411] text-[15px] justify-center text-center hover:underline  " href="${element.link}">${element.name}</a>
           
       
          </li>
        `
    });

    document.querySelector("div.menu ul").innerHTML=menu
}

console.log(menu());





export default menu;

