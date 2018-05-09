var circles=[];
var gametype=6;
var square = document.querySelectorAll(".squares");
var rgbcolor = document.querySelector("#rgbtext");
var textchange = document.querySelector("#texttochange");
var playagain = document.querySelector("#playme");
var hardbutton = document.querySelector("#hardbutton");
var easybutton = document.querySelector("#easybutton");


init();

function init()
{
	generaterandom();
	randomtext();
}


for(var m=0;m<gametype;m++)
{
square[m].addEventListener("click",function(){
	var clickedcolor = this.style.background;
	console.log(clickedcolor,rgbcolor.innerHTML);
 if(this.style.background===rgbcolor.innerHTML)
 {
    console.log("done");
   textchange.textContent ="Correct!";

 }
 else
 { console.log("undone")
 	textchange.textContent ="Try Again!!";
 	this.style.display="none";
 }
});
}

playagain.addEventListener("click",function()
	{
		gametype=6;
		for(var n=0;n<6;n++)
		{
			square[n].style.display="block";
			
		}
		 textchange.textContent ="";
		generaterandom();
			randomtext();
	});

function generaterandom()
{
	for(var i=0;i<gametype;i++)
	{
		circles[i]=getrandom();

	}
		for(var j=0;j<gametype;j++)
	{
		square[j].style.background=circles[j];
	}
	if(gametype===3)
	{
		for(var k=3;k<6;k++)
		{
			square[k].style.display ='none';
		}
	}
	if(gametype===6)
	{
		for(var k=3;k<6;k++)
		{
			square[k].style.display ='block';
		}
	}
	

	
	return circles;
}

function getrandom()
{

	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" +r+", " +g+", "+b+")";
}

function randomtext()
{ var i;  
 if(gametype===6)
	i=Math.floor(Math.random()*7);
	else
     i=Math.floor(Math.random()*4);
	rgbcolor.textContent=circles[i];

}

easybutton.addEventListener("click",function(){
	gametype=3;
	 textchange.textContent ="";
	generaterandom();
	randomtext();
});
hardbutton.addEventListener("click",function()
	{   gametype=6;
		 textchange.textContent ="";
     generaterandom();
	randomtext();
	});

