$(document).ready(function(){

var container = document.getElementById("container");
var ship = document.getElementById("spaceship");

function moveUp(){
	var currentVerticalPosition = ship.offsetTop;
	if (currentVerticalPosition-8>=0)
		ship.style.top=(currentVerticalPosition-8)+"px";
}
function moveDown(){
	var currentVerticalPosition = ship.offsetTop;
	if (currentVerticalPosition+8<=378)
		ship.style.top=(currentVerticalPosition+8)+"px";
}
function moveLeft(){
	var currentHorizontalPosition = ship.offsetLeft;
	if (currentHorizontalPosition-8>=0)
		ship.style.left=(currentHorizontalPosition-8)+"px";
}
function moveRight(){
	var currentHorizontalPosition = ship.offsetLeft;
	if (currentHorizontalPosition-8<=356)
		ship.style.left=(currentHorizontalPosition+8)+"px";
}
function blueShipRotateDown(ship){
	ship.style.background = 'url("split_up/spaceships_65.gif")';
}
function blueShipRotateUp(ship){
	ship.style.background = 'url("split_up/spaceships_35.gif")';
}
function blueShipRotateBack(ship){
	ship.style.background = 'url("split_up/spaceships_05.gif")';
}
function generateEnemy(){
	var enemy = document.createElement("div");
	enemy.className = "enemy94";
	enemy.background = "url('split_up/spaceships_94R') no-repeat";
	container.appendChild(enemy);
	//not finished yet

}
function fire(){
	var fire = document.createElement("div");
	fire.className = "fire";
	container.appendChild(fire);
	fire.style.position = "absolute";
	fire.style.width = "14px";
	fire.style.height = "9px";
	fire.style.background = 'url("split_up/spaceships_208L.gif") no-repeat';
	var shipVerticalPosition = ship.offsetTop, shipHorizontalPosition = ship.offsetLeft;
	fire.style.top = (shipVerticalPosition+8)+"px";
	fire.style.left = (shipHorizontalPosition+22)+"px";
	var id = setInterval(frame, 5);
	function frame() {
		var pos = fire.offsetLeft;
		if(pos === 390) {
			clearInterval(id);
			container.removeChild(fire);
		}
		else{
			pos++;
			fire.style.left = pos + 'px';
		}
	}
}
document.addEventListener("keypress",function(event){
	console.log(event);
	if(event.key=="i"){
		moveUp();
	}else if(event.key=="k"){
		moveDown();
	}else if(event.key=="j"){
		moveLeft();
	}else if(event.key=="l"){
		moveRight();
	}else if(event.key=="a"){
		fire();
	}
})
});
