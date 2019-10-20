var cachedPlayer;
var timerID = 10; //must be unique for that NPC
var timerDelay = 100; //in ticks
function interact(event) {
cachedPlayer = event.player;
/*steal code*/
event.npc.timers.start(timerID, timerDelay, false)
}
function timer(event) {
if(event.id == timerID) {
cachedPlayer.getTempData().remove('blah')
}
}

/////////Same thing, different code; use only ONE//////////
function interact (e){
var now = e.npc.getWorld().getTime();
e.npc.getTempdata().put("timer", now);
e.npc.say("start!")
}

function tick(e){
var after  = e.npc.getTempdata().get("timer")
var now = e.npc.getTime()
var calc = now - after
if(calc > 50){
e.npc.say("End");
e.npc.getTempdata.get("timer").clear()
        }
}
