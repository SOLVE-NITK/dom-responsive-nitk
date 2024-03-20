{/* <script type="text/javascript"> */}

var simstatus=1; 
var rotstatus=1;

var commenttext="Some Text";
var commentloc=0;

var trans= new point(200,100);
var trans1= new point(350,150);

var o= new point(0,0,"o");
var a= new point(0,0,"a");
var b= new point(0,0,"b");
var c= new point(0,0,"c");
var d= new point(0,0,"d");
var e= new point(0,0,"e");
var f= new point(0,0,"f");
var g= new point(0,0,"g");
var h= new point(0,0,"h");
var i= new point(0,0,"i ");
var cn1= new point(0,0,"j");
var cn2= new point(0,0,"k");
var o1= new point(0,0," ");
var o2=new point(0,0," ");
var a1= new point(0,0," ");
var a2= new point(0,0," ");
var h1= new point(0,0," ");
var h2= new point(0,0," ");

//  var n=0; 
//  var theta = 0,theta1=0; 
//  var timef=0; 
//  var omega=1; 
//  var r=0,aa=0; 
//  var ra=0; 
//  var j=0; 
//  var acc=0; 
//  var m; 
//  var gr=9.81; 
//  var r_axle=5; 
//  var I=15; 

// var flaggrashof=true;

var canvas;
var ctx;
//timing section
var simTimeId = setInterval("",'1000');
var pauseTime = setInterval("",'1000');
var time=0;
//point tracing section
var ptx = [];
var pty = [];
ptxdot=[];
ptxddot=[];
ptxdddot=[];
//click status of legend and quick reference
var legendCS = false;
var quickrefCS = false;
var temp=0;
var offset=0;



//new Calculation

// var n1 = 5; 
var n1 = 17;
var n2 = 0;
var thetaa = 0;
var thetab = 0;
var thetac = 0;
var thetad = 0;
var thetaRot = 0;
// var Ival = 0.444; 
var F = 0.12;
// var F = 0.73; 
var t = 0;
var dt = 0;
var omegaa = 0;
var omegab = 0;
var omegabb = 0;
var i=0, j=0;
var gvt = 9.81;
var flagEnd = false;
var flagShift = false;
var tt = 0;
var radius= 0;
var m = 0;
var height = 0;
var Iuser = 0;
var vel = 0;
var speed = 15;
var rate = 0.1;
var r=0;
var n=0;
var speedString = "Speed:2x";
var densConstant = 11204.1;
var M = 0;
var rcal = 0;


// let mediaQuery1 = window.matchMedia("screen and (max-width: 540px)");
// let mediaQuery2 = window.matchMedia("screen and (max-width: 704px)");
// let mediaQuery3 = window.matchMedia("screen and (max-width: 820px)");
// let mediaQuery4 = window.matchMedia("screen and (max-width: 912px)");
// let mediaQuery5 = window.matchMedia("screen and (max-width: 1200px)");
// let scaleX = 1.4;
// let scaleY = 0.9;

// const setMediaQueries = function (ctx) {
//     // let originalX = 20;
//     // if (mediaQuery1.matches) {
//     //   scaleX = 1.7;
//     //   // originalX = 20;
//     //   originalX = canvas.width / 4 - 10;
//     //   scaleY = 0.9;
//     // } else if (mediaQuery2.matches) {
//     //   scaleX = 1;
//     //   // originalX = canvas.width / 4 - 10;
//     //   scaleY = 0.6;
//     // } else if (mediaQuery3.matches) {
//     //   scaleX = 1;
//     //   originalX = canvas.width / 4 - 10;
//     //   scaleY = 0.4;
//     // } else if (mediaQuery4.matches) {
//     //   scaleX = 1;
//     //   originalX = canvas.width / 4 - 10;
//     //   scaleY = 0.4;
//     // } else if (mediaQuery5.matches) {
//     //     scaleX = 0.5;
//     //     originalX = canvas.width / 4 - 10;
//     //     scaleY = 0.4;
//     //   } else {
//     //   // originalX = canvas.width / 4 - 20;
//     //   scaleX = 0.4;
//     //   console.log("media")
//     //   scaleY = 0.5;
//     // }
//     // ctx.canvas.width = document.documentElement.clientWidth * scaleX;
//     // ctx.canvas.height = document.documentElement.clientHeight * scaleY;
//     // return originalX;
//   };



function editcss()
{
$('.variable').css('padding-top','30px');
}

function startsim()
{
// if(stopFlag == false) 
	simTimeId=setInterval("time=time+0.1; varupdate(); ",'100');
// else if(stopFlag == true) 
	// simTimeId=setInterval("time=time-0.1; varupdate(); ",'100'); 
	
// r=0.01898; 
// m=0.2; 
//  calculateValues(); 
}

function simstate()
{
  var imgfilename=document.getElementById('playpausebutton').src;
  imgfilename = imgfilename.substring(imgfilename.lastIndexOf('/') + 1, imgfilename.lastIndexOf('.'));
  if (imgfilename=="bluepausedull")
  {
    document.getElementById('playpausebutton').src="images/blueplaydull.svg";
	 clearInterval(simTimeId);
    simstatus=1;
	speedString = "Speed:2x";
	document.querySelector(".playPause").textContent="Play";
    // <!-- $('#thetaspinner').spinner("value",theta);			//to set simulation parameters on pause -->
    pauseTime=setInterval("varupdate();",'100');
	
  }
    if (imgfilename=="blueplaydull")
  {
  	 time=0;			
  	 clearInterval(pauseTime);
	speedString = "Speed:2x";
    document.getElementById('playpausebutton').src="images/bluepausedull.svg";
    simTimeId=setInterval("time=time+rate; varupdate(); ",speed);   
	document.querySelector(".playPause").textContent="Pause"; 
    simstatus=0;

  } 
}

function rotstate()
{
  var imgfilename=document.getElementById('rotationbutton').src;
  imgfilename = imgfilename.substring(imgfilename.lastIndexOf('/') + 1, imgfilename.lastIndexOf('.'));
  if (imgfilename=="bluecwdull")
  {
    document.getElementById('rotationbutton').src="images/blueccwdull.svg";
    rotstatus=-1;
  }
    if (imgfilename=="blueccwdull")
  {
    document.getElementById('rotationbutton').src="images/bluecwdull.svg";
    rotstatus=1;
  } 
}


function varinit()
{
varchange();		
//Variable r slider and number input types
$('#rslider').slider("value", 15);	
$('#rspinner').spinner("value", 15);
//Variable m slider and number input types
$('#mslider').slider("value", 0.2);	
$('#mspinner').spinner("value", 0.2);

}

function varchange()
{
//Variable r slider and number input types
$('#rslider').slider({ max : 18, min : 11, step : 1 });		// slider initialisation : jQuery widget
$('#rspinner').spinner({ max : 18, min : 11, step : 1 });		// number initialisation : jQuery widget			
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#rslider" ).on( "slide", function( e, ui ) { $('#rspinner').spinner("value",ui.value); ptx=[]; pty=[]; ptxdot=[]; ptxddot=[]; ptxdddot=[]; j=20;	ptx.push(b.ycoord-50); pty.push(o.xcoord+j);});
$( "#rspinner" ).on( "spin", function( e, ui ) { $('#rslider').slider("value",ui.value); ptx=[]; pty=[]; ptxdot=[]; ptxddot=[]; ptxdddot=[]; j=20;	ptx.push(b.ycoord-50); pty.push(o.xcoord+j);} );
$( "#rspinner" ).on( "change", function() {  varchange() } );

//Variable m slider and number input types
$('#mslider').slider({ max : 0.7, min : 0.2, step : 0.1 });		// slider initialisation : jQuery widget
$('#mspinner').spinner({ max : 0.7, min : 0.2, step : 0.1 });		// number initialisation : jQuery widget			
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#mslider" ).on( "slide", function( e, ui ) { $('#mspinner').spinner("value",ui.value); ptx=[]; pty=[]; ptxdot=[]; ptxddot=[]; ptxdddot=[]; j=20;	ptx.push(b.ycoord-50); pty.push(o.xcoord+j);} );
$( "#mspinner" ).on( "spin", function( e, ui ) { $('#mslider').slider("value",ui.value); ptx=[]; pty=[]; ptxdot=[]; ptxddot=[]; ptxdddot=[]; j=20;	ptx.push(b.ycoord-50); pty.push(o.xcoord+j);} );
$( "#mspinner" ).on( "change", function() {  varchange() } );


varupdate();

}

function varupdate()
{
$('#rslider').slider("value", $('#rspinner').spinner('value'));  //updating slider location with change in spinner(debug)
$('#mslider').slider("value", $('#mspinner').spinner('value'));

//  radius =$('#rspinner').spinner('value'); 
radius =$('#rspinner').spinner('value');
m = $('#mspinner').spinner('value');
rcal =radius/100;
thetaa = 2*Math.PI*n1;
//  r=0.01898; 
r=0.01898;
M = densConstant*Math.pow(rcal,3);
Ival = ((M*Math.pow(rcal,2))/2);
if(simstatus)
{
$("#moiDiv1").hide();
$("#momentofinertia1").hide();
$("#err1").hide();
//  $("#moiDiv2").hide(); 
$("#momentofinertia2").hide();
$("#err2").hide();
$('#rslider').slider("enable"); 
$('#rspinner').spinner("enable");
$('#mslider').slider("enable"); 
$('#mspinner').spinner("enable"); 
document.getElementById("calculation").style.display="none";
document.getElementById("result").style.display="none";
document.getElementById("textarea0").innerHTML = "";
document.getElementById("textarea1").innerHTML = "";
 thetaa = 0;
 thetab = 0;
 thetac = 0;
 thetad = 0;
 thetaRot = 0;
//   Ival = 0.05; 
//   F = 0.73; 
 t = 0;
 dt = 0;
 omegaa = 0;
 omegab = 0;
 omegabb = 0;
 i=0, j=0;
//   gvt = 9.8; 
 flagEnd = false;
 flagShift = false;
 tt = 0;
 time = 0;
 speed=15;
 rate=0.1;
speedString = "Speed:2x";
document.getElementById("speedText").style.color="goldenrod";
//    radius= 0;
//    mass = 0;
//   height = 0; 
	o2.ycoord = 155;
	
}
if(!simstatus)
{
radius =$('#rspinner').spinner('value');
m = $('#mspinner').spinner('value');
$('#rslider').slider("disable"); 
$('#rspinner').spinner("disable");
$('#mslider').slider("disable"); 
$('#mspinner').spinner("disable"); 
if(flagShift == false && thetab < thetaa)
{
	omegaa = ((m*gvt)/F) * (1-(Math.exp(-((F*r*time)/(Ival+(m*Math.pow(r,2)))))));
	thetab = ((m*gvt*time)/F)+(((m*gvt)/F)*((Ival+(m*Math.pow(r,2)))/(F*r))*((Math.exp(-((F*r*time)/(Ival+(m*Math.pow(r,2)))))-1)));
	//  console.log(thetab); 
	thetaRot = thetab;
	tt = time;
	thetaRot = deg(thetaRot);
	thetaRot=thetaRot%360;
	if(thetaRot<0)thetaRot+=360;
	o2.ycoord=155+1.5*thetab;
	height = o2.ycoord;

}
else if(flagEnd == false)
{
	rate = 0.5;
	speed = 50;
	speedString = "Speed:4x";
	document.getElementById("speedText").style.color="red";
	omegabb = omegaa *(Math.exp(-((F*r*(time-tt))/(Ival))));
	thetac = (-omegaa)*(Ival/(F*r))*((Math.exp(-((F*r*(time-tt))/(Ival))))-1);
	flagShift = true;
	thetaRot = thetac;
	n2 = thetac/(2*Math.PI);
	if(omegabb<=0.05)
	{
		clearInterval(simTimeId);
		flagEnd =true;
		$("#moiDiv1").show();
		$("#momentofinertia1").show();
		$("#err1").show();
		//  $("#moiDiv2").show(); 
		$("#momentofinertia2").show();
		$("#err2").show();
		//  console.log("Time: "+tt);	 
		//  console.log("Theta': "+thetaa+" Theta1: "+thetab); 
		//  console.log("omega': "+omegaa); 
		//  console.log("omegaB': "+omegab); 
		//  console.log("thetac': "+thetac); 
		//  console.log("ttt': "+(time-tt)); 
		//  console.log("n2: "+n2); 
		//  console.log("Height: :"+height); 

		vel = r*omegaa;
		Iuser = ((2*m*gvt*2)-(m*Math.pow(vel,2)))/(Math.pow(omegaa,2)*(1+(n1/n2)));
		//  console.log("MoI: "+Iuser); 
		//  console.log(speed); 
		printcomment();
	}
	thetaRot = deg(thetaRot);
	thetaRot=thetaRot%360;
	if(thetaRot<0)thetaRot+=360;
}
}
o.xcoord=0;
o.ycoord=0;
a.xcoord=(radius+25)*Math.cos(rad(thetaRot));
a.ycoord=(radius+25)*Math.sin(rad(thetaRot));
c.xcoord=180;
c.ycoord=radius+25;
d.xcoord=180;
d.ycoord=-(radius+25);
e.xcoord=c.xcoord+(rcal+15);
e.ycoord=radius+25;
f.xcoord=d.xcoord+(rcal+15);
f.ycoord=-(radius+25);
g.xcoord=180;
g.ycoord=(radius+25)*Math.sin(rad(thetaRot));
h.xcoord=g.xcoord+(rcal+15);
h.ycoord=(radius+25)*Math.sin(rad(thetaRot));
i.xcoord=50;
i.ycoord=50;
cn1.xcoord = o.xcoord;
cn1.ycoord = o.ycoord+(radius+25);
cn2.xcoord = o.xcoord;
cn2.ycoord = o.ycoord-(radius+25);
//  o1.ycoord=95; 
//  o1.xcoord=430; 
o2.xcoord=430;
a1.ycoord=313;
a1.xcoord=25;
a2.xcoord=530;
a2.ycoord=313;
h1.ycoord=95;
h1.xcoord=465;
h2.xcoord=465;
h2.ycoord=313;
if(flagShift == true)
{
	o1.xcoord = 430;
	o1.ycoord = 317;
}
else if(flagEnd == false)
{
	o1.ycoord=95;
	o1.xcoord=430;
}
document.getElementById("v1").innerHTML =M.toFixed(3)+"kg";

draw();

}


function perror()
{
var moi1 = document.getElementById('momentofinertia1').value;
var moi2 = document.getElementById('momentofinertia2').value;
var error1=0;
var error2=0;

Ival = (Math.floor(Ival * 1000)/1000);
Iuser = (Math.floor(Iuser * 1000)/1000);
error1=(moi1-Ival)*100/Ival;
error2=(moi2-Iuser)*100/Iuser;
var err1 = Math.floor(error1*100)/100;
var err2 = Math.floor(error2*100)/100;
document.getElementById("result").style.display="block";
document.getElementById("textarea1").style.display="block";
// document.getElementsByClassName("canvas__div")[0].style.height="646px";
document.getElementById("textarea1").innerHTML ="Percentage Error:<span class='colorClass'>"+err1+"%</span><br>Theoritical Moment of Inertia: <span class='colorClass'>"+Ival+"</span><br>Percentage Error:<span class='colorClass'> "+err2+"%</span><br>Experimental Moment of Inertia:<span class='colorClass'> "+Iuser+"</span>";
}


function draw(){
  canvas = document.getElementById("simscreen");
  ctx = canvas.getContext("2d");
  // ctx.canvas.width = document.documentElement.clientWidth * scaleX;
  //   ctx.canvas.height = document.documentElement.clientHeight * scaleY;
  ctx.clearRect(0,0,550,400);  //clears the complete canvas#simscreen everytime
  
  pointtrans(o,trans);
  pointtrans(a,trans);
//    pointtrans(b,trans); 
  pointtrans(c,trans);
  pointtrans(d,trans);
  pointtrans(e,trans);
  pointtrans(f,trans);
  pointtrans(g,trans);
  pointtrans(h,trans);
  pointtrans(cn1,trans);
  pointtrans(cn2,trans);
  pointtrans(i,trans1);
  
  ctx.strokeStyle="#000";
  ctx.rect(330,95,120,5);
  ctx.stroke();
  ctx.fillStyle="#CCCCCC";
  ctx.fill();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.strokeStyle="#000";
  ctx.arc(o.xcoord,o.ycoord,radius+25,0,2*Math.PI,false);
  ctx.stroke();
  ctx.fillStyle="#CC7777";//sea pink//circle//left and right
  ctx.fill();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.strokeStyle="#000";
  ctx.fillRect(c.xcoord,c.ycoord,(rcal+15),2*(radius+25));
  ctx.stroke();
  ctx.fillStyle="#CC7777";//sea pink
  ctx.fill();
  ctx.closePath();
  
  var k=document.getElementById("simscreen");
  var ctx=k.getContext("2d");
  
  
//     ctx.beginPath(); 
//    ctx.fillStyle="goldenrod"; 
//    ctx.font = "14px Comic Sans MS" 
//    ctx.fillText(speedString,45,95); 
//    ctx.closePath(); 
//Pivot and centre 
  pointjoin(o,a,ctx,"#CCCC00",5);
   
//Pivot and centre 
  pointjoin(o,a,ctx,"#CCCC00",5);
  
  for(n=0;n<17;n++)
  if(thetaRot>(90+360*n)&&thetaRot<(270+360*n)){
  pointjoin(g,h,ctx,"#CCCC00",5);//yellow
  }  
  pointjoin(c,d,ctx,"#000",0.5);
  pointjoin(e,f,ctx,"#000",0.5);
  pointjoin(c,e,ctx,"#000",0.5);
  pointjoin(d,f,ctx,"#000",0.5);
  pointjoin(cn1,c,ctx,"#000",0.5);
  pointjoin(cn2,d,ctx,"#000",0.5);
  pointjoin(h1,h2,ctx,"black",2.5);
  pointjoin(o1,o2,ctx,"#000",1);
  pointdisp(o2,ctx,(m+5),"#000000","#003366",'','','');//blue
 
	drawArrow(h1,ctx,2);
	drawArrow(h2,ctx,1);
  pointjoin(a1,a2,ctx,"#000",1.5);
  
  pointdisp(o,ctx,8,"#CCCCCC","#CCCCCC",'black','','');
//    pointdisp(a,ctx,8,"#000000","#003366",'','',''); 
  	document.getElementById("speedText").innerHTML=speedString;
	
}
function drawArrow(pts,ctx,upDown)
{
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.font = "13px 'Nunito', sans-serif";
	ctx.moveTo(pts.xcoord,pts.ycoord);
	if(upDown == 1)
	{
	ctx.lineTo(pts.xcoord-6,pts.ycoord-6);
	ctx.lineTo(pts.xcoord+6,pts.ycoord-6);
	}
	else if(upDown == 2)
	{
		ctx.lineTo(pts.xcoord-6,pts.ycoord+6);
		ctx.lineTo(pts.xcoord+6,pts.ycoord+6);
	}
	ctx.lineTo(pts.xcoord,pts.ycoord);
	ctx.fillText("Height:2m",470,200);
	ctx.fill();
}
function showTitle(ele,idd,text){

	if(ele.id=="c1")
		ele.setAttribute('title', "Time required for bob to touch the ground");
	else if(ele.id=="c2")
		ele.setAttribute('title', "Angular velocity of flywheel at the instant when the mass touches the ground");
	else if(ele.id=="c3")
		ele.setAttribute('title', "Number of rotation made by the flywheel after the string has left the axle");
	else if(ele.id=="const1")
		ele.setAttribute('title', "Mass of flywheel");
	else if(ele.id=="const2")
		ele.setAttribute('title', "Number of rotations completed by the flywheel, when the mass attached string has left the axle");
	else if(ele.id=="const3")
		ele.setAttribute('title', "Radius of Axle");
	else if(ele.id=="const4")
		ele.setAttribute('title', "Frictional Torque");
		
}
function printcomment(commenttext,commentloc)
{	 
  document.getElementById("calculation").style.display="block";
  document.getElementById("textarea0").style.display="block";
//   document.getElementsByClassName("canvas__div")[0].style.height="507px"
	document.getElementById("textarea0").innerHTML ="<p id='c1' onmouseover='showTitle(this);'>t = <span class='colorClass'>"+tt.toFixed(3)+"s</span></p><p id='c2' onmouseover='showTitle(this);'>&omega; = <span class='colorClass'>"+omegaa.toFixed(3)+"rad/s</span></p><p id='c3' onmouseover='showTitle(this);'>n2 = <span class='colorClass'>"+n2.toFixed(3)+" revolutions</span></p>";
	clearInterval(simTimeId);
			
}

// window.addEventListener('resize', function() {
//     setMediaQueries(ctx);
//   });
//   setMediaQueries(ctx);

// </script>