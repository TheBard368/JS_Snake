const cvs=document.getElementById("snake");
const ctx=cvs.getContext("2d");

var count=0;

document.getElementById("count").innerHTML="Punkty: " + count;

const unit=20;

var snake=[];
snake[0]={
    x: 8*unit,
    y: 7*unit
}

var food={
    x: Math.floor(Math.random()*17)*unit,
    y: Math.floor(Math.random()*15)*unit
}

document.addEventListener("keydown", direction);

var d;

function direction(event){
    if(event.keyCode==37 && d!="RIGHT"){
        d="LEFT";
    }else if(event.keyCode==38 && d!="DOWN"){
        d="UP";
    }else if(event.keyCode==39 && d!="LEFT"){
        d="RIGHT";
    }else if(event.keyCode==40 && d!="UP"){
        d="DOWN";
    }
}

function collison(head, array){
    for(let i=0; i<array.length; i++){
        if(head.x==array[i].x && head.y==array[i].y)return true;
    }
    return false;
}

function draw(){
    ctx.clearRect(0, 0, 17*unit, 15*unit);

    for(let i=0; i<snake.length; i++){
        ctx.fillStyle=(i==0)? "black": "blue";
        ctx.fillRect(snake[i].x, snake[i].y, unit, unit);

        ctx.strokeStyle="white";
        ctx.strokeRect(snake[i].x, snake[i].y, unit, unit);
    }

    ctx.fillStyle="red";
    ctx.fillRect(food.x, food.y, unit, unit);

    var snakeX=snake[0].x;
    var snakeY=snake[0].y;

    if(d=="RIGHT")snakeX+=unit;
    if(d=="LEFT")snakeX-=unit;
    if(d=="UP")snakeY-=unit;
    if(d=="DOWN")snakeY+=unit;

    if(snakeX==food.x && snakeY==food.y){
        food={
            x: Math.floor(Math.random()*17)*unit,
            y: Math.floor(Math.random()*15)*unit
        }
        count++;
        document.getElementById("count").innerHTML="Punkty: " + count;

    }else snake.pop();

    var newHead={
        x: snakeX,
        y: snakeY
    }

    if(snakeX<0 || snakeX>16*unit || snakeY<0 || snakeY>14*unit || collison(newHead, snake)){
        clearInterval(game);
    }

    snake.unshift(newHead);
}

var game=setInterval(draw,100);