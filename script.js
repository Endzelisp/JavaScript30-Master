function keyCode (key) {
  switch(key) {
    case 'a':
    case 'A':
      return 65
    case 's':
    case 'S':
      return 83
    case 'd':
    case 'D':
      return 68
    case 'f':
    case 'F':
      return 70
    case 'g':
    case 'G':
      return 71
    case 'h':
    case 'H':
      return 72
    case 'j':
    case 'J':
      return 74
    case 'k':
    case 'K':
      return 75
    case 'l':
    case 'L':
      return 76
    default:
      return null
  }
}

function playAudio(e) {
  const keyValue = keyCode(e.key) | e;
  const audio = document.querySelector(`audio[data-key="${keyValue}"]`);
  audio.currentTime = 0;
  audio.play();
};

function addEffect(e) {
  const keyValue = keyCode(e.key) | e;
  const keyLight = document.querySelector(`div[data-key="${keyValue}"]`);
  keyLight.classList.add('playing')
  addEventListener('transitionend', () => {
    keyLight.classList.remove('playing')
  })
}

window.addEventListener('keydown', (e) => {
  playAudio(e)
  addEffect(e)
});

const keyElements = document.querySelectorAll('.key')

keyElements.forEach(item => {
  let attribueValue = item.getAttribute('data-key')
  item.addEventListener('click', () => {
    playAudio(attribueValue)
    addEffect(attribueValue)
  })
})