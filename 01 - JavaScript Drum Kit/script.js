const divKeysNodeList = document.querySelectorAll('.key');

const keyPressed = () => {
  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'a':
        document.querySelector('#a').setAttribute('class', 'playing');
        document.addEventListener('keyup', (e) => {
          document.querySelector('#a').setAttribute('class', 'key');
        })
        break;
      case 's':
        console.log('S pressed')
    }
  });
};

keyPressed()
