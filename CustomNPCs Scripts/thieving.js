//loads NTRPG Plugin
var RpgPlugin = Java.type("cz.neumimto.rpg.sponge.NtRpgPlugin");
//On interact with NPC
function interact(event) {
  var sneak = event.player.isSneaking(); //is the player sneaking
  var className = "Theiving" //must be a string
  var uid = event.player.getUUID() //Get Player UUID string
  var JavaUUID = Java.type('java.util.UUID') //Magic?
  var character = RpgPlugin.GlobalScope.characterService.getCharacter(JavaUUID.fromString(uid)) //load NT-RPG Character service and get UUID than convert to Java UUID
  var classData = character.getClasses().get(className) //gets class data from character
  var requiredLevel = 1 //level required to steal

  if (classData !== null) { //checks if classData returns null
    var classLevel = classData.getLevel()

    if(sneak && event.player.getPotionEffect(2) != 6 && classLevel <= requiredLevel){ //checks if the player is sneaking and if the player is not inflected with slowness strength 6 and is atleast the required level to steal from the NPC
      var rng = Math.random(); //generates a random number between 0 and 1
      var playerName = event.player.getName(); //gets the interacting players name
      var roll = ((5/833)*((classLevel/requiredLevel)+(classLevel-requiredLevel)))+(17/49)+rng
      if(roll >= 1){
        event.npc.executeCommand("retrieve 9999 3 " + playerName + "") //retrieve itemizer item of quantity and give to player
        event.npc.executeCommand("nadmin exp add " + playerName + " 8 " + className + className) //gives the player theiving XP
      }else{
        event.npc.say(roll);
        event.player.damage(2);
        event.player.addPotionEffect(2, 3, 6, true); //adds slowness of 3 seconds of level 6 (immobile) to player
      }
    }else{
      event.npc.say("Hello Adventurer");
    }
  }
}
