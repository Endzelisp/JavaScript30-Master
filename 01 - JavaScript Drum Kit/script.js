const divKeysNodeList = document.querySelectorAll('.key');


divKeysNodeList.forEach(item => {
  let keyValue = item.getAttribute('data-key');
  addEventListener('keydown', (e) => {
    if (keyValue === '65' && e.key === 'a') {
      item.classList.add('playing')
      document.querySelector('audio[data-key="65"]').play()
      addEventListener('keyup', (e) => {
        item.classList.remove('playing')
      })
    }
  })
})