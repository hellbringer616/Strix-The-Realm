//loads NTRPG Plugin
var RpgPlugin = Java.type("cz.neumimto.rpg.sponge.NtRpgPlugin");
//On interact with NPC
function interact(event) {
  var isStunned = event.player.getPotionEffect(2) === 6 //creates status "stunned" by inflecting player with slowness strength 6
  var className = "Thieving" //must be a string
  var uid = event.player.getUUID(); //Get Player UUID string
  var character = RpgPlugin.GlobalScope.characterService.getCharacter(UUID.fromString(uid)) //load NT-RPG Character service and get UUID than convert to Java UUID

  var classData = character.getClasses().get(className) //gets class data from character
    if(classData === null){
      event.player.message("&cYOU ARE NOT IN A CLASS");
      return;
    }

  var sneak = event.player.isSneaking(); //is the player sneaking?
    if (sneak) { //checks if player is sneaking.

      var requiredLevel = event.npc.tempdata.get("requiredLevel") //level required to steal from event.npc.tempdata.put()
      var classLevel = classData.getLevel(); //returns Class Level from Class Data
        if(classLevel < requiredLevel){ //checks if the player meets requiredLevel
          event.player.message("&eYou must be at least level " + "&4" + requiredLevel + " &eto steal");
          return;
        }

      if(isStunned){ //checks if the player is sneaking and if the player is stunned and is atleast the required level to steal from the NPC
        event.player.message("&eYou are stunned.");
        return;
      }


      var playerName = event.player.getName(); //gets the interacting players name
      var xP = event.npc.tempdata.get("xP") //XP per successful steal from event.npc.tempdata.put()
      var rng = Math.random(); //generates a random number between 0 and 1
      var roll = ((5/833)*((classLevel/requiredLevel)+(classLevel-requiredLevel)))+(17/49)+rng
          if(roll >= 1){
            var econLoot = event.npc.tempdata.get("econLoot") //gets econLoot from event.npc.tempdata.put()
              spongeEconomyDeposit(uid,econLoot) //Depoist a value into the players account through Sponge Economy Service; see bindings.js for details
              //var loot = event.npc.tempdata.get("loot");
              //event.npc.executeCommand(loot + playerName); //retrieve itemizer item of quantity and give to player
              event.npc.executeCommand("nadmin exp add " + playerName + " " + xP + " " + className + " " + className); //gives the player theiving XP
              event.player.message("&eYou have stolen " + "&c" + econLoot + " &ecoins.");
          }else{
            var caughtResponse = event.npc.tempdata.get("caughtResponse") //gets caughtResponse from event.npc.tempdata.put()
              event.npc.say(caughtResponse);
              event.player.damage(2);
              event.player.addPotionEffect(2, 3, 6, true); //adds slowness of 3 seconds of level 6 (immobile) to player
          }
        }
}
