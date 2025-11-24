
let ball = {x: 0, y: 0, size: 50, vx: 5, vy: -5};
let targets= []; 

const g = 1;


function setup(){
  createCanvas(windowWidth, windowHeight);
  ball.x = width / 2;
  ball.y = height / 2;
  ball.vx = 0;
  ball.vy = 0;
  ball.size = 50;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function randomBall(b) {
  
  for(let i = 0; i < targets.length; i++){
    let t = targets[i];
    fill(100);
    ellipse(t.x, t.y, t.size);
    t.x += t.vx;
    t.y += t.vy;
  }
  
  

  // 補足：filter 関数を使うともっと簡単に書ける
  // balls = balls.filter(insideCanvas);

  if(frameCount % 20 === 0) { // 20フレームごとに新しい的を追加する
    

    const constv = 5;
    let randvx = random(-constv, constv);
    let randvy = Math.sqrt(constv * constv - randvx * randvx);
    let direction = random(-1, 1);
    // if(direction < 0){
    //   randvy *= -1;
    // }
  const t = { x: windowWidth/2, y: 0, size: 20, vx: randvx, vy: randvy};
  targets.push(t);
  }

  
  const activeTargets = []; 
  for(let i = 0; i < targets.length; i++){
    let t = targets[i];
    let hit = false;
    
        // BLANK[2]
        const dx = b.x - t.x;
        const dy = b.y - t.y;
        const r = (t.size + b.size)/2;
        if(dx * dx + dy * dy <= r * r){
          hit = true;
        }
      
      if(!hit) activeTargets.push(t); 
    
  }
  targets = activeTargets; 
}

function draw(){
  background(160, 192, 255);
  // const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;       
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);


  if (keyIsDown(LEFT_ARROW)){ ball.x -= 5; }
  if (keyIsDown(RIGHT_ARROW)){ ball.x += 5; }
  
  if (keyIsDown(LEFT_ARROW)&&keyIsDown("A".charCodeAt(0))){ ball.x -= 10; }
  if (keyIsDown(RIGHT_ARROW)&&keyIsDown("S".charCodeAt(0))){ ball.x += 10; }
  
  
    
  // 速くなりすぎないように制限
  ball.vx = constrain(ball.vx, -20, 20);
  ball.vy = constrain(ball.vy, -20, 20);

  // 位置を更新
    
   ball.x += ball.vx;
   ball.y += ball.vy;  

   if(0<ball.y && ball.y<groundY-ball.size*0.5){
   ball.vy += g;
  } 
  ball.y = constrain(ball.y, 0 , groundY-ball.size*0.5);

  if(keyIsDown(" ".charCodeAt(0)) && ball.y == groundY-ball.size*0.5){  
    ball.vy = -20;
  }

  // キャラクターを描く
  fill(0);
  ellipse(ball.x, ball.y, ball.size, ball.size);

  randomBall(ball);
  
}