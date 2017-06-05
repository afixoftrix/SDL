var wordBank = ["eat", "touched tree", "pizza", "drink", "alcohol", "league of legends", "pray", "hearthstone",
"soccer", "watched sport", "listened to troy", "cooked", "coded", "swam", "booked a flight",
"went to work", "flamed people on league", "yoga", "danced", "COD", "grocery shopping",
"running", "cauliflower", "television", "ice cream", "bled", "cycling", "peanuts", "partied",
"kayaking","drove", "watermelon", "coffee", "traffic", "read", "drew", "counted",
"lifted weights", "went to arby's", "took a test", "dreamt", "solved math", "listened to Kygo",
"walked", "painted a picture", "spoke to parents", "espn", "cnn", "twitter", "facebook"];



function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}

function squirrel(){
  var roll = Math.floor(Math.random()*2);
  if (roll >= 1){
    return true;
  }
  else {
    return false;
  }
}

function rng(){
  return 5 + (Math.random()*10);
}

// randomWord creates a random number based on the length of wordBank that is then used to pick a random activity.
function randomWord(){
   return Math.floor(Math.random()*wordBank.length);
}

function createArray(length){
 var entry = [];
  for(var i = 0; i < length; i++){
    entry.push(wordBank[randomWord()]);
  }
  return entry;
}

function simulate(journalEntries){
  var journal = [];
  for (var j = 0; j < journalEntries; j++){
    var events = createArray(rng());
    var didITurnIntoASquirrel = squirrel();
      journal.push({
        "events": events,
         "squirrel": didITurnIntoASquirrel
      });
  }
  return journal;
}



console.log(simulate(5));
