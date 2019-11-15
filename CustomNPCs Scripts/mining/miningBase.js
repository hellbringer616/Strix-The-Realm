var RpgPlugin = Java.type("cz.neumimto.rpg.sponge.NtRpgPlugin"); //load NT-RPG API
var JavaUUID = Java.type('java.util.UUID'); //Magic?
//When block is left clicked
function clicked(event){
  var uid = event.player.getUUID(); //Get Player UUID string

  //** NT-RPG stuff
  var character = RpgPlugin.GlobalScope.characterService.getCharacter(JavaUUID.fromString(uid)); //load NT-RPG Character service and get UUID than convert to Java UUID
  var className = "Metallurgy"; //must be a string
  var classData = character.getClasses().get(className) //gets class data from character
  var requiredLevel = event.block.tempdata.get("requiredLevel");
  var xP = event.block.tempdata.get("xP");
  //**//

  //*** load config from initialize tempdata
  var model = event.block.tempdata.get("model");
  var texture = event.block.tempdata.get("texture");
  var durability = event.block.tempdata.get("durability");
  var loot = event.block.tempdata.get("loot");
  //***//

  var heldItem = event.player.mainhandItem.displayName; //return the display name of a held item
  var isBronzePick = heldItem.indexOf("Bronze Pick") != -1; //checks if held item has the display name of "bronze Pick"
  var isIronPick = heldItem.indexOf("Iron Pick") != -1; //checks if held item has the display name of "Iron Pick"
  var isSteelPick = heldItem.indexOf("Steel Pick") != -1; //checks if held item has the display name of "Steel Pick"
  var isMithrilPick = heldItem.indexOf("Mithril Pick") != -1; //checks if held item has the display name of "Mithril Pick"
  var playerName = event.player.getName();

  ///*** function that runs once a block is "mined"
  function isMined(mined){
    event.block.executeCommand(loot + playerName); //retrieve itemizer item of quantity and give to player
    event.block.executeCommand("nadmin exp add " + playerName + " " + xP + " " + " metallurgy metallurgy") //execute command to add experience to a class
    event.block.setModel("minecraft:stone"); //set block model to regular stone. NOTE: Does not work with Optifine.
    event.block.timers.start(1, 2400, false); //sets a timer that executes a function after 2 minutes
  }
  ///***///

  if(classData !== null) { //checks if classData returns null
    var classLevel = classData.getLevel(); //gets level from defined Character Class

      //if durability is less than 1 change model to stone and starts a timer
      if(durability < 1){
          event.player.message("&eYou cannot mine this right now."); //does not work
        }else{
          //* checks to see if the item is a pickaxe; otherwise tells the player they cannot mine
        if (heldItem.indexOf("Pick") && classLevel >= requiredLevel){
            //** Checks which pickaxe the player is holding and adjusts damage accordingly based on class level and pickaxe type.
          if (isBronzePick){
            var damage = 1+(classLevel/10)*1;
            var durability = durability - damage;
            event.block.tempdata.put("durability",durability);
            if(durability < 1){
              isMined();
            }
        }
          if (isIronPick){
            var damage = 1+(classLevel/10)*1.1;
            var durability = durability - damage;
            event.block.tempdata.put("durability",durability);
            if(durability < 1){
              isMined();
            }
        }
          if (isSteelPick){
            var damage = 1+(classLevel/10)*1.15;
            var durability = durability - damage;
            event.block.tempdata.put("durability",durability);
            if(durability < 1){
              isMined();
            }
        }
          if (isMithrilPick){
            var damage = 1+(classLevel/10)*1.2;
            var durability = durability - damage;
            event.block.tempdata.put("durability",durability);
            if(durability < 1){
              isMined();
            }
        }
            //**//
        }else{
        event.player.message("&eYou need a Pickaxe to mine.");
        //*//
        }
      }
  }else{
    event.player.message("&cYOU ARE NOT IN A CLASS")
  }
}
//after the timer is triggered; sets the block texture to Granite and sets durability back to 20
function timer(event){
     event.block.setModel(model);
     event.block.model.setItemDamage(texture);
   var durability = 20;
   event.block.tempdata.put("durability",durability);
}
