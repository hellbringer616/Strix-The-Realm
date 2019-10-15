//On NPC death
function died(event) {
    //set variables to get the Player Name that last damaged the NPC and the NPC's Maximum Health
    var attackerName = event.source.getName();
    var maxHealth = event.npc.getMaxHealth();
    //if the death event source and it's type are PLAYER run the command, else null
    if(event.source && event.source.getType() == EntityType_PLAYER){
        event.npc.executeCommand("nadmin exp add " + attackerName + " " + maxHealth + " PVE Combat");
  }
}
