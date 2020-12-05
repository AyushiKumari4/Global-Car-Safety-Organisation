var car,wall; 
var speed,weight; 


function setup() { 
  createCanvas(1600,400); 
  wall=createSprite(1500,200,60,height/2) 
  car=createSprite(50,200,50,50) 
  car.shapeColor="white" 
  car.velocityX=5; 
  speed=random(10,25); 
  weight=random(400,1500);
 } 
  
 function draw() 
  { 
    background("cyan"); 
    console.log(speed) 
    
    if(wall.x-car.x <(car.width+wall.width)/2){
       car.velocityX=0; 
       var deformation= 0.5 * weight * speed /22500; 
       
       if(deformation<100)
       { car.shapeColor=("green"); } 
       
       if(deformation>100 && deformation<180){
       car.shapeColor=("yellow") } 
      
       if(deformation>180){
       car.shapeColor=("red") } 
       } 
       drawSprites();
       }