var timer = 11;

function start() {
    timer--;
    if (timer > 0){
    //console.log(timer);
    document.getElementById("countdownStatus").innerHTML = timer;
    setTimeout(start, 1000); /* replicate wait 1 second */
}
else if (timer <= 0){ 
		   document.getElementById("countdownStatus").innerHTML = "Blastoff!";
}
}
