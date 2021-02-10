// Your code goes here
const busImage = document.querySelector(".intro")

busImage.addEventListener("mouseenter", () => {
    busImage.style.transform = "scale(1.1)";
    busImage.style.transition = "all 0.3s" })

    busImage.addEventListener("click", () => {
        busImage.style.transform = "scale(1)";
        })


        const letsGo = document.querySelector(".content-section")

        letsGo.addEventListener("mouseenter", () => {
    letsGo.style.transform = "scale(1.1)";
    letsGo.style.transition = "all 0.3s" })

    letsGo.addEventListener("click", () => {
        letsGo.style.transform = "scale(1)";
        })

        const adventure = document.querySelector(".content-section-inverse-content")

        adventure.addEventListener("mouseenter", () => {
            adventure.style.transform = "scale(1.1)";
            adventure.style.transition = "all 0.3s" })

            adventure.addEventListener("click", () => {
                adventure.style.transform = "scale(1)";
        })

        const destination = document.querySelector(".content-destination")

        destination.addEventListener("mouseenter", () => {
            destination.style.transform = "scale(1.1)";
    destination.style.transition = "all 0.3s" })

    destination.addEventListener("click", () => {
        destination.style.transform = "scale(1)";
        })