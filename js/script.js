
let wrapper = document.querySelector('.wrapper')

let audio = wrapper.querySelector('#audio')
let name_music = wrapper.querySelector('.name-music')
// let my_img = wrapper.querySelector('.box-img img')
let btnStartStop = wrapper.querySelector('.btn-start')
let showMoreBtn = wrapper.querySelector("#more-music");
let file = wrapper.querySelector('#file-selector')
let my_img = wrapper.querySelector('.my-img')

let musicIndex = 1

window.addEventListener('load', () => {
  loadMusic(musicIndex)
})
showMoreBtn.addEventListener("click", () => {
  musisList.classList.toggle("show");
});


function loadMusic(indexNumber) {
  name_music.innerText = all_music[indexNumber - 1].name
  //my_img.src = all_music[indexNumber - 1].img
  audio.src = `audio/${all_music[indexNumber - 1].name}.mp3`

  
}
let isbtn = false
function music_start() {
  audio.play()
  btnStartStop.innerText = 'Pause'
  wrapper.classList.add("paused");
  my_img.classList.add('root')
}

function music_pause() {
  audio.pause()
  btnStartStop.innerText = 'Start'
  wrapper.classList.remove("paused");
  my_img.classList.remove('root')
}

function nextMusic() {
  musicIndex++;
  musicIndex > all_music.length ? (musicIndex = 1) : (musicIndex = musicIndex);
  loadMusic(musicIndex);
  music_start();
}
function preveMusic() {
  musicIndex--;
  musicIndex > all_music.length ? (musicIndex = 1) : (musicIndex = musicIndex);
  loadMusic(musicIndex);
  music_start();
}
btnStartStop.addEventListener("click", () => {
  const isMusicPlay = wrapper.classList.contains("paused");
  isMusicPlay ? music_pause() : music_start();

});

const repeatBtn = document.querySelector("#repeat-plist");

repeatBtn.addEventListener("click", () => {
  let getText = repeatBtn.innerText;
  alert(repeatBtn)
  switch (getText) {
    case "repeat":
      repeatBtn.innerText = "repeat_one";
      repeatBtn.setAttribute("title", "Song looped");
      break;
    case "repeat_one":
      repeatBtn.innerText = "shuffle";
      repeatBtn.setAttribute("title", "Playback");
      break;
    case "shuffle":
      repeatBtn.innerText = "repeat";
      repeatBtn.setAttribute("title", "Playlist looped");
      break;
  }
});
audio.addEventListener("ended", () => {
  
  let getText = repeatBtn.innerText;
  
  switch (getText) {
    case "repeat":
      nextMusic();
      break;
    case "repeat_one":
      audio.currentTime = 0;
      loadMusic(musicIndex);
      music_start();
      break;
    case "shuffle":
      let randIndex = Math.floor(Math.random() * all_music.length + 1);
      do {
        randIndex = Math.floor(Math.random() * all_music.length + 1);
      } while (musicIndex == randIndex);
      musicIndex = randIndex;
      loadMusic(musicIndex);
      music_start();
      break;
  }
});

function my_file(){
  name_music.innerText = file.value.slice(12)
  my_img.src = all_music[indexNumber - 1].img
}