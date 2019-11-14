//on NPC death
function died(event) {
    var loot = event.npc.tempdata.get("requiredLevel"); //Required level defined from event.npc.tempdata.put()
    if(event.source && event.source.getType() == EntityType_PLAYER){ //if cause of death is a player
        var attackerName = event.source.getName();
        var loot = event.npc.tempdata.get("loot"); //loot defined from event.npc.tempdata.put()
        var xP = event.npc.tempdata.get("xP"); //XP defined from event.npc.tempdata.put()
        event.npc.executeCommand("nadmin exp add " + attackerName + " " + xP + " metallurgy metallurgy");
        event.npc.executeCommand(loot + attackerName)
  }
}
