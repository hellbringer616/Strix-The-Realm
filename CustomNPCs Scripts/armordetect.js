function damaged(event){
    var boots = event.npc.getArmor(0).getName();
    var legs= event.npc.getArmor(1).getName();
    var chest = event.npc.getArmor(2).getName();
    var helm = event.npc.getArmor(3).getName();
    var equipment = [boots,legs,chest,helm]

    for(var i = 0; i < equipment.length; i++){
        if(equipment[i].indexOf("iron") != -1){
        event.npc.say(equipment[i]);
        }
        if(equipment[i].indexOf("leather") != -1){
        event.npc.say(equipment[i]);
        }
        if(equipment[i].indexOf("golden") != -1){
        event.npc.say(equipment[i]);
        }
    }
}
