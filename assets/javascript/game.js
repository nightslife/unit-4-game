var goal = 0;
var currentScore = 0;
var wins = 0;
var losses = 0;
var ruby = 0;
var emerald = 0;
var onyx = 0;
var sapphire = 0;


function newGame() {
    goal = Math.floor((Math.random()*101)+19)
    currentScore = 0;
    ruby = Math.floor(Math.random()*12)
    emerald = Math.floor(Math.random()*12)
    onyx = Math.floor(Math.random()*12)
    sapphire = Math.floor(Math.random()*12)


    $("#goal").text(goal)

    $("#ruby").on("click",function() {
        currentScore = currentScore + ruby
        console.log("Ruby added: "+ruby)
    })

    $("#emerald").on("click",function() {
        currentScore = currentScore + emerald
        console.log("Emerald added: "+emerald)
    })

    $("#sapphire").on("click",function() {
        currentScore = currentScore + sapphire
        console.log("Sapphire added: "+sapphire)
    })

    $("#onyx").on("click",function() {
        currentScore = currentScore + onyx
        console.log("Onyx added: "+onyx)
    })


    $(".gem").on("click",function(){
        $("#score").text(currentScore)
        if(currentScore === goal){
            wins++;
            // You win message here
            newGame()
    
        } else if(currentScore >= goal){
            losses++
            //You lose message here
            newGame()
        }
    })

    
}
newGame();