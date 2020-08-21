const container = document.querySelector('.key-container');

const keys = [{ letter: '', sound: '', src: '' }];

keys.forEach((key) => {
  container.insertAdjacentElement(
    `
      <div class="key">
        <span class="key-letter">${key.letter}</span>
        <span class="key-sound">${key.sound}</span>
      </div>
    `
  );
});

console.log(container);
