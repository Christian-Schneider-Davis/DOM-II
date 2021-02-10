// Your code goes here

// apply zoom on "mouseenter"
const busImage = document.querySelector(".intro")

busImage.addEventListener("mouseenter", () => {
    busImage.style.transform = "scale(1.1)";
    busImage.style.transition = "all 0.3s" })

// apply zoom reset on "mouseleave"

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

// change body color on scroll