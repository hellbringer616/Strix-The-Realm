var RpgPlugin = Java.type("cz.neumimto.rpg.sponge.NtRpgPlugin"); //load NT-RPG API
var JavaUUID = Java.type('java.util.UUID'); //Magic?
//When block is left clicked
function clicked(event){
  var uid = event.player.getUUID(); //Get Player UUID string

  //** NT-RPG stuff
  var character = RpgPlugin.GlobalScope.characterService.getCharacter(JavaUUID.fromString(uid)); //load NT-RPG Character service and get UUID than convert to Java UUID
  var className = "Metallurgy"; //must be a string
  var classData = character.getClasses().get(className) //gets class data from character
  //**//

  //*** load config from initialized tempdata found in ore_<name>_config.js
  var maxDurability = event.block.tempdata.get("maxDurability")
  event.block.tempdata.put("durability",maxDurability);
  var loot = event.block.tempdata.get("loot");
  var time = event.block.tempdata.get("time");
  var requiredLevel = event.block.tempdata.get("requiredLevel");
  var bonusOreLevel = event.block.tempdata.get("bonusOreLevel");
  var xP = event.block.tempdata.get("xP");
  //***//

  var heldItem = event.player.mainhandItem.displayName; //return the display name of a held item
  var isBronzePick = heldItem.indexOf("Bronze Pick") != -1; //checks if held item has the display name of "bronze Pick"
  var isIronPick = heldItem.indexOf("Iron Pick") != -1; //checks if held item has the display name of "Iron Pick"
  var isSteelPick = heldItem.indexOf("Steel Pick") != -1; //checks if held item has the display name of "Steel Pick"
  var isMithrilPick = heldItem.indexOf("Mithril Pick") != -1; //checks if held item has the display name of "Mithril Pick"
  var playerName = event.player.getName();


function mining(multi){
  var damage = 1+(classLevel/10)*multi;
  var durability = event.block.tempdata.get("durability");
  var durability = durability - damage;
    event.block.tempdata.put("durability",durability);
    event.player.playSound("minecraft:block.anvil.land",1 ,1);
      if(durability <= 0){
        isMined();
      }
}
  if(classData !== null) { //checks if classData returns null
    var classLevel = classData.getLevel(); //gets level from defined Character Class

    ///*** function that runs once a block is "mined"
    function isMined(mined){
      var doubleOreChance = (Math.random());
      //If doubleOreCheck is true give player two items. else only give player one.
      if(doubleOreChance >= 0.95 && classLevel >= bonusOreLevel){
        event.block.executeCommand(loot + playerName); //retrieve itemizer item of quantity and give to player
        event.block.executeCommand(loot + playerName); //retrieve itemizer item of quantity and give to player
        event.player.message("&eYou received double Ore!")
      }else{
        event.block.executeCommand(loot + playerName); //retrieve itemizer item of quantity and give to player
      }

      event.player.playSound("minecraft:block.anvil.use",1 ,1);
      event.block.executeCommand("nadmin exp add " + playerName + " " + xP + " " + " metallurgy metallurgy") //execute command to add experience to a class
      event.block.setModel("minecraft:stone"); //set block model to regular stone. NOTE: Does not work with Optifine.
      //checks to see if there is a timer of 1 and stops it if there is one.
        if(event.block.timers.has(1)){
          event.block.timers.stop(1);
        }
      event.block.timers.start(1, time, false); //sets a timer that executes a function after 1 minute
    }
    ///***///

      //if durability is less than 1 change model to stone and starts a timer
      if(durability <= 0){
          event.player.message("&eYou cannot mine this right now."); //does not work
        }else{
          //* checks to see if the item is a pickaxe; otherwise tells the player they cannot mine
        if (classLevel >= requiredLevel){
            //** Checks which pickaxe the player is holding and adjusts damage accordingly based on class level and pickaxe type.
          if (isBronzePick){
              mining(1)
            }
            if (isIronPick){
              mining(1.1)
            }
            if (isSteelPick){
              mining(1.15)
            }
            if (isMithrilPick){
              mining(1.2)
            }
            //**//
        }else{
        event.player.message("&eYou must be at least level &c"+requiredLevel+" &eto mine.");
        //*//
        }
      }
  }else{
    event.player.message("&cYOU ARE NOT IN A CLASS")
  }
}
//after the timer is triggered; sets the block texture to Granite and sets durability back to 20
function timer(event){
  var model = event.block.tempdata.get("model");
  var texture = event.block.tempdata.get("texture");
  var maxDurability = event.block.tempdata.get("maxDurability");
  var durability = maxDurability;
     event.block.setModel(model);
     event.block.model.setItemDamage(texture);
     event.block.tempdata.put("durability",durability);
     event.block.timers.stop(1);
}