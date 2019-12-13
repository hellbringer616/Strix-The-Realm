var main = function (){
var cnpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance()
var cnpcPlayer = cnpcAPI.getIEntity(player);
var out = "&cNot Started";

  if(cnpcPlayer.hasActiveQuest(15) || cnpcPlayer.hasActiveQuest(16) || cnpcPlayer.hasActiveQuest(17) || cnpcPlayer.hasActiveQuest(18)){
    var out = "&eNot Completed";
  }
  if(cnpcPlayer.hasFinishedQuest(18)){
    var out = "&aCompleted";
  }
  return out;
}
main();
