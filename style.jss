body {
  margin: 0;
  font-family: sans-serif;
  background: #f5f5f5;
  color: #222;
}

.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.palette {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.color-box {
  width: 120px;
  height: 140px;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
}

.lock-btn,
.copy-btn {
  border: none;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 6px;
  margin-top: 5px;
  border-radius: 4px;
  cursor: pointer;
}
