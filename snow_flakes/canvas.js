window.onload = function(){
   
   //get the canvas and context and store in var
	var canvas = document.getElementById("sky");
	var c =canvas.getContext("2d");

	//set canvas dimentions to window height and width
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;

	//generate the snowflakes and apply the attributes
	var mf = 100; //max flakes
	var flakes = [];

	//loop through the empty flakes and apply the attributes
	for (var i = 0; i < mf; i++)
	{
		flakes.push({
			x: Math.random()*canvas.width,
			y: Math.random()*canvas.height,
			r: Math.random()*5+2, //min =2px and max=7px
			d: Math.random() + 1 //density of the flakes
		})
	}
	// draw flakes onto canvas
	function drawFlakes()
	{
		c.clearRect(0, 0, canvas.width, canvas.height);
		c.fillStyle = "black";
		c.beginPath();
		for(var i=0; i<mf; i++)
		{
			var f=flakes[i];
			c.moveTo(f.x,f.y);
			c.strokeStyle="black";
			c.stroke();
			c.arc(f.x,f.y,f.r,0,Math.PI*2,true);

		}
		console.log(flakes);
	c.fill();
	moveFlakes();
    }
    //animate the flakes
    var angle = 0;
    function moveFlakes()
    {
    	angle +=0.01;
    	for(var i=0;i<mf;i++){

    		//store the current flake
    		var f=flakes[i];

    		//update X and Y coordintes of each snowflakes
    		f.y += Math.pow(f.d, 2) + 1;
    		f.x += Math.sin(angle) + 2;

    		//if the snowflakes reaches the buttom,send a new one to the top

    		if(f.y> canvas.height)
    		{
    			flakes[i] = { x:Math.random()*canvas.width, y:0,r:f.r,d:f.d};
    		}


    	}
    }
    setInterval(drawFlakes, 25);
}