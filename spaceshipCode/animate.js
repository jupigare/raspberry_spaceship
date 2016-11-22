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

setInterval(function generateEnemy(){
	var enemy = document.createElement("div");
	enemy.className = "enemy94";
	container.appendChild(enemy);
	enemy.style.position = "absolute";
	enemy.style.width = "26px";
	enemy.style.height = "37px";
	enemy.style.background = "url('split_up/spaceships_94R.gif') no-repeat";
	enemy.style.left = "370px";
	enemy.style.top = Math.floor(Math.random()*363)+"px";
	var id = setInterval(frame,20);
	function frame() {
		var pos = enemy.offsetLeft;
		if(pos == 0) {
			clearInterval(id);
			container.removeChild(enemy);
		}
		else{
			pos--;
			enemy.style.left = pos + 'px';
		}
	}

},8000);
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
