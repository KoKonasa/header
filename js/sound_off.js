const sound_button = document.querySelector('.sound_img');
const bgm = document.querySelector(".bgm");  

sound_button.onclick = function(){
    let mySrc = sound_button.getAttribute('src');
    if(mySrc === 'assets/header_sound_off.png') {
      sound_button.setAttribute('src','assets/header_sound.png');
      bgm.play();
    } else {
      sound_button.setAttribute('src','assets/header_sound_off.png');
      bgm.pause();
    }
}