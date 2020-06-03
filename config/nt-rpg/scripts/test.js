registerSkillHandler('alchemy:healthpot',{
  onCast: function(character, context) {
    var player = character.getPlayer();
    var playerName = character.getPlayer().getName();
    //Config for items to craft with Itemizer
    var item1 = 101;
    var item1qty = 1;
    var item2 = 300;
    var item2qty = 1;
    var item3 = 400;
    var item3qty = 1;
    var result = 102;
    var resultqty = 1;
    //Class and XP config
    var ntclass = "alchemy";
    var xp = 7.5;

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
registerSkillHandler('alchemy:defensepot',{
  onCast: function(character, context) {
    var player = character.getPlayer();
    var playerName = character.getPlayer().getName();
    //Config for items to craft with Itemizer
    var item1 = 101;
    var item1qty = 1;
    var item2 = 301;
    var item2qty = 1;
    var item3 = 401;
    var item3qty = 1;
    var result = 103;
    var resultqty = 1;
    //Class and XP config
    var ntclass = "alchemy";
    var xp = 7.5;

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
registerSkillHandler('alchemy:damagepot',{
  onCast: function(character, context) {
    var player = character.getPlayer();
    var playerName = character.getPlayer().getName();
    //Config for items to craft with Itemizer
    var item1 = 101;
    var item1qty = 1;
    var item2 = 302;
    var item2qty = 1;
    var item3 = 402;
    var item3qty = 1;
    var result = 104;
    var resultqty = 1;
    //Class and XP config
    var ntclass = "alchemy";
    var xp = 7.5;

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
