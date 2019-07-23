var goal = Math.floor((Math.random()*101)+19)
var currentScore = 0;
var wins = 0;
var losses = 0;
var ruby = 0;
var emerald = 0;
var onyx = 0;
var sapphire = 0;


function newGame() {
    currentScore = 0;
    ruby = Math.floor((Math.random()*11)+1)
    emerald = Math.floor((Math.random()*11)+1)
    onyx = Math.floor((Math.random()*11)+1)
    sapphire = Math.floor((Math.random()*11)+1)


    $("#goal").text(goal)

    $("#ruby").unbind().on("click",function() {
        currentScore = currentScore + ruby
        console.log("Ruby added: "+ruby)
    })

    $("#emerald").unbind().click(function() {
        currentScore = currentScore + emerald
        console.log("Emerald added: "+emerald)
    })

    $("#sapphire").unbind().on("click",function() {
        currentScore = currentScore + sapphire
        console.log("Sapphire added: "+sapphire)
    })

    $("#onyx").unbind().on("click",function() {
        currentScore = currentScore + onyx
        console.log("Onyx added: "+onyx)
    })


    $(".gem").on("click",function(){
        $("#scoreMessage").html("Current Score:  <span id='score'>0</span>");
        $("#score").text(currentScore)
        if(currentScore === goal){
            wins++;
            // You win message here
            goal = Math.floor((Math.random()*101)+19)
            $("#goal").text(goal);
            $("#scoreMessage").text("You won! There is a new goal if you wish to press your luck.");
            $("#score").text("");
            newGame()
    
        } else if(currentScore >= goal){
            losses++
            //You lose message here
            goal = Math.floor((Math.random()*101)+19)
            $("#goal").text(goal);
            $("#scoreMessage").text("You lost! There is a new goal if you wish to turn your luck around.");
            $("#score").text("");
            newGame()
        }
    })

    
}
newGame();