//start of script to add nbt data
var heldItem = event.player.mainhandItem
        if(heldItem.getName() != "minecraft:air"){
            heldItem.getNbt().setString(damage,"slashing")
            event.npc.say("set to slashing")
                if(heldItem.getNbt().getString(damage) == "slashing"){
                    event.npc.say("NBT read")
                }
            }
