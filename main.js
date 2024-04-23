// GSAP Section 
gsap.from("#bubble",{
    y:10,
    duration:1,
    yoyo:true,
    repeat:-1
})

/***********************************************/

const bubble = document.getElementById("bubble")
const bubbleInfo = document.getElementById("bubble-info")

const searchBtn = document.getElementById("search")
const products = document.getElementById("products")

searchBtn.addEventListener("click",()=>{
    window.location.href = "./src/Filter Product page/SearchProduct.html"
})
products.addEventListener("click",()=>{
    window.location.href = "./src/Details Page/details.html"
})



let cardVisible = false;

bubble.addEventListener("click",()=>{
    gsap.from("#bubble",{
        rotate:360
    })
    if(cardVisible){
        gsap.to("#cards",{
            x:"15vw"
        })
        cardVisible = false
    }else{
        gsap.to("#cards",{
            x:"-15vw",
        })
        cardVisible = true
    }
})

/******************************* */
// countdown
let Days = 47;
let hrs = 6;
let mins =  57;
let sec = 8;

setInterval(()=>{   
    sec--;
    if(hrs <= 0){
        Days--;
        hrs = 24;
    }if(mins <= 0){
        hrs--
        mins = 60;
    }if(sec <= 0){
        mins--
        sec = 60;
    }
 
    document.getElementById("days").innerHTML = Days;
    document.getElementById("hrs").innerHTML = hrs;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = sec;
    if(Days == 0 && hrs == 0 && mins == 0 && sec == 0){
        document.getElementById("days").innerHTML = 0;
        document.getElementById("hrs").innerHTML = 0;
        document.getElementById("mins").innerHTML = 0;
        document.getElementById("sec").innerHTML = 0;
    }
    
},1000)

/******************************* */

