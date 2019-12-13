function init(event){
    var model = "minecraft:iron_ore" //must be a string; is the block ID of the model
    var texture = 0 //Optional; must be an integer; interger is equal to the block varient.
    var maxDurability = 50;
    var loot = "retrieve 3 1 "; //Must be a string: Use Itemizer function (retrieve for single item, fetch for item pool) itemID from Itemizer, and quantity **MUST HAVE A LEADING SPACE**
    var requiredLevel = 8; //Must be an integer
    var bonusOreLevel = 13 //Level when you gain a chance for bonus ore
    var xP = 20 //must be an integer
    var time = 2400 //must be an integer; time in ticks (20 ticks per second) for block respawn variable
        event.block.setModel(model); //sets the model of the block
        event.block.model.setItemDamage(texture); //sets the texture of the block
        event.block.setHardness(-1); //sets hardness to -1 making the block unbreakable
        event.block.tempdata.put("model",model);
        event.block.tempdata.put("texture",texture);
        event.block.tempdata.put("maxDurability",maxDurability);
        event.block.tempdata.put("loot",loot);
        event.block.tempdata.put("requiredLevel",requiredLevel);
        event.block.tempdata.put("xP",xP);
        event.block.tempdata.put("time",time);
}
