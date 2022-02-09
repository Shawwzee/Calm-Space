// Dom elements
const forest = document.getElementById("img-top-left");
const seaside = document.getElementById("img-top-right");
const city = document.getElementById("img-bottom-left");
const wildlife = document.getElementById("img-bottom-right");
const twoMins = document.getElementById("twoMins");
const fiveMins = document.getElementById("fiveMins");
const tenMins = document.getElementById("tenMins");
const btn = document.getElementById("btn");
const videoPlayer = document.getElementById("videoPlayer");
const exitVideo = document.getElementById("exitBtn");

// Media elements
const song = document.getElementById("song");
const video = document.getElementById("video")

// Videos
const seasideVid = "./videos/seaside.mp4";
const forestVid = "./videos/forest.mp4";
const cityVid = "./videos/city.mp4";
const wildlifeVid = "./videos/wildlife.mp4";

// Songs
const seasideSong = "./sounds/seaside.mp3";
const wildlifeSong = "./sounds/wildlife.mp3";
const citySong = "./sounds/city.mp3";
const forestSong = "./sounds/forest.mp3";

// Variables
let selectedSong;
let time;

// Set video media to loop
video.loop = "true";

// Pauses video and song once page is loaded, in case user reloads. Also sets song and video elements to seaside by default
window.onload = () => {
    videoPlayer.style.display = "none";
    song.pause();
    video.pause();
    song.src = seasideSong;
    video.src = seasideVid;
    songTxt.innerText = "Seaside";
    video.currentTime = 0;
    song.currentTime = 0;
    time = 120;
}

// Show selected song type
forest.addEventListener("click", () => {
    forest.setAttribute("class", "selected");
    seaside.removeAttribute("class", "selected");
    wildlife.removeAttribute("class", "selected");
    city.removeAttribute("class", "selected");
    checkSelectedMedia();
})
seaside.addEventListener("click", () => {
    forest.removeAttribute("class", "selected");
    seaside.setAttribute("class", "selected");
    wildlife.removeAttribute("class", "selected");
    city.removeAttribute("class", "selected");
    checkSelectedMedia();
})
wildlife.addEventListener("click", () => {
    forest.removeAttribute("class", "selected");
    seaside.removeAttribute("class", "selected");
    wildlife.setAttribute("class", "selected");
    city.removeAttribute("class", "selected");
    checkSelectedMedia();
})
city.addEventListener("click", () => {
    forest.removeAttribute("class", "selected");
    seaside.removeAttribute("class", "selected");
    wildlife.removeAttribute("class", "selected");
    city.setAttribute("class", "selected");
    checkSelectedMedia();
})

// Show selected time
twoMins.addEventListener("click", () => {
    twoMins.setAttribute("class", "selected")
    tenMins.removeAttribute("class", "selected");
    fiveMins.removeAttribute("class", "selected");
    time = 120;
})
fiveMins.addEventListener("click", () => {
    fiveMins.setAttribute("class", "selected");
    tenMins.removeAttribute("class", "selected");
    twoMins.removeAttribute("class", "selected");
    time = 300;
})
tenMins.addEventListener("click", () => {
    tenMins.setAttribute("class", "selected");
    fiveMins.removeAttribute("class", "selected");
    twoMins.removeAttribute("class", "selected");
    time = 600;
})

// Found out selected song
function checkSelectedMedia() {
    const type = document.querySelector('img.selected');
    const selectedSong = type.getAttribute("data-sound");
    var songTxt = document.getElementById("songTxt");

    song.currentTime = 0;
    video.currentTime = 0;

    switch (selectedSong) {
        case "seaside":
            song.src = seasideSong;
            songTxt.innerText = "Seaside";
            video.src = seasideVid;
            break;
        case "wildlife":
            song.src = wildlifeSong;
            songTxt.innerText = "Wildlife";
            video.src = wildlifeVid;
            break;
        case "city":
            song.src = citySong;
            songTxt.innerText = "City";
            video.src = cityVid;
            break;
        case "forest":
            song.src = forestSong;
            songTxt.innerText = "Forest";
            video.src = forestVid;
            break;

    }
}

// Event handler for button
btn.addEventListener('click', () => {
    if (song.paused) {
        videoPlayer.style.display = "block";
        song.play();
        video.play();
    }
});

// Event handler for exiting video
exitVideo.addEventListener('click', () => {
    videoPlayer.style.display = "none";
    song.pause();
    video.pause();
});


song.ontimeupdate = function () {
    if (song.currentTime >= time) {
        song.pause();
        video.pause();
        videoPlayer.style.display = "none";
    }
};