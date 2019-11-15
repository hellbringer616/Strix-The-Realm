function interact(event){
  var RpgPlugin = Java.type("cz.neumimto.rpg.sponge.NtRpgPlugin");
  var uid = event.player.getUUID(); //Get Player UUID string
  var JavaUUID = Java.type('java.util.UUID'); //Magic?
  var character = RpgPlugin.GlobalScope.characterService.getCharacter(JavaUUID.fromString(uid)); //load NT-RPG Character service and get UUID than convert to Java UUID
  var playerName = event.player.getName();

function joinClasses(join){
  var classesArray =["Alethi","Armorer","Combat","Metallurgy","Thieving","Weaponsmith"]
    for(var i = 0; i < classesArray.length; i++){
        if(character.getClasses().get(classesArray[i]) == null){
        event.npc.executeCommand("nadmin invoke "+playerName+" char choose class "+classesArray[i]+"");
      }
    }
  }

    if(character.getName() != playerName){
        event.npc.executeCommand("nadmin invoke "+playerName+" char create "+playerName+"");
        event.npc.executeCommand("nadmin invoke "+playerName+" char switch "+playerName+"");
        event.npc.say("talk to me again! Character not initialized");
    }else{
      joinClasses();
    }
}
