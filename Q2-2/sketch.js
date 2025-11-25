// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8; 
  noStroke();// マスの一辺の長さ
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
    const x = i + j;
      if(x % 2 == 0){
        fill(255);
      }
      else{
        fill(131,132,135);
      }
      rect(size * i , size * j, size, size);
      if(x % 2 != 0 && j < 3){
        fill(250,11,2);
      }
      else if(x%2!=0 && j>4){
        fill(0);
      }
      else{
        noFill();
      }
      ellipse(size*i+size/2, size*j+size/2,size*0.8,size*0.8);
  }
  }
}
  //noStroke();
  //for(let i = 0; i < 8; i++){
   // for(let j = 0; j < 8; j++){
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
 
  
