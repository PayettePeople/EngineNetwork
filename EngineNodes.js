let numBubbles = 5;
let nameArray = ["Building Science", "Visualization", "Fabrication", "Computation", "Data Analytics"];

let BubbleDiameter = [];
let smallDiameter = 30;
let BubbleX = [];
let BubbleY = [];
let BubbleOrbitX = [];
let BubbleOrbitY = [];
let speed = .2;
let m = 4;

let BGBubblesX = [];
let BGBubbleSpeed = [];

let BGNodeX = [];
let BGNodeY = [];

let smallNodeX = [];
let smallNodeY = [];

let BubbleMoveX = [];
let BubbleMoveY = [];

let infectionDiameter = [];
let infectionX = [];
let infectionY = [];
let infectionMoveX = [];
let infectionMoveY = [];
let infectionNum = 9;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let xDots = 0; xDots < 60; xDots++){
    for (let yDots = 0; yDots < 40; yDots++){
      BGBubblesX.push(random(0,6));
      BGBubbleSpeed.push(random(-.02,.02));
    }
  }

  for (let i=0; i<numBubbles; i++){
    if (i%2 == 0){
      let x = random(width*(1/7), width*(3/7));
      BubbleX.push(x);
    }else{
    let x = random(width*(4/7), width*(6/7));
    BubbleX.push(x);
  }
  }
  for (let i=0; i<numBubbles; i++){
    if(i%3 == 1){
      let y = random(height*(1/6), height*(3/6));
      BubbleY.push(y);
    }else{
      let y = random(height*(3/6), height*(5/6));
      BubbleY.push(y);
    }
  }
  for (let i=0; i<numBubbles; i++){
    let myX = random(-.3,.3);
    if (abs(myX)<.1){
      myX = myX*2
    }
    let myY = random(-.3,.3);
    if (abs(myY)<.1){
      myY = myY*2
    }
    BubbleMoveX.push(random(myX));
    BubbleMoveY.push(random(myY));
    let dia = int(random(30,70));
    BubbleDiameter.push(dia);
  }





  for (let i=0; i<infectionNum; i++){
      let x = random(width);
      infectionX.push(x);
    }
    for (let i=0; i<infectionNum; i++){
        let y = random(height);
        infectionY.push(y);
      }

  for (let i=0; i<infectionNum; i++){
    let myX = random(-.1,.1);
    if (abs(myX)<.1){
      myX = myX*2
    }
    let myY = random(-.1,.1);
    if (abs(myY)<.1){
      myY = myY*5
    }
    infectionMoveX.push(random(myX));
    infectionMoveY.push(random(myY));
    let dia = int(random(30,190));
    infectionDiameter.push(dia);
  }
}

function draw() {
  background(240);

  for (let i=0; i<infectionNum; i++){
    if (infectionX[i] < 0){
      infectionX[i] = infectionX[i]+1;
      infectionMoveX[i] = infectionMoveX[i]*-1
    }else if (infectionX[i] > width){
      infectionX[i] = infectionX[i]-1;
      infectionMoveX[i] = infectionMoveX[i]*-1
    }
    if (infectionY[i] < 0){
      infectionY[i] = infectionY[i]+1;
      infectionMoveY[i] = infectionMoveY[i]*-1
    }else if (infectionY[i] > height){
      infectionY[i] = infectionY[i]-1;
      infectionMoveY[i] = infectionMoveY[i]*-1
    }
      infectionX[i] = infectionX[i] + infectionMoveX[i]
      infectionY[i] = infectionY[i] + infectionMoveY[i]
      //ellipse(infectionX[i],infectionY[i],infectionDiameter[i],infectionDiameter[i]);
      push();
      stroke(255);
      strokeWeight(3);
      let i1X = infectionX[i]+infectionDiameter[i]/2*sin(.001*frameCount+208*(1/i));
      let i1Y = infectionY[i]+infectionDiameter[i]/2*cos(.001*frameCount+208*(1/i));
      let i2X = infectionX[i]+infectionDiameter[i]/2*sin(-.007*frameCount+408*(1/i));
      let i2Y = infectionY[i]+infectionDiameter[i]/2*cos(-.007*frameCount+408*(1/i));
      let i3X = infectionX[i]+infectionDiameter[i]/2*sin(-.002*frameCount*(1/i));
      let i3Y = infectionY[i]+infectionDiameter[i]/2*cos(-.002*frameCount*(1/i));
      let i4X = infectionX[i]+infectionDiameter[i]/2*sin(.0013*frameCount+1132*(1/i));
      let i4Y = infectionY[i]+infectionDiameter[i]/2*cos(.0013*frameCount+1132*(1/i));
      let i5X = infectionX[i]+infectionDiameter[i]/2*sin(-.0015*frameCount+55*(1/i));
      let i5Y = infectionY[i]+infectionDiameter[i]/2*cos(-.0015*frameCount+55*(1/i));
      let i6X = infectionX[i]+infectionDiameter[i]/2*sin(-.001*frameCount+1320*(1/i));
      let i6Y = infectionY[i]+infectionDiameter[i]/2*cos(-.001*frameCount+1320*(1/i));
      point(infectionX[i]+infectionDiameter[i]/2*sin(.001*frameCount+208*(1/i)),infectionY[i]+infectionDiameter[i]/2*cos(.001*frameCount+208*(1/i)));
      point(infectionX[i]+infectionDiameter[i]/2*sin(-.007*frameCount+408*(1/i)),infectionY[i]+infectionDiameter[i]/2*cos(-.007*frameCount+408*(1/i)));
      point(infectionX[i]+infectionDiameter[i]/2*sin(-.002*frameCount*(1/i)),infectionY[i]+infectionDiameter[i]/2*cos(-.002*frameCount*(1/i)));
      point(infectionX[i]+infectionDiameter[i]/2*sin(.0013*frameCount+1132*(1/i)),infectionY[i]+infectionDiameter[i]/2*cos(.0013*frameCount+1132*(1/i)));
      point(infectionX[i]+infectionDiameter[i]/2*sin(-.0015*frameCount+55*(1/i)),infectionY[i]+infectionDiameter[i]/2*cos(-.0015*frameCount+55*(1/i)));
      //point(infectionX[i]+infectionDiameter[i]/2*sin(-.001*frameCount+1320*(1/i)),infectionY[i]+infectionDiameter[i]/2*cos(-.001*frameCount+1320*(1/i)));
      strokeWeight(1);

      line(i1X,i1Y,i2X,i2Y);
      line(i1X,i1Y,i3X,i3Y);
      line(i1X,i1Y,i4X,i4Y);
      line(i1X,i1Y,i5X,i5Y);
      //line(i1X,i1Y,i6X,i6Y);

      line(i2X,i2Y,i3X,i3Y);
      line(i2X,i2Y,i4X,i4Y);
      line(i2X,i2Y,i5X,i5Y);
      //line(i2X,i2Y,i6X,i6Y);

      line(i3X,i3Y,i4X,i4Y);
      line(i3X,i3Y,i5X,i5Y);
      //line(i3X,i3Y,i6X,i6Y);

      line(i4X,i4Y,i5X,i5Y);
      //line(i4X,i4Y,i6X,i6Y);

      //line(i5X,i5Y,i6X,i6Y);
      pop();
  }



  let xWin = int(width/64);
  let yWin = int(height/64);

  for (let xDots = 0; xDots < xWin; xDots++){
    for (let yDots = 0; yDots < yWin; yDots++){
      push();

        stroke(255);
        strokeWeight(1);
        stroke(250);
        strokeWeight(3);

      BGBubblesX[(xDots*(int(xWin)))+yDots] = BGBubblesX[(xDots*(int(xWin)))+yDots] + BGBubbleSpeed[(xDots*(int(xWin)))+yDots];


      pop();
      BGNodeX[(xDots*(int(xWin)))+yDots] = int(xDots*64+32 + 32*sin(BGBubblesX[(xDots*(int(xWin)))+yDots]));
      BGNodeY[(xDots*(int(xWin)))+yDots] = int(yDots*64+32 + 32*cos(BGBubblesX[(xDots*(int(xWin)))+yDots]));
      push();
      stroke(200);
      strokeWeight(3);


        pop();
    }
  }


  strokeWeight(3);
  noFill();
  for(let i = 0; i< numBubbles; i++){


    for(let j = 0; j< numBubbles; j++){
      if (i != j){ // DONT LET THE BUBBLES GET TOO CLOSE

        if(abs(BubbleX[i]-BubbleX[j]) < BubbleDiameter[i]+BubbleDiameter[j] && abs(BubbleY[i]-BubbleY[j]) < BubbleDiameter[i]+BubbleDiameter[j]){
          BubbleX[j] = BubbleX[j] - (BubbleX[i]-BubbleX[j])*.001;
          BubbleY[j] = BubbleY[j] - (BubbleY[i]-BubbleY[j])*.001;
      }

        strokeWeight(3);
        stroke(abs(BubbleX[i]-BubbleX[j])/(width/200)+100);

      line(BubbleOrbitX[i],BubbleOrbitY[i],BubbleOrbitX[j],BubbleOrbitY[j]);

      if (abs(mouseX - BubbleOrbitX[i]) < 25 && abs(mouseY - BubbleOrbitY[i]) < 25){
        push();
        stroke(255,100,130);
        strokeWeight(3);
        line(BubbleOrbitX[i],BubbleOrbitY[i],BubbleOrbitX[j],BubbleOrbitY[j]);
        pop();
      }
     }
    }
      BubbleOrbitX[i] = BubbleX[i]
      BubbleOrbitY[i] = BubbleY[i]


      push();
      noStroke();
      let myAlpha = 10;
      fill(202,31,123,myAlpha);
      triangle(BubbleOrbitX[0],BubbleOrbitY[0],BubbleOrbitX[1],BubbleOrbitY[1],BubbleOrbitX[2],BubbleOrbitY[2]);
      fill(164,1,88,myAlpha);
      triangle(BubbleOrbitX[0],BubbleOrbitY[0],BubbleOrbitX[2],BubbleOrbitY[2],BubbleOrbitX[3],BubbleOrbitY[3]);
      fill(126,0,68,myAlpha);
      triangle(BubbleOrbitX[0],BubbleOrbitY[0],BubbleOrbitX[3],BubbleOrbitY[3],BubbleOrbitX[4],BubbleOrbitY[4]);

      fill(240,73,163,myAlpha);
      triangle(BubbleOrbitX[0],BubbleOrbitY[0],BubbleOrbitX[2],BubbleOrbitY[2],BubbleOrbitX[4],BubbleOrbitY[4]);
      fill(255,116,191,myAlpha);
      triangle(BubbleOrbitX[0],BubbleOrbitY[0],BubbleOrbitX[1],BubbleOrbitY[1],BubbleOrbitX[3],BubbleOrbitY[3]);
      fill(255,154,208,myAlpha);
      triangle(BubbleOrbitX[0],BubbleOrbitY[0],BubbleOrbitX[1],BubbleOrbitY[1],BubbleOrbitX[4],BubbleOrbitY[4]);

      fill(202,31,66,myAlpha);
      triangle(BubbleOrbitX[1],BubbleOrbitY[1],BubbleOrbitX[2],BubbleOrbitY[2],BubbleOrbitX[3],BubbleOrbitY[3]);
      fill(202,31,152,myAlpha);
      triangle(BubbleOrbitX[1],BubbleOrbitY[1],BubbleOrbitX[2],BubbleOrbitY[2],BubbleOrbitX[4],BubbleOrbitY[4]);
      fill(202,31,180,myAlpha);
      triangle(BubbleOrbitX[1],BubbleOrbitY[1],BubbleOrbitX[3],BubbleOrbitY[3],BubbleOrbitX[4],BubbleOrbitY[4]);

      fill(87,0,47,myAlpha);
      triangle(BubbleOrbitX[2],BubbleOrbitY[2],BubbleOrbitX[3],BubbleOrbitY[3],BubbleOrbitX[4],BubbleOrbitY[4]);

      pop();



    for (let BGnodes = 0; BGnodes < BGNodeX.length; BGnodes++){
        if (abs(BubbleOrbitX[i] - BGNodeX[BGnodes]) < 55 &&  abs(BubbleOrbitY[i] - BGNodeY[BGnodes]) < 55){
          stroke(200);
          line(BubbleOrbitX[i],BubbleOrbitY[i],BGNodeX[BGnodes],BGNodeY[BGnodes]);
      }
    }
    if (BubbleX[i] < 0 + BubbleDiameter[i]){
      BubbleX[i] = BubbleX[i]+1;
      BubbleMoveX[i] = BubbleMoveX[i]*-1
    }else if (BubbleX[i] > width - BubbleDiameter[i]){
      BubbleX[i] = BubbleX[i]-1;
      BubbleMoveX[i] = BubbleMoveX[i]*-1
    }
    if (BubbleY[i] < 0 + BubbleDiameter[i]){
      BubbleY[i] = BubbleY[i]+1;
      BubbleMoveY[i] = BubbleMoveY[i]*-1
    }else if (BubbleY[i] > height - BubbleDiameter[i]){
      BubbleY[i] = BubbleY[i]-1;
      BubbleMoveY[i] = BubbleMoveY[i]*-1
    }
      BubbleX[i] = BubbleX[i] + BubbleMoveX[i]
      BubbleY[i] = BubbleY[i] + BubbleMoveY[i]
  }
  for(let i = 0; i< numBubbles; i++){
    stroke(0);
    push();
    fill(90);
    noStroke();
    ellipse(BubbleOrbitX[i], BubbleOrbitY[i],18,18); //DRAW A LINE BETWEEN ALL THE NODES
    pop();

  if (abs(mouseX - BubbleOrbitX[i]) < 25 && abs(mouseY - BubbleOrbitY[i]) < 25){
    push();
    noStroke();
    fill(60);
    textSize(22);
    text(nameArray[i],BubbleOrbitX[i], BubbleOrbitY[i]);
    pop();
  }
}
stroke(70);
strokeWeight(2);
fill(255);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
