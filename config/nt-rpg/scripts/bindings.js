/*
With CNPC-NTRPG plugin CustomNPCs scripts have access to all NT-RPG scripts bindings.
To give access to new variables or functions, use this

var yourThing = {...};
Bindings.getScriptEngine().put("YourThing", yourThing);
*/

// java things
Bindings.getScriptEngine().put("UUID", Java.type("java.util.UUID"));
Bindings.getScriptEngine().put("BigDecimal", Java.type("java.math.BigDecimal"));

// sponge things
Bindings.getScriptEngine().put("Sponge", Java.type("org.spongepowered.api.Sponge"));

// nt-rpg things
Bindings.getScriptEngine().put("RpgPlugin", Java.type("cz.neumimto.rpg.sponge.SpongeRpgPlugin"));
Bindings.getScriptEngine().put("RpgApi", Java.type("cz.neumimto.rpg.api.Rpg").get());
//Bindings.getScriptEngine().put("GlobalScope", RpgPlugin.GlobalScope); Depricated

// itemizer things
Bindings.getScriptEngine().put("itemizerItemService", Sponge.getServiceManager().provideUnchecked(Java.type("com.onaple.itemizer.service.IItemService").class));

//random number between numbers generator
function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}
Bindings.getScriptEngine().put("getRandomInt",getRandomInt);

//Sponge Economy Depoist: uuid is event.player.getUUID(), value is any integer
function spongeEconomyDeposit(uuid,value){
    var account = EconomyService.getOrCreateAccount(UUID.fromString(uuid)) //gets Economy Account for the Player.
    var value = new BigDecimal(value) //value in () is value to be deposited.
    var currency = EconomyService.getDefaultCurrency() //gets DefaultCurrency of the Economy Plugin
    var cause = Sponge.getCauseStackManager().getCurrentCause() //gets the Cause Manager from Sponge

        account.get().deposit(currency,value,cause) //deposit amount of value into players account.
}
Bindings.getScriptEngine().put("spongeEconomyDeposit",spongeEconomyDeposit);

//Sponge Economy Withdraw: uuid is event.player.getUUID(), value is any integer
function spongeEconomyWithdraw(uuid,value){
    var account = EconomyService.getOrCreateAccount(UUID.fromString(uuid)) //gets Economy Account for the Player.
    var value = new BigDecimal(value) //value in () is value to be deposited.
    var currency = EconomyService.getDefaultCurrency() //gets DefaultCurrency of the Economy Plugin
    var cause = Sponge.getCauseStackManager().getCurrentCause() //gets the Cause Manager from Sponge

        account.get().withdraw(currency,value,cause) //withdraw amount of value from players account.
}
Bindings.getScriptEngine().put("spongeEconomyWithdraw",spongeEconomyWithdraw);

//Sponge Economy Balance: uuid is event.player.getUUID()
function spongeEconomyBalance(uuid){
    var account = EconomyService.getOrCreateAccount(UUID.fromString(uuid)) //gets Economy Account for the Player.

        account.get().getBalance(currency) //check the amount of a players account.
}
Bindings.getScriptEngine().put("spongeEconomyBalance",spongeEconomyBalance);


var eventListener = new (Java.extend(Consumer, {
    accept: function (event) {
        Bindings.getScriptEngine().put("EconomyService",Sponge.getServiceManager().provideUnchecked(Java.type("org.spongepowered.api.service.economy.EconomyService").class));
    }
}));

registerEventListener({
    type: Java.type("org.spongepowered.api.event.game.state.GameStartedServerEvent"),
    consumer: eventListener
})

function processItemizerItemCost(caster, hasItemId1, hasItemId2, expAmount, classOrSource, craftArray, craftArray2) {
    var player = caster.getEntity();
    var playerName = caster.getPlayer().getName()
    //Tests begin here. Assume that player inventory is empty

    var console = Sponge.getServer().getConsole();
    if(Itemizer.hasItemizerItem(player, hasItemId1, hasItemId2)) {
        Sponge.getCommandManager().process(console, "nadmin exp add " + playerName + " " + expAmount + " " + classOrSource);

    }else{
        Sponge.getCommandManager().process(console, "tell " + playerName + " You do not have the required items");
    }
    Itemizer.craft(player, craftArray, craftArray2);
}
Bindings.getScriptEngine().put("processItemizerItemCost",processItemizerItemCost);
