function countdown_timerV1(){
    //manual countdown timer
    console.log("countdown_timerV1() begin");
    var counter = 50;
    document.getElementById("countdown_display").innerHTML = counter;
    console.log(counter);
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = counter;
        console.log(counter);
    }, 5000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = counter;
        console.log(counter);
    }, 10000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = counter;
        console.log(counter);
    }, 15000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = counter;
        console.log(counter);
    }, 20000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = counter;
        console.log(counter);
    }, 25000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = counter;
        console.log(counter);
    }, 30000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = counter;
        console.log(counter);
    }, 35000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = counter;
        console.log(counter);
    }, 40000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = counter;
        console.log(counter);
    }, 45000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = "Blastoff!";
        console.log(counter);
    }, 50000)
}
//better blastoff function
function btrBlastoff(){
    //variables
    var delayTime = 5000
    var counter = 50;
    var numSteps = 10;
    //dependent variables
    var counterStep = counter/numSteps;
    var halfCounter = counter / 2;
    //code
    for (var i = 0; i < numSteps; i++){
        setTimeout(function(){ 
            //setting display for counter being zero
            if (counter == 0){
                console.log("Blastoff!!!");
                document.getElementById("countdown_display").innerHTML = "Blastoff!";
                //setting display for counter being greater than zero
            } else if(counter < halfCounter){
                //setting halfway counter to change display
                console.log(counter);
                document.getElementById("countdown_display").innerHTML 
                    = "Warning Less than ½ way to launch, time left = " + counter;
            } else {
                console.log(counter);
                document.getElementById("countdown_display").innerHTML = counter;
            }
            counter = counter - counterStep;
        }, delayTime * i);
    }
}
    //setting variable for number of wins
    var numWin = 0;
    //setting variable for number of losses
    var numLose = 0;
    //setting variable for number of ties
    var numTie = 0;
//creating craps game
function play_craps(){
    
    //debugging setup for function start 
    console.log("play_craps() started");
    //setting die 1 as a variable
    var die1;
    //setting die 2 as a variable
    var die2;
    //RNG for die 1 with limitations for 6 sided die
    die1 = Math.floor(Math.random() * 6) + 1;
    //logging die 1 result into the console
    console.log(die1);
    //RNG for die 2 with limitations for 6 sided die
    die2 = Math.floor(Math.random() * 6) + 1;
    //logging die 2 result into the console
    console.log(die2);
    //displaying die 1 roll results to html
    document.getElementById("die1res").innerHTML = die1;
    //displaying die 2 roll results to html
    document.getElementById("die2res").innerHTML = die2;
    //creating variable for both die 1 and die 2 combined for the game result
    var sum = die1 + die2;
    //adding the two dice rolls together and logging result
    console.log(sum);
        //setting parameters for losing the game
        if (sum == 7 || sum == 11){
        //displaying the game result
       document.getElementById("gameres").innerHTML = "Craps, you lose!!!";
       //adding to the tracking of losses
       ++numLose
       //logging the number of losses
       document.getElementById("loseRes").innerHTML = numLose;
       //setting parameters for winning the game
    }  else if (die1 == die2 && die1%2 == 0){
        //display for the winning rolls
        document.getElementById("gameres").innerHTML = "Huzzah! You win!";
        //adding to the tracking of wins
        ++numWin
        //logging the number of wins
       document.getElementById("winRes").innerHTML = numWin;
        //setting parameters for a tie game
    } else{
        //display for tie game
       document.getElementById("gameres").innerHTML = "You did not win or lose! Please roll again";
       //adding to the tracking of tie games
       ++numTie
       //logging the number of tie games
       document.getElementById("tieRes").innerHTML = numTie;
    }
}

function playTilWin(){
    console.log("play_craps() started");
    var i = 0;
    var die1;
    var die2;
    while(numWin == 0){
        i++
     //RNG for die 1 with limitations for 6 sided die
        die1 = Math.floor(Math.random() * 6) + 1;
        //logging die 1 result into the console
        console.log(die1);
        //RNG for die 2 with limitations for 6 sided die
        die2 = Math.floor(Math.random() * 6) + 1;
        //logging die 2 result into the console
        console.log(die2);
        //displaying die 1 roll results to html
        document.getElementById("die1res").innerHTML = die1;
        //displaying die 2 roll results to html
        document.getElementById("die2res").innerHTML = die2;
        //creating variable for both die 1 and die 2 combined for the game result
        var sum = die1 + die2;
        //adding the two dice rolls together and logging result
        console.log(sum);
        //setting parameters for losing the game
        if (sum == 7 || sum == 11){
            //displaying the game result
            document.getElementById("gameres").innerHTML = "Craps, you lose!!!";
            //adding to the tracking of losses
            ++numLose
            //logging the number of losses
            document.getElementById("loseRes").innerHTML = numLose;
            //setting parameters for winning the game
        }  else if (die1 == die2 && die1%2 == 0){
            //display for the winning rolls
            document.getElementById("gameres").innerHTML = "Huzzah! You win!";
            //adding to the tracking of wins
            ++numWin
            //logging the number of wins
            document.getElementById("winRes").innerHTML = numWin;
            //setting parameters for a tie game
        } else{
            //display for tie game
            document.getElementById("gameres").innerHTML = "You did not win or lose! Please roll again";
            //adding to the tracking of tie games
            ++numTie
            //logging the number of tie games
            document.getElementById("tieRes").innerHTML = numTie;
        }
    }
    console.log("We Finally Got a Win!");
    console.log("It only took us " + i + " times to win.");
}
//disabling and enabling the start and stop buttons after click
function start(){
    console.log("start() function started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    console.log("stop() function started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}