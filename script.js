



const myObeserver = new IntersectionObserver((entries)=>{
entries.forEach((entry) =>{
    if(entry.isIntersecting){
        entry.target.classList.add("show")
    } else{
        entry.target.classList.remove("show")
    }
})


})
const elements = document.querySelector(".conteiner-2")


myObeserver.observe(elements)