function slidesPlugin(activeSlide = 0){
    const slides = document.querySelectorAll(".slide")

    slides[activeSlide].classList.add("active")
    for(const slide of slides){
        slide.addEventListener("click", () =>{
            clearActiveClasses()
            slide.classList.add('active')
        } )
    }

    function clearActiveClasses(){
        slides.forEach((slide)=>{
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(2)

// bảng 1
const butBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

function showBuyTickets(){
       modal.classList.add('open')
}
function hideBuyTickets(){
       modal.classList.remove('open')
}
for (const butBtn of butBtns){
    butBtn.addEventListener('click',showBuyTickets)
 }   
modal.addEventListener('click',hideBuyTickets)

modalContainer.addEventListener('click',function(event){
    event.stopPropagation()
})




// const nutClicks = document.querySelector('.js-video-3')
// const videoLinh = document.querySelector('.js-films')

// function showBuyTickets(){
//     videoLinh.classList.add('open')

// }
// for(const  of nutClicks){
//     nutClicks.addEventListener('click',showBuyTickets)
// }