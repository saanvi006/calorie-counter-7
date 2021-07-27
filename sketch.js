
var backgroundImage
var food 
var CalorieState = 0
var gameState = 0


function preload(){
backgroundImage = loadImage("background.jpeg")
}




function setup() {
  createCanvas(1500,700);

  database = firebase.database()
 
  if(gameState === 0){
    form = new Form()
  form.display();

  food = new Food()
  
  }
  
  

  

  
  
}

function draw() {
  background(backgroundImage); 

  console.log(CalorieState)

  
  
  if(gameState === 1){
    if( CalorieState < 600)
  text ("the breakfast is healthy!" , 150, 220 )
  else{
    text ("the breakfast is unhealthy!" , 150, 220 )
  }
  }
  

  if(gameState === 2){
    if( CalorieState < 600)
  text ("the lunch is healthy!" , 150, 280 )
  else{
    text ("the lunch is unhealthy!" , 150, 280 )
  }
  }

  if(gameState === 3){
    if( CalorieState < 600)
  text ("the dinner is healthy!" , 150, 330 )
  else{
    text ("the dinner is unhealthy!" , 150, 330 )
  }
  }

  drawSprites();
}