function interact(event) {
    if(event.player.hasActiveQuest(14) || event.player.hasFinishedQuest(13)){
    }else{
        if(event.player.hasActiveQuest(13)){
            event.player.showDialog(35,"Rich Folville")
            event.setCanceled(true)
        }else{
            event.setCanceled(true)
            event.player.showDialog(29,"Rich Folville")
        }
    }
}
