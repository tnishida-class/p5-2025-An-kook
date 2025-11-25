// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;


function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;       
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);
// BLANK[1] キャラクターの左右移動

  if (keyIsDown(LEFT_ARROW)){ x -= 5; }
  if (keyIsDown(RIGHT_ARROW)){ x += 5; }
  
  if (keyIsDown(LEFT_ARROW)&&keyIsDown("A".charCodeAt(0))){ x -= 10; }
  if (keyIsDown(RIGHT_ARROW)&&keyIsDown("S".charCodeAt(0))){ x += 10; }
  
  // BLANK[2] 重力とジャンプ
    
  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置を更新
    
   x += vx;
   y += vy;  

   if(0<y && y<groundY-size*0.5){
   vy += g;
  } 
  y = constrain(y, 0 , groundY-size*0.5);

  if(keyIsDown(" ".charCodeAt(0)) && y == groundY-size*0.5){  
    vy = -20;
  }

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
  
}