function generatePalette() {
  const paletteContainer = document.getElementById('palette');
  paletteContainer.innerHTML = '';

  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const box = document.createElement('div');
    box.className = 'color-box';
    box.style.backgroundColor = color;
    box.innerText = color;
    paletteContainer.appendChild(box);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Generate initial palette on load
window.onload = generatePalette;
