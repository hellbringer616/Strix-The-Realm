function init(event){
    var model = "minecraft:stone" //must be a string; is the block ID of the model
    var texture = 2 //Optional; must be an integer; interger is equal to the block varient.
    var durability = 20;
    var loot = "retrieve 2 1 "; //Must be a string: Use Itemizer function (retrieve for single item, fetch for item pool) itemID from Itemizer, and quantity **MUST HAVE A LEADING SPACE**
    var requiredLevel = 1; //Must be an integer
    var xP = 7.5 //must be an integer
        event.block.setModel(model); //sets the model of the block
        event.block.model.setItemDamage(texture); //sets the texture of the block
        event.block.tempdata.put("model",model);
        event.block.tempdata.put("texture",texture);
        event.block.tempdata.put("durability",durability);
        event.block.tempdata.put("loot",loot);
        event.block.tempdata.put("requiredLevel",requiredLevel);
        event.block.tempdata.put("xP",xP);
}
