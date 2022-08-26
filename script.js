function keyCode (key) {
  switch(key) {
    case 'a':
      return 65
    case 's':
      return 83
    case 'd':
      return 68
    case 'f':
      return 70
    case 'g':
      return 71
    case 'h':
      return 72
    case 'j':
      return 74
    case 'k':
      return 75
    case 'l':
      return 76
    default:
      return null
  }
}

function playAudio(e) {
  const keyValue = keyCode(e.key)
  const audio = document.querySelector(`audio[data-key="${keyValue}"]`);
  audio.currentTime = 0;
  audio.play();
};

function addEffect(e) {
  const keyValue = keyCode(e.key)
  const keyLight = document.querySelector(`div[data-key="${keyValue}"]`);
  keyLight.classList.add('playing')
  addEventListener('keyup', () => {
    keyLight.classList.remove('playing')
  })
}

window.addEventListener('keydown', (e) => {
  playAudio(e)
  addEffect(e)
});