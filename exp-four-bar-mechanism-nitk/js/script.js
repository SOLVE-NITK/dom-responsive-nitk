
//Script specific to simulation

//program variables
//controls section
var simstatus=0; 
var rotstatus=1;
var tabchanges=0;
var screenchanges=0;
var exptSelected = 0;
var timeInterval = 100;
//comments section
var commenttext="Some Text";
var commentloc=0;
//computing section
var trans= new point(100,120);
var trans1= new point(250,200);
var trans1a= new point(50,100);
var transV= new point(400,120);
var transA= new point(250,220);
var transl1 = new point(400,75);
var transl2 = new point(450,100);
var trans22 = new point(80,120);
var transl3 = new point(200,300);
var trans23 = new point(20,120);
var transl4= new point(400,300);
var trans24= new point(30,120);
//var cross= new point(375,150);
var a= new point(0,0,"A");
var b= new point(0,0,"B");
var c= new point(0,0,"C");
var d= new point(0,0,"D");
var ax= new point(0,0,"A");
var bx= new point(0,0,"B");
var cx= new point(0,0,"C");
var dx= new point(0,0,"D");

var abxcg= new point(0,0,"");
var abxcg1= new point(0,0,"");
var bcxcg= new point(0,0,"");
var bcxcg1= new point(0,0,"");
var cdxcg= new point(0,0,"");
var cdxcg1= new point(0,0,"");
var p= new point(0,0,"P");
var q= new point(0,0,"Q");
//var b2= new point(0,0,"B");
//var c2= new point(0,0,"C");


//Link 1 Free Body Diagram
var al1= new point(0,0,"A");
var al1mesh = [];
var dl1= new point(0,0,"D");
var dl1mesh = [];

//Forces for Link1
var f21= new point(0,0,"F21");
var f21theta;
var f41theta;
var f41= new point(0,0,"F41");

//Link 2 Free Body Diagram
var al2= new point(0,0,"A");
var bl2= new point(0,0,"B");
var a22= new point(0,0,"A");
var b22= new point(0,0,"B");

var abcg = new point(0,0,"");
var abcg1 = new point(0,0,"");
var abm = new point(0,0,"");
var al2mesh=[];
var bl2mesh=[];

//Forces for Link2
var f12= new point(0,0,"F12");
var f12theta;
var f32theta;
var f32= new point(0,0,"F32");
var fcg2= new point(0,0,"Fcg2");
var fcg2theta= 0;
var fin2= new point(0,0,"Fin2");
var fin21= new point(0,0,"Fin2");
var fin2theta=0;
var fin21theta=0;

var lF12=new point(0,0,"F12");
var lF32=new point(0,0,"F32");

var Fin2=new point(0,0,"Fin2");
var Fin3=new point(0,0,"Fin3");
var Fin4=new point(0,0,"Fin4");

//Link 3 Free Body Diagram
var bl3= new point(0,0,"B");
var cl3= new point(0,0,"C");
var b23= new point(0,0,"B");
var c23= new point(0,0,"C");

var bccg = new point(0,0,"");
var bccg1 = new point(0,0,"");
var bcm = new point(0,0,"");
var bl3mesh=[];
var cl3mesh=[];

//Forces for Link 3
var f23= new point(0,0,"F23");
var f23theta;
var f43theta;
var f43= new point(0,0,"F43");
var fcg3= new point(0,0,"Fcg3");
var fcg3theta= 0;
var fin3= new point(0,0,"Fin3");
var fin31= new point(0,0,"Fin3");
var fin3theta;
var fin31theta;

var lF23= new point(0,0,"F23");
var lF43= new point(0,0,"F43");
//Link 4 Free Body Diagram
var cl4= new point(0,0,"C");
var dl4= new point(0,0,"D");
var c24= new point(0,0,"C");
var d24= new point(0,0,"D");

var cdm = new point(0,0,"");
var cdcg = new point(0,0,"");
var cl4mesh=[];
var dl4mesh=[];

 
//Forces for Link 4
var f34= new point(0,0,"F34");
var f34theta;
var f14theta;
var f14= new point(0,0,"F14");
var fcg4= new point(0,0,"Fcg4");
var fcg4theta= 0;
var fin4= new point(0,0,"Fin4");
var fin41= new point(0,0,"Fin4");
var fin4theta;

var lF14 = new point(0,0,"F14");
var lF34 = new point(0,0,"F34");
//Acceleration of CGs
var abcga= new point(0,0,"");
var abcga1= new point(0,0,"");
var bccga= new point(0,0,"acg2");
var bccga1= new point(0,0,"acg2");
var cdcga= new point(0,0,"");
var cdcga1= new point(0,0,"");

var Acg2 = new point(0,0,"Acg2");
var Acg3 = new point(0,0,"Acg3");
var Acg4 = new point(0,0,"Acg4");
//.................................................
var vo= new point(0,0,"");
var vba= new point(0,0,"");
var vcb= new point(0,0,"");
var vca= new point(0,0,"");
var Vba= new point(0,0,"Vba");
var Vcb= new point(0,0,"Vcb");
var Vca= new point(0,0,"Vca");
var ao= new point(0,0,"Ao");
var ab= new point(0,0,"Ab");
var acb= new point(0,0,"Acb"); // acceleration of c wrt b
var ac= new point(0,0,"Ac");
var accb= new point(0,0,"ACcb");
var acc= new point(0,0,"ACc");
var atcb= new point(0,0,"ATcb");
var atc= new point(0,0,"ATc");

var Ab= new point(0,0,"Ab");
var Acb= new point(0,0,"Acb");
var Ac= new point(0,0,"Ac");
//-------------------------------------------------------
hf2 = new point(0,0,"");
hf3 = new point(0,0,"");
hf31 = new point(0,0,"");
hf4 = new point(0,0,"");
hf41 = new point(0,0,"");
//-------------------------------------------------------
var a2cgx, a2cgy, a3cgx, a3cgy, a4cgx, a4cgy;
var beta2, beta3, beta4;
var abcgtheta,bccgtheta,cdcgtheta;
var a2cg, a3cg, a4cg,a2,a4;

var vel2=0, vel3=0, vel4=0;
var acctb=0,acccb=0,acclb=0,acctcb=0,accccb=0,acclcb=0,acccc=0,acctc=0,acclc=0;
var r1= 40, r2=40, r3=40, r4=40;
var r12x,r12y,r32x,r32y,r23y,r23x,r43y,r43x,r34x,r34y,r14x,r14y;
var theta2 = 55; // all angles to be defined either in degrees only or radians only throughout the program and convert as and when required
var theta3=0, theta4=0; // All angles in Degrees. (mention the specification in the script like here) 
var omega2=1; // angular velocity in rad/s
var omega3=0, omega4=0;
var alpha2=0, alpha3=0, alpha4=0;
var gamma=0, gammadash=0, theta3dash=0, theta4dash=0;
var k,ka,kb,kc,det;
var F12x,F32x,F23x,F43x,F34x,F14x;
var F12y,F32y,F23y,F43y,F34y,F14y;
var F12,F32,F23,F43,F34,F14;
var mab, mbc, mcd;
var h2,h3,h4;
var flaggrashof=true, firstrun=true;
var m2,m3,m4;
var Ig2,Ig3,Ig4;
var x1,x2,x3,x4,x5,x6,x7,x8,x9;
var x1coord,y1coord;
var fpx=0;
var fpy=0;
var t4=0;
//force variables
var fi2,fi3,fi4;
//graphics section
var canvas,canvas2;
var ctx,ctx2;
var scaleP=1;
var scaleV=1;
var Sin=0.3;
//timing section
var simTimeId = setInterval("",'1000');
var pauseTime = setInterval("",'1000');
var time=0;
var sol = [0,0,0];
//point tracing section
var ptx = [],pt1x = [], pt2x = [],pt3x = [];
var pty = [],pt1y = [], pt2y = [],pt3y = [];
//click status of legend and quick reference
var legendCS = false;
var quickrefCS = false;
//temporary or dummy variables
var temp=0;
var s=2;
var sc=2;
var col=255;
//Initializing 2-D array
var matrix = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          ];


//to zoom links

var link3x= new point(0,0,"ATcb");
var link3y= new point(0,0,"ATcb");
var link4x= new point(0,0,"ATcb");
var link4y= new point(0,0,"ATcb");
//var result = [0, 0, 0];
//to zoom offset link
var setZoomLink = 0;



//change simulation specific css content. e.g. padding on top of variable to adjust appearance in variables window
function editcss()
{


$('#legend').css("width",document.getElementById('legendimg').width+"px");
$('#legendicon').css("top","475px");
//$('#quickref').css("height",document.getElementById('quickrefimg').height+"px");

}

//start of simulation here; starts the timer with increments of 0.1 seconds
function startsim()
{
simTimeId=setInterval("time=time+0.1; varupdate(); ",timeInterval);
}

// switches state of simulation between 0:Playing & 1:Paused
function simstate()
{
	var imgfilename=document.getElementById('playpausebutton').src;
	imgfilename = imgfilename.substring(imgfilename.lastIndexOf('/') + 1, imgfilename.lastIndexOf('.'));
	if (imgfilename=="bluepausedull")
	{
	  document.getElementById('playpausebutton').src="images/blueplaydull.svg";
	   clearInterval(simTimeId);
	  simstatus=1;
	  $('#theta2spinner').spinner("value",theta2);			//to set simulation parameters on pause
	  pauseTime=setInterval("varupdate();",'100');
	  document.querySelector(".playPause").textContent = "Play";
	}
	  if (imgfilename=="blueplaydull")
	{
	  time=0;			
		 clearInterval(pauseTime);
	  document.getElementById('playpausebutton').src="images/bluepausedull.svg";
	  simTimeId=setInterval("time=time+0.1; varupdate(); ",'100');    
	  simstatus=0;
	  document.querySelector(".playPause").textContent = "Pause"; 
	} 
}

// switches state of rotation between 1:CounterClockWise & -1:Clockwise
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

//tab changes in controls section
function tabchangeb()
{
  
  
   
    tabchanges--;
    if(tabchanges<0)
    	tabchanges=0;
  }
  function tabchangef()
{

    tabchanges++;
    if(tabchanges>2)
    	tabchanges=2;
}


//screen changes in simulation screen
function screenchangef()
{
  screenchanges++;
  if(screenchanges>4)
    screenchanges=4;

}
function screenchangeb()
{
  screenchanges--;
  if(screenchanges<0)

    screenchanges=0;
}

function screenchange()
{
  if(screenchanges>=4)
  {
 
    screenchanges=4;
    document.getElementById('screenchangesforward').src="images/bluefkwdulls.svg";
	
  }
  else
  {
  	resetExperiments();
    document.getElementById('screenchangesforward').src="images/bluefkwdulls.svg";
  }
  
  
  if(screenchanges<=0)
  {
    screenchanges=0;
    document.getElementById('screenchangesbackward').src="images/bluebkdulls.svg";
	document.getElementById("canvas-container").style.display = "block";
  }
  else
  {
    document.getElementById('screenchangesbackward').src="images/bluebkdulls.svg";
  }

}
function tabchange()
{
  if(tabchanges>=2)
  {
    tabchanges=2;
    document.getElementById('tabchangeforward').src="images/bluefkwdulls.svg";
  }
  
  else
  {
    document.getElementById('tabchangeforward').src="images/bluefkwdulls.svg";
  }

  if(tabchanges<=0)
  {
    tabchanges=0;
    document.getElementById('tabchangebackward').src="images/bluebkdulls.svg";
  }
  else
  {
    document.getElementById('tabchangebackward').src="images/bluebkdulls.svg";
  }
}

//Modified for 4Bar Acc
//Displaying Legend
function showLegend()
{
	if(legendCS)
	{
		$('#legendicon').css('border', 'double');
		$('#legend').css('height', '0px');
		$('#legend').css('border', '0px');
		legendCS=false;
	}
	else
	{
		$('#legendicon').css('border', 'inset red');
		$('#legend').css("height", document.getElementById('legendimg').height+"px");
		$('#legend').css("left", 600-document.getElementById('legendimg').width+"px");		
		$('#legend').css("top", 472.5-document.getElementById('legendimg').height+"px");		
		$('#legend').css('border', 'solid 1px');
		legendCS=true;	
	}
}



//Initialise system parameters here
function varinit()
{
varchange();		
//Variable r1 slider and number input types
$('#r1slider').slider("value", 80);	
$('#r1spinner').spinner("value", 80);
//Variable r2 slider and number input types
$('#r2slider').slider("value", 40);	
$('#r2spinner').spinner("value", 40);
//Variable r3 slider and number input types
$('#r3slider').slider("value", 80);	
$('#r3spinner').spinner("value", 80);
//Variable r4 slider and number input types
$('#r4slider').slider("value", 80);	
$('#r4spinner').spinner("value", 80);
//Variable m2 slider and number input types
$('#m2slider').slider("value", 0.5);	
$('#m2spinner').spinner("value", 0.5);
//Variable m3 slider and number input types
$('#m3slider').slider("value", 0.5);	
$('#m3spinner').spinner("value", 0.5);
//Variable m4 slider and number input types
$('#m4slider').slider("value", 0.5);	
$('#m4spinner').spinner("value", 0.5);
//Variable theta2 slider and number input types
$('#theta2slider').slider("value", 40);	
$('#theta2spinner').spinner("value", 40);
//Variable omega2 slider and number input types
$('#omega2slider').slider("value", 0.8);	
$('#omega2spinner').spinner("value", 0.8);
//Force Vector x
$('#fpxslider').slider("value", 0.5);	
$('#fpxspinner').spinner("value",0.5);
//Force Vector y
$('#fpyslider').slider("value",0.5);	
$('#fpyspinner').spinner("value",0.5);
//T4
$('#t4slider').slider("value", 0.5);	
$('#t4spinner').spinner("value",0.5);
//Rp
$('#rpslider').slider("value", 0.5);	
$('#rpspinner').spinner("value",0.5);
}

// Initialise and Monitor variable containing user inputs of system parameters.
//change #id and repeat block for new variable. Make sure new <div> with appropriate #id is included in the markup
function varchange()
{
//Variable r1 slider and number input types
$('#r1slider').slider({ max : 80, min : 20, step : 2 });		// slider initialisation : jQuery widget
$('#r1spinner').spinner({ max : 80, min : 20, step : 2 });		// number initialisation : jQuery widget			
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#r1slider" ).on( "slide", function( e, ui ) { $('#r1spinner').spinner("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[]; } );
$( "#r1spinner" ).on( "spin", function( e, ui ) { $('#r1slider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#r1spinner" ).on( "change", function() {  varchange() } );

//Variable r2 slider and number input types
$('#r2slider').slider({ max : 40, min : 20, step : 2 });		// slider initialisation : jQuery widget
$('#r2spinner').spinner({ max : 40, min : 20, step : 2 });		// number initialisation : jQuery widget			
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#r2slider" ).on( "slide", function( e, ui ) { $('#r2spinner').spinner("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];   r2changed();} );
$( "#r2spinner" ).on( "spin", function( e, ui ) { $('#r2slider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];   r2changed();} );
$( "#r2spinner" ).on( "change", function() {  varchange() } );

//Variable r3 slider and number input types
$('#r3slider').slider({ max : 80, min : 20, step : 2 });		// slider initialisation : jQuery widget
$('#r3spinner').spinner({ max : 80, min : 20, step : 2 });		// number initialisation : jQuery widget			
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#r3slider" ).on( "slide", function( e, ui ) { $('#r3spinner').spinner("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];   } );
$( "#r3spinner" ).on( "spin", function( e, ui ) { $('#r3slider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#r3spinner" ).on( "change", function() {  varchange() } );

//Variable r4 slider and number input types
$('#r4slider').slider({ max : 80, min : 20, step : 2 });		// slider initialisation : jQuery widget
$('#r4spinner').spinner({ max : 80, min : 20, step : 2 });		// number initialisation : jQuery widget			
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#r4slider" ).on( "slide", function( e, ui ) { $('#r4spinner').spinner("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#r4spinner" ).on( "spin", function( e, ui ) { $('#r4slider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#r4spinner" ).on( "change", function() {  varchange() } );
//Variable m2 slider and number input types
$('#m2slider').slider({ max : 1, min : 0, step : 0.1 });		// slider initialisation : jQuery widget
$('#m2spinner').spinner({ max : 1, min : 0, step : 0.1 });		// number initialisation : jQuery widget			
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#m2slider" ).on( "slide", function( e, ui ) { $('#m2spinner').spinner("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];   } );
$( "#m2spinner" ).on( "spin", function( e, ui ) { $('#m2slider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#m2spinner" ).on( "change", function() {  varchange() } );

$('#m3slider').slider({ max : 1, min : 0, step : 0.1 });		// slider initialisation : jQuery widget
$('#m3spinner').spinner({ max : 1, min : 0, step : 0.1 });		// number initialisation : jQuery widget			
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#m3slider" ).on( "slide", function( e, ui ) { $('#m3spinner').spinner("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];   } );
$( "#m3spinner" ).on( "spin", function( e, ui ) { $('#m3slider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];   } );
$( "#m3spinner" ).on( "change", function() {  varchange() } );

$('#m4slider').slider({ max : 1, min : 0, step : 0.1 });		// slider initialisation : jQuery widget
$('#m4spinner').spinner({ max : 1, min : 0, step : 0.1 });		// number initialisation : jQuery widget			
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#m4slider" ).on( "slide", function( e, ui ) { $('#m4spinner').spinner("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[]; pt3x=[]; pt3y=[];  } );
$( "#m4spinner" ).on( "spin", function( e, ui ) { $('#m4slider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#m4spinner" ).on( "change", function() {  varchange() } );


//Variable theta2 slider and number input types
$('#theta2slider').slider({ max : 360, min : 0, step : 1 });		// slider initialisation : jQuery widget
$('#theta2spinner').spinner({ max : 360, min : 0, step : 1 });		// number initialisation : jQuery widget			
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#theta2slider" ).on( "slide", function( e, ui ) { $('#theta2spinner').spinner("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#theta2spinner" ).on( "spin", function( e, ui ) { $('#theta2slider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[]; pt3x=[]; pt3y=[];  } );
$( "#theta2spinner" ).on( "change", function() {  varchange() } );

//Variable omega2 slider and number input types
$('#omega2slider').slider({ max : 1.2, min : 0.2, step : 0.2 });		// slider initialisation : jQuery widget
$('#omega2spinner').spinner({ max : 1.2, min : 0.2, step : 0.2 });		// number initialisation : jQuery widget			
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#omega2slider" ).on( "slide", function( e, ui ) { $('#omega2spinner').spinner("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#omega2spinner" ).on( "spin", function( e, ui ) { $('#omega2slider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#omega2spinner" ).on( "change", function() {  varchange() } );
//T4
$('#t4slider').slider({ max : 1, min : 0, step : 0.1 });		// slider initialisation : jQuery widget
$('#t4spinner').spinner({ max : 1, min : 0, step : 0.1 });		// number initialisation : jQuery widget			
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#t4slider" ).on( "slide", function( e, ui ) { $('#t4spinner').spinner("value",ui.value);ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#t4spinner" ).on( "spin", function( e, ui ) { $('#t4slider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#t4spinner" ).on( "change", function() {  varchange() } );

varupdate();

}

//Four Bar Specific : resetting lower limit of r1 r3 r4 on change of r2
function acttan(x1coord,y1coord)
{
	if(x1coord>=0 && y1coord>=0)
return deg(Math.atan(y1coord/x1coord));
if(x1coord>0 && y1coord<0)
return 360+deg(Math.atan(y1coord/x1coord));
if(x1coord<0 && y1coord>0)
return 180+deg(Math.atan(y1coord /x1coord));
if(x1coord<0 && y1coord<0)
return 180+deg(Math.atan(y1coord/x1coord));

}


function r2changed()
{

$('#r1slider').slider({min: $('#r2spinner').spinner('value')});
$('#r3slider').slider({min: $('#r2spinner').spinner('value')});
$('#r4slider').slider({min: $('#r2spinner').spinner('value')});
$('#r1spinner').spinner({min: $('#r2spinner').spinner('value')});
$('#r3spinner').spinner({min: $('#r2spinner').spinner('value')});
$('#r4spinner').spinner({min: $('#r2spinner').spinner('value')});
}

//Computing of various system parameters
function varupdate()
{

//updating slider location with change in spinner(debug)
$('#r1slider').slider("value", $('#r1spinner').spinner('value'));  
$('#r2slider').slider("value", $('#r2spinner').spinner('value'));
$('#r3slider').slider("value", $('#r3spinner').spinner('value'));
$('#r4slider').slider("value", $('#r4spinner').spinner('value'));
  //updating slider location with change in spinner(Mass)
$('#m2slider').slider("value", $('#m2spinner').spinner('value'));
$('#m3slider').slider("value", $('#m3spinner').spinner('value'));
$('#m4slider').slider("value", $('#m4spinner').spinner('value'));

$('#theta2slider').slider("value", $('#theta2spinner').spinner('value')); 
$('#omega2slider').slider("value", $('#omega2spinner').spinner('value')); 
//External Force and Torque
$('#fpxslider').slider("value", $('#fpxspinner').spinner('value'));
$('#fpyslider').slider("value", $('#fpyspinner').spinner('value'));
$('#t4slider').slider("value", $('#t4spinner').spinner('value'));
//Link Lenghts
r1=$('#r1spinner').spinner("value");
r2=$('#r2spinner').spinner("value");
r3=$('#r3spinner').spinner("value");
r4=$('#r4spinner').spinner("value");
//Link Masses
m2=$('#m2spinner').spinner("value");
m3=$('#m3spinner').spinner("value");
m4=$('#m4spinner').spinner("value");
//External Forces
fpx=$('#fpxspinner').spinner("value");
fpy=$('#fpyspinner').spinner("value");
t4=$('#t4spinner').spinner("value");

printcomment("Navigate to various other pages through the buttons",2);

screenchange();
tabchange();
if(tabchanges==0)
{
$('#linklenght').show();
$('#linkmass').hide();
$('#linkmass1').hide();
$('#linkmass2').hide();
$('#linklenght1').show();
$('#linklenght2').show();
$('#linklenght3').show();
$('#linkmass1').hide();
$('#forcepx').hide();
$('#forcepy').hide();
$("#t4").hide();
}

if(tabchanges==1)
{
$('#linklenght').hide();
$('#linkmass').show();
$('#linklenght1').hide();
$('#linklenght2').hide();
$('#linklenght3').hide();
$('#linkmass1').show();
$('#linkmass2').show();
$('#forcepx').hide();
$('#forcepy').hide();
$("#t4").hide();
}
if(tabchanges==2)
{
$('#forcepx').show();
$('#forcepy').show();
$('#linklenght').hide();
$('#linkmass').hide();
$('#linkmass1').hide();
$('#linkmass2').hide();
$('#linklenght1').hide();
$('#linklenght2').hide();
$('#linklenght3').hide();
$('#linkmass1').hide();
$("#t4").show();
}

if(!simstatus)
{
$('#omega2set').show();
$('#theta2set').hide();
omega2=rotstatus*$('#omega2spinner').spinner("value");
theta2=theta2+(0.1*deg(omega2));
theta2=theta2%360;
}
if(simstatus)
{
if(firstrun){r2changed(); firstrun=false;}
$('#omega2set').hide();
$('#theta2set').show();
theta2=$('#theta2spinner').spinner("value");
omega2=rotstatus*$('#omega2spinner').spinner("value");
}
checkGrashof();
if(flaggrashof)
{

k=(r2*r2-r3*r3+r4*r4+r1*r1)/2;
ka=k-r2*(r1-r4)*Math.cos(rad(theta2))-r4*r1;
kb=-2*r2*r4*Math.sin(rad(theta2));
kc=k-r2*(r1+r4)*Math.cos(rad(theta2))+r4*r1;
det=kb*kb-4*ka*kc;

a.xcoord=0;
a.ycoord=0;
vo.xcoord=0;
vo.ycoord=0;
ao.xcoord=0;
ao.ycoord=0;

b.xcoord=a.xcoord+(r2*Math.cos(rad(theta2)));
b.ycoord=a.ycoord+(r2*Math.sin(rad(theta2)));
d.xcoord=a.xcoord+(r1);
d.ycoord=a.ycoord;

	if(r1==r3 && r2==r4)
	{
		theta4=theta2;
	
	}
	else
	{
	theta4=deg(2*Math.atan((-kb-Math.sqrt(det))/(2*ka)));
	
	
	}

	
	c.xcoord=d.xcoord+r4*Math.cos(rad(theta4));
	c.ycoord=d.ycoord+r4*Math.sin(rad(theta4));
	theta3=deg(Math.atan((c.ycoord-b.ycoord)/(c.xcoord-b.xcoord)));

	
	gamma=theta4-theta3;

	if(theta2<0){
		theta2+=360;
		
		}
		
	if(theta3<0)
		theta3+=180;
	if(theta4<0)
		theta4+=360;
	
	//Positon Diagram for acceleration diagram
ax.xcoord=0;
ax.ycoord=0;
bx.xcoord=ax.xcoord+(sc*r2*Math.cos(rad(theta2)));
bx.ycoord=ax.ycoord+(sc*r2*Math.sin(rad(theta2)));
dx.xcoord=ax.xcoord+(sc*r1);
dx.ycoord=ax.ycoord;
cx.xcoord=dx.xcoord+sc*r4*Math.cos(rad(theta4));
cx.ycoord=dx.ycoord+sc*r4*Math.sin(rad(theta4));
//Coordinate Definitions for cgs for acceleration diagram
abxcg.xcoord=(ax.xcoord+bx.xcoord)/2;
abxcg.ycoord=(ax.ycoord+bx.ycoord)/2;

abxcg1.xcoord=(ax.xcoord+bx.xcoord)/2;
abxcg1.ycoord=(ax.ycoord+bx.ycoord)/2;
bcxcg.xcoord=(cx.xcoord+bx.xcoord)/2;
bcxcg.ycoord=(cx.ycoord+bx.ycoord)/2;
bcxcg1.xcoord=(cx.xcoord+bx.xcoord)/2;
bcxcg1.ycoord=(cx.ycoord+bx.ycoord)/2;
cdxcg.xcoord=(cx.xcoord+dx.xcoord)/2;
cdxcg.ycoord=(cx.ycoord+dx.ycoord)/2;
cdxcg1.xcoord=(cx.xcoord+dx.xcoord)/2;
cdxcg1.ycoord=(cx.ycoord+dx.ycoord)/2;

Scale = 1;

vel2=r2*omega2*scaleV;
vba.xcoord=vo.xcoord+vel2*Math.cos(rad(theta2+90));
vba.ycoord=vo.ycoord+vel2*Math.sin(rad(theta2+90));
omega3= (r2*omega2/r3)* (Math.sin(rad(theta2))*Math.cos(rad(theta4))-Math.sin(rad(theta4))*Math.cos(rad(theta2)))/(Math.sin(rad(theta4))*Math.cos(rad(theta3))-Math.sin(rad(theta3))*Math.cos(rad(theta4)));
omega4= (r2*omega2/r4)* (Math.sin(rad(theta2))*Math.cos(rad(theta3))-Math.sin(rad(theta3))*Math.cos(rad(theta2)))/(Math.sin(rad(theta4))*Math.cos(rad(theta3))-Math.sin(rad(theta3))*Math.cos(rad(theta4)));
vel3=r3*omega3*scaleV;
vel4=r4*omega4*scaleV;
vcb.xcoord= vba.xcoord+vel3*Math.cos(rad(theta3+90));
vcb.ycoord= vba.ycoord+vel3*Math.sin(rad(theta3+90));
vca.xcoord= vo.xcoord+vel4*Math.cos(rad(theta4+90));
vca.ycoord= vo.ycoord+vel4*Math.sin(rad(theta4+90));

//acceleration calculations

acccb=r2*omega2*omega2;
acctb=0;
acclb=Math.sqrt(acctb*acctb+acccb*acccb);
accccb=r3*omega3*omega3;
acccc=r4*omega4*omega4;
var ta=0,tb=0,tc=0,td=0,te=0,tf=0;

ta=r4*Math.sin(rad(theta4));
tb=r3*Math.sin(rad(theta3));
td=r4*Math.cos(rad(theta4));
te=r3*Math.cos(rad(theta3));
tc=acccb*Math.cos(rad(theta2))+accccb*Math.cos(rad(theta3))-acccc*Math.cos(rad(theta4));
tf=-acccb*Math.sin(rad(theta2))-accccb*Math.sin(rad(theta3))+acccc*Math.sin(rad(theta4));

alpha3=(tc*td-ta*tf)/(ta*te-tb*td);
alpha4=(tc*te-tb*tf)/(ta*te-tb*td);
acctcb=alpha3*r3;
acclcb=Math.sqrt(acctcb*acctcb+accccb*accccb);
acctc=alpha4*r4;
acclc=Math.sqrt(acctc*acctc+acccc*acccc);
scaleA=1;
//Accelration of C.G's
a2cg = Math.sqrt(((r2*alpha2)/2)*((r2*alpha2)/2) + ((omega2*omega2)*r2/2)*((omega2*omega2)*r2/2));
beta2=acttan((omega2*omega2),alpha2);
a3cg = Math.sqrt(((r3*alpha3)/2)*((r3*alpha3)/2) + ((omega3*omega3)*r3/2)*((omega3*omega3)*r3/2));
beta3=acttan((omega3*omega3),alpha3);
a4cg = Math.sqrt(((r4*alpha4)/2)*((r4*alpha4)/2) + ((omega4*omega4)*r4/2)*((omega4*omega4)*r4/2));
beta4=acttan((omega4*omega4),alpha4);
fi2= m2*a2cg;
fi3= m3*a3cg;
fi4= m4*a4cg;
a2=Math.sqrt((r2*omega2*omega2)*(r2*omega2*omega2)+(r2*alpha2)*(r2*alpha2));

a2cgx = (a2cg)*(Math.cos(rad(theta2+beta2+180)));
a2cgy = (a2cg)*(Math.sin(rad(theta2+beta2+180)));
a3cgx = (a3cg)*(Math.cos(rad(theta3+beta3+180))) + a2*Math.cos(rad(theta2+beta2+180));
a3cgy = (a3cg)*(Math.sin(rad(theta3+beta3+180))) + a2*Math.sin(rad(theta2+beta2+180));
a4cgx = (-a4cg)*(Math.cos(rad(theta4+beta4+180)));
a4cgy = (-a4cg)*(Math.sin(rad(theta4+beta4+180)));

//Free Body Diagram coordinates
//Link 1 definitions
al1.xcoord=0;
al1.ycoord=0;

dl1.xcoord=a.xcoord+(r1);
dl1.ycoord=a.ycoord;

//Link 2 Defintions
al2.xcoord=0;
al2.ycoord=0;
a22.xcoord=0;
a22.ycoord=0;

bl2.xcoord=a.xcoord+(r2*Math.cos(rad(theta2)));
bl2.ycoord=a.ycoord+(r2*Math.sin(rad(theta2)));

b22.xcoord=a.xcoord+(sc*r2*Math.cos(rad(theta2)));
b22.ycoord=a.ycoord+(sc*r2*Math.sin(rad(theta2)));

abcg.xcoord=(al2.xcoord+bl2.xcoord)/2;
abcg1.xcoord=(a22.xcoord+b22.xcoord)/2;
abcg.ycoord=(al2.ycoord+bl2.ycoord)/2;
abcg1.ycoord=(a22.ycoord+b22.ycoord)/2;




//Link 3 definitions
bl3.xcoord=a.xcoord+(r2*Math.cos(rad(theta2)));
bl3.ycoord=a.ycoord+(r2*Math.sin(rad(theta2)));
b23.xcoord=ax.xcoord+(sc*r2*Math.cos(rad(theta2)));
b23.ycoord=ax.ycoord+(sc*r2*Math.sin(rad(theta2)));

cl3.xcoord=d.xcoord+r4*Math.cos(rad(theta4));
cl3.ycoord=d.ycoord+r4*Math.sin(rad(theta4));
c23.xcoord=dx.xcoord+sc*r4*Math.cos(rad(theta4));
c23.ycoord=dx.ycoord+sc*r4*Math.sin(rad(theta4));

// <!-- bccg.xcoord=(bl3.xcoord+cl3.xcoord)/2; -->
// <!-- bccg.ycoord=(bl3.ycoord+cl3.ycoord)/2; -->
//Link 4 definitions
cl4.xcoord=cl3.xcoord;
cl4.ycoord=cl3.ycoord;
c24.xcoord=c23.xcoord;
c24.ycoord=c23.ycoord;

dl4.xcoord=d.xcoord;
dl4.ycoord=d.ycoord;
d24.xcoord=dx.xcoord;
d24.ycoord=dx.ycoord;

cdcg.xcoord=(cl4.xcoord+dl4.xcoord)/2;
cdcg.ycoord=(cl4.ycoord+dl4.ycoord)/2;
//Acceleration of CGs
abcga.xcoord=a2cgx+abxcg.xcoord;
abcga.ycoord=a2cgy+abxcg.ycoord;
abcga1.xcoord=a2cgx+abxcg1.xcoord;
abcga1.ycoord=a2cgy+abxcg1.ycoord;
bccga.xcoord=a3cgx+bcxcg.xcoord;
bccga.ycoord=a3cgy+bcxcg.ycoord;
bccga1.xcoord=a3cgx+bcxcg1.xcoord;
bccga1.ycoord=a3cgy+bcxcg1.ycoord;
cdcga.xcoord=a4cgx+cdxcg.xcoord;
cdcga.ycoord=a4cgy+cdxcg.ycoord;
cdcga1.xcoord=a4cgx+cdxcg1.xcoord;
cdcga1.ycoord=a4cgy+cdxcg1.ycoord;
abcgtheta=acttan(a2cgx,a2cgy);
bccgtheta=acttan(a3cgx,a3cgy);
cdcgtheta=acttan(a4cgx,a4cgy);
//Acceleration Scale Calculation
if(Math.round(Math.max(Math.abs(acclb),Math.abs(acclcb),Math.abs(acclc)))<10) scaleA=10;
else if(Math.round(Math.max(Math.abs(acclb),Math.abs(acclcb),Math.abs(acclc)))>=10 && Math.round(Math.max(Math.abs(acclb),Math.abs(acclcb),Math.abs(acclc)))<20) scaleA=4;
else if(Math.round(Math.max(Math.abs(acclb),Math.abs(acclcb),Math.abs(acclc)))>=20 && Math.round(Math.max(Math.abs(acclb),Math.abs(acclcb),Math.abs(acclc)))<40) scaleA=2;
else if(Math.round(Math.max(Math.abs(acclb),Math.abs(acclcb),Math.abs(acclc)))>=40 && Math.round(Math.max(Math.abs(acclb),Math.abs(acclcb),Math.abs(acclc)))<120) scaleA=1;
else if(Math.round(Math.max(Math.abs(acclb),Math.abs(acclcb),Math.abs(acclc)))>=120 && Math.round(Math.max(Math.abs(acclb),Math.abs(acclcb),Math.abs(acclc)))<150) scaleA=0.5;
else scaleA=1/Math.round(Math.max(Math.abs(acclb),Math.abs(acclcb),Math.abs(acclc))/100);
//Acceleration Coordinate Definitions
ao.xcoord=0;
ao.ycoord=0;
ab.xcoord=ao.xcoord+scaleA*acclb*Math.cos(rad(180+theta2));
ab.ycoord=ao.ycoord+scaleA*acclb*Math.sin(rad(180+theta2));

accb.xcoord=ab.xcoord+scaleA*accccb*Math.cos(rad(180+theta3));
accb.ycoord=ab.ycoord+scaleA*accccb*Math.sin(rad(180+theta3));
atcb.xcoord=accb.xcoord+scaleA*acctcb*Math.cos(rad(90+theta3));
atcb.ycoord=accb.ycoord+scaleA*acctcb*Math.sin(rad(90+theta3));

acb.xcoord=atcb.xcoord;
acb.ycoord=atcb.ycoord;

acc.xcoord=ao.xcoord+scaleA*acccc*Math.cos(rad(180+theta4));;
acc.ycoord=ao.ycoord+scaleA*acccc*Math.sin(rad(180+theta4));;
atc.xcoord=acc.xcoord+scaleA*acctc*Math.cos(rad(90+theta4));
atc.ycoord=acc.ycoord+scaleA*acctc*Math.sin(rad(90+theta4));

ac.xcoord=atc.xcoord;
ac.ycoord=atc.ycoord;
//Dynamic Analysis Solver - Paramater Calculation
r12x=(r2/2000)*Math.cos(rad(theta2));
r32x=-(r2/2000)*Math.cos(rad(theta2));
r12y=(r2/2000)*Math.sin(rad(theta2));
r32y=-(r2/2000)*Math.sin(rad(theta2));
r43x=-(r3/2000)*Math.cos(rad(theta3));
r23x=(r3/2000)*Math.cos(rad(theta3));
r43y=-(r3/2000)*Math.sin(rad(theta3));
r23y=(r3/2000)*Math.sin(rad(theta3));
r34x=-(r4/2000)*Math.cos(rad(theta4));
r14x=(r4/2000)*Math.cos(rad(theta4));
r34y=-(r4/2000)*Math.sin(rad(theta4));
r14y=(r4/2000)*Math.sin(rad(theta4));
Ig2=(m2*r2*r2)/12000000;
Ig3=(m3*r3*r3)/12000000;
Ig4=(m4*r4*r4)/12000000;
x1= m2*a2cgx/1000;
x2= m2*a2cgy/1000;
x3=Ig2*alpha2;
x4= (m3*a3cgx/1000);
x5= (m3*a3cgy/1000);
x6=Ig3*alpha3;
x7= m4*a4cgx/1000;
x8= m4*a4cgy/1000;
x9=(Ig4*alpha4)-t4;

//Dynamic Analysis Solver - Gauss Elimination Method


$A =[ [1,        0,      1,      0,     0,     0,     0,    0,   0],
      [0,        1,      0,      1,     0,     0,     0,    0,   0], 
      [-r12y, r12x,  -r32y,   r32x,     0,     0,     0,    0,   1],
      [0,        0,     -1,      0,     1,     0,     0,    0,   0], 
      [0,        0,      0,     -1,     0,     1,     0,    0,   0],
      [0,        0,   r23y,  -r23x,  -r43y,  r43x,    0,    0,   0],
      [0,        0,      0,      0,    -1,     0,     1,    0,   0],
      [0,        0,      0,      0,     0,    -1,     0,    1,   0],
      [0,        0,      0,      0,  r34y, -r34x, -r14y,  r14x,  0]];

$x = [x1, x2, x3, x4, x5, x6, x7, x8, x9];

//Use below matrices for checking gauss function


$result = gauss($A, $x);

F12x= $result[0];
F12y= $result[1];
F21x=-$result[0];
F21y=-$result[1];
F32x= $result[2];
F32y= $result[3];
F23x=-$result[2];
F23y=-$result[3];
F43x= $result[4];
F43y= $result[5];
F34x=-$result[4];
F34y=-$result[5];
F14x= $result[6];
F14y= $result[7];

F12= Math.sqrt((F12x*F12x)+(F12y*F12y));
F21= -Math.sqrt((F12x*F12x)+(F12y*F12y));
F23= Math.sqrt((F23x*F23x)+(F23y*F23y));
F32= -Math.sqrt((F32x*F32x)+(F32y*F32y));
F34= Math.sqrt((F34x*F34x)+(F34y*F34y));
F43= -Math.sqrt((F43x*F43x)+(F43y*F43y));
F14= Math.sqrt((F14x*F14x)+(F14y*F14y));

//Link 1 Force Vectors
f21.xcoord = -$result[0]*s;
f21.ycoord = -$result[1]*s;
f21theta = acttan(f21.xcoord,f21.ycoord);

f41.xcoord = (-$result[6]*s)+r1;
f41.ycoord = -$result[7]*s;
f41theta = acttan(-$result[6],-$result[7]);

//Link2 force vectors
f12.xcoord = $result[0]*s;
f12.ycoord = $result[1]*s;
f12theta = acttan(f12.xcoord,f12.ycoord);

f32.xcoord = $result[2]*s+b.xcoord;
f32.ycoord = $result[3]*s+b.ycoord;
f32theta = acttan($result[2],$result[3]);

fcg2.xcoord=-(m2*a2cgx)*s+abcg.xcoord;
fcg2.ycoord=-(m2*a2cgy)*s+abcg.ycoord;
fcg2theta=acttan(fcg2.xcoord,fcg2.ycoord);

fin2.xcoord=-(m2*a2cgx)*Sin+abcg.xcoord;
fin2.ycoord=-(m2*a2cgy)*Sin+abcg.ycoord;

fin21.xcoord=-(m2*a2cgx)*Sin+abcg1.xcoord;
fin21.ycoord=-(m2*a2cgy)*Sin+abcg1.ycoord;
fin2theta=acttan(fin2.xcoord,fin2.ycoord);
fin21theta=acttan(fin21.xcoord,fin21.ycoord);



//Link3 force vectors
f23.xcoord =-$result[2]*s+b.xcoord;
f23.ycoord =-$result[3]*s+b.ycoord;
f23theta = acttan(-$result[2],-$result[3]);

f43.xcoord = $result[4]*s+c.xcoord;
f43.ycoord = $result[5]*s+c.ycoord;
f43theta = acttan($result[4],$result[5]);

fcg3.xcoord=-(m3*a3cgx);
fcg3.ycoord=-(m3*a3cgy);
fcg3theta=acttan(fcg3.xcoord,fcg3.ycoord);

fin3theta=acttan(-(m3*a3cgx),-(m3*a3cgy));

//Link 4 force vectors
f34.xcoord=-$result[4]*s+c.xcoord;
f34.ycoord=-$result[5]*s+c.ycoord;
f34theta= acttan(-$result[4],-$result[5]);

f14.xcoord=$result[6]*s+d.xcoord;
f14.ycoord=$result[7]*s+d.ycoord;
f14theta= acttan($result[6],$result[7]);

fcg4.xcoord=-(m4*a4cgx);
fcg4.ycoord=-(m4*a4cgy);
fcg4theta=acttan(-a4cgx,-a4cgy);

fin4theta=acttan(-(m4*a4cgx),-(m4*a4cgy));

//Translation Calculations
mab = -(bx.xcoord-abxcg.xcoord)*F32y+(bx.ycoord-abxcg.ycoord)*F32x+(ax.ycoord-abxcg.ycoord)*F12x-(ax.xcoord-abxcg.xcoord)*F12y;
mbc = -(cx.xcoord-bcxcg.xcoord)*F43y+(cx.ycoord-bcxcg.ycoord)*F43x+(bx.ycoord-bcxcg.ycoord)*F23x-(bx.xcoord-bcxcg.xcoord)*F23y;
mcd = -(cx.xcoord-cdxcg.xcoord)*F34y+(cx.ycoord-cdxcg.ycoord)*F34x+(dx.ycoord-cdxcg.ycoord)*F14x-(dx.xcoord-cdxcg.xcoord)*F14y+(2*t4*1000);
//Translation distance Calculations
h2=mab/(fi2*Math.cos(rad(fin2theta-theta2)));
h3=mbc/(fi3*Math.cos(rad(fin3theta-theta3)));
h4=mcd/(fi4*Math.cos(rad(fin4theta-theta4)));
//Translated Points
hf2.xcoord=abxcg.xcoord+h2*Math.cos(rad(theta2));
hf2.ycoord=abxcg.ycoord+h2*Math.sin(rad(theta2));
hf3.xcoord=bcxcg.xcoord+h3*Math.cos(rad(theta3));
hf3.ycoord=bcxcg.ycoord+h3*Math.sin(rad(theta3));
hf31.xcoord=bcxcg1.xcoord+h3*Math.cos(rad(theta3));
hf31.ycoord=bcxcg1.ycoord+h3*Math.sin(rad(theta3));

hf4.xcoord=cdxcg.xcoord+h4*Math.cos(rad(theta4));
hf4.ycoord=cdxcg.ycoord+h4*Math.sin(rad(theta4));

hf41.xcoord=cdxcg1.xcoord+h4*Math.cos(rad(theta4));
hf41.ycoord=cdxcg1.ycoord+h4*Math.sin(rad(theta4));


fin3.xcoord=-(m3*a3cgx)*Sin+hf3.xcoord;
fin3.ycoord=-(m3*a3cgy)*Sin+hf3.ycoord;
fin31.xcoord=-(m3*a3cgx)*Sin+hf31.xcoord;
fin31.ycoord=-(m3*a3cgy)*Sin+hf31.ycoord;

fin4.xcoord=-(m4*a4cgx)*Sin+hf4.xcoord;
fin4.ycoord=-(m4*a4cgy)*Sin+hf4.ycoord;
fin41.xcoord=-(m4*a4cgx)*Sin+hf41.xcoord;
fin41.ycoord=-(m4*a4cgy)*Sin+hf41.ycoord;

}
if(screenchanges==0)
  { 
  $('#simscreen').show(); 
  draw(ctx);
  drawvel(ctx);
  drawacc(ctx);

  ptx = [];pt1x = []; pt2x = [];pt3x = [];
  pty = [];pt1y = [];pt2y = [];pt3y = [];
  printcomment("",1);
  $('#startExperiment').hide(); 
  $('#experiments').hide(); 
  $('#playpausebutton').show(); 
  $('#rotationbutton').show(); 
  if ($(window).width() < 944) {
	// Apply styles for small screens
	$('#variables').css('width', '100%');
  } else {
	// Apply styles for larger screens
	$('#variables').css('width', '200%');
  }
//   $('#variables').css("width", "200%");
  $('#controls').hide(); 
  $('#playbutton').show(); 
  $('#rotate').show();
  $('#tabchangeforward').show(); 
  $('#tabchangebackward').show();
  $('#linkings').show(); 
  document.getElementById("screen3").innerHTML = "";
  document.getElementById('commentboxright').innerHTML = "";
  }
if(screenchanges==1)
{
  $('#simscreen').show(); 
  drawaccl(ctx);
  ptx = [];pt1x = []; pt2x = [];pt3x = [];
  pty = [];pt1y = [];pt2y = [];pt3y = [];
  printcomment("Acg2=Acceleration of CG of link 2<br>Acg4=Acceleration of CG of link 4<br>Acg3=Acceleration of CG of link 3",1);
  $('#legendicon').hide();
    $('#experiments').hide();   
  $('#startExperiment').hide(); 
  $('#playpausebutton').show(); 
  $('#rotationbutton').show(); 
  $('#controls').hide(); 
  if ($(window).width() < 944) {
	// Apply styles for small screens
	$('#variables').css('width', '100%');
  } else {
	// Apply styles for larger screens
	$('#variables').css('width', '200%');
  }
//   $('#variables').css("width", "200%");
  $('#playbutton').show(); 
  $('#rotate').show();
  $('#tabchangeforward').show(); 
  $('#tabchangebackward').show();
  $('#linkings').show(); 
  document.getElementById("screen3").innerHTML = "";
  document.getElementById('commentboxright').innerHTML = "";
}
if(screenchanges==2)
{
  $('#simscreen').show(); 
  
 drawforcemoment(ctx);
 ptx = [];pt1x = []; pt2x = [];pt3x = [];
 pty = [];pt1y = [];pt2y = [];pt3y = [];
 printcomment("Finl2=Inertial Force acting on Link 2<br>Finl3 = Inertial Force acting on Link 3<br>Finl4 = Inertial Force acting on Link 4",1);
  $('#legendicon').hide(); 
    $('#experiments').hide(); 
  $('#startExperiment').hide(); 
  $('#playpausebutton').show(); 
  $('#rotationbutton').show(); 
  $('#controls').hide(); 
  $('#playbutton').show(); 
  if ($(window).width() < 944) {
	// Apply styles for small screens
	$('#variables').css('width', '100%');
  } else {
	// Apply styles for larger screens
	$('#variables').css('width', '200%');
  }
//   $('#variables').css("width", "200%");
  $('#rotate').show();
  $('#tabchangeforward').show(); 
  $('#tabchangebackward').show();
  $('#linkings').show();
  document.getElementById("screen3").innerHTML = "";
  document.getElementById('commentboxright').innerHTML = "";
}
if(screenchanges==3)
{
  $('#simscreen').show();
 drawdyn(ctx);

  $('#experiments').hide(); 
  $('#legendicon').hide(); 
  $('#startExperiment').hide(); 
  $('#playpausebutton').show(); 
  $('#rotationbutton').show(); 
  $('#playpausebutton').css({
    "opacity": 1,
    "pointer-events": "auto"
  });
  
  $('#rotationbutton').css({
    "opacity": 1,
    "pointer-events": "auto"
  }); 
  $('#controls').hide(); 
  $('#playbutton').show(); 
  if ($(window).width() < 944) {
	// Apply styles for small screens
	$('#variables').css('width', '100%');
  } else {
	// Apply styles for larger screens
	$('#variables').css('width', '200%');
  }
//   $('#variables').css("width", "200%");
  $('#rotate').show();
  $('#tabchangeforward').show(); 
  $('#tabchangebackward').show();
  $('#linkings').show(); 
  document.getElementById("screen3").innerHTML = "Respective x and y<br> components<br>of forces in datatable";
  document.getElementById('commentboxright').innerHTML = "";
	


}
if(screenchanges == 4)
{
	if(exptSelected == 0)
	{
		$("#simscreen").hide();
		$("#experiments").show();	
		$('#linkings').hide(); 
		$('#titleincanvas').hide(); 
		$("#startExperiment").text("Start Experiment");
	}
   else
	{
		$("#simscreen").show();
		$("#experiments").hide();
		$('#linkings').show();	
		$('#titleincanvas').show(); 
	}
  ptx = [];pt1x = []; pt2x = [];pt3x = [];
  pty = [];pt1y = [];pt2y = [];pt3y = [];
  $('#playpausebutton').css({
    "opacity": 0.5,
    "pointer-events": "none"
  });
  
  $('#rotationbutton').css({
    "opacity": 0.5,
    "pointer-events": "none"
  }); 
  $('#controls').show(); 
 
	$('#variables').css("width", "100%");
  $('#tabchangeforward').show(); 
  $('#tabchangebackward').show();
  $('#startExperiment').show(); 
  $('#datatable1').hide(); 
  $('#datatable2').hide(); 
  $('#datatable3').hide(); 
  $('#datatable4').hide(); 
  $('#linklenght').show();
  printcomment("",1);

	document.getElementById("screen3").innerHTML = "";
	document.getElementById('commentboxright').innerHTML = "";
}
}
//Simulation graphics
function draw()
{
	
  canvas = document.getElementById("simscreen");
  ctx = canvas.getContext("2d");

  ctx.clearRect(0,0,550,400);  //clears the complete canvas#simscreen everytime
  if (flaggrashof)
  { 
  
  $('#titleincanvas').show();
  $('#datatable1').show();
  $('#datatable2').hide();
  $('#datatable3').hide();
  $('#datatable4').hide();
  $('#vba').show();
  $('#vcb').show();
  $('#vca').show();
  $('#ab').show();
  $('#acb').show();
  $('#ac').show(); 
  $('#acg2').hide();
  $('#acg3').hide();
  $('#acg4').hide();
  $('#f12').hide();
  $('#f32').hide();
  $('#f23').hide();
  $('#f43').hide();
  $('#f34').hide();
  $('#f14').hide();
   $('#fin2').hide();
  $('#fin3').hide();
  $('#fin4').hide(); 
  $('#legendicon').show(); 
	
  a=pointtrans(a,trans);
  b=pointtrans(b,trans);
  c=pointtrans(c,trans);
  d=pointtrans(d,trans);
  

  

document.getElementById('titleincanvas').innerHTML="Grashof Linkage";
  pointjoin(a,b,ctx,"#0066FF");
  pointjoin(b,c,ctx,"#D00000");
  pointjoin(c,d,ctx,"#005500");
  pointjoin(d,a,ctx,"#993300");
  
    


  pointdisp(a,ctx);
  pointdisp(b,ctx);
  pointdisp(c,ctx);
  pointdisp(d,ctx);
// Position Diagram Title	
	ctx.save();
   ctx.lineWidth=1;
   ctx.font="16px 'Nunito', sans-serif";
   ctx.strokeStyle="#000000";
 //displaying scale values
  if(scaleP>=1)
  ctx.fillText("Position Diagram (Scale = 1:"+scaleP+")",15,30);
  if(scaleP<1)
  ctx.fillText("Position Diagram (Scale = 1:"+1/scaleP+":1)",15,30);



 

// Free Body Diagram Title	
	ctx.save();
   ctx.lineWidth=1;
   ctx.font="12px 'Nunito', sans-serif";
   ctx.strokeStyle="#000000";
// drawvel(ctx);
   

  }
  else
  {
  
$('#titleincanvas').hide();
$('#datatable1').hide();
$('#datatable2').hide();
$('#datatable3').hide();
$('#datatable4').hide();
//$('#datatable2').hide();
  $('#vba').hide();
  $('#vcb').hide();
  $('#vca').hide();
  $('#ab').hide();
  $('#acb').hide();
  $('#ac').hide();
  $('#f12').hide();
  $('#f32').hide();
  $('#f23').hide();
  $('#f43').hide();
  $('#f34').hide();
  $('#f14').hide();
   $('#fin2').hide();
  $('#fin3').hide();
  $('#fin4').hide(); 
$('#legendicon').hide();
  ctx.strokeStyle="#000000";
  ctx.font = "16px 'Nunito', sans-serif";
  ctx.save();
  ctx.lineWidth=2;
  ctx.strokeText("Combination does not satisfy Grashof rule ",100,200);
  ctx.restore();
  }
 
  
 
}

//function to draw velocity diagram
function drawvel(ctx)
{ 
	canvas = document.getElementById("simscreen");
	ctx = canvas.getContext("2d");
//Velocity Diagram
  vo=pointtrans(vo,transV);
  vba=pointtrans(vba,transV);
  vca=pointtrans(vca,transV);
  vcb=pointtrans(vcb,transV);
  
   ctx.lineWidth=2;
   ctx.font="16px 'Nunito', sans-serif";
   ctx.strokeStyle="#000000";
  if(scaleV>=1)
  ctx.fillText("Velocity Diagram (Scale = 1:"+scaleV+")",280,50);
  if(scaleV<1)
  ctx.fillText("Velocity Diagram (Scale = "+1/scaleV+":1)",280,50);

  if(scaleA>=1)
  ctx.fillText("Acceleration Diagram (Scale = 1:"+scaleA+")",150,300);
  if(scaleA<1)
  ctx.strokeText("Acceleration Diagram (Scale = "+1/scaleA+":1)",150,320);
 ctx.save();
  pointjoin(vo,vba,ctx,"#0066FF",2);
  drawArrow(vba.xcoord,vba.ycoord,ctx,180-theta2-rotstatus*90,15,30,"#0066FF");

  pointjoin(vba,vcb,ctx,"#D00000",2);
  drawArrow(vcb.xcoord,vcb.ycoord,ctx,180-theta3-(signof(omega3))*90,15,30,"#D00000");

  pointjoin(vo,vca,ctx,"#005500",2);
  drawArrow(vca.xcoord,vca.ycoord,ctx,180-theta4-(signof(omega4))*90,15,30,"#005500");
//positioning labels
  Vba.xcoord=(vo.xcoord + vba.xcoord) / 2; // Calculate the midpoint along the x-axis
  Vba.ycoord= (vo.ycoord + vba.ycoord) / 2 ; // Calculate the midpoint along the y-axis
  pointdisp(Vba, ctx, 2, "blue", "white", "black", "12px", "12px");

  Vcb.xcoord=(vba.xcoord + vcb.xcoord) / 2; // Calculate the midpoint along the x-axis
  Vcb.ycoord= (vba.ycoord + vcb.ycoord) / 2 ; // Calculate the midpoint along the y-axis
  pointdisp(Vcb, ctx, 2, "blue", "white", "black", "12px", "12px");

  Vca.xcoord=(vo.xcoord + vca.xcoord) / 2;// Calculate the midpoint along the x-axis
  Vca.ycoord= (vo.ycoord + vca.ycoord) / 2 ; // Calculate the midpoint along the y-axis
  pointdisp(Vca, ctx, 2, "blue", "white", "black", "12px", "12px");



//displaying scale values

}

//function to check whether links satisfy grashof condition
function checkGrashof()
{
	var links= new Array(4);
	links[0]=r1;
	links[1]=r2;
	links[2]=r3;
	links[3]=r4;
	links.sort(function(p, q){return p-q});
	var s=links[0];
	var p=links[1];
	var q=links[2];
	var l=links[3];
	if (s+l>p+q)
	{ 
		flaggrashof=false;
		$('select').prop('disabled', true);
		$('input').prop('disabled', true);
	}
	else 
	{
		flaggrashof=true;
		$('select').prop('disabled', false);
		$('input').prop('disabled', false);
	}
}

function linkZoom()
{
	canvas2 = document.getElementById("zoomScreen");
	ctx2 = canvas2.getContext("2d");
	document.getElementById("zoomScreen").style.visibility = "visible";
	ctx2.clearRect(0,0,550,400);  //clears the complete canvas#simscreen everytime
	ctx2.strokeStyle="#000000";
	ctx2.font="14px 'Nunito', sans-serif";
	
	//To move scale to (2,2)
    ctx2.restore();
	ctx2.save();
	ctx2.scale(2,2);

	// <!-- Displaying offset seperate links -->
	if(setZoomLink == 2) {
		//For Link2
		link2Zoom();
	} else if(setZoomLink == 3) {
		//For Link2
		link3Zoom();
	} else if(setZoomLink == 4) {
		//For Link2
		link4Zoom();
	}
	

}
function link2Zoom(){

	a22=pointtrans(a22,trans22);
	b22=pointtrans(b22,trans22);
	abcga1=pointtrans(abcga1,trans22);

	
	abxcg1=pointtrans(abxcg1,trans22);
	abcg1=pointtrans(abcg1,trans22);
	fcg2=pointtrans(fcg2,trans22);
	fin21=pointtrans(fin21,trans22);
	//Acceleration Vectors
	pointjoin(a22,b22,ctx2,"blue");
	pointdisp(a22,ctx2);
	pointdisp(b22,ctx2);

	//Force Coordinates Link2
	pointjoin(abxcg1,abcga1,ctx2,"red",2);
	drawArrow(abcga1.xcoord,abcga1.ycoord,ctx2,-abcgtheta+180,15,30,"red");
	pointjoin(abxcg1,fin21,ctx2,"black",2);
	drawArrow(fin21.xcoord,fin21.ycoord,ctx2,-fin21theta+180,15,30,"black");
	ctx2.font="6px 'Nunito', sans-serif";
	ctx2.fillText("Offset on Link 2 (Scale = 2)",a22.xcoord - 60,a22.ycoord+20);
}

function link3Zoom(){

	//Link 3
	
	
	b23=pointtrans(b23,trans23);
	c23=pointtrans(c23,trans23);
	f23=pointtrans(f23,trans23);
	f43=pointtrans(f43,trans23);
	bccga1=pointtrans(bccga1,trans23);
	bcxcg1=pointtrans(bcxcg1,trans23);
	fin31=pointtrans(fin31,trans23);
	hf31=pointtrans(hf31,trans23);



	//Force Coordinates Link 3
	pointjoin(b23,c23,ctx2,"red");
	pointdisp(b23,ctx2);
	pointdisp(c23,ctx2);

	pointjoin(bcxcg1,bccga1,ctx2,"red",2);
	drawArrow(bccga1.xcoord,bccga1.ycoord,ctx2,-bccgtheta+180,15,30,"blue");
	pointjoin(hf31,fin31,ctx2,"black",2);
	drawArrow(fin31.xcoord,fin31.ycoord,ctx2,-fin3theta+180,15,30,"black");
	ctx2.font="6px 'Nunito', sans-serif";
	ctx2.fillText("Offset on Link 3 (Scale = 2)",b23.xcoord,b23.ycoord+20);
}

function link4Zoom(){

	//Link 4

	
	c24=pointtrans(c24,trans24);
	d24=pointtrans(d24,trans24);
	f34=pointtrans(f34,trans24);
	f14=pointtrans(f14,trans24);
	fin41=pointtrans(fin41,trans24);
	hf41=pointtrans(hf41,trans24);
	cdcga1=pointtrans(cdcga1,trans24);
	cdxcg1=pointtrans(cdxcg1,trans24);
	//Force Coordinates Link 4
	pointjoin(c24,d24,ctx2,"green");
	pointdisp(c24,ctx2);
	pointdisp(d24,ctx2);



	pointjoin(cdxcg1,cdcga1,ctx2,"blue",2);
	drawArrow(cdcga1.xcoord,cdcga1.ycoord,ctx2,-cdcgtheta+180,15,30,"blue");


	//Force vectors

	pointjoin(hf41,fin41,ctx2,"black",2);
	drawArrow(fin41.xcoord,fin41.ycoord,ctx2,-fin4theta+180,15,30,"black");
	ctx2.font="6px 'Nunito', sans-serif";
	ctx2.fillText("Offset on Link 4 (Scale = 2)",d24.xcoord - 60,d24.ycoord+20);
}

function drawacc(context)
{
	canvas = document.getElementById("simscreen");
	ctx = canvas.getContext("2d");

	
document.getElementById("datatable1").innerHTML="\
<table>\
<tr><th>Link</th><th>Length</th><th>&theta;</th><th>&omega;</th><th>V</th><th>&alpha;</th><th>A<sub>c</sub></th><th>A<sub>t</sub></th><th>A</th></tr>\
<tr><td>r2</td><td>"+r2+"</td><td>"+roundd(theta2,2)+"</td><td>"+roundd(omega2,2)+"</td><td>"+roundd(r2*omega2,2)+"</td><td>"+roundd(alpha2,2)+"</td><td>"+roundd(acccb,2)+"</td><td>"+roundd(acctb,2)+"</td><td>"+roundd(acclb,2)+"</td></tr>\
<tr><td>r3</td><td>"+r3+"</td><td>"+roundd(theta3,2)+"</td><td>"+roundd(omega3,2)+"</td><td>"+roundd(r3*omega3,2)+"</td><td>"+roundd(alpha3,2)+"</td><td>"+roundd(accccb,2)+"</td><td>"+roundd(acctcb,2)+"</td><td>"+roundd(acclcb,2)+"</td></tr>\
<tr><td>r4</td><td>"+r4+"</td><td>"+roundd(theta4,2)+"</td><td>"+roundd(omega4,2)+"</td><td>"+roundd(r4*omega4,2)+"</td><td>"+roundd(alpha4,2)+"</td><td>"+roundd(acccc,2)+"</td><td>"+roundd(acctc,2)+"</td><td>"+roundd(acclc,2)+"</td></tr>\
<tr><td>(Units)</td><td>mm</td><td>&deg;</td><td>rad/s</td><td>mm/s</td><td>rad/s<sup>2</sup></td><td>mm/s<sup>2</sup></td><td>mm/s<sup>2</sup></td><td>mm/s<sup>2</sup></td></tr>\
</table>";

//Acceleration Diagram
  ao= pointtrans(ao,transA);
  ab= pointtrans(ab,transA);
  acb= pointtrans(acb,transA);
  ac= pointtrans(ac,transA);
  accb= pointtrans(accb,transA);
  acc= pointtrans(acc,transA);
  atcb= pointtrans(atcb,transA);
  atc= pointtrans(atc,transA);


  angcb=deg(Math.atan((acb.ycoord-ab.ycoord)/(acb.xcoord-ab.xcoord)));
  angc=deg(Math.atan((ac.ycoord-ao.ycoord)/(ac.xcoord-ao.xcoord)));

  pointjoin(ao,ab,context,"#0066FF",3);
  drawArrow(ab.xcoord,ab.ycoord,context,-theta2,15,30,"#0066FF");

  pointjoin(ab,accb,context,"#D00000",1);
  drawArrow(accb.xcoord,accb.ycoord,context,-theta3,15,30,"#D00000");
  
  pointjoin(ab,acb,context,"#D00000",3);
  drawArrow(acb.xcoord,acb.ycoord,context,270-(signof(acb.xcoord-ab.xcoord))*90+angcb,15,30,"#D00000");

  pointjoin(ao,acc,context,"#005500",1);  
  drawArrow(acc.xcoord,acc.ycoord,context,-theta4,15,30,"#005500");
  
  pointjoin(ao,ac,context,"#005500",3);  
  drawArrow(ac.xcoord,ac.ycoord,context,270-(signof(ac.xcoord-ao.xcoord))*90+angc,15,30,"#005500");

   
//positioning labels
  Ab.xcoord=(ao.xcoord + ab.xcoord) / 2, // Calculate the midpoint along the x-axis
  Ab.ycoord= (ao.ycoord + ab.ycoord) / 2  // Calculate the midpoint along the y-axis
  pointdisp(Ab, ctx, 2, "blue", "white", "black", "12px", "12px");

 Acb.xcoord=(ab.xcoord +acb.xcoord) / 2, // Calculate the midpoint along the x-axis
 Acb.ycoord= (ab.ycoord +acb.ycoord) / 2  // Calculate the midpoint along the y-axis
  pointdisp(Acb, ctx, 2, "blue", "white", "black", "12px", "12px");

  Ac.xcoord=(ao.xcoord + ac.xcoord) / 2, // Calculate the midpoint along the x-axis
  Ac.ycoord= (ao.ycoord + ac.ycoord) / 2  // Calculate the midpoint along the y-axis
  pointdisp(Ac, ctx, 2, "blue", "white", "black", "12px", "12px");

  // dashed line for Tangential Accelerations
  context.save();
  context.beginPath();
  context.setLineDash([5, 5]);
  pointjoin(acc,atc,context,"#005500",1);  
  drawArrow(atc.xcoord,atc.ycoord,context,-theta4+(signof(acctc))*90,15,30,"#005500");
  pointjoin(accb,atcb,context,"#D00000",1);
  drawArrow(atcb.xcoord,atcb.ycoord,context,-theta3+(signof(acctcb))*90,15,30,"#D00000");
  context.closePath();
  context.restore();



}

function drawaccl(context)
{
canvas = document.getElementById("simscreen");
ctx = canvas.getContext("2d");
ctx.clearRect(0,0,550,400);  //clears the complete canvas#simscreen everytime
  if (flaggrashof)
  { 
  
  $('#titleincanvas').show();
  $('#datatable1').hide();
  $('#datatable2').hide();

 
// 	<!-- $('#datatable3').hide(); -->
  $('#datatable4').hide();
  $('#vba').hide();
  $('#vcb').hide();
  $('#vca').hide();
  $('#ab').hide();
  $('#acb').hide();
  $('#ac').hide();
  $('#f12').hide();
  $('#f32').hide();
  $('#f23').hide();
  $('#f43').hide();
  $('#f34').hide();
  $('#f14').hide();
   $('#fin2').hide();
  $('#fin3').hide();
  $('#fin4').hide(); 
  
  //--------------------------------------
  $('#acg2').show();
  $('#acg3').show();
  $('#acg4').show(); 
  //........................................
  ax=pointtrans(ax,trans1);
  bx=pointtrans(bx,trans1);
  cx=pointtrans(cx,trans1);
  dx=pointtrans(dx,trans1);
  //........................................
  abcga=pointtrans(abcga,trans1);
  bccga=pointtrans(bccga,trans1);
  cdcga=pointtrans(cdcga,trans1);
  //.........................................
  abxcg=pointtrans(abxcg,trans1);
  bcxcg=pointtrans(bcxcg,trans1);
  cdxcg=pointtrans(cdxcg,trans1);
  //.........................................
 
document.getElementById('titleincanvas').innerHTML="Acceleration of CG";
  pointjoin(ax,bx,ctx,"#0066FF");
  pointjoin(bx,cx,ctx,"#D00000");
  pointjoin(cx,dx,ctx,"#005500");
  pointjoin(dx,ax,ctx,"#993300");




  pointdisp(ax,ctx);
  pointdisp(bx,ctx);
  pointdisp(cx,ctx);
  pointdisp(dx,ctx);

//Acceleration Vectors

pointjoin(abxcg,abcga,ctx,"red",2);
drawArrow(abcga.xcoord,abcga.ycoord,ctx,-abcgtheta+180,15,30,"red");
//Acceleraation Labels
Acg2.xcoord=(abxcg.xcoord + abcga.xcoord)/2;
Acg2.ycoord=(abxcg.ycoord + abcga.ycoord)/2;
pointdisp(Acg2,ctx,2,"blue", "white", "black", "12px", "12px");

pointjoin(bcxcg,bccga,ctx,"blue",2);
drawArrow(bccga.xcoord,bccga.ycoord,ctx,-bccgtheta+180,15,30,"blue");

Acg3.xcoord=(bcxcg.xcoord + bccga.xcoord)/2;
Acg3.ycoord=(bcxcg.ycoord + bccga.ycoord)/2;
pointdisp(Acg3,ctx,2,"blue", "white", "black", "12px", "12px");

pointjoin(cdxcg,cdcga,ctx,"blue",2);
drawArrow(cdcga.xcoord,cdcga.ycoord,ctx,-cdcgtheta+180,15,30,"blue");



Acg4.xcoord=(150+trans1.xcoord+cdcga.xcoord)/2;
Acg4.ycoord=(-60+trans1.ycoord+cdcga.ycoord)/2;
pointdisp(Acg4,ctx,2,"blue", "white", "black", "12px", "12px");





//Datatable
document.getElementById("datatable3").innerHTML="\
<table>\
<tr><th>Acceleration</th><th>A<sub>cg</sub>(mm/s<sup>2</sup>)</th>\
<tr><td>A<sub>cg2x</sub></td><td>"+roundd(a2cgx,2)+"</td>\
<tr><td>A<sub>cg2y</sub></td><td>"+roundd(a2cgy,2)+"</td>\
<tr><td>A<sub>cg3x</sub></td><td>"+roundd(a3cgx,2)+"</td>\
<tr><td>A<sub>cg3y</sub></td><td>"+roundd(a3cgy,2)+"</td>\
<tr><td>A<sub>cg4x</sub></td><td>"+roundd(a4cgx,2)+"</td>\
<tr><td>A<sub>cg4y</sub></td><td>"+roundd(a4cgy,2)+"</td>\
</table>";
// Position Diagram Title 

if(flaggrashof)
{
  ctx.save();
    ctx.lineWidth=1;
   ctx.font="14px 'Nunito', sans-serif";
   ctx.strokeStyle="#000000";
 //displaying scale values
  if(scaleP>=1)
  ctx.fillText("Position Diagram (Scale = 2:"+scaleP+")",200,330);
  if(scaleP<1)
  ctx.strokeText("Position Diagram (Scale = 2:"+1/scaleP+":1)",200,300);

  if(scaleA>=1)
  ctx.fillText("Acceleration Diagram (Scale = 1:"+scaleA+")",225,300);
  if(scaleA<1)
  ctx.strokeText("Acceleration Diagram (Scale = "+1/scaleA+":1)",225,320);


ctx.restore();
}
   
   

  }
  else
  {
  
$('#titleincanvas').hide();
$('#datatable1').hide();
$('#datatable2').hide();
$('#datatable3').hide();
$('#datatable4').hide();
//$('#datatable2').hide();
  $('#vba').hide();
  $('#vcb').hide();
  $('#vca').hide();
  $('#ab').hide();
  $('#acb').hide();
  $('#ac').hide();
  $('#acg2').hide();
  $('#acg3').hide();
  $('#acg4').hide();
  $('#f12').hide();
  $('#f32').hide();
  $('#f23').hide();
  $('#f43').hide();
  $('#f34').hide();
  $('#f14').hide();
  $('#fin2').hide();
  $('#fin3').hide();
  $('#fin4').hide(); 


$('#legendicon').hide();
  ctx.strokeStyle="#000000";
  ctx.font = "16px 'Nunito', sans-serif";
  ctx.save();
  ctx.lineWidth=2;
  ctx.strokeText("Combination does not satisfy Grashof rule ",100,200);
  ctx.restore();
  }
}


function drawforcemoment(ctx)
{
document.getElementById('titleincanvas').innerHTML="Offset Analysis";

canvas = document.getElementById("simscreen");
ctx = canvas.getContext("2d");
ctx.clearRect(0,0,550,400);  //clears the complete canvas#simscreen everytime
if(exptSelected == 1) {
	trans1= new point(350,180);
  } else {
	trans1= new point(250,200);
  }
 if (flaggrashof)
  { 
  
  $('#titleincanvas').show();
  $('#datatable1').hide();
  $('#datatable2').hide();
  $('#datatable3').hide();
  if(screenchanges != 4)
  {
	$('#datatable4').show();
  }
  else 
  $('#datatable4').hide();
  $('#vba').hide();
  $('#vcb').hide();
  $('#vca').hide();
  $('#ab').hide();
  $('#acb').hide();
  $('#ac').hide();
  $('#f12').hide();
  $('#f32').hide();
  $('#f23').hide();
  $('#f43').hide();
  $('#f34').hide();
  $('#f14').hide();
    //--------------------------------------
  $('#acg2').show();
  $('#acg3').show();
  $('#acg4').show();
  //----------------------------------------
  $('#fin2').show();
  $('#fin3').show();
  $('#fin4').show(); 
  //----------------------------------------

ax=pointtrans(ax,trans1);
bx=pointtrans(bx,trans1);
cx=pointtrans(cx,trans1);
dx=pointtrans(dx,trans1);

abcga=pointtrans(abcga,trans1);
bccga=pointtrans(bccga,trans1);
cdcga=pointtrans(cdcga,trans1);



fin2=pointtrans(fin2,trans1);
fin3=pointtrans(fin3,trans1);
fin4=pointtrans(fin4,trans1);

hf2=pointtrans(hf2,trans1);
hf3=pointtrans(hf3,trans1);
hf4=pointtrans(hf4,trans1);


abxcg=pointtrans(abxcg,trans1);
abxcg1=pointtrans(abxcg1,trans22); 
bcxcg=pointtrans(bcxcg,trans1);
bcxcg1=pointtrans(bcxcg1,trans23); 
cdxcg=pointtrans(cdxcg,trans1);
cdxcg1=pointtrans(cdxcg1,trans24)

pointjoin(ax,bx,ctx,"#0066FF");
pointjoin(bx,cx,ctx,"#D00000");
pointjoin(cx,dx,ctx,"#005500");
pointjoin(dx,ax,ctx,"#993300");

pointdisp(ax,ctx);
pointdisp(bx,ctx);
pointdisp(cx,ctx);
pointdisp(dx,ctx);


//Acceleration Vectors

pointjoin(abxcg,abcga,ctx,"red",2);
drawArrow(abcga.xcoord,abcga.ycoord,ctx,-abcgtheta+180,15,30,"red");

Acg2.xcoord=(abxcg.xcoord + abcga.xcoord)/2;
Acg2.ycoord=(abxcg.ycoord + abcga.ycoord)/2;
pointdisp(Acg2,ctx,2,"blue", "white", "black", "12px", "12px");

pointjoin(bcxcg,bccga,ctx,"blue",2);
drawArrow(bccga.xcoord,bccga.ycoord,ctx,-bccgtheta+180,15,30,"blue");

Acg3.xcoord=(bcxcg.xcoord + bccga.xcoord)/2;
Acg3.ycoord=(bcxcg.ycoord + bccga.ycoord)/2;
pointdisp(Acg3,ctx,2,"blue", "white", "black", "12px", "12px");

pointjoin(cdxcg,cdcga,ctx,"blue",2);
drawArrow(cdcga.xcoord,cdcga.ycoord,ctx,-cdcgtheta+180,15,30,"blue");

Acg4.xcoord=(150+trans1.xcoord+cdcga.xcoord)/2;
Acg4.ycoord=(-60+trans1.ycoord+cdcga.ycoord)/2;
pointdisp(Acg4,ctx,2,"blue", "white", "black", "12px", "12px");

//Force vectors

pointjoin(abxcg,fin2,ctx,"black",2);
drawArrow(fin2.xcoord,fin2.ycoord,ctx,-fin2theta+180,15,30,"black");

Fin2.xcoord=(40+abxcg.xcoord + fin2.xcoord)/2;
Fin2.ycoord=(abxcg.ycoord + fin2.ycoord)/2;
pointdisp(Fin2,ctx,2,"blue", "white", "black", "12px", "12px");

pointjoin(hf3,fin3,ctx,"black",2);
drawArrow(fin3.xcoord,fin3.ycoord,ctx,-fin3theta+180,15,30,"black");

Fin3.xcoord=(40+hf3.xcoord + fin3.xcoord)/2;
Fin3.ycoord=(hf3.ycoord + fin3.ycoord)/2;
pointdisp(Fin3,ctx,2,"blue", "white", "black", "12px", "12px");	


pointjoin(hf4,fin4,ctx,"black",2);
drawArrow(fin4.xcoord,fin4.ycoord,ctx,-fin4theta+180,15,30,"black");

Fin4.xcoord=(40+hf4.xcoord + fin4.xcoord)/2;
Fin4.ycoord=(hf4.ycoord + fin4.ycoord)/2;
pointdisp(Fin4,ctx,2,"blue", "white", "black", "12px", "12px");


document.getElementById("datatable4").innerHTML="\
<table>\
<tr><th>Link</th><th>Offset</th>\
<tr><td>2</td><td>"+0+"</td>\
<tr><td>3</td><td>"+roundd(h3,2)+"</td>\
<tr><td>4</td><td>"+roundd(h4,2)+"</td>\
</table>";
// <!-- linkZoom(); -->


}
else
{
  $('#vba').hide();
  $('#vcb').hide();
  $('#vca').hide();
  $('#ab').hide();
  $('#acb').hide();
  $('#ac').hide();
  $('#acg2').hide();
  $('#acg3').hide();
  $('#acg4').hide();
  $('#datatable1').hide();
  $('#datatable2').hide();
  $('#datatable3').hide();
  $('#datatable4').hide();
  $('#f12').hide();
  $('#f32').hide();
  $('#f23').hide();
  $('#f43').hide();
  $('#f34').hide();
  $('#f14').hide();
  $('#acg2').hide();
  $('#acg3').hide();
  $('#acg4').hide();
  $('#fin2').hide();
  $('#fin3').hide();
  $('#fin4').hide();
  $('#legendicon').hide();
  ctx.strokeStyle="#000000";
  ctx.font = "16px 'Nunito', sans-serif";
  ctx.save();
  ctx.lineWidth=2;
  ctx.strokeText("Combination does not satisfy Grashof rule ",100,200);
  ctx.restore();
  }


}
// / //Experimental Function -->

function bendingstressanalysis_pointjoin(a,b,f1,f2,r,theta,n,m,acgx,acgy,context,p,q,trans)
{
	var l1,l1x,l1y,M1,M2,Mcg,l2,l2x,l2y,lcg,lcgx,lcgy;

	var M=[];
	var bf1=[];
	var bf2=[];

	// <!-- //Boundary Conditions -->
	for (var i = 0; i <= n; i++) 
	{ 
		M1=0;
		M2=0;
		Mcg=0;
		// <!-- //Calculation of moment due to force 1 -->
		l1=((2*i-1)/(2*n))*r;
		l1x=l1*Math.cos(rad(theta));
		l1y=l1*Math.sin(rad(theta));
		M1=(f1.xcoord*l1y)-(f1.ycoord*l1x);
	    //Calculation of moment due to force 2
		l2=(((2*n)-(2*i)-1)/(2*n))*r;
		l2x=l2*Math.cos(rad(theta));
		l2y=l2*Math.sin(rad(theta));
		M2=(f2.ycoord*l2x)-(f2.xcoord*l2y);
		//Calculation of moment due to inertia forces
		lcg=((n-(2*i)-1)/2*n)*r;
		lcgx=lcg*Math.cos(rad(theta));
		lcgy=lcg*Math.sin(rad(theta));
		Mcg=(m*acgx*lcgy)-(m*acgy*lcgx);
		//Total Moment
		M[i]=M1+M2+Mcg;
		//Assuming a rectangular cross section (1X16) Crosssection 
		//Material Aluminium
		bf1[i]= M[i]*0.0234;
		bf2[i]= M[i]*(-0.0234);
	}
	for(i=0;i<n;i++)
		// <!-- //Meshing -->

	{  
		p[i]= new point(0,0,"");
		p[i]=pointtrans(p[i],trans);
		p[i].xcoord=b.xcoord+(4*Math.sin(rad(-theta)))-(((i*r)/n)*Math.cos(rad(theta)));
		p[i].ycoord=b.ycoord-(4*Math.cos(rad(theta)))-(((i*r)/n)*Math.sin(rad(-theta)));

		p[i+1]= new point(0,0,"");
		p[i+1]=pointtrans(p[i+1],trans);
		p[i+1].xcoord=b.xcoord+(4*Math.sin(rad(-theta)))-(((i+1)*r)/n)*Math.cos(rad(theta));
		p[i+1].ycoord=b.ycoord-(4*Math.cos(rad(theta)))-(((i+1)*r)/n)*Math.sin(rad(-theta));

		colourcontour(p[i],p[i+1],bf1[i]);


		q[i]= new point(0,0,"");
		q[i]=pointtrans(q[i],trans);
		q[i].xcoord=b.xcoord-(4*Math.sin(rad(-theta)))-(((i*r)/n)*Math.cos(rad(theta)));
		q[i].ycoord=b.ycoord+(4*Math.cos(rad(theta)))-(((i*r)/n)*Math.sin(rad(-theta)));

		q[i+1]= new point(0,0,"");
		q[i+1]=pointtrans(q[i+1],trans);
		q[i+1].xcoord=b.xcoord-(4*Math.sin(rad(-theta)))-(((i+1)*r)/n)*Math.cos(rad(theta));
		q[i+1].ycoord=b.ycoord+(4*Math.cos(rad(theta)))-(((i+1)*r)/n)*Math.sin(rad(-theta));
		colourcontour(q[i],q[i+1],bf2[i]);
	}
}


// <!-- //Colour Mapping Function -->

function colourcontour(p,q,bf)
{
	    if(bf<-700 && bf>=-1400)
		{
			x=((bf+1400)/(700))*255;
			x=roundd(x,0);
			pointjoin(p,q,ctx,"rgb(0,"+x+",0)",8);
		}
		if(bf<0 && bf>=-700)
		{
			x=((bf+700)/(700))*255;
			x=roundd(x,0);
			x=255-x;
			pointjoin(p,q,ctx,"rgb(0,255,"+x+")",8);
		}
		if(bf<700 && bf>=0)
		{
			x=((bf)/(700))*255;
			x=roundd(x,0);
			pointjoin(p,q,ctx,"rgb("+x+",255,0)",8);
		}
		if(bf<1400 && bf>=700)
		{
			x=((bf-700)/(700))*255;
			x=roundd(x,0);
			x=255-x;
			pointjoin(p,q,ctx,"rgb(255,"+x+",0)",8);
		}
}

function drawdyn(context)
{
  canvas = document.getElementById("simscreen");
  ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,550,400);  //clears the complete canvas#simscreen everytime
 //clears the complete canvas#simscreen everytime
  if(flaggrashof)
{
  draw(ctx);

  $('#vba').hide();
  $('#vcb').hide();
  $('#vca').hide();
  $('#ab').hide();
  $('#acb').hide();
  $('#ac').hide();
  $('#acg2').hide();
  $('#acg3').hide();
  $('#acg4').hide();
  $('#datatable1').hide();
  if(screenchanges != 4)
  {
	$('#datatable2').show();
  }
  else 
  $('#datatable2').hide();
  $('#datatable3').hide();
  $('#f12').show();
  $('#f32').show();
  $('#f23').show();
  $('#f43').show();
  $('#f34').show();
  $('#f14').show();
  $('#acg2').hide();
  $('#acg3').hide();
  $('#acg4').hide();
  $('#fin2').hide();
  $('#fin3').hide();
  $('#fin4').hide();


document.getElementById("datatable2").innerHTML="\
<table>\
<tr><th>Force</th><th>Value(N)</th></tr>\
<tr><th>F12x</th><th>"+roundd($result[0],2)+"</tr>\
<tr><th>F12y</th><th>"+roundd($result[1],2)+"</th></tr>\
<tr><th>F32x</th><th>"+roundd($result[2],2)+"</th></tr>\
<tr><th>F32y</th><th>"+roundd($result[3],2)+"</th></tr>\
<tr><th>F43x</th><th>"+roundd($result[4],2)+"</th></tr>\
<tr><th>F43y</th><th>"+roundd($result[5],2)+"</th></tr>\
<tr><th>F14x</th><th>"+roundd($result[6],2)+"</th></tr>\
<tr><th>F14y</th><th>"+roundd($result[7],2)+"</th></tr>\
<tr><th>T12</th><th>"+roundd($result[8],2)+"</th></tr>\
</table>";  
 ctx.strokeStyle="#000000";
   ctx.font="14px 'Nunito', sans-serif";
  ctx.fillText("Forces on Link 2 (Scale = 1)",330,50);
  ctx.fillText("Force on Link 3 (Scale = 1)",100,200);
  ctx.fillText("Forces on Link 4 (Scale = 1)",300,200);


  
//Dynamic Force Analysis Free Body Diagrams

//Link 2
al2=pointtrans(al2,transl2);
bl2=pointtrans(bl2,transl2);
f12=pointtrans(f12,transl2);
f32=pointtrans(f32,transl2);
abcg=pointtrans(abcg,transl2);
fcg2=pointtrans(fcg2,transl2);

 ptx.push(bl2.xcoord);
 pty.push(bl2.ycoord);
 
 


//Force Coordinates Link2
pointjoin(al2,bl2,ctx,"blue");
pointdisp(al2,ctx);
pointdisp(bl2,ctx);
pointjoin(al2,f12,ctx,"brown",2);
pointjoin(bl2,f32,ctx,"red",2);
pointjoin(bl2,f32,ctx,"red",2);
//pointjoin(abcg,fcg2,ctx,"red",2);

drawArrow(f12.xcoord,f12.ycoord,ctx,-f12theta+180,15,30,"brown");
drawArrow(f32.xcoord,f32.ycoord,ctx,-f32theta+180,15,30,"red");

// <!-- //to trace point -->
 pointtrace(ptx,pty,ctx,"blue",2);

 //Positioning Labels
lF12.xcoord= (al2.xcoord + f12.xcoord)/2;
lF12.ycoord= (20+al2.ycoord + f12.ycoord)/2;
pointdisp(lF12, ctx, 2, "blue", "white", "black", "12px", "12px");

lF32.xcoord= (10+f32.xcoord);
lF32.ycoord= (f32.ycoord);
pointdisp(lF32, ctx, 2, "red", "white", "black", "12px", "12px");



//Link 3
bl3=pointtrans(bl3,transl3);
cl3=pointtrans(cl3,transl3);
f23=pointtrans(f23,transl3);
f43=pointtrans(f43,transl3);

 pt1x.push(bl3.xcoord);
 pt1y.push(bl3.ycoord);
 pt2x.push(cl3.xcoord);
 pt2y.push(cl3.ycoord);

//Force Coordinates Link 3
pointjoin(bl3,cl3,ctx,"red");
pointdisp(bl3,ctx);
pointdisp(cl3,ctx);
pointjoin(bl3,f23,ctx,"brown",2);
pointjoin(cl3,f43,ctx,"green",2);
drawArrow(f23.xcoord,f23.ycoord,ctx,-f23theta+180,15,30,"blue");
drawArrow(f43.xcoord,f43.ycoord,ctx,-f43theta+180,15,30,"blue");
//to trace points
pointtrace(pt1x,pt1y,ctx,"red",2);
pointtrace(pt2x,pt2y,ctx,"goldenrod",2);

lF23.xcoord= (f23.xcoord);
lF23.ycoord= (5+f23.ycoord);
pointdisp(lF23, ctx, 2, "blue", "white", "black", "12px", "12px");

lF43.xcoord= (8+f43.xcoord);
lF43.ycoord= (5+f43.ycoord);	
pointdisp(lF43, ctx, 2, "blue", "white", "black", "12px", "12px");
//Positioning Labels


//Link 4
cl4=pointtrans(cl4,transl4);
dl4=pointtrans(dl4,transl4);
f34=pointtrans(f34,transl4);
f14=pointtrans(f14,transl4);
//Force Coordinates Link 4
pointjoin(cl4,dl4,ctx,"green");
pointdisp(cl4,ctx);
pointdisp(dl4,ctx);
pointjoin(cl4,f34,ctx,"brown",2);
pointjoin(dl4,f14,ctx,"green",2);

//to trace points
pt3x.push(cl4.xcoord);
pt3y.push(cl4.ycoord);
 
drawArrow(f34.xcoord,f34.ycoord,ctx,-f34theta+180,15,30,"blue");
drawArrow(f14.xcoord,f14.ycoord,ctx,-f14theta+180,15,30,"blue");
pointtrace(pt3x,pt3y,ctx,"green",2);

lF14.xcoord = (f14.xcoord);
lF14.ycoord = (f14.ycoord);
pointdisp(lF14, ctx, 2, "blue", "white", "black", "16px", "16px");

lF34.xcoord = (f34.xcoord);
lF34.ycoord = (5+f34.ycoord);
pointdisp(lF34, ctx, 3, "blue", "white", "black", "16px", "16px");


//Positioning variables


}
else
{

  $('#vba').hide();
  $('#vcb').hide();
  $('#vca').hide();
  $('#ab').hide();
  $('#acb').hide();
  $('#ac').hide();
  $('#acg2').hide();
  $('#acg3').hide();
  $('#acg4').hide();
  $('#datatable1').hide();
  $('#datatable2').hide();
  $('#datatable3').hide();
  $('#datatable4').hide();
  $('#f12').hide();
  $('#f32').hide();
  $('#f23').hide();
  $('#f43').hide();
  $('#f34').hide();
  $('#f14').hide();
  $('#acg2').hide();
  $('#acg3').hide();
  $('#acg4').hide();
  $('#fin2').hide();
  $('#fin3').hide();
  $('#fin4').hide();
  $('#legendicon').hide();
  ctx.strokeStyle="#000000";
  ctx.font = "16px 'Nunito', sans-serif";
  ctx.save();
  ctx.lineWidth=2;
  ctx.strokeText("Combination does not satisfy Grashof rule ",100,200);
  ctx.restore();

  }


}
// prints comments passed as 'commenttext' in location specified by 'commentloc' in the comments box;
// 0 : Single comment box, 1 : Left comment box, 2 : Right comment box
function printcomment(commenttext,commentloc)
{
  if(commentloc==0)
  {
  document.getElementById('commentboxright').style.visibility='hidden';
  
  }
  else if(commentloc==1)
  {
  document.getElementById('commentboxright').style.visibility='visible'     ;
   document.getElementById('commentboxleft').style.width='285px';
  document.getElementById('commentboxleft').innerHTML = commenttext;
  

  }
  else if(commentloc==2)
  {
  document.getElementById('commentboxright').style.visibility='visible';
  document.getElementById('commentboxright').innerHTML = commenttext;
  }
  else
  {
  document.getElementById('commentboxright').style.visibility='hidden';
  document.getElementById('commentboxleft').style.width='570px';
  document.getElementById('commentboxleft').innerHTML = "<center>please report this issue to adityaraman@gmail.com</center>"; 
  // ignore use of deprecated tag <center> . Code is executed only if printcomment function receives inappropriate commentloc value
  }
}

function setExperiment()
{
	if(!$("input:radio[name='expt']").is(":checked"))
	{
	
		document.getElementById("answers").innerHTML = "You have not selected any experiment";
	}
	else
	{
		exptSelected = 1;
		do{
			generateRandomValues();
		}while(flaggrashof == false);
		varupdate();
		setQuestions();
		// $('#screenchangesforward').hide();
		// $('#screenchangesbackward').hide();
		// $('#screenPrev').hide();
		// $('#screenNext').hide();
    $('#screenchangesforward').css({
      "opacity": 0.5,
      "pointer-events": "none"
    });
    
    $('#screenchangesbackward').css({
      "opacity": 0.5,
      "pointer-events": "none"
    }); 
		$('#stopExperiment').show();
		$("#resetExperiment").hide();
	
		$("#stopExperiment").text("Stop Experiment");
		$("#startExperiment").text("Reset Experiment");
		document.getElementById("startExperiment").style.opacity = 0.5;
		// ctx2.clearRect(0,0,500,400);
	}
}
function generateRandomValues()
{

	r1 = Math.floor(Math.random() * (40 - 20 + 1) ) + 20; 
	r2 = Math.floor(Math.random() * (40 - 20 + 1) ) + 20; 
	r3 = Math.floor(Math.random() * (40 - 20 + 1) ) + 20;  
	r4 = Math.floor(Math.random() * (40 - 20 + 1) ) + 20;  
	theta2 = Math.floor(Math.random() * (90 - 0 + 1) ) + 0;  
	$('#r1spinner').spinner("value",r1);
	$('#r1slider').slider("value", r1);	
	$('#r2spinner').spinner("value",r2);
	$('#r2slider').slider("value", r2);	
	$('#r3spinner').spinner("value",r3);
	$('#r3slider').slider("value", r3);	
	$('#r4spinner').spinner("value",r4);
	$('#r4slider').slider("value", r4);	
	$('#theta2spinner').spinner("value",theta2);
	$('#theta2slider').slider("value", theta2);	
	checkGrashof();
	document.getElementById('playpausebutton').src="images/blueplaydull.svg";
	clearInterval(simTimeId);
	clearInterval(pauseTime);	
    simstatus=1;
    $('#theta2spinner').spinner("value",theta2);			//to set simulation parameters on pause
    pauseTime=setInterval("varupdate();",'10');
    $("#startExperiment").attr("disabled", true);
	setValuesDisabled();
}
function setQuestions()
{
  $('#questions').show();
  if($('#acc').is(':checked'))
  {
	drawaccl(ctx); 
	$('#questionsAcc').show();
	document.getElementById("answers").innerHTML = "";
  }
  else if($('#offset').is(':checked'))
  {
  	drawforcemoment(ctx); 
	$('#questionsOffset').show();
	document.getElementById("answers").innerHTML = "";
	// <!-- imageZoom("toZoom", "myresult"); -->
  }
  else if($('#force').is(':checked'))
  {
     drawdyn(ctx);
	$('#questionsForce').show();
	document.getElementById("answers").innerHTML = "";
  }
}
function setValuesDisabled()
{
	$("#r1spinner").spinner( "disable" );	
	$("#r1slider").slider( "disable" );	
	$("#r2spinner").spinner( "disable" );
	$("#r2slider").slider( "disable" );		
	$("#r3spinner").spinner( "disable" );
	$("#r3slider").slider( "disable" );		
	$("#r4spinner").spinner( "disable" );
	$("#r4slider").slider( "disable" );	
	$("#theta2spinner").spinner( "disable" );
	$("#theta2slider").slider( "disable" );	
	$("#m2spinner").spinner( "disable" );
	$("#m2slider").slider( "disable" );	
	$("#m3spinner").spinner( "disable" );
	$("#m3slider").slider( "disable" );	
	$("#m4spinner").spinner( "disable" );
	$("#m4slider").slider( "disable" );	
	$("#t4spinner").spinner( "disable" );
	$("#t4slider").slider( "disable" );	
	$("#omega2spinner").spinner( "disable" );
	$("#omega2slider").slider( "disable" );	
	clearSpan();
	clearText();
}
function resetExperiments()
{
	exptSelected = 0;
	$('#questions').hide();
	$("#startExperiment").attr("disabled", false);
	$("#r1spinner").spinner( "enable" );	
	$("#r1slider").slider( "enable" );	
	$("#r2spinner").spinner( "enable" );
	$("#r2slider").slider( "enable" );		
	$("#r3spinner").spinner( "enable" );
	$("#r3slider").slider( "enable" );		
	$("#r4spinner").spinner( "enable" );
	$("#r4slider").slider( "enable" );	
	$("#theta2spinner").spinner( "enable" );
	$("#theta2slider").slider( "enable" );
	$("#m2spinner").spinner( "enable" );
	$("#m2slider").slider( "enable" );	
	$("#m3spinner").spinner( "enable" );
	$("#m3slider").slider( "enable" );	
	$("#m4spinner").spinner( "enable" );
	$("#m4slider").slider( "enable" );	
	$("#t4spinner").spinner( "enable" );
	$("#t4slider").slider( "enable" );	
	$("#omega2spinner").spinner( "enable" );
	$("#omega2slider").slider( "enable" );		
	$('#stopExperiment').hide();
	$('#resetExperiment').hide();
	$('#questionsAcc').hide(); 
	$('#questionsOffset').hide(); 
	$('#questionsForce').hide(); 

	clearSpan();
	clearText();
	time=0;		
	// document.getElementById("commentboxleft").innerHTML = "";
	document.getElementById("answers").innerHTML = "";
	
}

// <!-- Evaluate Acceleration -->
function evalAcceleration()
{
	var accAxis = $( "#accSelect option:selected" ).val();
	var x = $( "#xAxis").val();
	var y = $( "#yAxis").val();
	if(accAxis == "acg2")
	{
		if(x == roundd(a2cgx,2))
			$("#lx span").html("&#10004;");
		else
			$("#lx span").html("&#10008;");
		if(y == roundd(a2cgy,2))
			$("#ly span").html("&#10004;");
		else
			$("#ly span").html("&#10008;");
		console.log(roundd(a2cgx,2));
		console.log(roundd(a2cgy,2))
		document.getElementById("answers").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Axis: Acg2<br>Acg2x: "+roundd(a2cgx,2)+"mm/s<sup>2</sup>  Acg2y: "+roundd(a2cgy,2)+"mm/s<sup>2</sup>";
	}
	else if(accAxis == "acg3")
	{
		if(x == roundd(a3cgx,2))
			$("#lx span").html("&#10004;");
		else
			$("#lx span").html("&#10008;");
		if(y == roundd(a3cgy,2))
			$("#ly span").html("&#10004;");
		else
			$("#ly span").html("&#10008;");
			document.getElementById("answers").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Axis: Acg3<br>Acg3x: "+roundd(a3cgx,2)+"mm/s<sup>2</sup>  Acg3y: "+roundd(a3cgy,2)+"mm/s<sup>2</sup>";
	}
	else if(accAxis == "acg4")
	{
		if(x == roundd(a4cgx,2))
			$("#lx span").html("&#10004;");
		else
			$("#lx span").html("&#10008;");
		if(y == roundd(a4cgy,2))
			$("#ly span").html("&#10004;");
		else
			$("#ly span").html("&#10008;");
			document.getElementById("answers").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Axis: Acg4<br>Acg4x: "+roundd(a4cgx,2)+"mm/s<sup>2</sup>  Acg4y: "+roundd(a4cgy,2)+"mm/s<sup>2</sup>";
	}
			setSpanColor("#lx span", $("#lx span").html());
			setSpanColor("#ly span", $("#ly span").html());
}


// <!-- Evaluate Offset -->
function evalOffset()
{
	var selectedOffset = $( "#offsett option:selected" ).val();
	var offsetValue = $( "#link").val();
	// <!-- imageZoom(selectedOffset); -->
	document.getElementById('commentboxleft').style.width='500px';
	if(selectedOffset == 2)
	{
		
		if(offsetValue == 0)
			$("#linkspan").html("&#10004;");
		else
			$("#linkspan").html("&#10008;");
			document.getElementById("answers").innerHTML ="<span style='color:green'>Correct Answer:</span><br>Perpendicular distance of the inertial force from the CG point for Link2: "+ 0;;
	}
	else if(selectedOffset == 3)
	{
		
		if(offsetValue == roundd(h3,2))
			$("#linkspan").html("&#10004;");
		else
			$("#linkspan").html("&#10008;");
			document.getElementById("answers").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Perpendicular distance of the inertial force from the CG point for Link3: "+roundd(h3,2);
	}
	else if(selectedOffset == 4)
	{
			
		if(offsetValue == roundd(h4,2))
			$("#linkspan").html("&#10004;");
		else
			$("#linkspan").html("&#10008;");
			document.getElementById("answers").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Perpendicular distance of the inertial force from the CG point for Link4: "+roundd(h4,2);
	}
		setSpanColor("#linkspan", $("#linkspan").html());
	
}

// <!-- Evaluate Force -->
function evalForce()
{
	var forceAxis = $( "#forceSelect option:selected" ).val();
	var xforce = $( "#xForce").val();
	var yforce = $( "#yForce").val();
	document.getElementById('commentboxleft').style.width='500px';
	if(forceAxis == "f12")
	{
		if(xforce == roundd($result[0],2))
			$("#xfspan").html("&#10004;");
		else
			$("#xfspan").html("&#10008;");
		if(yforce == roundd($result[1],2))
			$("#yfspan").html("&#10004;");
		else
			$("#yfspan").html("&#10008;");
			document.getElementById("answers").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Force: F12<br>F12x: "+roundd($result[0],2)+"N F12y: "+roundd($result[1],2)+"N";
	}
	else if(forceAxis == "f32")
	{
		if(xforce == roundd($result[2],2))
			$("#xfspan").html("&#10004;");
		else
			$("#xfspan").html("&#10008;");
		if(yforce == roundd($result[3],2))
			$("#yfspan").html("&#10004;");
		else
			$("#yfspan").html("&#10008;");
			document.getElementById("answers").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Force: F32<br>F32x: "+roundd($result[2],2)+"N F32y: "+roundd($result[3],2)+"N";
	}
	else if(forceAxis == "f43")
	{
		if(xforce == roundd($result[4],2))
			$("#xfspan").html("&#10004;");
		else
			$("#xfspan").html("&#10008;");
		if(yforce == roundd($result[5],2))
			$("#yfspan").html("&#10004;");
		else
			$("#yfspan").html("&#10008;");
			document.getElementById("answers").innerHTML ="<span style='color:green'>Correct Answer:</span><br>Force: F43<br>F43x: "+roundd($result[4],2)+"N F43y: "+roundd($result[5],2)+"N";
	}
	else if(forceAxis == "f14")
	{
		if(xforce == roundd($result[6],2))
			$("#xfspan").html("&#10004;");
		else
			$("#xfspan").html("&#10008;");
		if(yforce == roundd($result[7],2))
			$("#yfspan").html("&#10004;");
		else
			$("#yfspan").html("&#10008;");
			document.getElementById("answers").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Force: F14<br>F14x: "+roundd($result[6],2)+"N F14y: "+roundd($result[7],2)+"N";
	}
	else if(forceAxis == "t12")
	{
		if(xforce == roundd($result[8],2))
			$("#xfspan").html("&#10004;");
		else
			$("#xfspan").html("&#10008;");
			document.getElementById("answers").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Torque: T12: "+roundd($result[8],2)+"N";
	}
	setSpanColor("#xfspan", $("#xfspan").html());
	setSpanColor("#yfspan", $("#yfspan").html());
}
function setSpanColor(str, val) {
	$(str).css({'font-size': '18px'});
	if( val == '✘') {
	$(str).css({'color': 'red'});
	} else if( val == '✔') {
		$(str).css({'color': 'green'});
	}
}

function clearSpan()
{
	$("#lx span").html(" ");
	$("#ly span").html(" ");
	$("#linkspan").html(" ");
	$("#fx span").html(" ");
	$("#fy span").html(" ");
	document.getElementById("commentboxleft").innerHTML = "";
	document.getElementById("answers").innerHTML = "";
}
function clearText()
{
	document.getElementById("answers").innerHTML = "";
	if($( "#forceSelect option:selected" ).val() == "t12")
		$("#fy").hide();
	else	
		$("#fy").show();
	$("#xAxis").val("");
	$("#yAxis").val("");
	$("#link").val("");
	$("#xForce").val("");
	$("#yForce").val("");
	$("#lx span").html(" ");
	$("#ly span").html(" ");
	$("#linkspan").html(" ");
	$("#fx span").html(" ");
	$("#fy span").html(" ");
	
	document.getElementById("answers").innerHTML = "";
	
}
function setZoomOffsetLink() {
	var lnk = $("#offsett option:selected" ).val();
	if(lnk == 2) { 
		setZoomLink = 2;
		linkZoom();
	} else if(lnk == 3) {
		setZoomLink = 3;
		linkZoom();
	} else if(lnk == 4) {
		setZoomLink = 4;
		linkZoom();
	}
}
function stopExperiment()
{
	
	$("#startExperiment").attr("disabled", false);
	$("#startExperiment").text("Reset Experiment");
	$('#startExperiment').css('opacity', '1');
	$("#stopExperiment").hide();
	$("#resetExperiment").show();
	
	ctx2.clearRect(0,0,500,400);
}
function resetExperiment()
{
	
	exptSelected = 0;
	$("#simscreen").hide();
	$("#resetExperiment").hide();
	$("#experiments").show();	
	$('#linkings').hide(); 
	$('#titleincanvas').hide(); 
	$('#questionsAcc').hide(); 
	$('#questionsOffset').hide(); 
	$('#questionsForce').hide(); 
	$('#OffLink').hide(); 
	// $('#screenchangesforward').show();
	// $('#screenchangesbackward').show();
  $('#screenchangesforward').css({
    "opacity": 1,
    "pointer-events": "auto"
  });
  
  $('#screenchangesbackward').css({
    "opacity": 1,
    "pointer-events": "auto"
  }); 
	$('#screenPrev').show();
		$('#screenNext').show();
  ptx = [];pt1x = []; pt2x = [];pt3x = [];
  pty = [];pt1y = [];pt2y = [];pt3y = [];
  // $('#playpausebutton').hide(); 
  // $('#rotationbutton').hide(); 
  $('#playpausebutton').css({
    "opacity": 0.5,
    "pointer-events": "none"
  });
  
  $('#rotationbutton').css({
    "opacity": 0.5,
    "pointer-events": "none"
  }); 
  $('#controls').show(); 
  $('#tabchangeforward').show(); 
  $('#tabchangebackward').show();
  $('#startExperiment').show(); 
  $('#datatable1').hide(); 
  $('#datatable2').hide(); 
  $('#datatable3').hide(); 
  $('#datatable4').hide(); 
  $('#linklenght').show();
document.getElementById('commentboxright').innerHTML = "";
document.getElementById("commentboxleft").innerHTML = "";
document.getElementById("answers").innerHTML = "";
ctx2.clearRect(0,0,550,400); //clears the complete canvas#simscreen everytime

}



