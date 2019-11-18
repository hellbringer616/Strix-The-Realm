//on interaction with the door/block
function interact(event){
  var inInventory = event.player.getInventory().getItems(); //gets an array of items from the players inventory
  var playerName = event.player.getName(); //gets interacting players name

//*//for loop to run through the players inventory array and check for any items matching the string "Watch Tower Key" in the name
  for(var i = 0; i < inInventory.length; i++) {
    if(inInventory[i].displayName.indexOf("Watch Tower Key") == -1){
      var hasKey = 1
    }
  }
//*//


  //If the player has read dialog with the ID 1 allow the player to open the door.
    if(event.player.hasActiveQuest("<NeedsQuestID>") && hasKey == 1){
         event.block.timers.start(1, 40, false); //sets a timer with id 1 to trigger after 40 ticks (2 seconds)
    }else{
          event.setCanceled(true); //cancels the event.
          event.player.message("&eThe door is locked.")
    }
}
//run a timer
function timer(event){
  //checks if the door/block is open
    if(event.block.getOpen() == true) {
      //if open close the door/block and stop the timer
        event.block.setOpen(false)
        event.block.timers.stop(1);
        }
        //stop the timer
    event.block.timers.stop(1);
}
