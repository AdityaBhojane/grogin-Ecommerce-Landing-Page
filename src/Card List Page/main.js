const dot = document.querySelector("#dot")


document.body.addEventListener("mousemove",(e)=>{
    dot.style.top = `${e.y}px`
    dot.style.left = `${e.x}px`
})

