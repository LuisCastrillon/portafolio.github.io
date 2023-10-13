const cntImg = document.querySelector(".cntImg")
const workSeccion = document.querySelector(".main2")
const aboutDiv = document.querySelector(".about")
const workDiv = document.querySelector(".inicio")
const linkFooter = document.querySelector(".linkFooter")
const toInicio = document.querySelector(".toInicio")
const curriculum = document.querySelector(".curriculum")
const menuDiv = document.querySelector(".menuDiv")
const contMenu = document.querySelector(".contMenu")
const menuDivImg = document.querySelector(".menuDivImg")
const menuDivImg1 = document.querySelector(".menuDivImg1")
const menuDivImg2 = document.querySelector(".menuDivImg2")
// const correoFooterDiv = document.querySelector("#correoFooterDiv")
// const linkdinFooterDiv = document.querySelector("#linkdinFooterDiv")
// const curriculumFooterDiv = document.querySelector("#curriculumFooterDiv")
// const instagramFooterDiv = document.querySelector("#workFooterDiv")


if(cntImg){
    cntImg.addEventListener("click", workPage)
}

// linkdinFooterDiv.addEventListener("click", linkdin)
// curriculumFooterDiv.addEventListener("click", curriculum)
// instagramFooterDiv.addEventListener("click", ig)
// correoFooterDiv.addEventListener("click", correo)
menuDiv.addEventListener("click", toggleDisplayMenu)
curriculum.addEventListener("click", curriculumPage)
toInicio.addEventListener("click", inicioPage)
aboutDiv.addEventListener("click", aboutPage);
workDiv.addEventListener("click", () => {
    if(workSeccion){
        workPage()
    }else{
        inicioPage()
    }
});

function toggleDisplayMenu(){
    
        if(menuDivImg1){
            if(contMenu.style.display == "flex"){
                contMenu.style.display = "none"
                document.body.style.overflow = "hidden"
                menuDivImg1.src = "./img/whiteMenu.png"
                
            }else{
                contMenu.style.display = "flex"
                document.body.style.overflow = "auto"
                menuDivImg1.src = "./img/whitex.png"
            }
        }else{
            if(contMenu.style.display == "flex"){
                contMenu.style.display = "none"
                document.body.style.overflow = "auto"
                menuDivImg2.src = "./img/Menu.png"
                
            }else{
                contMenu.style.display = "flex"
                document.body.style.overflow = "hidden"
                menuDivImg2.src = "./img/x.png"
            }
        }
        
    





    
}

function curriculumPage (){
    window.open("./CV/LuisCastrillon.pdf", "_blank")
}

function inicioPage (){
    window.location.href = "index.html";
}

function workPage(){
    workSeccion.scrollIntoView({ behavior: "smooth" })
    document.body.style.overflow = "auto"
}

function aboutPage (){
    window.location.href = "about.html"
}

// function correo(){
//     window.location.href = "mailto:tutukastrillon@gmail.com"
// }