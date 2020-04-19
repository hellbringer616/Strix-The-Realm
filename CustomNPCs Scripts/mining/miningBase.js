//When block is left clicked
function clicked(event){
  var uid = event.player.getUUID(); //Get Player UUID string

  //** NT-RPG stuff
  var character = RpgApi.getCharacterService.getCharacter(UUID.fromString(uid)); //load NT-RPG Character service and get UUID than convert to Java UUID
  var className = "Metallurgy"; //must be a string
  var classData = character.getClassByName(className); //gets class data from character
  //**//

  //*** load config from initialized tempdata found in ore_<name>_config.js
  var data = event.block.tempdata;

  var durability = data.get("durability");
  var loot = data.get("loot");
  var time = data.get("time");
  var requiredLevel = data.get("requiredLevel");
  var bonusOreLevel = data.get("bonusOreLevel");
  var xP = data.get("xP");
  //***//

  if(classData === null) { //checks if classData returns null
      event.player.message("&cYOU ARE NOT IN A CLASS");
      return;
  }

  var classLevel = classData.getLevel(); //gets level from defined Character Class
  if(classLevel < requiredLevel){ //checks if ClassLevel is less than required level
      event.player.message("&eYou must be at least level &c"+requiredLevel+" &eto mine.");
      return;
  }

  //if durability is equal to or less than 0
  if(durability <= 0){
      event.player.message("&eYou cannot mine this right now."); //does not work
      return;
    }


  var heldItem = event.player.mainhandItem.displayName; //return the display name of a held item
  var isBronzePick = heldItem.indexOf("Bronze Pick") != -1; //checks if held item has the display name of "bronze Pick"
  var isIronPick = heldItem.indexOf("Iron Pick") != -1; //checks if held item has the display name of "Iron Pick"
  var isSteelPick = heldItem.indexOf("Steel Pick") != -1; //checks if held item has the display name of "Steel Pick"
  var isMithrilPick = heldItem.indexOf("Mithril Pick") != -1; //checks if held item has the display name of "Mithril Pick"
  var playerName = event.player.getName(); //gets the players name


function mining(multi){
      var damage = 1+(classLevel/10)*multi;
      var durability = data.get("durability");
      var durability = durability - damage;
        data.put("durability",durability);
        event.player.playSound("minecraft:block.anvil.land",1 ,1);

        if(durability <= 0){
        isMined();
        }
}

    ///*** function that runs once a block is "mined"
function isMined(mined){
      var doubleOreChance = (Math.random());
      //If doubleOreCheck is true and classLevel is greater than or equal to bonusOreLevel and give player two items. else only give player one.
      if(doubleOreChance >= 0.95 && classLevel >= bonusOreLevel){
        event.block.executeCommand(loot + playerName); //retrieve itemizer item of quantity and give to player
        event.block.executeCommand(loot + playerName); //retrieve itemizer item of quantity and give to player
        event.player.message("&eYou received double Ore!");
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
      event.block.timers.start(1, time, false); //sets a timer that executes a function when time runs out.
    }
    ///***///


    //** Checks which pickaxe the player is holding and adjusts damage accordingly based on class level and pickaxe type.
    if (isBronzePick){
      mining(1);
    }
    if (isIronPick){
      mining(1.1);
    }
    if (isSteelPick){
      mining(1.15);
    }
    if (isMithrilPick){
      mining(1.2);
    }
    //**//
  }


//after the timer is triggered; sets the block texture and sets durability back to maximum
function timer(event){
  var data = event.block.tempdata;

  var model = data.get("model");
  var texture = data.get("texture");
  var maxDurability = data.get("maxDurability");
  var durability = maxDurability;

     event.block.setModel(model);
     event.block.model.setItemDamage(texture);
     data.put("durability",durability);
     event.block.timers.stop(1);
}
