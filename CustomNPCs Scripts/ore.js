var RpgPlugin = Java.type("cz.neumimto.rpg.sponge.NtRpgPlugin"); //load NT-RPG API
function init(event){
  //set block model to stone
     event.block.setModel("minecraft:stone")
  //set texture to 1 (granite)
     event.block.model.setItemDamage(1)
     var health = 20
     event.block.tempdata.put("health",health)
}
//When block is left clicked
function clicked(event){
  var uid = event.player.getUUID(); //Get Player UUID string
  var JavaUUID = Java.type('java.util.UUID'); //Magic?
  var character = RpgPlugin.GlobalScope.characterService.getCharacter(JavaUUID.fromString(uid)) //load NT-RPG Character service and get UUID than convert to Java UUID
  var className = "Metallurgy" //must be a string
  var classData = character.getClasses().get(className) //gets class data from character
  var heldItem = event.player.mainhandItem.displayName; //return the display name of a held item
  var isBronzePick = heldItem.indexOf("Bronze Pick") != -1; //checks if held item has the display name of "bronze Pick"
  var isIronPick = heldItem.indexOf("Iron Pick") != -1; //checks if held item has the display name of "Iron Pick"
  var isSteelPick = heldItem.indexOf("Steel Pick") != -1; //checks if held item has the display name of "Steel Pick"
  var isMithrilPick = heldItem.indexOf("Mithril Pick") != -1; //checks if held item has the display name of "Mithril Pick"
  var health = event.block.tempdata.get("health");

  if(classData !== null) { //checks if classData returns null
    var classLevel = classData.getLevel()

      //if health is less than 1 change model to stone and starts a timer
      if(health < 1){
          event.block.setModel("minecraft:stone")
          event.block.timers.start(1, 2400, false);
          event.setCanceled(true); //does not work
          event.player.message("&eYou cannot mint this right now."); //does not work
        }else{
          //* checks to see if the item is a pickaxe; otherwise tells the player they cannot mine
        if (heldItem.indexOf("Pick")){
            //** Checks which pickaxe the player is holding and adjusts damage accordingly based on class level and pickaxe type.
          if (isBronzePick){
            var damage = 1+(classLevel/10)*1
            var health = health - damage
          event.block.tempdata.put("health",health)
        }
          if (isIronPick){
            var damage = 1+(classLevel/10)*1.1
            var health = health - damage
          event.block.tempdata.put("health",health)
        }
          if (isSteelPick){
            var damage = 1+(classLevel/10)*1.15
            var health = health - damage
          event.block.tempdata.put("health",health)
        }
          if (isMithrilPick){
            var damage = 1+(classLevel/10)*1.2
            var health = health - damage
          event.block.tempdata.put("health",health)
        }
            //**
        }else{
        event.player.message("&eYou need a Pickaxe to mine.");
        //*
        }
      }
  }
}
//after the timer is triggered; sets the block texture to Granite and sets health back to 20
function timer(event){
     event.block.setModel("minecraft:stone")
     event.block.model.setItemDamage(1)
   var health = 20
   event.block.tempdata.put("health",health)
}
