registerSkillHandler('alchemy:healthpot',{
  onCast: function(character, context) {
    var player = _caster.getEntity();
    var playerName = _caster.getPlayer().getName()
    //Config for items to craft with Itemizer
    var item1 = 101
    var item1qty = 1
    var item2 = 300
    var item2qty = 1
    var item3 = 400
    var item3qty = 1
    var result = 102
    var resultqty = 1
    //Class and XP config
    var ntclass = "alchemy"
    var xp = 7.5

    //Assume that player inventory is empty
    if(Itemizer.hasItemizerItem(player, item1, item1qty) && Itemizer.hasItemizerItem(player, item2, item2qty) && Itemizer.hasItemizerItem(player, item3, item3qty)) {
      Sponge.getCommandManager().process(Sponge.getServer().getConsole(), "nadmin exp " + playerName + " " + xp + " " + ntclass);
      Itemizer.craft(player, [[item1, item1qty], [item2, item2qty], [result, resultqty]], [result, resultqty]);
    }else{
      Sponge.getCommandManager().process(Sponge.getServer().getConsole(), "tell " + playerName + " You do not have the required items");
    }
    return SkillResult.OK;
  }
})
