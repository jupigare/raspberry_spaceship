$(document).ready(function(){
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
	var shipVerticalPosition = ship.offsetTop;
	var shipHorizontalPosition = ship.offsetLeft;
	console.log(shipVerticalPosition,shipHorizontalPosition);
	bomb.style.background = 'url("split_up/spaceships_208L.gif") no-repeat';
	bomb.style.width = "14px";
	bomb.style.height = "9px";
	bomb.position = "absolute";
	bomb.style.left = shipHorizontalPosition+22+"px";
	bomb.style.top = shipVerticalPosition+"px";
}
document.addEventListener("keypress",function(event){
	console.log(event);
	if(event.key=="ArrowUp"){
		moveUp();
	}else if(event.key=="ArrowDown"){
		moveDown();
	}else if(event.key=="ArrowLeft"){
		moveLeft();
	}else if(event.key=="ArrowRight"){
		moveRight();
	}else if(event.key=="a"){
		fire();
	}
})
});
