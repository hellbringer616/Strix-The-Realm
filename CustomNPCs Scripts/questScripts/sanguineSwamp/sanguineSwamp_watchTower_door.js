//loads NTRPG Plugin
var RpgPlugin = Java.type("cz.neumimto.rpg.sponge.NtRpgPlugin");
//On interact with NPC

//on interaction with the door/block
function interact(event){
  var inInventory = event.player.getInventory().getItems(); //gets an array of items from the players inventory
  var playerName = event.player.getName(); //gets interacting players name
  var sneak = event.player.isSneaking(); //is the player sneaking

//*//for loop to run through the players inventory array and check for any items matching the string "Watch Tower Key" in the name
  for(var i = 0; i < inInventory.length; i++) {
    if(inInventory[i].displayName.indexOf("Watch Tower Key") == -1){
      var hasKey = 1
    }
  }
//*//


  //If the player has read dialog with the ID 1 allow the player to open the door.
    if(event.player.hasActiveQuest("<NeedsQuestID>") && hasKey == 1 && !sneak){
         event.block.timers.start(1, 40, false); //sets a timer with id 1 to trigger after 40 ticks (2 seconds)
    }else{
          event.setCanceled(true); //cancels the event.
          event.player.message("&eThe door is locked.")
    }
    if(event.player.hasActiveQuest("<NeedsQuestID>") && sneak){
      var className = "Thieving" //must be a string
      var uid = event.player.getUUID(); //Get Player UUID string
      var JavaUUID = Java.type('java.util.UUID'); //Magic?
      var character = RpgPlugin.GlobalScope.characterService.getCharacter(JavaUUID.fromString(uid)) //load NT-RPG Character service and get UUID than convert to Java UUID
      var classData = character.getClasses().get(className) //gets class data from character
      var requiredLevel = 4
      if(sneak && classLevel >= requiredLevel && event.player.hasActiveQuest("<NeedsQuestID>") || event.player.hasFinishedQuest("<NeedsQuestID>")){

      }
    }else{
          event.setCanceled(true); //cancels the event.
          event.player.message("&eyou failed to pick the lock.")
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
