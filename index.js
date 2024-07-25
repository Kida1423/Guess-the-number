let targetNumber=getRandomInt();
let count=0;
function getRandomInt(){
    return Math.floor(Math.random()*100)+1;
}
function getUserNumber(){
    const userNum=document.getElementById('userInput').value;
    return parseInt(userNum);
}
function checkNum(UserNum,targetNumber){
    if(UserNum>targetNumber){
        return "меньше";
    }else if(UserNum<targetNumber){
        return "больше";
    }else{
        return "угадал";
    }
}
function game(){
    let User=getUserNumber();
    count++;
    let result=checkNum(User,targetNumber);
    document.getElementById("result").textContent=result;
    if(result==="угадал"){
        return document.getElementById("count").textContent=`Количество попыток: ${count}`;
    }
}
