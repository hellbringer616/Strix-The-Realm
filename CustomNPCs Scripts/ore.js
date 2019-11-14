var RpgPlugin = Java.type("cz.neumimto.rpg.sponge.NtRpgPlugin"); //load NT-RPG API
var JavaUUID = Java.type('java.util.UUID'); //Magic?
function init(event){
  //set block model to stone
     event.block.setModel("minecraft:stone");
  //set texture to 1 (granite)
     event.block.model.setItemDamage(1);
     var health = 20;
     event.block.tempdata.put("health",health);
}
//When block is left clicked
function clicked(event){
  var uid = event.player.getUUID(); //Get Player UUID string
  //**// NT-RPG stuff
  var character = RpgPlugin.GlobalScope.characterService.getCharacter(JavaUUID.fromString(uid)); //load NT-RPG Character service and get UUID than convert to Java UUID
  var className = "Metallurgy"; //must be a string
  var classData = character.getClasses().get(className) //gets class data from character
  var requiredLevel = 1 //must be an interger
  //**//
  var heldItem = event.player.mainhandItem.displayName; //return the display name of a held item
  var isBronzePick = heldItem.indexOf("Bronze Pick") != -1; //checks if held item has the display name of "bronze Pick"
  var isIronPick = heldItem.indexOf("Iron Pick") != -1; //checks if held item has the display name of "Iron Pick"
  var isSteelPick = heldItem.indexOf("Steel Pick") != -1; //checks if held item has the display name of "Steel Pick"
  var isMithrilPick = heldItem.indexOf("Mithril Pick") != -1; //checks if held item has the display name of "Mithril Pick"
  var health = event.block.tempdata.get("health");
  var loot = "retrieve 1 1 "; //Must be a string: Use Itemizer function (retrieve for single item, fetch for item pool) itemID from Itemizer, and quantity **MUST HAVE A LEADING SPACE**
  var playerName = event.player.getName();

  if(classData !== null) { //checks if classData returns null
    var classLevel = classData.getLevel(); //gets level from defined Character Class

      //if health is less than 1 change model to stone and starts a timer
      if(health < 1){
          event.player.message("&eYou cannot mint this right now."); //does not work
        }else{
          //* checks to see if the item is a pickaxe; otherwise tells the player they cannot mine
        if (heldItem.indexOf("Pick") && classLevel >= requiredLevel){
            //** Checks which pickaxe the player is holding and adjusts damage accordingly based on class level and pickaxe type.
          if (isBronzePick){
            var damage = 1+(classLevel/10)*1;
            var health = health - damage;
            event.block.tempdata.put("health",health);
            if(health < 1){
              event.block.executeCommand(loot + playerName); //retrieve itemizer item of quantity and give to player
              event.block.setModel("minecraft:stone");
              event.block.timers.start(1, 2400, false);
            }
        }
          if (isIronPick){
            var damage = 1+(classLevel/10)*1.1;
            var health = health - damage;
            event.block.tempdata.put("health",health);
            if(health < 1){
              event.block.executeCommand(loot + playerName); //retrieve itemizer item of quantity and give to player
              event.block.setModel("minecraft:stone");
              event.block.timers.start(1, 2400, false);
            }
        }
          if (isSteelPick){
            var damage = 1+(classLevel/10)*1.15;
            var health = health - damage;
            event.block.tempdata.put("health",health);
            if(health < 1){
              event.block.executeCommand(loot + playerName); //retrieve itemizer item of quantity and give to player
              event.block.setModel("minecraft:stone");
              event.block.timers.start(1, 2400, false);
            }
        }
          if (isMithrilPick){
            var damage = 1+(classLevel/10)*1.2;
            var health = health - damage;
            event.block.tempdata.put("health",health);
            if(health < 1){
              event.block.executeCommand(loot + playerName); //retrieve itemizer item of quantity and give to player
              event.block.setModel("minecraft:stone");
              event.block.timers.start(1, 2400, false);
            }
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
     event.block.setModel("minecraft:stone");
     event.block.model.setItemDamage(1);
   var health = 20;
   event.block.tempdata.put("health",health);
}
