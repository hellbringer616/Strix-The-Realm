function damaged(event) {
    if(event.source !== null){
    var mainHandItemEnchant = event.source.getMainhandItem().hasEnchant("sharpness");
    if(event.source.getType() == EntityType_PLAYER && mainHandItemEnchant == true){
        event.npc.say(mainHandItemEnchant);
        event.source.damage(1);
        }
    }
}
