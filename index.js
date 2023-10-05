const cntImg = document.querySelector(".cntImg")
const workSeccion = document.querySelector(".main2")
const aboutDiv = document.querySelector(".about")
const workDiv = document.querySelector(".inicio")
const linkFooter = document.querySelector(".linkFooter")
const toInicio = document.querySelector(".toInicio")
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
toInicio.addEventListener("click", inicioPage)
aboutDiv.addEventListener("click", aboutPage);
workDiv.addEventListener("click", () => {
    if(workSeccion){
        workPage()
    }else{
        inicioPage()
    }
});



function inicioPage (){
    window.location.href = "index.html";
}

function workPage(){
    workSeccion.scrollIntoView({ behavior: "smooth" })
}

function aboutPage (){
    window.location.href = "about.html"
}

// function correo(){
//     window.location.href = "mailto:tutukastrillon@gmail.com"
// }