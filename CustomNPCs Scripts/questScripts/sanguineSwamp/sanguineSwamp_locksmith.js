//Loads a seperate API, in this case Itemizers ItemService
var itemService = Java.type("com.onaple.itemizer.utils.ItemService");

function interact(event) {

  if(event.player.hasActiveQuest(17) && itemService.hasItem("22",1)){
    event.player.showDialog(49,"Josiah Cadwell")
    //code to remove Iron Ingot goes here.
    //code to add Watch Tower Key goes here.
    //code to complete quest goes here? finishQuest then removeQuest
  }else{
    event.player.showDialog(48,"Josiah Cadwell")
  }
}
