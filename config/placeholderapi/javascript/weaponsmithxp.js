//loads NTRPG Plugin
var main = function() {
var RpgPlugin = Java.type("cz.neumimto.rpg.sponge.NtRpgPlugin");
  var className = "Weaponsmith" //must be a string
  var uid = player.getUniqueId(); //Get Player UUID
  var character = RpgPlugin.GlobalScope.characterService.getCharacter(uid); //load NT-RPG Character service and get UUID for player
  var classData = character.getClasses().get(className); //gets class data from character
  if(classData !== null) { //checks if classData returns null
    var levels = classData.getClassDefinition().getLevelProgression().getLevelMargins();
    var expnextlevel = Math.round(levels[classData.getLevel()])
    var currentexp = Math.round(classData.getExperiencesFromLevel());

	var out = "&6"+currentexp+" &5/ &6"+expnextlevel+""

	return out;
  }
}
main();
