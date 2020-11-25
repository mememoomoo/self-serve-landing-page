// Header Video
const video = document.getElementsByClassName("header-video-container")[0];
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", function() {
    event.preventDefault();
    video.scrollIntoView({behavior: "smooth", block: "center"});
    video.classList.add("active");
    video.querySelector("video").src = "assets/video/product-video.mp4";
    video.querySelector("video").controls = "controls";
    video.querySelector("video").muted = "";
    playButton.classList.remove("play-button");
    playButton.classList.add("display-none");
});

// Brand Guidlines Slide

const frontSlide = document.getElementById("slide-one");
const middleSlide = document.getElementById("slide-two");
const backSlide = document.getElementById("slide-three");
const ticketsButton = document.getElementById("button-one");
const acmeButton = document.getElementById("button-two");
const teamButton = document.getElementById("button-three");

ticketsButton.addEventListener("click", function(){

    ticketsButton.classList.remove("inactive-blue");
    ticketsButton.classList.add("active-blue");

    acmeButton.classList.remove("active-purple");
    acmeButton.classList.add("inactive-purple");

    teamButton.classList.remove("active-green");
    teamButton.classList.add("inactive-green");

    frontSlide.classList.remove("acme-corp-screen");
    frontSlide.classList.remove("your-team-screen");
    frontSlide.classList.remove("tickets-screen");
    frontSlide.classList.add("tickets-screen");

    middleSlide.classList.remove("acme-corp-screen");
    middleSlide.classList.remove("your-team-screen");
    middleSlide.classList.remove("tickets-screen");
    middleSlide.classList.add("acme-corp-screen");

    backSlide.classList.remove("acme-corp-screen");
    backSlide.classList.remove("your-team-screen");
    backSlide.classList.remove("tickets-screen");
    backSlide.classList.add("your-team-screen");

});

acmeButton.addEventListener("click", function(){

    acmeButton.classList.remove("inactive-purple");
    acmeButton.classList.add("active-purple");

    teamButton.classList.remove("active-green");
    teamButton.classList.add("inactive-green");

    ticketsButton.classList.remove("inactive-blue");
    ticketsButton.classList.add("inactive-blue");

    frontSlide.classList.remove("acme-corp-screen");
    frontSlide.classList.remove("your-team-screen");
    frontSlide.classList.remove("tickets-screen");
    frontSlide.classList.add("acme-corp-screen");

    middleSlide.classList.remove("acme-corp-screen");
    middleSlide.classList.remove("your-team-screen");
    middleSlide.classList.remove("tickets-screen");
    middleSlide.classList.add("your-team-screen");

    backSlide.classList.remove("acme-corp-screen");
    backSlide.classList.remove("your-team-screen");
    backSlide.classList.remove("tickets-screen");
    backSlide.classList.add("tickets-screen");

});

teamButton.addEventListener("click", function() {
    
    teamButton.classList.remove("inactive-green");
    teamButton.classList.add("active-green");

    ticketsButton.classList.remove("active-blue");
    ticketsButton.classList.add("inactive-blue");

    acmeButton.classList.remove("active-purple");
    acmeButton.classList.add("inactive-purple");

    frontSlide.classList.remove("acme-corp-screen");
    frontSlide.classList.remove("your-team-screen");
    frontSlide.classList.remove("tickets-screen");
    frontSlide.classList.add("your-team-screen");

    middleSlide.classList.remove("acme-corp-screen");
    middleSlide.classList.remove("your-team-screen");
    middleSlide.classList.remove("tickets-screen");
    middleSlide.classList.add("tickets-screen");

    backSlide.classList.remove("acme-corp-screen");
    backSlide.classList.remove("your-team-screen");
    backSlide.classList.remove("tickets-screen");
    backSlide.classList.add("acme-corp-screen")

});