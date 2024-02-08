function preload(){
 i = "https://wallpaperaccess.com/full/86289.jpg"
}
function setup(){
   canvas = createCanvas(500,500)
  canvas.center()
}
function draw(){
  image(i,460,460,460,460)
  fill('blue')
  rect(15,40,50,420)
  rect(40,435,420,50)
  rect(435,40,50,420)
  rect(40,15,420,50)
  fill('red')
  ellipse(40,40,50)
  ellipse(460,40,50)
  ellipse(460,460,50)
  ellipse(40,460,50)
  
}