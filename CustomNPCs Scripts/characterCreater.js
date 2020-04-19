//this is a player script and will not function if run anywhere other than the player
var RpgPlugin = Java.type("cz.neumimto.rpg.sponge.NtRpgPlugin");
var JavaUUID = Java.type('java.util.UUID'); //Magic?


function interact(event){
  var uid = event.player.getUUID(); //Get Player UUID string
  var character = RpgApi.getCharacterService.getCharacter(JavaUUID.fromString(uid)); //load NT-RPG Character service and get UUID than convert to Java UUID
  event.player.tempdata.put("character",character);
  var playerName = event.player.getName();
  event.player.tempdata.put("playerName",playerName);


    if(character.getName() != playerName){
        event.API.executeCommand(event.player.world, "nadmin invoke "+playerName+" char create "+playerName+"");
    }
    if(character.getClasses() == "{}"){
        event.API.executeCommand(event.player.world, "nadmin invoke "+playerName+" char switch "+playerName+"");
        event.player.timers.start(1, 40, false);
        }
    }

function timer(event){
  var character = event.player.tempdata.get("character");
  var playerName = event.player.tempdata.get("playerName");
  var classesArray =["Alethi","Armorer","Combat","Metallurgy","Thieving","Weaponsmith"]

    for(var i = 0; i < classesArray.length; i++){
        if(character.getClassByName(classesArray[i]) == null){
        event.API.executeCommand(event.player.world, "nadmin invoke "+playerName+" char choose class "+classesArray[i]+"");
      }
    }
    event.player.timers.stop(1);
}
