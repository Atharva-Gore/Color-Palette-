const palette = document.getElementById("palette");

let colors = [];

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  return "#" + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join("");
}

function generatePalette() {
  palette.innerHTML = "";
  colors = colors.map(color => color.locked ? color : { hex: getRandomColor(), locked: false });

  while (colors.length < 5) {
    colors.push({ hex: getRandomColor(), locked: false });
  }

  colors.forEach((color, index) => {
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color.hex;

    const hexCode = document.createElement("div");
    hexCode.className = "color-code";
    hexCode.textContent = color.hex;

    const lockBtn = document.createElement("button");
    lockBtn.className = "lock-btn";
    lockBtn.textContent = color.locked ? "🔒 Locked" : "🔓 Lock";
    lockBtn.onclick = () => toggleLock(index);

    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-btn";
    copyBtn.textContent = "📋 Copy";
    copyBtn.onclick = () => copyToClipboard(color.hex);

    box.appendChild(hexCode);
    box.appendChild(lockBtn);
    box.appendChild(copyBtn);
    palette.appendChild(box);
  });
}

function toggleLock(index) {
  colors[index].locked = !colors[index].locked;
  generatePalette();
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert(`Copied: ${text}`);
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

window.onload = () => {
  colors = [];
  generatePalette();
};
