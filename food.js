class Food{
    constructor(){

    }

    getCalorie(name){
        console.log("name" + name)
        var CalorieStateRef = database.ref(name)
       CalorieStateRef.on("value",(data) =>{
            CalorieState = data.val();
    })

    console.log("CalorieState" + CalorieState)

    CalorieState  += CalorieState
    }


    
}