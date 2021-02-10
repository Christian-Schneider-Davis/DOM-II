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



// changing all pics on load

const busPicChange = document.querySelector('.intro img')

busPicChange.addEventListener('load', () => {
    busPicChange.src = "https://i0.wp.com/tvrev.com/wp-content/uploads/2018/09/Fortnite-Battle-Bus-1920x1080.jpg?fit=1920%2C1080";
})