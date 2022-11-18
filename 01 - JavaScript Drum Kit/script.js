
window.addEventListener("keydown", function(e){
  const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const pressedKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime =0;
  audio.play()
  pressedKey.classList.add("playing")
})