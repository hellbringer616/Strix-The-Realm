var RpgPlugin = Java.type("cz.neumimto.rpg.sponge.NtRpgPlugin");
//On interact with NPC
function interact(event) {
  ///// Config Start
  var response = "*grumbles* I like where your hands are going missy.... *zzz*"
  ///// Config End
  var sneak = event.player.isSneaking(); //is the player sneaking
  var className = "Thieving" //must be a string
  var uid = event.player.getUUID(); //Get Player UUID string
  var JavaUUID = Java.type('java.util.UUID'); //Magic?
  var character = RpgApi.getCharacterService.getCharacter(JavaUUID.fromString(uid)) //load NT-RPG Character service and get UUID than convert to Java UUID
  var classData = character.getClassByName(className) //gets class data from character

  if (classData !== null) { //checks if classData returns null
    var playerName = event.player.getName(); //gets the interacting players name
    if(event.player.hasActiveQuest(13)){
      if(sneak && event.player.getPotionEffect(2) != 6){
        var rng = Math.random();
        var roll = (5/833)+(17/49)+rng
        event.player.message("&cYou attempt to steal the key...")
        if(roll >= 1){
          event.npc.executeCommand("retrieve 9500 1 " + playerName + ""); //retrieve itemizer item of quantity and give to player
          event.player.message("&eYou've stolen the key! Open your inventory")
          event.player.removeQuest(13)
          event.player.finishQuest(13)
          event.player.startQuest(14)

        }else{
          event.npc.say(response);
          event.player.message("&cYou failed to steal the key.")
        }
      }
    }else{
      if(!event.player.hasFinishedQuest(13) || !event.player.hasFinishedQuest(13)){
        event.player.message("&eYou have not started Thieve's Cant.");
      }
    }
  }
}
