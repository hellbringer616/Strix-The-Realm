//Loads sponge Economy Service
var EconomyService = Sponge.getServiceManager().provideUnchecked(Java.type("org.spongepowered.api.service.economy.EconomyService").class)
var currency = EconomyService.getDefaultCurrency() //gets DefaultCurrency of the Economy Plugin
var cause = Sponge.getCauseStackManager().getCurrentCause() //gets the Cause Manager from Sponge
var BigDecimal = Java.type("java.math.BigDecimal") //Imports Java function BigDecimal

function interact(event){
      var uid = event.player.getUUID(); //Get Player UUID string
      var JavaUUID = Java.type('java.util.UUID'); //Magic?
      var account = EconomyService.getOrCreateAccount(JavaUUID.fromString(uid)) //gets Economy Account for the Player.
      var value = new BigDecimal(2) //value in () is value to be deposited.
      var balance = account.get().getBalance(currency) //gets the balance of DefaultCurrency

        account.get().deposit(currency,value,cause) //deposit amount of value into players account.
          event.player.message("You found "+value+" Coins") //message player the amount of coins found.
}
