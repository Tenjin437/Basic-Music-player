const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");


const songs = [{
    name: "1",
    title: "Tera Ban Jaunga",
    artist: "Akhil Sachdeva and Tulsi Kumar",
    img : "tj1"
    
},
{
    name: "2",
    title: "Galway Girl",
    artist: "Ed Sheeran",
    img : "tj2"
    

},
{
    name: "3",
    title: "Vaaste",
    artist: "Dhvani Bhanushali and Nikhil",
    img : "tj3"
    
}]


let isPlaying = false;

// for play function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
}

// for pause function
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
}

play.addEventListener("click", () => {
    isPlaying ? pauseMusic() : playMusic();

});

// changing  the music data

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.img + ".jpg";


};

songIndex = 0;

// loadSong(songs[2]);

const nextSong =()=>{
    songIndex = (songIndex +1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong =()=>{
    songIndex = (songIndex -1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);

