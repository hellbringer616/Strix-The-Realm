function init(event){
        //COMBAT START
        var meleeMin = 1
        var meleeMax = 4
        var rangeMin = 1
        var rangeMax = 4
            event.npc.tempdata.put("meleeMin");
            event.npc.tempdata.put("meleeMax");
            event.npc.tempdata.put("rangeMin");
            event.npc.tempdata.put("rangeMax");
        //COMBAT END//
        //THIEVING START//
        var requiredLevel = 20 //Must be an integer
        var xP = 24.5 //Must be an integer
        var caughtResponse = "Beg your Pardon?!"//Must be a string
        var econLoot = 20 //amount of coins you wish to give the player after a successful steal
            event.npc.tempdata.put("requiredLevel",requiredLevel);
            event.npc.tempdata.put("xP",xP);
            event.npc.tempdata.put("caughtResponse",caughtResponse);
            event.npc.tempdata.put("econLoot",econLoot)
       //THIEVING END//
    //event.npc.tempdata.put("loot",loot);
}
