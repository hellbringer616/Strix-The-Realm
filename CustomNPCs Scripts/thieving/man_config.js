function init(event){
        /////CONFIG START/////
        var requiredLevel = 1 //Must be an integer
        var xP = 8 //Must be an integer
        var caughtResponse = "Beg your Pardon?!"//Must be a string
        var econLoot = 3 //amount of coins you wish to give the player after a successful steal
        //var loot = "retrieve 9999 3 " //Must be a string: Use Itemizer function (retrieve for single item, fetch for item pool) itemID from Itemizer, and quantity **MUST HAVE A LEADING SPACE**
        /////CONFIG END/////
    event.npc.tempdata.put("requiredLevel",requiredLevel);
    event.npc.tempdata.put("xP",xP);
    event.npc.tempdata.put("caughtResponse",caughtResponse);
    event.npc.tempdata.put("econLoot","econLoot")
    //event.npc.tempdata.put("loot",loot);
}
