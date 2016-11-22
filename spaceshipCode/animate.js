$(document).ready(function(){

var shipVerticalPosition = 0;
var shipHorizontalPosition = 0;

function moveUp(){
	var ship = document.getElementById("spaceship");
	var currentVerticalPosition = ship.offsetTop;
	blueShipRotateUp(ship);
	ship.style.top=(currentVerticalPosition-8)+"px";
}
function moveDown(){
	var ship = document.getElementById("spaceship");
	var currentVerticalPosition = ship.offsetTop;
	blueShipRotateDown(ship);
	ship.style.top=(currentVerticalPosition+8)+"px";
}
function moveLeft(){
	var ship = document.getElementById("spaceship");
	var currentHorizontalPosition = ship.offsetLeft;
	ship.style.left=(currentHorizontalPosition-8)+"px";
}
function moveRight(){
	var ship = document.getElementById("spaceship");
	var currentHorizontalPosition = ship.offsetLeft;
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

function fire(){
	var bomb = document.getElementById("fire");
	var ship = document.getElementById("spaceship");
	shipVerticalPosition = ship.offsetTop;
	shipHorizontalPosition = ship.offsetLeft;
	console.log(shipVerticalPosition,shipHorizontalPosition);
	bomb.style.background = 'url("split_up/spaceships_208L.gif") no-repeat';
	bomb.style.width = "14px";
	bomb.style.height = "9px";
	bomb.position = "absolute";
	bomb.style.left = shipHorizontalPosition+22+"px";
	console.log(shipHorizontalPosition+22);
	bomb.style.top = shipVerticalPosition+"px";
	console.log(shipVerticalPosition)
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
