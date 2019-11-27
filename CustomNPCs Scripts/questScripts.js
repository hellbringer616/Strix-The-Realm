function interact(event){
  if(event.player.hasFinishedQuest(13)) {//checks if a player has finished a quest.
    event.npc.say("you've completed Quest 13!");
    event.npc.say("Starting Quest 14");
    event.player.startQuest(14); //Starts a quest
  }else{
    if(event.player.hasActiveQuest(13);){//checks if a player has an active quest.
      event.npc.say("You have ActiveQuest(13)")
      event.player.removeQuest(13); //Removes a quest from the player (typically used with finishQuest())
      event.npc.say("Removing Quest 13");
      event.player.finishQuest(13); //Completes a quest and adds it to the completed list (typically used with removeQuest())
      event.npc.say("Finishing Quest 13");
      event.npc.say("Talk to me again!");
    }
  }
}
