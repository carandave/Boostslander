let toTup = document.getElementById("to-up")
let leftAboutCol = document.querySelector(".__leftaboutCol")
let rightAboutCol = document.querySelector(".__rightaboutCol")

let sectionTwo = document.querySelector(".section-2")
let sectionThree = document.querySelector(".section-3")
let sectionFour = document.querySelector(".section-4")
let sectionSix = document.querySelector(".section-6")
let sectionSeven = document.querySelector(".section-7")
let sectionNine = document.querySelector(".section-9")

// DEFAULT
leftAboutCol.style.opacity = "0";
rightAboutCol.style.opacity = "0";
sectionTwo.style.opacity = "0";
sectionThree.style.opacity = "0";
sectionFour.style.opacity = "0";
sectionSix.style.opacity = "0";
sectionSeven.style.opacity = "0";
sectionNine.style.opacity = "0";

// const rect = header.getBoundingClientRect();
//     const rect1 = sectionOne.getBoundingClientRect();
window.addEventListener("scroll", () =>{
    console.log(window.scrollY)
    if(window.scrollY >= 400){
        toTup.classList.add("active");
        leftAboutCol.style.opacity = "1";
        rightAboutCol.style.opacity = "1";
        leftAboutCol.classList.add("animate__animated");
        leftAboutCol.classList.add("animate__fadeInLeft");
        rightAboutCol.classList.add("animate__animated");
        rightAboutCol.classList.add("animate__fadeInRight");
        
    }
    else if(window.scrollY <= 400){
        toTup.classList.remove("active");
    }

    if(window.scrollY >= 900){
        sectionTwo.style.opacity = "1";
        sectionTwo.classList.add("animate__animated");
        sectionTwo.classList.add("animate__fadeInUp");

    }

    if(window.scrollY >= 1400){
        sectionThree.style.opacity = "1";
        sectionThree.classList.add("animate__animated");
        sectionThree.classList.add("animate__zoomInUp");
    }

    if(window.scrollY >= 1800){
        sectionFour.style.opacity = "1";
        sectionFour.classList.add("animate__animated");
        sectionFour.classList.add("animate__backInUp");
    }

    if(window.scrollY >= 2700){
        sectionSix.style.opacity = "1";
        sectionSix.classList.add("animate__animated");
        sectionSix.classList.add("animate__fadeInUp");
    }

    if(window.scrollY >= 3400){
        sectionSeven.style.opacity = "1";
        sectionSeven.classList.add("animate__animated");
        sectionSeven.classList.add("animate__fadeInUp");
    }

    if(window.scrollY >= 4800){
        sectionNine.style.opacity = "1";
        sectionNine.classList.add("animate__animated");
        sectionNine.classList.add("animate__fadeIn");
    }


    

    // console.log(window.scrollY)
    // console.log(sectionOne.offsetHeight)
    // console.log(sectionOne.getBoundingClientRect())

    
    // console.log(window.scrollY)
    // console.log(rect.y)
    // console.log("Header Y")

    // console.log(rect1.y)
    // console.log("Section One Y")

    // console.log(rect.height + window.scrollY)
    // console.log("Header Plus")

    // console.log(Math.floor(rect1.height))
    // console.log("Section One")

    // // console.log(header.getBoundingClientRect())
    // if(rect.height + window.scrollY >= Math.floor(rect1.height)){
    //     console.log("Happy Birthday")
    // }
})









// console.log(sectionOne)
// if(window.innerHeight)

