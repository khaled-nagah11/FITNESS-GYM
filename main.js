
  //<================================== menu icon in small screen ======================>//
            const menuIcon = document.getElementById("menu-icon");
            const menuBar = document.getElementsByClassName("bar");
            const navigation = document.querySelector(".navigation");
            const toggleActive = () => {
                menuIcon.classList.toggle("active");
                navigation.classList.toggle("active");
            };
            document.body.addEventListener("click", (event) => {
                if (event.target === menuIcon || event.target === menuBar || event.target.closest(".navigation a")) {
                toggleActive();
                }
            });
//<================================== change color of nav bar when scroll down ======================>//
// JavaScript to handle scrolling and header color change
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
    header.classList.add("header-scrolled");
    } else {
    header.classList.remove("header-scrolled");
    }
});

            //<================================== scroll up button hidden and visble ======================>//
// JavaScript to handle scroll behavior
document.addEventListener("DOMContentLoaded", function () {
    const scrollUpButton = document.getElementById("scrollUp");
    window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        scrollUpButton.classList.add("visible");
    } else {
        scrollUpButton.classList.remove("visible");
    }
    });
});

            //<================================== popup window for video ======================>//
        
// Get the modal, video player, and buttons
const modal = document.getElementById("videoModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const videoPlayer = document.getElementById("videoPlayer");

// When the "Open Modal" button is clicked, show the modal and play the video
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
  videoPlayer.play(); // Start playing the video
});
// When the "Close" button or anywhere outside the modal is clicked, hide the modal and pause the video
window.addEventListener("click", (event) => {
    if (event.target === modal) {
    modal.style.display = "none";
    videoPlayer.pause(); // Pause the video
    }
});

    closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  videoPlayer.pause(); // Pause the video
});
