function interact(event) {
    var sneak = event.player.isSneaking(); //is the player sneaking
    var playerName = event.player.getName();
    var milkBucket = event.player.getWorld().createItem("minecraft:milk_bucket",0,1);//creates an itemStack of size 1 for the item minecraft:milkbucket
    var mainHandItem = event.player.getMainhandItem();
    //tests if the player is sneaking and the item in the main hand is an empty bucket
    if(sneak && mainHandItem.getName() == "minecraft:bucket"){
    event.npc.say("&e*is milked*");
    event.player.removeItem(mainHandItem, 1);
    event.setCanceled(true); //because removeItem doesn't work with NPCs without it...
    event.player.giveItem(milkBucket);
    }else{
    event.npc.executeCommand("tell " + playerName + " You do not have a bucket and or are not sneaking");
    }
}
