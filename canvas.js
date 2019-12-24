var rectangles =[] ;
function onKeyDown(event) {
var maxPoint = new Point(view.size.width , view.size.height)
var randomPoint = Point.random();
var point = randomPoint *  maxPoint ;
var newRectangle = new Path.Rectangle(point,300);
if (event.key ==="q")
{	
	var sound = new Howl({
		src: ['bubbles.mp3']});	sound.play();
	newRectangle.fillColor = "orange"
}
else if (event.key ==="w")
{	
	var sound = new Howl({
		src: ['sounds/clay.mp3']});	sound.play();
		newRectangle.fillColor = "purple"
}
else if (event.key ==="e")
{	
	var sound = new Howl({
		src: ['sounds/confetti.mp3']});	sound.play();
		newRectangle.fillColor = "pink"
}
else if (event.key ==="r")
{	
	var sound = new Howl({
		src: ['sounds/corona.mp3']});	sound.play();
		newRectangle.fillColor = "black"
}
else if (event.key ==="t")
{	
	var sound = new Howl({
		src: ['sounds/dotted-spiral.mp3']});	sound.play();
		newRectangle.fillColor = "blue"
}
else if (event.key ==="y")
{	
	var sound = new Howl({
		src: ['sounds/flash-1.mp3']});	sound.play();
		newRectangle.fillColor = "powderblue"
}
else if (event.key ==="u")
{	
	var sound = new Howl({
		src: ['sounds/flash-2.mp3']});	sound.play();
		newRectangle.fillColor = "orange"
}
else if (event.key ==="i")
{	
	var sound = new Howl({
		src: ['sounds/flash-3.mp3']});	sound.play();
		newRectangle.fillColor = "green"
}
else if (event.key ==="o")
{	
	var sound = new Howl({
		src: ['sounds/glimmer.mp3']});	sound.play();
		newRectanglefillColor = "cyan"
}
else if (event.key ==="p")
{	
	var sound = new Howl({
		src: ['sounds/moon.mp3']});	sound.play();
		newRectangle.fillColor = "indigo"
}
else if (event.key ==="a")
{	
	var sound = new Howl({
		src: ['sounds/pinwheel.mp3']});	sound.play();
		newRectangle.fillColor = "yellow"
}
else if (event.key ==="s")
{	
	var sound = new Howl({
		src: ['sounds/piston-1.mp3']});	sound.play();
		newRectangle.fillColor = "azure"
}
else if (event.key ==="d")
{	
	var sound = new Howl({
		src: ['sounds/piston-2.mp3']});	sound.play();
		newRectangle.fillColor = "brown"
}
else if (event.key ==="f")
{	
	var sound = new Howl({
		src: ['sounds/piston-3.mp3']});	sound.play();
		newRectangle.fillColor = "red"
}
else if (event.key ==="g")
{	
	var sound = new Howl({
		src: ['sounds/prism-1.mp3']});	sound.play();
		newRectangle.fillColor = "tan"
}
else if (event.key ==="h")
{	
	var sound = new Howl({
		src: ['sounds/prism-2.mp3']});	sound.play();
		newRectangle.fillColor = "black"
}
else if (event.key ==="j")
{	
	var sound = new Howl({
		src: ['sounds/prism-3.mp3']});	sound.play();
		newRectangle.fillColor = "violet"
}
else if (event.key ==="k")
{	
	var sound = new Howl({
		src: ['sounds/splits.mp3']});	sound.play();
		newRectangle.fillColor = "pink"
}
else if (event.key ==="l")
{	
	var sound = new Howl({
		src: ['sounds/squiggle.mp3']});	sound.play();
		newRectangle.fillColor = "green yellow"
}
else if (event.key ==="z")
{	
	var sound = new Howl({
		src: ['sounds/strike.mp3']});	sound.play();
		newRectangle.fillColor = "red orange"
}
else if (event.key ==="x")
{	
	var sound = new Howl({
		src: ['sounds/suspension.mp3']});	sound.play();
		newRectangle.fillColor = "powderblue"
}else if (event.key ==="c")
{	
	var sound = new Howl({
		src: ['sounds/timer.mp3']});	sound.play();
		newRectangle.fillColor = "blue"
}
else if (event.key ==="v")
{	
	var sound = new Howl({
		src: ['sounds/ufo.mp3']});	sound.play();
		newRectangle.fillColor = "orange"
}
else if (event.key ==="b")
{	
	var sound = new Howl({
		src: ['sounds/veil.mp3']});	sound.play();
		newRectangle.fillColor = "pink"
}
else if (event.key ==="n")
{	
	var sound = new Howl({
		src: ['sounds/wipe.mp3']});	sound.play();
		newRectangle.fillColor = "purple"
}
else if (event.key ==="m")
{	
	var sound = new Howl({
		src: ['sounds/zig-zag.mp3']});	sound.play();
		newRectangle.fillColor = "teal"
}
else if (event.key ==="1")
{	
	var sound = new Howl({
		src: ['./sounds/addition/snd1.wav']});	sound.play();
		newRectangle.fillColor = "red"
}

else if (event.key ==="2")
{	
	var sound = new Howl({
		src: ['./sounds/addition/snd2.wav']});	sound.play();
		newRectangle.fillColor = "pink"
}

else if (event.key ==="3")
{	
	var sound = new Howl({
		src: ['./sounds/addition/snd3.wav']});	sound.play();
		newRectangle.fillColor = "black"
}

else if (event.key ==="4")
{	
	var sound = new Howl({
		src: ['./sounds/addition/snd4.wav']});	sound.play();
		newRectangle.fillColor = "green"
}

else if (event.key ==="5")
{	
	var sound = new Howl({
		src: ['./sounds/addition/snd5.wav']});	sound.play();
		newRectangle.fillColor = "blue"
}

else if (event.key ==="6")
{	
	var sound = new Howl({
		src: ['./sounds/addition/snd6.wav']});	sound.play();
		newRectangle.fillColor = "steelblue"
}

else if (event.key ==="7")
{	
	var sound = new Howl({
		src: ['./sounds/addition/snd7.wav']});	sound.play();
		newRectangle.fillColor = "grey"
}

else if (event.key ==="8")
{	
	var sound = new Howl({
		src: ['./sounds/addition/snd8.wav']});	sound.play();
		newRectangle.fillColor = "lightgreen"
}

else if (event.key ==="9")
{	
	var sound = new Howl({
		src: ['./sounds/addition/snd9.wav']});	sound.play();
		newRectangle.fillColor = "yellow"
}

else if (event.key ==="0")
{	
	var sound = new Howl({
		src: ['./sounds/addition/snd10.wav']});	sound.play();
        newRectangle.fillColor = "magenta"
}

else if (event.key ==="-")
{	
	var sound = new Howl({
		src: ['./sounds/addition/snd11.wav']});	sound.play();
        newRectangle.fillColor = "pink"
}

else if (event.key ==="=")
{	
	var sound = new Howl({
		src: ['./sounds/addition/snd12.wav']});	sound.play();
        newRectangle.fillColor = "applegreen"
}

else if (event.key ===".")
{	
	var sound = new Howl({
		src: ['./sounds/addition/snd13.wav']});	sound.play();
        newRectangle.fillColor = "tomato"
}

else if (event.key ===",")
{	
	var sound = new Howl({
		src: ['sounds/timer.mp3']});	sound.play();
		newRectangle.fillColor = "blue"
}

else if (event.key ==="/")
{	
	var sound = new Howl({
		src: ['sounds/ufo.mp3']});	sound.play();
		newRectangle.fillColor = "orange"
}

else if (event.key ===";")
{	
	var sound = new Howl({
		src: ['sounds/veil.mp3']});	sound.play();
		newRectangle.fillColor = "pink"
}

else if (event.key ==="'")
{	
	var sound = new Howl({
		src: ['sounds/wipe.mp3']});	sound.play();
		newRectangle.fillColor = "purple"
}

else if (event.key ==="[")
{	
	var sound = new Howl({
		src: ['sounds/zig-zag.mp3']});	sound.play();
		newRectangle.fillColor = "teal"
}

else if (event.key ==="]")
{	
	var sound = new Howl({
		src: ['./sounds/addition/snd1.wav']});	sound.play();
		newRectangle.fillColor = "red"
}

else if (event.key ==="<")
{	
	var sound = new Howl({
		src: ['sounds/veil.mp3']});	sound.play();
		newRectangle.fillColor = "pink"
}





rectangles.push(newRectangle);
}
function onFrame(event){
	for (var i=0 ; i< rectangles.length ; i++){
		rectangles[i].fillColor.hue+=1;
		rectangles[i].scale(.9 );
	}
}
