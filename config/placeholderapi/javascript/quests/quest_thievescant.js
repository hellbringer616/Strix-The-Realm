var main = function (){
var cnpcAPI = Java.type("noppes.npcs.api.NpcAPI").Instance()
var cnpcPlayer = cnpcAPI.getIEntity(player);
  if(!cnpcPlayer.hasActiveQuest(13) && !cnpcPlayer.hasActiveQuest(14)){
    var out = "&cNot Started";
  }
  if(cnpcPlayer.hasActiveQuest(13) || cnpcPlayer.hasActiveQuest(14)){
    var out = "&eNot Completed";
  }
  if(cnpcPlayer.hasFinishedQuest(14)){
    var out = "&aCompleted";
  }
  return out;
}
main();
