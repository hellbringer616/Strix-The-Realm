function init(event){
    var data = event.block.tempdata;

    var model = "minecraft:stone"; //must be a string; is the block ID of the model
    var texture = 3; //Optional; must be an integer; interger is equal to the block varient.
    var maxDurability = 20;
    var loot = "retrieve 1 1 "; //Must be a string: Use Itemizer function (retrieve for single item, fetch for item pool) itemID from Itemizer, and quantity **MUST HAVE A LEADING SPACE**
    var requiredLevel = 0; //Must be an integer
    var bonusOreLevel = 5; //Level when you gain a chance for bonus ore
    var xP = 8; //must be an integer
    var time = 1200; //must be an integer; time in ticks (20 ticks per second) for block respawn variable
        event.block.setModel(model); //sets the model of the block
        event.block.model.setItemDamage(texture); //sets the texture of the block
        event.block.setHardness(-1); //sets hardness to -1 making the block unbreakable
        data.put("model",model);
        data.put("texture",texture);
        data.put("maxDurability",maxDurability);
        data.put("durability",maxDurability);
        data.put("loot",loot);
        data.put("requiredLevel",requiredLevel);
        data.put("bonusOreLevel",bonusOreLevel);
        data.put("xP",xP);
        data.put("time",time);
}
