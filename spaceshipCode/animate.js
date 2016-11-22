$(document).ready(function(){

var container = document.getElementById("container");
//var ship = document.getElementById("spaceship");

function blueShipConstructor(){
	var ship = document.createElement("div");
	ship.id = "blue";
	container.appendChild(ship);
	ship.style.position = "absolute";
	ship.style.width = "22px";
	ship.style.height = "22px";
	ship.style.background = 'url("split_up/spaceships_05.gif") no-repeat';
	ship.style.left = "0px";
	ship.style.top = "200px";
	console.log(ship.offsetTop);
	var getVertical = function(){
		return ship.offsetTop;
	}
	var getHorizontal = function(){
		return ship.offsetLeft;
	}
	this.moveUp = function(){
		if (getVertical()-8>=0)
			ship.style.top=(getVertical()-8)+"px";
	}
	this.moveDown = function(){
		if (getVertical()+8<=378)
			ship.style.top=(getVertical()+8)+"px";
	}
	this.moveLeft = function(){
		if (getHorizontal()-8>=0)
			ship.style.left=(getHorizontal()-8)+"px";
	}
	this.moveRight = function(){
		if (getHorizontal()+8<=356)
			ship.style.left=(getHorizontal()+8)+"px";
	}
	this.fire = function(){
		var fire = document.createElement("div");
		fire.className = "fire";
		container.appendChild(fire);
		fire.style.position = "absolute";
		fire.style.width = "14px";
		fire.style.height = "9px";
		fire.style.background = 'url("split_up/spaceships_208L.gif") no-repeat';
		fire.style.top = (getVertical()+8)+"px";
		fire.style.left = (getHorizontal()+22)+"px";
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
};
var blueship = new blueShipConstructor();
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

document.addEventListener("keypress",function(event){
	if(event.key=="i"){
		blueship.moveUp();
	}else if(event.key=="k"){
		blueship.moveDown();
	}else if(event.key=="j"){
		blueship.moveLeft();
	}else if(event.key=="l"){
		blueship.moveRight();
	}else if(event.key=="a"){
		blueship.fire();
	}
})
});
