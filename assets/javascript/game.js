var goal = Math.floor((Math.random()*101)+19)
var currentScore = 0;
var wins = 0;
var losses = 0;
var ruby = 0;
var emerald = 0;
var onyx = 0;
var sapphire = 0;
var clicks=0

$(document).ready(function(){
function newGame() {
    currentScore = 0;
    clicks=0
    ruby = Math.floor((Math.random()*11)+1)
    emerald = Math.floor((Math.random()*11)+1)
    onyx = Math.floor((Math.random()*11)+1)
    sapphire = Math.floor((Math.random()*11)+1)


    $("#goal").text(goal)
    $("#wins").text(wins)
    $("#losses").text(losses)

    //Unbind removes previous game clicks from memory
    $("#ruby").unbind().on("click",function() {
        currentScore = currentScore + ruby
        $("audio#clink")[0].play();
        clicks++
    })

    $("#emerald").unbind().click(function() {
        currentScore = currentScore + emerald
        $("audio#clink")[1].play();
        clicks++
    })

    $("#sapphire").unbind().on("click",function() {
        currentScore = currentScore + sapphire
        $("audio#clink")[2].play();
        clicks++
    })

    $("#onyx").unbind().on("click",function() {
        currentScore = currentScore + onyx
        $("audio#clink")[3].play();
        clicks++
    })


    $(".gem").on("click",function() {
        $("#scoreMessage").html("Current Score:  <span id='score'>0</span>");
        $("#score").text(currentScore)
        if(currentScore === goal) {
            wins++;
            // You win message here
            goal = Math.floor((Math.random()*101)+19)
            $("#goal").text(goal);
            $("#scoreMessage").text("You won in "+clicks+" clicks! Can you do better? Check the new goal.");
            $("#score").text("");
            $("#wins").text(wins)
            newGame()
    
        } else if(currentScore >= goal) {
            losses++
            //You lose message here
            goal = Math.floor((Math.random()*101)+19)
            $("#goal").text(goal);
            $("#scoreMessage").text("You lost! There is a new goal if you wish to turn your luck around.");
            $("#score").text("");
            $("#losses").text(losses)
            newGame()
        }
    })

    
}
newGame();
})