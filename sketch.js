function setup() {
    createCanvas(800, 700);
    background("purple")
  }
  
  function draw() {
    stroke("red");
    fill("violet");
   
   
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 50);
    }
  }