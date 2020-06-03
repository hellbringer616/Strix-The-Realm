registerSkillHandler('strix:alchemy',{
  onCast: function(character, context) {
    var player = character.getPlayer(); //gets the player entity
    var playerName = character.getPlayer().getName(); //gets the name of the player
    //Config for items to craft with Itemizer
    var item1 = context.getLevelNodeValue("comp1"); //Checks SkillSettings in the Skilltree for the node that matches the string
    var item1qty = context.getLevelNodeValue("comp1qty"); //Checks SkillSettings in the Skilltree for the node that matches the string
    var item2 = context.getLevelNodeValue("comp2"); //Checks SkillSettings in the Skilltree for the node that matches the string
    var item2qty = context.getLevelNodeValue("comp2qty"); //Checks SkillSettings in the Skilltree for the node that matches the string
    var item3 = context.getLevelNodeValue("comp3"); //Checks SkillSettings in the Skilltree for the node that matches the string
    var item3qty = context.getLevelNodeValue("comp3qty"); //Checks SkillSettings in the Skilltree for the node that matches the string
    var result = context.getLevelNodeValue("craftresult"); //Checks SkillSettings in the Skilltree for the node that matches the string
    var resultqty = context.getLevelNodeValue("craftresultqty"); //Checks SkillSettings in the Skilltree for the node that matches the string
    //Class and XP config
    var ntclass = "Alchemy";
    var xp = context.getLevelNodeValue("xpAmount"); //Checks SkillSettings in the Skilltree for the node that matches the string

    //Assume that player inventory is empty
      if(Itemizer.hasItemizerItem(player, item1, item1qty) && Itemizer.hasItemizerItem(player, item2, item2qty) && Itemizer.hasItemizerItem(player, item3, item3qty)) {
        Sponge.getCommandManager().process(console, "nadmin exp " + playerName + " " + xp + " " + ntclass);
        Itemizer.craft(player, [[item1, item1qty], [item2, item2qty], [item3, item3qty]], [result, resultqty]);
        return SkillResult.OK; //Returns Skill has functioned successfully
      }else{
        character.sendMessage("You do not have the required items");
        return SkillResult.CANCELED; //Returns Skill failure
      }
  }
})


registerSkillHandler('strix:3itemWeapon',{
  onCast: function(character, context) {
    var player = character.getPlayer();
    var playerName = character.getPlayer().getName();
    //Config for items to craft with Itemizer
    var item1 = context.getLevelNodeValue("comp1");
    var item1qty = context.getLevelNodeValue("comp1qty");
    var item2 = context.getLevelNodeValue("comp2");
    var item2qty = context.getLevelNodeValue("comp2qty");
    var item3 = context.getLevelNodeValue("comp3");
    var item3qty = context.getLevelNodeValue("comp3qty");
    var result = context.getLevelNodeValue("craftresult");
    var resultqty = context.getLevelNodeValue("craftresultqty");
    //Class and XP config
    var ntclass = "Weaponsmith";
    var xp = context.getLevelNodeValue("xpAmount");

    //Assume that player inventory is empty
      if(Itemizer.hasItemizerItem(player, item1, item1qty) && Itemizer.hasItemizerItem(player, item2, item2qty) && Itemizer.hasItemizerItem(player, item3, item3qty)) {
        Sponge.getCommandManager().process(console, "nadmin exp " + playerName + " " + xp + " " + ntclass);
        Itemizer.craft(player, [[item1, item1qty], [item2, item2qty], [item3, item3qty]], [result, resultqty]);
        return SkillResult.OK; //Returns Skill has functioned successfully
      }else{
        character.sendMessage("You do not have the required items");
        return SkillResult.CANCELED; //Returns Skill failure
      }
  }
})


registerSkillHandler('strix:2itemWeapon',{
  onCast: function(character, context) {
    var player = character.getPlayer();
    var playerName = character.getPlayer().getName();
    //Config for items to craft with Itemizer
    var item1 = context.getLevelNodeValue("comp1");
    var item1qty = context.getLevelNodeValue("comp1qty");
    var item2 = context.getLevelNodeValue("comp2");
    var item2qty = context.getLevelNodeValue("comp2qty");
    var result = context.getLevelNodeValue("craftresult");
    var resultqty = context.getLevelNodeValue("craftresultqty");
    //Class and XP config
    var ntclass = "Weaponsmith";
    var xp = context.getLevelNodeValue("xpAmount");

    //Assume that player inventory is empty
      if(Itemizer.hasItemizerItem(player, item1, item1qty) && Itemizer.hasItemizerItem(player, item2, item2qty)) {
        Sponge.getCommandManager().process(console, "nadmin exp " + playerName + " " + xp + " " + ntclass);
        Itemizer.craft(player, [[item1, item1qty], [item2, item2qty], [item3, item3qty]], [result, resultqty]);
        return SkillResult.OK; //Returns Skill has functioned successfully
      }else{
        character.sendMessage("You do not have the required items");
        return SkillResult.CANCELED; //Returns Skill failure
      }
  }
})


registerSkillHandler('strix:1itemWeapon',{
  onCast: function(character, context) {
    var player = character.getPlayer();
    var playerName = character.getPlayer().getName();
    //Config for items to craft with Itemizer
    var item1 = context.getLevelNodeValue("comp1");
    var item1qty = context.getLevelNodeValue("comp1qty");
    var result = context.getLevelNodeValue("craftresult");
    var resultqty = context.getLevelNodeValue("craftresultqty");
    //Class and XP config
    var ntclass = "Weaponsmith";
    var xp = context.getLevelNodeValue("xpAmount");

    //Assume that player inventory is empty
      if(Itemizer.hasItemizerItem(player, item1, item1qty)) {
        Sponge.getCommandManager().process(console, "nadmin exp " + playerName + " " + xp + " " + ntclass);
        Itemizer.craft(player, [[item1, item1qty], [item2, item2qty], [item3, item3qty]], [result, resultqty]);
        return SkillResult.OK; //Returns Skill has functioned successfully
      }else{
        character.sendMessage("You do not have the required items");
        return SkillResult.CANCELED; //Returns Skill failure
      }
  }
})


registerSkillHandler('strix:3itemArmor',{
  onCast: function(character, context) {
    var player = character.getPlayer();
    var playerName = character.getPlayer().getName();
    //Config for items to craft with Itemizer
    var item1 = context.getLevelNodeValue("comp1");
    var item1qty = context.getLevelNodeValue("comp1qty");
    var item2 = context.getLevelNodeValue("comp2");
    var item2qty = context.getLevelNodeValue("comp2qty");
    var item3 = context.getLevelNodeValue("comp3");
    var item3qty = context.getLevelNodeValue("comp3qty");
    var result = context.getLevelNodeValue("craftresult");
    var resultqty = context.getLevelNodeValue("craftresultqty");
    //Class and XP config
    var ntclass = "Armorer";
    var xp = context.getLevelNodeValue("xpAmount");

    //Assume that player inventory is empty
      if(Itemizer.hasItemizerItem(player, item1, item1qty) && Itemizer.hasItemizerItem(player, item2, item2qty) && Itemizer.hasItemizerItem(player, item3, item3qty)) {
        Sponge.getCommandManager().process(console, "nadmin exp " + playerName + " " + xp + " " + ntclass);
        Itemizer.craft(player, [[item1, item1qty], [item2, item2qty], [item3, item3qty]], [result, resultqty]);
        return SkillResult.OK; //Returns Skill has functioned successfully
      }else{
        character.sendMessage("You do not have the required items");
        return SkillResult.CANCELED; //Returns Skill failure
      }
  }
})


registerSkillHandler('strix:2itemArmor',{
  onCast: function(character, context) {
    var player = character.getPlayer();
    var playerName = character.getPlayer().getName();
    //Config for items to craft with Itemizer
    var item1 = context.getLevelNodeValue("comp1");
    var item1qty = context.getLevelNodeValue("comp1qty");
    var item2 = context.getLevelNodeValue("comp2");
    var item2qty = context.getLevelNodeValue("comp2qty");
    var result = context.getLevelNodeValue("craftresult");
    var resultqty = context.getLevelNodeValue("craftresultqty");
    //Class and XP config
    var ntclass = "Armorer";
    var xp = context.getLevelNodeValue("xpAmount");

    //Assume that player inventory is empty
      if(Itemizer.hasItemizerItem(player, item1, item1qty) && Itemizer.hasItemizerItem(player, item2, item2qty)) {
        Sponge.getCommandManager().process(console, "nadmin exp " + playerName + " " + xp + " " + ntclass);
        Itemizer.craft(player, [[item1, item1qty], [item2, item2qty], [item3, item3qty]], [result, resultqty]);
        return SkillResult.OK; //Returns Skill has functioned successfully
      }else{
        character.sendMessage("You do not have the required items");
        return SkillResult.CANCELED; //Returns Skill failure
      }
  }
})


registerSkillHandler('strix:1itemArmor',{
  onCast: function(character, context) {
    var player = character.getPlayer();
    var playerName = character.getPlayer().getName();
    //Config for items to craft with Itemizer
    var item1 = context.getLevelNodeValue("comp1");
    var item1qty = context.getLevelNodeValue("comp1qty");
    var result = context.getLevelNodeValue("craftresult");
    var resultqty = context.getLevelNodeValue("craftresultqty");
    //Class and XP config
    var ntclass = "Armorer";
    var xp = context.getLevelNodeValue("xpAmount");

    //Assume that player inventory is empty
      if(Itemizer.hasItemizerItem(player, item1, item1qty)) {
        Sponge.getCommandManager().process(console, "nadmin exp " + playerName + " " + xp + " " + ntclass);
        Itemizer.craft(player, [[item1, item1qty], [item2, item2qty], [item3, item3qty]], [result, resultqty]);
        return SkillResult.OK; //Returns Skill has functioned successfully
      }else{
        character.sendMessage("You do not have the required items");
        return SkillResult.CANCELED; //Returns Skill failure
      }
  }
})
