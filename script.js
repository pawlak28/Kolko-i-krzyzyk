var blue_counter=0;
var red_counter=0;

var push_audio=new Audio("push.mp3");
var win_audio=new Audio("win.mp3");
var new_round=new Audio("new_round.mp3");

var query=2;
var repeat=2;

//funkcja onclick przypisana do diva

function push(id)
{

	if (repeat%2==0) 
	{

		if (query%2==0) 
		{
		
			var x=document.getElementById(id);
			x.innerHTML="<img src='x.png'/>";
			x.style="border: 3px inset #996633;background-color: #8cd98c;";
			x.onmouseout="";
			x.setAttribute("onclick","off");
			x.value="1";
			query++;
			push_audio.play();
		}

		else if (query%2!=0) 
		{
			var o=document.getElementById(id);
			o.innerHTML="<img src='o.png'/>";
			o.style="border: 3px inset #996633;background-color: #8cd98c;";
			o.onmouseout="";
			o.setAttribute("onclick","off");
			o.value="2";
			query++;
			push_audio.play();
		}


		if (query>6) 
		{
			check();
		}	



	}

	else if (repeat%2!=0) 
	{

		if (query%2!=0) 
		{
		
			var x=document.getElementById(id);
			x.innerHTML="<img src='x.png'/>";
			x.style="border: 3px inset #996633;background-color: #8cd98c;";
			x.onmouseout="";
			x.setAttribute("onclick","off");
			x.value="1";
			query++;
			push_audio.play();
		}

		else if (query%2==0) 
		{
			var o=document.getElementById(id);
			o.innerHTML="<img src='o.png'/>";
			o.style="border: 3px inset #996633;background-color: #8cd98c;";
			o.onmouseout="";
			o.setAttribute("onclick","off");
			o.value="2";
			query++;
			push_audio.play();
		}


		if (query>6) 
		{
			check();
		}	



	}

	
	
}


//sprawdzenie czy ktoś wygrał
function check()
{
	var blue=document.getElementById("blue");
	var red=document.getElementById("red");

	for (var i = 1; i < 10; i=i+3) 
	{
		
		var x1=document.getElementById(i);
		var x2=document.getElementById(i+1);
		var x3=document.getElementById(i+2);

		if (x1.value==x2.value&&x2.value==x3.value) 
		{

			if (x1.value=="1") 
			{
				alert("Wygrywa X!");

				win_audio.play();

				blue_counter++;
				blue.innerHTML=blue_counter;

				for (var i = 1; i < 10; i++) 
				{
					var field=document.getElementById(i);
					field.style="border: 3px inset #996633;background-color: #8cd98c;";
					field.setAttribute("onclick","off");
					field.onmouseout="";

				}
			}
			else if (x1.value=="2")
			{
				alert("Wygrywa O!");

				win_audio.play();

				red_counter++;
				red.innerHTML=red_counter;

				for (var i = 1; i < 10; i++) 
				{
					var field=document.getElementById(i);
					field.style="border: 3px inset #996633;background-color: #8cd98c;";
					field.setAttribute("onclick","off");
					field.onmouseout="";

				}
			}
		}

	}

	for (var i = 1; i < 4; i++) 
	{
		
		var x1=document.getElementById(i);
		var x2=document.getElementById(i+3);
		var x3=document.getElementById(i+6);

		if (x1.value==x2.value&&x2.value==x3.value) 
		{

			if (x1.value=="1") 
			{
				alert("Wygrywa X!");

				win_audio.play();

				blue_counter++;
				blue.innerHTML=blue_counter;

				for (var i = 1; i < 10; i++) 
				{
					var field=document.getElementById(i);
					field.style="border: 3px inset #996633;background-color: #8cd98c;";
					field.setAttribute("onclick","off");
					field.onmouseout="";

				}
			}
			else if (x1.value=="2")
			{
				alert("Wygrywa O!");

				win_audio.play();

				red_counter++;
				red.innerHTML=red_counter;

				for (var i = 1; i < 10; i++) 
				{
					var field=document.getElementById(i);
					field.style="border: 3px inset #996633;background-color: #8cd98c;";
					field.setAttribute("onclick","off");
					field.onmouseout="";

				}
			}
		}

	}

	
		
		var x1=document.getElementById(1);
		var x2=document.getElementById(5);
		var x3=document.getElementById(9);
		var x4=document.getElementById(3);
		var x5=document.getElementById(7);

		if (x1.value==x2.value&&x2.value==x3.value||x3.value==x2.value&&x2.value==x1.value) 
		{

			if (x1.value=="1") 
			{
				alert("Wygrywa X!");

				win_audio.play();

				blue_counter++;
				blue.innerHTML=blue_counter;

				for (var i = 1; i < 10; i++) 
				{
					var field=document.getElementById(i);
					field.style="border: 3px inset #996633;background-color: #8cd98c;";
					field.setAttribute("onclick","off");
					field.onmouseout="";

				}
			}
			else if (x1.value=="2")
			{
				alert("Wygrywa O!");

				win_audio.play();

				red_counter++;
				red.innerHTML=red_counter;

				for (var i = 1; i < 10; i++) 
				{
					var field=document.getElementById(i);
					field.style="border: 3px inset #996633;background-color: #8cd98c;";
					field.setAttribute("onclick","off");
					field.onmouseout="";

				}
			}
		}
		else if (x5.value==x2.value&&x2.value==x4.value||x4.value==x5.value&&x2.value==x5.value) 
		{
			if (x1.value=="1") 
			{
				alert("Wygrywa X!");

				win_audio.play();

				blue_counter++;
				blue.innerHTML=blue_counter;

				for (var i = 1; i < 10; i++) 
				{
					var field=document.getElementById(i);
					field.style="border: 3px inset #996633;background-color: #8cd98c;";
					field.setAttribute("onclick","off");
					field.onmouseout="";

				}
			}
			else if (x1.value=="2")
			{
				alert("Wygrywa O!");

				win_audio.play();

				red_counter++;
				red.innerHTML=red_counter;

				for (var i = 1; i < 10; i++) 
				{
					var field=document.getElementById(i);
					field.style="border: 3px inset #996633;background-color: #8cd98c;";
					field.setAttribute("onclick","off");
					field.onmouseout="";

				}
			}
		}

	

}

function next_round()
{
	for (var i = 1; i < 10; i++) 
	{
		repeat++;
		var x=document.getElementById(i);
		query=2;
		x.innerHTML="";
		x.style="border: 3px outset #996633;background-color: #339966;";
		x.value="0";
		x.setAttribute("onclick","push(this.id);");


		x.onmouseover = function()
		{
			this.style.backgroundColor="#8cd98c";
			this.style.border="3px inset #996633";
		}

		x.onmouseout = function()
		{
			this.style.backgroundColor="#339966";
			this.style.border="3px outset #996633";
		}

		x.onmousedown = function()
		{
			this.style.backgroundColor="#8cd98c";
			this.style.border="3px inset #996633";
		}

		new_round.play();
		who_first();

	}
}

function who_first()
{
	if (repeat%2==0) 
	{
		var who=document.getElementById("start");
		who.innerHTML="niebieskim!";
		who.style="color:blue;";
	}
	else
	{
		var who=document.getElementById("start");
		who.innerHTML="czerwonym!";
		who.style="color:red;";
	}
}