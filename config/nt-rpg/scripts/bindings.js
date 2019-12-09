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
Bindings.getScriptEngine().put("EconomyService",Sponge.getServiceManager().provideUnchecked(Java.type("org.spongepowered.api.service.economy.EconomyService").class))

// nt-rpg things
Bindings.getScriptEngine().put("RpgPlugin", Java.type("cz.neumimto.rpg.sponge.NtRpgPlugin"));
Bindings.getScriptEngine().put("GlobalScope", RpgPlugin.GlobalScope);

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
