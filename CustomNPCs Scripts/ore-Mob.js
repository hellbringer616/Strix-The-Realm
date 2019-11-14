function init(event) {
   var playerNamesArray = [] ;
   event.npc.tempdata.put("playerNamesArray",playerNamesArray);
}

function damaged(event) {
  var isPlayer = event.source.getType() == EntityType_PLAYER;
  var holdingPickaxe = event.source.getMainhandItem().getName().indexOf("pickaxe") != -1;

  if (isPlayer && holdingPickaxe){
    var attackerName = event.source.getName();
    var array = event.npc.tempdata.get("playerNamesArray");

    if(array && array.length < 1){
        array.push(attackerName);

    }else{
        if(array.indexOf(attackerName) == -1){
          event.setCanceled(true);
          event.player.message("&eSomeone else is mining that.");
        }else{

        }
      }
  }else{
      event.setCanceled(true);
  }
}
