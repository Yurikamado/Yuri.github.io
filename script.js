// ... (mã code ban đầu)

// Tốc độ game (ms)
let gameSpeed = 50; // Tốc độ ban đầu

// Vòng lặp game
function gameLoop() {
  // ... (mã code bên trong gameLoop)

  // Gọi lại gameLoop sau mỗi gameSpeed ms
  setTimeout(gameLoop, gameSpeed);
}

// Lắng nghe sự kiện bàn phím
document.addEventListener('keydown', (event) => {
  // ... (xử lý các phím mũi tên)

  // Tăng/giảm tốc độ
  if (event.key === '-') {
    if (gameSpeed > 50) { // Giới hạn tốc độ tối thiểu
      gameSpeed -= 10;
    }
  } else if (event.key === '=') {
    if (gameSpeed < 500) { // Giới hạn tốc độ tối đa
      gameSpeed += 10;
    }
  }
});

// ... (mã code còn lại)
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Kích thước ô vuông
const gridSize = 20;
// Số lượng ô vuông theo chiều ngang
const gridWidth = canvas.width / gridSize;
// Số lượng ô vuông theo chiều dọc
const gridHeight = canvas.height / gridSize;

// Tạo con rắn
let snake = [{ x: 10, y: 10 }];
let snakeDirection = 'right';

// Tạo thức ăn
let food = {};
generateFood();

// Điểm số
let score = 0;

// Vòng lặp game
function gameLoop() {
  // Di chuyển con rắn
  moveSnake();
  // Kiểm tra va chạm
  checkCollision();
  // Vẽ game
  drawGame();

  // Gọi lại gameLoop sau mỗi 100ms
  setTimeout(gameLoop, 100);
}

// Hàm di chuyển rắn
function moveSnake() {
  // Tạo đầu rắn mới dựa trên hướng di chuyển
  const head = {
    x: snake[0].x,
    y: snake[0].y
  };

  switch (snakeDirection) {
    case 'up': head.y--; break;
    case 'down': head.y++; break;
    case 'left': head.x--; break;
    case 'right': head.x++; break;
  }

  // Thêm đầu rắn vào mảng rắn
  snake.unshift(head);

  // Xóa đuôi rắn nếu không ăn được thức ăn
  if (snake.length > score + 1) {
    snake.pop();
  }
}

// Hàm kiểm tra va chạm
function checkCollision() {
  // Kiểm tra va chạm với tường
  if (snake[0].x < 0 || snake[0].x >= gridWidth || snake[0].y < 0 || snake[0].y >= gridHeight) {
    gameOver();
  }

  // Kiểm tra va chạm với cơ thể rắn
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      gameOver();
    }
  }

  // Kiểm tra ăn được thức ăn
  if (snake[0].x === food.x && snake[0].y === food.y) {
    score++;
    generateFood();
  }
}

// Hàm tạo thức ăn ngẫu nhiên
function generateFood() {
  food = {
    x: Math.floor(Math.random() * gridWidth),
    y: Math.floor(Math.random() * gridHeight)
  };
}

// Hàm vẽ game
function drawGame() {
  // Xóa màn hình canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Vẽ con rắn
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? 'green' : 'lime';
    ctx.fillRect(snake[i].x * gridSize, snake[i].y * gridSize, gridSize, gridSize);
  }

  // Vẽ thức ăn
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

  // Hiển thị điểm số
  ctx.fillStyle = 'black';
  ctx.font = '16px Arial';
  ctx.fillText('Điểm số: ' + score, 10, 20);
}

// Hàm kết thúc game
function gameOver() {
  alert('Game Over! Điểm số của bạn: ' + score);
  resetGame();
}

// Hàm khởi động lại game
function resetGame() {
  snake = [{ x: 10, y: 10 }];
  snakeDirection = 'right';
  food = {};
  generateFood();
  score = 0;
}

// Lắng nghe sự kiện bàn phím
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      if (snakeDirection !== 'down') snakeDirection = 'up';
      break;
    case 'ArrowDown':
      if (snakeDirection !== 'up') snakeDirection = 'down';
      break;
    case 'ArrowLeft':
      if (snakeDirection !== 'right') snakeDirection = 'left';
      break;
    case 'ArrowRight':
      if (snakeDirection !== 'left') snakeDirection = 'right';
      break;
  }
});

// Bắt đầu game
gameLoop();