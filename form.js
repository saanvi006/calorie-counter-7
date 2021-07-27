class Form{
    constructor(){
        this.input = createInput("name")
        this.button = createInput('enter')
        this.title = createElement('h2');


    }

    display(){
     this.title = createElement("h2")
        this.title.style('font-size', '24px', 'color', 'white')
        this.title.html("Calorie Counter");
        this.title.position(100, 0);
        

        this.input = createInput().attribute('placeholder', 'Breakfast is');
        this.input.style('background-color', "pink")
        this.button1 = createButton('enter');
        this.button1.style('background-color', "lavender")
        this.input.position(100, 160);
        this.button1.position(100,190);
        
        
        this.input2 = createInput().attribute('placeholder', 'lunch is');
        this.input2.style('background-color', "pink")
        this.button2 = createButton('enter');
        this.button2.style('background-color', "lavender")
        this.input2.position(100, 230);
        this.button2.position(100,260);
        
        this.input3 = createInput().attribute('placeholder', 'dinner is');
        this.input3.style('background-color', "pink")
        this.button3 = createButton('enter');
        this.button3.style('background-color', "lavender")
        this.input3.position(100, 290);
        this.button3.position(100,320);

        this.reset = createButton('reset')
        this.reset.style('background-color', "lightBlue")
        this.reset.position(100,350)
        this.reset.mousePressed(function(){
            gameState = 0
            this.input3.value() = " "
            
        })



        this.button1.mousePressed(()=>{
           
            gameState = 1

            var name = this.input.value();
            food.getCalorie(name)
        }
        )
            
        
        
        this.button2.mousePressed(()=>{
            gameState = 2
        var name = this.input2.value();
            food.getCalorie(name)
        })
        

        this.button3.mousePressed(()=>{
        gameState = 3
            var name = this.input3.value()
            food.getCalorie(name)
        })
            
            
       
       
    }   
}