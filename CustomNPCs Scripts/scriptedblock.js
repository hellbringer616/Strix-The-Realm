function init(event){
    event.block.setModel("minecraft:anvil");
}
function interact(event){
    var playerName = event.player.getName();
    event.block.executeCommand("vc o smelting " +playerName);
}
