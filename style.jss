:root {
  --bg: #ffffff;
  --text: #222;
  --card: #f5f5f5;
}

body.dark {
  --bg: #1a1a1a;
  --text: #eee;
  --card: #2c2c2c;
}

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: var(--bg);
  color: var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  transition: background 0.3s, color 0.3s;
}

.container {
  max-width: 800px;
  padding: 20px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

.palette {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 20px;
}

.color-box {
  width: 140px;
  height: 160px;
  border-radius: 12px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  position: relative;
  transition: transform 0.2s;
}

.color-box:hover {
  transform: scale(1.05);
}

.color-code {
  font-weight: bold;
  font-size: 14px;
}

.lock-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  margin-top: 8px;
}

.copy-btn {
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  border: none;
  padding: 4px 8px;
  font-size: 12px;
  margin-top: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.buttons button {
  margin: 5px;
  padding: 10px 16px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: #007bff;
  color: white;
}

.buttons button:hover {
  background: #0059c1;
}
