// Your code goes here

// apply zoom on "mouseenter" x
const busImage = document.querySelector(".intro")

busImage.addEventListener("mouseenter", () => {
    busImage.style.transform = "scale(1.1)";
    busImage.style.transition = "all 0.3s" })

// apply zoom reset on "mouseleave" x

    busImage.addEventListener("mouseleave", () => {
        busImage.style.transform = "scale(1)";
        })


        const letsGo = document.querySelector(".content-section")

        letsGo.addEventListener("mouseenter", () => {
    letsGo.style.transform = "scale(1.1)";
    letsGo.style.transition = "all 0.3s" })

    letsGo.addEventListener("mouseleave", () => {
        letsGo.style.transform = "scale(1)";
        })

        const adventure = document.querySelector(".content-section-inverse-content")

        adventure.addEventListener("mouseenter", () => {
            adventure.style.transform = "scale(1.1)";
            adventure.style.transition = "all 0.3s" })

            adventure.addEventListener("mouseleave", () => {
                adventure.style.transform = "scale(1)";
        })

        const destination = document.querySelector(".content-destination")

        destination.addEventListener("mouseenter", () => {
            destination.style.transform = "scale(1.1)";
    destination.style.transition = "all 0.3s" })

    destination.addEventListener("mouseleave", () => {
        destination.style.transform = "scale(1)";
        })



// changing all pics on event

const busPicChange = document.querySelector('.intro img')

// "change img onload test/trial"

// window.onload = function (){
   // busPicChange.src = "https://i0.wp.com/tvrev.com/wp-content/uploads/2018/09/Fortnite-Battle-Bus-1920x1080.jpg?fit=1920%2C1080";
  //  }

// OMG IT WORKED! :)

//replacing all imgs and header with 'click' anywhere on the body instead of 'on load'

busPicChange.addEventListener('click', () => {
    busPicChange.src = "https://i0.wp.com/tvrev.com/wp-content/uploads/2018/09/Fortnite-Battle-Bus-1920x1080.jpg?fit=1920%2C1080";
})


const letsGoPic = document.querySelector('.img-content img')

letsGoPic.addEventListener('click', () => {
    letsGoPic.src = "https://i.ytimg.com/vi/a_Etru2zQk8/maxresdefault.jpg";
})

const adventurePic = document.querySelector('.content-section-inverse-content img')

adventurePic.addEventListener('click', () => {
    adventurePic.src = "https://assets.gamepur.com/wp-content/uploads/2020/12/02021155/Fortnite-Battle-Pass-Skins.jpg";
})

const destinationPic = document.querySelector('.content-destination img')

destinationPic.addEventListener('click', () => {
    destinationPic.src = "https://attackofthefanboy.com/wp-content/uploads/2019/08/battle-pass-menu-fortnite.jpg";
})

// add event to window
const changeOnScroll = document.querySelector('.container-home')

window.scroll = function (){
changeOnScroll.style.backgroundColor = "grey";
}

// background color change on scroll
var one = "#11cf72",
		two = "#1da1f2",
		three = "#ff3f3f",
		four = "#ff0099";
 
 window.scroll = function() {
		if ($(document).scrollTop() >= $("#one").position().top) {
		$('body').css('background', $("#one").attr("data-color"));
 
		};
		if ($(document).scrollTop() > $("#two").position().top) {
		$('body').css('background', $("#two").attr("data-color"))
		};
		if ($(document).scrollTop() > $("#three").position().top) {
 
		$('body').css('background', $("#three").attr("data-color"))
		};
		if ($(document).scrollTop() > $("#four").position().top) {
 
		$('body').css('background', $("#four").attr("data-color"))
		};
	
}