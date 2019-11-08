//on interaction with the door/block
function interact(event){
  //if timerId 1 does not exist; create a timer with ID 1 with a 40 tick timer (2 seconds)
    if(!event.block.timers.has(1)){
    event.block.timers.start(1, 40, false);
    }
}
//run a timer
function timer(event){
  //checks if the door/block is open
    if(event.block.getOpen() == true) {
      //if open close the door/block and stop the timer
        event.block.setOpen(false)
        event.block.timers.stop(1);
        }
        //stop the timer
    event.block.timers.stop(1);
}
