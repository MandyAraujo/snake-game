window.onload = function(){
    var stage = document.getElementById('stage');
    var context = stage.getContext("2d");
    document.addEventListener("keydown", keyPush)
    
    let speedSnake = 60; //speed snake. The lower the value the faster

    setInterval(game, speedSnake); 
    
    const scoreElement = document.querySelector(".score")    
    const pressElement = document.querySelector(".alert")    
    const speed = 1;
    var speedX = 0;
    var speedY = 0;
    var posHeadX = 10;
    var posHeadY = 15;
    var lengthSquare = 20;
    var amountSquare = 30;
    var initPosAppleX = 10;
    var initPosAppleY = 5;
    var trail = [];
    var tail = 3;



    function game(){
        posHeadX += speedX;
        posHeadY += speedY;
       

        context.fillStyle = "#b2e2f2";        //color display
        context.fillRect(0,0, stage.width, stage.height);

        context.fillStyle = "#494949";  //color apple
        context.fillRect(initPosAppleX*lengthSquare, initPosAppleY*lengthSquare, lengthSquare,lengthSquare);

        context.fillStyle = "black"; //color snake
        for (var i = 0; i < trail.length; i++) {
            context.fillRect(trail[i].x*lengthSquare, trail[i].y*lengthSquare, lengthSquare-1,lengthSquare-1);
            if ((trail[i].x == posHeadX && trail[i].y == posHeadY) || (posHeadX <0) || (posHeadX > amountSquare-1) || (posHeadY < 0) || (posHeadY > amountSquare-1) )
            {
                speedX = speedY=0; //gameover
                scoreElement.innerText = 0; //reload
                tail = 3;
                posHeadX = 10;
                posHeadY = 15;
            }
            
        }
        

        trail.push({
            x:posHeadX,
            y:posHeadY
         })
        while (trail.length > tail) {
            
            trail.shift();
            
        }

        if (initPosAppleX==posHeadX && initPosAppleY==posHeadY){
            tail++;
                 //score
            scoreElement.innerText = (tail-3);
        
            
            
            
            initPosAppleX = Math.floor(Math.random()*amountSquare);
            initPosAppleY = Math.floor(Math.random()*amountSquare);
        }
        

    }
   
    function keyPush(event){

        switch (event.keyCode) {

            case 37: // Left
                speedX = -speed;
                speedY = 0;
                break;
            case 38: // up
                speedX = 0;
                speedY = -speed;
                break;
            case 39: // right
                speedX = speed;
                speedY = 0;
                break;
            case 40: // down
                pressElement.innerText = ""
                speedX = 0;
                speedY = speed;
                break;          
            default:
                
                break;
        }


    }

}