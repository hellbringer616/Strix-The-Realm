//loads NTRPG Plugin
var main = function() {
var RpgPlugin = Java.type("cz.neumimto.rpg.sponge.SpongeRpgPlugin");
var RpgApi = Java.type("cz.neumimto.rpg.api.Rpg").get();
  var className = "Metallurgy" //must be a string
  var uid = player.getUniqueId(); //Get Player UUID
  var character = RpgApi.getCharacterService().getCharacter(uid); //load NT-RPG Character service and get UUID for player
  var classData = character.getClasses().get(className); //gets class data from character
  if(classData !== null) { //checks if classData returns null
    var out = classData.getLevel();

	return out;
  }
}
main();
