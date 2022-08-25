const divKeysNodeList = document.querySelectorAll('.key');

const keyPressed = () => {
  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'a':
        console.log('A pressed')
        break;
      case 's':
        console.log('S pressed')
    }
  });
};

keyPressed()
