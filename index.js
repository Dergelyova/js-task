// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move (position, roll) {
  return position + roll * 2 ;
}


// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet(name, owner) {
    if (name === owner) {
        return "Hello boss";
    } else {
        return "Hello guest";
    }
}


// https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  return Math.floor(time / 2);
}
