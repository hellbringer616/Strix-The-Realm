//This script looks for item ID's defined in itemizer in the players inventory and returns a retrieve command to give the player an item from itemizer
var ItemService = java.type(com.onaple.itemizer.ItemService); //Itemizer Itemservice API
var Item1 = "CommandOutput"; //not yet finished
var Quantity1 = "CommandOutput" //not yet finished
var Item2 = "CommandOutput"; //not yet finished
var Quantity2 = "CommandOutput"; //not yet finished
var CraftedItem ="CommandOutput"; //not yet finished
var CraftedItemQuanity = "CommandOutput"; //not yet finished

contains(ItemService(Item1 Quantity1)); //Checks if the player has Itemizer item in inventory
contains(ItemService(Item2 Quantity2)); //Checks if the player has Itemizer item in inventory
clear(ItemService(Item1 Quantity1)); //removes itemizer item from inventory
clear(ItemService(Item2 Quantity2)); //removes itemizer item from inventory
ItemService.retrieve(CraftedItem); //Gives player Itemizer item
CanFit(ItemStack stack); //Checks if the player has space in inventory
