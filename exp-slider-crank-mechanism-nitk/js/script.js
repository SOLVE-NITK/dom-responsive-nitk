
//Script specific to simulation

//program variables
//controls section
var simstatus=0; 
var rotstatus=1;
var tabchanges = 0;
var screenchanges = 0;
var exptSelected = 0;
//comments section
var commenttext="Some Text";
var commentloc=0;
//computing section
var trans= new point(50,75);
var trans2 = new point(200,225);
var transV= new point(450,125);
var transA= new point(270,290);
var transl1 = new point(400,100);
var transl2 = new point(100,200);
var transl3 = new point(200,320);


var scaleP=2;
var scaleP2=4;
var scaleV=0.5;
var scaleA=2;
var scaleS = 400;
var o= new point(0,0,"");
var a= new point(0,0,"");
var b= new point(0,0,"");
var vo= new point(0,0,"O");
var va= new point(0,0,"a");
var Va= new point(0,0,"Va");
var Vb= new point(0,0,"Vb");
var Vba= new point(0,0,"Vba");
var vb= new point(0,0,"b");
var vba= new point(0,0,"ba");
var ao= new point(0,0,"AO");
var aa= new point(0,0,"Aa");
// var 
var ab= new point(0,0,"Ab");
var aba= new point(0,0,"Aba");
var acba= new point(0,0,"ACba");
var atba= new point(0,0,"ATba");

// var Va;
//Link 1 Free Body Diagram
var ol1= new point(0,0,"A");
//var dl1= new point(0,0,"D");
//Forces for Link1
var f21= new point(0,0,"F21");
var f21theta;
var f41theta;
var f41= new point(0,0,"F41");
//Link 2 Free Body Diagram
var ol2= new point(0,0,"O");
var al2= new point(0,0,"A");
//Forces for Link2
var f12= new point(0,0,"F12");
var f12theta;
var f32theta;
var f32= new point(0,0,"F32");
//Link 3 Free Body Diagram
var al3= new point(0,0,"A");
var bl3= new point(0,0,"B");
//Forces for Link 3
var f23= new point(0,0,"F23");
var f23theta;
var f43theta;
var fpvaltheta;
var f43= new point(0,0,"F43");
var fpval = new point(0,0,"Fp");

//Screen 2 Accelerations

var accl2 = new point(0,0,"A2");
var accl3 = new point(0,0,"A3");
var accl4 = new point(0,0,"A4");
var A2cg = new point(0,0,"A2cg");
var A3cg = new point(0,0,"A3cg");
var A4cg = new point(0,0,"A4cg");
//var d= new point(0,0,"D");
//Link 4 Free Body Diagram
var bl4 = new point(0,0,"B");
//Forces for Link 4
var f14 = new point(0,0,"B");
var f34= new point(0,0,"B");
var F34= new point(0,0,"F34");
var F14= new point(0,0,"F14");
var Fp= new point(0,0,"Fp");
//Centroidal Point definitions.
var cgl2 = new point(0,0,"C");
var cgl3 = new point(0,0,"C");
var cgl4 = new point(0,0,"C");

//Force Moment Couple of forces about a point to give moment zero with inertial force
var hl2 = new point(0,0,"Hl2");
var hl3 = new point(0,0,"Hl3");
var hl4 = new point(0,0,"Hl4");

// Inertial Force definitions.
var finl2 = new point(0,0,"Finl2");
var finl3 = new point(0,0,"Finl3");
var finl4 = new point(0,0,"Finl4");
var finl2theta;
var finl3theta;
var finl4theta;

//Inertial Forces screen3.
var hfl2 = new point(0,0,"hfl2");
var hfl3 = new point(0,0,"hfl3");
var hfl4 = new point(0,0,"hfl4");

//Length vector declarations.
var r12x;
var r12y;
var r32x;
var r32y;
var r23x;
var r23y;
var r43x;
var r43y;

// var result=[0,0,0];

var deltay,deltax;

var x1, x2, x3, x4, x5, x6, x7, x8;

var a2, a2cg, a2cgx, a2cgy, a3, a3cg, a3cgx, a3cgy, a4cgx, a4cgy;
var beta2, beta3, Ig2, Ig3;
var f12x, f12y, f32x, f32y, f43x, f43y, f14y, T12, fpx, fpy, fp,Tl2,Tl3,Tl4;
var m2, m3, m4;

var theta2 = 40; // all angles to be defined either in degrees only or radians only throughout the program and convert as and when required
var phi=0; // All angles in Degrees. (mention the specification in the script like here) 
var omega2=1; // angular velocity in rad/s
var omega3=0, theta3=0, alpha3=0, alpha2 = 0;
var vela=0,velba=0,velb=0;
var accta=0,accca=0,acca=0,acctba=0,acccba=0,accba=0,accb=0;
var angba=0;
var r=0,l=0;
var flaggrashof=true;
//graphics section
var canvas, canvas2;
var ctx, ctx2;
//timing section
var simTimeId = setInterval("",'1000');
var pauseTime = setInterval("",'1000');
var time=0;
//point tracing section
//point tracing section
var ptx = [],pt1x = [], pt2x = [],pt3x = [];
var pty = [],pt1y = [], pt2y = [],pt3y = [];
//click status of legend and quick reference
var legendCS = false;
var quickrefCS = false;
//temporary or dummy variables
var temp=0;
var offset=0;

var matrix = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          ];
var result = [0, 0, 0];




/*
// for trials during development
function trythis()
{ 		alert();}
*/

//change simulation specific css content. e.g. padding on top of variable to adjust appearance in variables window

function editcss()
{
$('.variable').css('padding-top','25px');
$('#datatable1').css('position','absolute');
$('#datatable2').css('position','absolute');

//  <!-- $('#legend').css("width",document.getElementById('legendimg').width+"px"); -->
// <!-- $('#legend').css("height", document.getElementById('legendimg').height+"px"); -->
//$('#quickref').css("height",document.getElementById('quickrefimg').height+"px");
$('#legend').css('left','500px');
$('#legend').css('top','320px'); 
$('#datatable1').css('left','30px');
$('#datatable1').css('top','250px');  

$('#datatable2').css('left','480px');
$('#datatable2').css('top','430px');
$('#datatable2').css('border','0');
$('#datatable2').css('border','70px');
$('#datatable2').css('font-size','14px');
$('#datatable2').css('color','#330099');
$('#commentboxright').css('font-size','14px');

}

//start of simulation here; starts the timer with increments of 0.1 seconds
function startsim()
{
simTimeId=setInterval("time=time+0.1; varupdate(); ",'100');
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
  }
    if (imgfilename=="blueplaydull")
  {
    time=0;			
  	 clearInterval(pauseTime);
    document.getElementById('playpausebutton').src="images/bluepausedull.svg";
    simTimeId=setInterval("time=time+0.1; varupdate(); ",'100');    
    simstatus=0;
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



//Initialise system parameters here
function varinit()
{
varchange();		
//Variable r1 slider and number input types
//$('#r1slider').slider("value", 80);	
//$('#r1spinner').spinner("value", 80);
//Variable r2 slider and number input types

$('#r2slider').slider("value", 40);	
$('#r2spinner').spinner("value", 40);
//Variable r3 slider and number input types
$('#r3slider').slider("value", 100);	
$('#r3spinner').spinner("value", 100); 

//Variable r4 slider and number input types
//$('#r4slider').slider("value", 60);	
//$('#r4spinner').spinner("value", 60);
//Variable m2 slider and number input types
$('#m2slider').slider("value", 1);  
$('#m2spinner').spinner("value", 1);
//Variable m3 slider and number input types
$('#m3slider').slider("value", 1);  
$('#m3spinner').spinner("value", 1);

$('#m4slider').slider("value", 1);  
$('#m4spinner').spinner("value", 1);


//Variable theta2 slider and number input types
$('#theta2slider').slider("value", 40);	
$('#theta2spinner').spinner("value", 40);
//Variable omega2 slid er and number input types
$('#omega2slider').slider("value", 1);	
$('#omega2spinner').spinner("value", 1);

//fpx slider and number input values.
$('#fpxslider').slider("value", 0); 
$('#fpxspinner').spinner("value", 0);

//fpy slider and number input values.
$('#fpyslider').slider("value", 0); 
$('#fpyspinner').spinner("value", 0);
}

// Initialise and Monitor variable containing user inputs of system parameters.
//change #id and repeat block for new variable. Make sure new <div> with appropriate #id is included in the markup
function varchange()
{
/*//Variable r1 slider and number input types
$('#r1slider').slider({ max : 100, min : 20, step : 2 });		// slider initialisation : jQuery widget
$('#r1spinner').spinner({ max : 100, min : 20, step : 2 });		// number initialisation : jQuery widget			
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#r1slider" ).on( "slide", function( e, ui ) { $('#r1spinner').spinner("value",ui.value); ptx=[]; pty=[]; } );
$( "#r1spinner" ).on( "spin", function( e, ui ) { $('#r1slider').slider("value",ui.value); ptx=[]; pty=[]; } );
$( "#r1spinner" ).on( "change", function() {  varchange() } );
*/
//Variable r2 slider and number input types
$('#r2slider').slider({ max : 50, min : 20, step : 2 });		// slider initialisation : jQuery widget
$('#r2spinner').spinner({ max : 50, min : 20, step : 2 });		// number initialisation : jQuery widget			
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#r2slider" ).on( "slide", function( e, ui ) { $('#r2spinner').spinner("value",ui.value);  ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#r2spinner" ).on( "spin", function( e, ui ) { $('#r2slider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#r2spinner" ).on( "change", function() {  varchange() } );

//Variable fpx slider and number input types
$('#fpxslider').slider({ max : 0.35, min : 0, step : 0.05 });    // slider initialisation : jQuery widget
$('#fpxspinner').spinner({ max : 0.35, min : 0, step : 0.05 });    // number initialisation : jQuery widget      
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#fpxslider" ).on( "slide", function( e, ui ) { $('#fpxspinner').spinner("value",ui.value);  ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#fpxspinner" ).on( "spin", function( e, ui ) { $('#fpxslider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#fpxspinner" ).on( "change", function() {  varchange() } );

//Variable fpy slider and number input types
$('#fpyslider').slider({ max : 0.35, min : 0, step : 0.05 });    // slider initialisation : jQuery widget
$('#fpyspinner').spinner({ max : 0.35, min : 0, step : 0.05 });    // number initialisation : jQuery widget      
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#fpyslider" ).on( "slide", function( e, ui ) { $('#fpyspinner').spinner("value",ui.value);  ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#fpyspinner" ).on( "spin", function( e, ui ) { $('#fpyslider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#fpyspinner" ).on( "change", function() {  varchange() } );

//Variable r3 slider and number input types
$('#r3slider').slider({ max : 120, min : 80, step : 2 });		// slider initialisation : jQuery widget
$('#r3spinner').spinner({ max : 120, min : 80, step : 2 });		// number initialisation : jQuery widget			
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#r3slider" ).on( "slide", function( e, ui ) { $('#r3spinner').spinner("value",ui.value);  ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[]; } );
$( "#r3spinner" ).on( "spin", function( e, ui ) { $('#r3slider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#r3spinner" ).on( "change", function() {  varchange() } );

$('#m2slider').slider({ max : 2, min : 1, step : 0.2 });   // slider initialisation : jQuery widget
$('#m2spinner').spinner({ max : 2, min : 1, step : 0.2 });   // number initialisation : jQuery widget      
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#m2slider" ).on( "slide", function( e, ui ) { $('#m2spinner').spinner("value",ui.value);  ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[]; } );
$( "#m2spinner" ).on( "spin", function( e, ui ) { $('#m2slider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#m2spinner" ).on( "change", function() {  varchange() } );

$('#m3slider').slider({ max : 2, min : 1, step : 0.2 });   // slider initialisation : jQuery widget
$('#m3spinner').spinner({ max : 2, min : 1, step : 0.2 });   // number initialisation : jQuery widget      
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#m3slider" ).on( "slide", function( e, ui ) { $('#m3spinner').spinner("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[]; } );
$( "#m3spinner" ).on( "spin", function( e, ui ) { $('#m3slider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#m3spinner" ).on( "change", function() {  varchange() } );

$('#m4slider').slider({ max : 2, min : 1, step : 0.2 });   // slider initialisation : jQuery widget
$('#m4spinner').spinner({ max : 2, min : 1, step : 0.2 });   // number initialisation : jQuery widget      
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#m4slider" ).on( "slide", function( e, ui ) { $('#m4spinner').spinner("value",ui.value);  ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[]; } );
$( "#m4spinner" ).on( "spin", function( e, ui ) { $('#m4slider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#m4spinner" ).on( "change", function() {  varchange() } );




/*//Variable r4 slider and number input types
$('#r4slider').slider({ max : 100, min : 20, step : 2 });		// slider initialisation : jQuery widget
$('#r4spinner').spinner({ max : 100, min : 20, step : 2 });		// number initialisation : jQuery widget			
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#r4slider" ).on( "slide", function( e, ui ) { $('#r4spinner').spinner("value",ui.value); ptx=[]; pty=[]; } );
$( "#r4spinner" ).on( "spin", function( e, ui ) { $('#r4slider').slider("value",ui.value); ptx=[]; pty=[]; } );
$( "#r4spinner" ).on( "change", function() {  varchange() } );
*/
//Variable theta2 slider and number input types
$('#theta2slider').slider({ max : 360, min : 0, step : 2 });		// slider initialisation : jQuery widget
$('#theta2spinner').spinner({ max : 360, min : 0, step : 2 });		// number initialisation : jQuery widget			
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#theta2slider" ).on( "slide", function( e, ui ) { $('#theta2spinner').spinner("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#theta2spinner" ).on( "spin", function( e, ui ) { $('#theta2slider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#theta2spinner" ).on( "change", function() {  varchange() } );

//Variable omega2 slider and number input types
$('#omega2slider').slider({ max : 1.4, min : 1, step : 0.2 });		// slider initialisation : jQuery widget
$('#omega2spinner').spinner({ max : 1.4, min : 1, step : 0.2 });		// number initialisation : jQuery widget			
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#omega2slider" ).on( "slide", function( e, ui ) { $('#omega2spinner').spinner("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#omega2spinner" ).on( "spin", function( e, ui ) { $('#omega2slider').slider("value",ui.value); ptx=[]; pty=[];pt1x=[]; pt1y=[];pt2x=[]; pt2y=[];pt3x=[]; pt3y=[];  } );
$( "#omega2spinner" ).on( "change", function() {  varchange() } );

varupdate();

}

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

//Computing of various system parameters
function varupdate()
{

$('#r2slider').slider("value", $('#r2spinner').spinner('value'));  //updating slider location with change in spinner(debug)
$('#r3slider').slider("value", $('#r3spinner').spinner('value'));
$('#theta2slider').slider("value", $('#theta2spinner').spinner('value')); 

//updating external forces
$('#fpxslider').slider("value", $('#fpxspinner').spinner('value'));
$('#fpyslider').slider("value", $('#fpyspinner').spinner('value'));

  //updating slider location with change in spinner(Mass)
$('#m2slider').slider("value", $('#m2spinner').spinner('value'));
$('#m3slider').slider("value", $('#m3spinner').spinner('value'));
$('#m4slider').slider("value", $('#m4spinner').spinner('value'));

//Link Masses
m2=$('#m2spinner').spinner("value");
m3=$('#m3spinner').spinner("value");
m4=$('#m4spinner').spinner("value");

fpx=$('#fpxspinner').spinner("value");
fpy=$('#fpyspinner').spinner("value");



r=$('#r2spinner').spinner("value");
l=$('#r3spinner').spinner("value");

$('#r3slider').slider({max: 3*$('#r2slider').slider('value')});
$('#r3slider').slider({min: 2.5*$('#r2slider').slider('value')});
$('#r3spinner').spinner({max: 3*$('#r2slider').slider('value')});
$('#r3spinner').spinner({min:2.5*$('#r2slider').slider('value')});
screenchange();
tabchange();
printcomment("Navigate to various other pages through the buttons",2);
if(tabchanges==0)
{
	$('#linkmass1').show();
	$('#linkmass').show();
	$('#linkmass2').show();


	$('#linklenght1').hide();
	$('#linklenght2').hide();


	$('#ex_force_x').hide();
	$('#ex_force_y').hide();
}

if(tabchanges==1)
{
	$('#linkmass1').hide();
	$('#linkmass').hide();
	$('#linkmass2').hide();


	$('#linklenght1').show();
	$('#linklenght2').show();


	$('#ex_force_x').hide();
	$('#ex_force_y').hide();
}

if(tabchanges==2)
{
	$('#linkmass1').hide();
	$('#linkmass').hide();
	$('#linkmass2').hide();


	$('#linklenght1').hide();
	$('#linklenght2').hide();


	$('#ex_force_x').show();
	$('#ex_force_y').show();
}

if(!simstatus)
{
$('#theta2set').hide();
/*
$('#omega2slider').slider("enable"); 
$('#omega2spinner').spinner("enable");
*/
$('#omega2set').show();

/*
$('#linklenght1').hide();
$('#linklenght2').hide();


$('#ex_force_x').show();
$('#ex_force_y').show();
*/

omega2=rotstatus*$('#omega2spinner').spinner("value");

theta2=theta2+(0.1*deg(omega2));
theta2=theta2%360;
if(theta2<0) theta2+=360;
//printcomment("Acceleration analysis of Slider Crank Mechanism",1);
}
if(simstatus)
{
$
$('#theta2set').show();


$('#omega2set').hide();


omega2=rotstatus*$('#omega2spinner').spinner("value");
theta2=$('#theta2spinner').spinner("value");

}

//Position Calculations
phi=deg(Math.asin((r*Math.sin(rad(theta2)))/l));
theta3=-phi;
//Position Scale Calculation
if(r<30) scaleP=1;
if(r>30) scaleP=0.5;
//Position Coordinate Definitions
o.xcoord=0;
o.ycoord=0;
a.xcoord=o.xcoord+scaleP*r*Math.cos(rad(theta2));
a.ycoord=o.ycoord+scaleP*r*Math.sin(rad(theta2));
b.xcoord=a.xcoord+scaleP*l*Math.cos(rad(theta3));
b.ycoord=a.ycoord+scaleP*l*Math.sin(rad(theta3));

//Velocity Calculations
vela=r*omega2;
omega3=(-r*omega2*Math.cos(rad(theta2)))/(l*Math.cos(rad(theta3)));
t3=l*omega3;
velba=l*omega3;
velb=-r*omega2*Math.sin(rad(theta2))-l*omega3*Math.sin(rad(theta3));

//Velocity Scale Calculation
if(Math.abs(r*omega2)<50) scaleV=2;
else if(Math.abs(r*omega2)>=50 && Math.abs(r*omega2)<100) scaleV=1;
else if(Math.abs(r*omega2)>=100 && Math.abs(r*omega2)<250) scaleV=0.5;
else if(Math.abs(r*omega2)>=250) scaleV=0.125;
else scaleV=0.5;

//Velocity Coordinate Definitions
vo.xcoord=0;
vo.ycoord=0;
va.xcoord=vo.xcoord+scaleV*vela*Math.cos(rad(90+theta2));
va.ycoord=vo.ycoord+scaleV*vela*Math.sin(rad(90+theta2));
vba.xcoord=va.xcoord+scaleV*velba*Math.cos(rad(90+theta3));
vba.ycoord=va.ycoord+scaleV*velba*Math.sin(rad(90+theta3));
vb.xcoord=vo.xcoord+scaleV*velb*Math.cos(rad(0));
vb.ycoord=vo.ycoord+scaleV*velb*Math.sin(rad(0));

var t1=0;
//Acceleration Calculations
accca=r*omega2*omega2;
accta=0;
acca=Math.sqrt(accta*accta+accca*accca);

acccba=l*omega3*omega3;

acctba=(acca*Math.sin(rad(theta2))-acccba*Math.sin(rad(phi)))/Math.cos(rad(phi));
alpha3=acctba/l;

accba=Math.sqrt(acctba*acctba+acccba*acccba);

accb=-(accca*Math.cos(rad(theta2))+acccba*Math.cos(rad(theta3))+acctba*Math.sin(rad(theta3)));

printcomment("",2);
//Acceleration Scale Calculation
if(Math.abs(r*omega2*omega2)<80) scaleA=2;
else if(Math.abs(r*omega2*omega2)>=80 && Math.abs(r*omega2*omega2)<150) scaleA=1;
else if(Math.abs(r*omega2*omega2)>=150 && Math.abs(r*omega2*omega2)<350) scaleA=0.5;
else if(Math.abs(r*omega2*omega2)>=350 && Math.abs(r*omega2*omega2)<700) scaleA=0.25;
else if(Math.abs(r*omega2*omega2)>=700 && Math.abs(r*omega2*omega2)<1000) scaleA=0.125;
else if(Math.abs(r*omega2*omega2)>=1000) scaleA=0.0625;
else ;


//Acceleration Coordinate Definitions
ao.xcoord=0;
ao.ycoord=0;
aa.xcoord=ao.xcoord+scaleA*acca*Math.cos(rad(180+theta2));
aa.ycoord=ao.ycoord+scaleA*acca*Math.sin(rad(180+theta2));
acba.xcoord=aa.xcoord+scaleA*acccba*Math.cos(rad(180+theta3));
acba.ycoord=aa.ycoord+scaleA*acccba*Math.sin(rad(180+theta3));
atba.xcoord=acba.xcoord+scaleA*acctba*Math.cos(rad(90+theta3));
atba.ycoord=acba.ycoord+scaleA*acctba*Math.sin(rad(90+theta3));
aba.xcoord=atba.xcoord;
aba.ycoord=atba.ycoord;
ab.xcoord=ao.xcoord+scaleA*accb*Math.cos(0);
ab.ycoord=ao.ycoord+scaleA*accb*Math.sin(0);

//Free Body Diagram Coordinates

//Link 1 Definitions

ol1.xcoord = 0;
ol1.ycoord = 0;

//pending

//Link 2 Definitons

ol2.xcoord=0;
ol2.ycoord=0;

al2.xcoord=a.xcoord*3/*+(r*Math.cos(rad(theta2)))*/;
al2.ycoord=a.ycoord*3/*+(r*Math.sin(rad(theta2)))*/;

//Link 3 Definitons
al3.xcoord=a.xcoord*3/*+(r*Math.cos(rad(theta2)))*/;
al3.ycoord=a.ycoord*3/*+(r*Math.sin(rad(theta2)))*/;

bl3.xcoord=b.xcoord*3;/*(r*Math.cos(rad(theta2)))+(l*Math.cos(rad(phi)));*/
bl3.ycoord=0;

//Link 4 Definitions

bl4.xcoord = bl3.xcoord;
bl4.ycoord = 0;


//Centroidal definitions.
//Centroidal definition for link 2.
cgl2.xcoord=(al2.xcoord/2);
cgl2.ycoord=(al2.ycoord/2);

//Centroidal definition for link 3.
cgl3.xcoord=((al3.xcoord) + (bl3.xcoord))/2;
cgl3.ycoord=(al2.ycoord/2);

//Centroidal definition for link 4.
cgl4.xcoord = bl4.xcoord;
cgl4.ycoord = bl4.ycoord;


function itan(deltay, deltax)
{
  var deltay, deltax;
  if (deltax>=0 && deltay>=0)
  {
    return deg(Math.atan(deltay/deltax));
  }
  else if (deltax>0 && deltay<0)
  {
    return (360-deg(Math.atan(deltay/deltax)));
  }
  else if (deltax<0 && deltay>0)
  {
    return (180 - deg(Math.atan(deltay/deltax))) ;
  }
  else
  {
    return(180+deg(Math.atan(deltay/deltax)));
  }
 
}
r12x = (r/2000)*(Math.cos(rad(theta2)));
r12y = (r/2000)*(Math.sin(rad(theta2)));
r32x = -(r/2000)*(Math.cos(rad(theta2)));
r32y = -(r/2000)*(Math.sin(rad(theta2)));
r23x = (l/2000)*(Math.cos(rad(phi)));
r23y = -(l/2000)*(Math.sin(rad(phi)));
r43x = -(l/2000)*(Math.cos(rad(phi)));
r43y = (l/2000)*(Math.sin(rad(phi)));

Ig2 = m2*(r)*(r)/12000000;
Ig3 = m3*(l)*(l)/12000000;

beta2=itan(alpha2,(omega2*omega2));
beta3=itan(alpha3,(omega3*omega3));

fp = Math.sqrt((fpx)*(fpx) + (fpy)*(fpy));

a2=Math.sqrt((((r/1000)*alpha2)*((r/1000)*alpha2))+(((r/1000)*omega2*omega2)*((r/1000)*omega2*omega2)));
a2cgx=(a2/2)*Math.cos(rad(theta2+beta2+180));
a2cgy=(a2/2)*Math.sin(rad(theta2+beta2+180));
a3=Math.sqrt((((l/1000)*alpha3)*((l/1000)*alpha3))+(((l/1000)*omega3*omega3)*((l/1000)*omega3*omega3)));
a3cgx=(a3/2)*Math.cos(rad(beta3-phi+180))+(a2)*Math.cos(rad(theta2+beta2+180));
a3cgy=(a3/2)*Math.sin(rad(beta3-phi+180))+(a2)*Math.sin(rad(theta2+beta2+180));
//if(theta2>0&&theta2<180)
//  {a4cgx=-Math.sqrt((a2*a2)+(a3*a3));}
//else	

a4cgx=-((a2/2)*Math.cos(rad(theta2+beta2+180))+(a3/2)*Math.cos(rad(beta3-phi+180))+(a2)*Math.cos(rad(theta2+beta2+180)));

a4cgy=0;
x1=m2*a2cgx;
x2=m2*a2cgy;
x3=Ig2*alpha2;
x4=m3*a3cgx;
x5=m3*a3cgy;
x6=Ig3*alpha3;
x7=(m4*a4cgx) - (fpx);
x8= (-fpy);

$A = [[1, 0, 1, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0, 0],
      [-r12y, r12x, -r32y, r32x, 0, 0, 0, 1],
      [0, 0, -1, 0, 1, 0, 0, 0],
      [0, 0, 0, -1, 0, 1, 0, 0],
      [0, 0, r23y, -r23x, -r43y, r43x, 0, 0],
      [0, 0, 0, 0, -1, 0, 0, 0],
      [0, 0, 0, 0, 0, -1, 1, 0]];


$x = [x1, x2, x3, x4, x5, x6, x7, x8];

$result= gauss($A, $x);

//Force moment couple Screen 3


hl2.xcoord=cgl2.xcoord+(($result[1]*((ol2.xcoord-cgl2.xcoord)/1000))+($result[3]*((al2.xcoord-cgl2.xcoord)/1000))/(-m2*a2cgy));
hl2.ycoord=cgl2.ycoord+($result[0]*((ol2.ycoord-cgl2.ycoord)/1000)+$result[2]*((al2.ycoord-cgl2.ycoord)/1000)/(-m2*a2cgx));

hl3.xcoord=cgl3.xcoord+((-$result[3]*((al3.xcoord-cgl3.xcoord)/1000))+($result[5]*((bl3.xcoord-cgl3.xcoord)/1000))/(-m3*a3cgy));
hl3.ycoord=cgl3.ycoord+((-$result[2]*(al3.ycoord-cgl3.ycoord)/1000)+($result[4]*((bl3.ycoord-cgl3.ycoord)/1000))/(-m3*a3cgx));

hl4.xcoord=bl4.xcoord;
hl4.ycoord=bl4.ycoord;


//Link2 force vectors
f12.xcoord = $result[0]*scaleS;
f12.ycoord = $result[1]*scaleS;
f12theta = acttan(f12.xcoord,f12.ycoord);


f32.xcoord = $result[2]*scaleS+al2.xcoord;
f32.ycoord = $result[3]*scaleS+al2.ycoord;
f32theta = acttan($result[2],$result[3]);


//Link3 force vectors
f23.xcoord =-$result[2]*scaleS+al3.xcoord;
f23.ycoord =-$result[3]*scaleS+al3.ycoord;
f23theta = acttan(-$result[2],-$result[3]);

//f43.xcoord = $result[2]*s+b.xcoord;
//f43.ycoord = $result[3]*s+b.ycoord;

fpx=($('#fpxspinner').spinner('value'));
fpy=($('#fpyspinner').spinner('value'));

//Slider force vectors.
fpval.xcoord = fpx*scaleS + bl4.xcoord ;
fpval.ycoord = fpy*scaleS ;
fpvaltheta = acttan(fpx,fpy);


// Link 3 force vectors. 
f43.xcoord = (($result[4])*scaleS+bl3.xcoord);
f43.ycoord = (($result[5])*scaleS+bl3.ycoord);
f43theta = acttan($result[4],$result[5]);


//Link4 force vectors

f14.xcoord = bl4.xcoord;
f14.ycoord  = $result[6]*scaleS;
if(f14.ycoord>=0)
 {f14theta = deg(22/14) ;}
else
 {f14theta=deg(3*22/14);}

f34.xcoord = -$result[4]*scaleS + bl4.xcoord;
f34.ycoord = -$result[5]*scaleS ;
f34theta = acttan(-$result[4],-$result[5]);

// Inertial force vectors.

//Link 2.
finl2.xcoord = -x1*scaleS+cgl2.xcoord;
finl2.ycoord = -x2*scaleS+ cgl2.ycoord;
finl2theta = acttan(-x1,-x2);

//Link 3.
finl3.xcoord = -x4*scaleS + cgl3.xcoord;
finl3.ycoord = -x5*scaleS + cgl3.ycoord;
finl3theta = acttan(-x4,-x5);

//Link 4.
finl4.xcoord = (x7)*scaleS + cgl4.xcoord;
finl4.ycoord = 0 + cgl4.ycoord;

if(a4cgx>=0)
	finl4theta = 0;
else
	finl4theta = 180;

//Screen 2 Acceleration Vectors

//Link 2
accl2.xcoord = (a2cgx*scaleS*3)+cgl2.xcoord;
accl2.ycoord = (a2cgy*scaleS*3)+cgl2.ycoord;

//Link 3
accl3.xcoord = (a3cgx*scaleS*3)+cgl3.xcoord;
accl3.ycoord= (a3cgy*scaleS*3) +cgl3.ycoord;


//Link 4
accl4.xcoord = ((-a4cgx*scaleS*3)+bl3.xcoord);
accl4.ycoord = 0+bl3.ycoord;

//Offset Force Vectors coordinates definition.
hfl2.xcoord = finl2.xcoord -cgl2.xcoord + hl2.xcoord ;
hfl2.ycoord = finl2.ycoord -cgl2.ycoord+ hl2.ycoord ;

hfl3.xcoord = finl3.xcoord -cgl3.xcoord + hl3.xcoord ;
hfl3.ycoord = finl3.ycoord -cgl3.ycoord + hl3.ycoord ;

hfl4.xcoord = finl4.xcoord -cgl4.xcoord + bl4.xcoord ;
hfl4.ycoord = finl4.ycoord -cgl4.ycoord + bl4.ycoord ;


// printcomment("V<sub>yx</sub>=Velocity of y with respect to x<br>A<sub>yx</sub>=Acceleration of y with respect to x",2);

if(screenchanges==0)
{   

    ptx = [];pt1x = []; pt2x = [];pt3x = [];
  pty = [];pt1y = [];pt2y = [];pt3y = [];
  // if ($(window).width() < 944) {
  //   // Apply styles for small screens
  //   $('#variables').css('width', '100%');
  //   } else {
  //   // Apply styles for larger screens
  //   $('#variables').css('width', '100%');
  //   }
   document.getElementById("datatable1").style.display="inline";

   document.getElementById("datatable2").style.visibility="visible";

       $('#linkings').hide();
   $('#Finl2').hide(); 
    $('#Finl3').hide(); 
    $('#Finl4').hide();
    $('#hfl2').hide();
    $('#hfl3').hide();
    $('#hfl4').hide();
    $('#controls').hide(); 
    if ($(window).width() < 944) {
      // Apply styles for small screens
      $('#variables').css('width', '100%');
      } else {
      // Apply styles for larger screens
      $('#variables').css('width', '201%');
      }
  
    draw();
    drawvel(ctx);
    drawacc(ctx);
	$('#startExperiment').hide(); 
    $('#simscreen').show(); 
    $('#experiments').hide(); 
	$('#playpausebutton').show(); 
  $('#playbutton').show();
	$('#rotationbutton').show(); 
  $('#rotate').show();
  $('#playpausebutton').css({
    "opacity": 1,
    "pointer-events": "auto"
  });
  
  $('#rotationbutton').css({
    "opacity": 1,
    "pointer-events": "auto"
  }); 
    printcomment("",1);
    document.getElementById("commentboxleft1").innerHTML = "";
    printcomment("Navigate to various other pages through the buttons",2);
}

else if(screenchanges==1)
{
 ptx = [];pt1x = []; pt2x = [];pt3x = [];
  pty = [];pt1y = [];pt2y = [];pt3y = [];
  
   document.getElementById("datatable1").style.display="inline";
   document.getElementById("datatable2").style.display="none";
   if ($(window).width() < 944) {
    // Apply styles for small screens
    $('#variables').css('width', '100%');
    } else {
    // Apply styles for larger screens
    $('#variables').css('width', '200%');
    }
  draw2();
  $('#simscreen').show(); 
    $('#experiments').hide(); 
	$('#playpausebutton').show();
  $('#playbutton').show(); 
	$('#rotationbutton').show(); 
  $('#rotate').show();
  $('#startExperiment').hide();
  $('#controls').hide(); 
   $('#Finl2').hide(); 
    $('#Finl3').hide(); 
    $('#Finl4').hide(); 
    $('#hfl2').hide();
    $('#hfl3').hide();
    $('#hfl4').hide()
    $('#playpausebutton').css({
      "opacity": 1,
      "pointer-events": "auto"
    });
    
    $('#rotationbutton').css({
      "opacity": 1,
      "pointer-events": "auto"
    }); 
    document.getElementById("commentboxleft1").innerHTML = "";
  printcomment("A2cg=Acceleration of CG of link 2<br>A4cg=Acceleration of CG of link 4<br>A3cg=Acceleration of CG of link 3",1);
//   printcomment("Navigate to various other pages through the buttons",2);
}

else if(screenchanges==2)
{
		// $('#linkings').show(); 

 ptx = [];pt1x = []; pt2x = [];pt3x = [];
  pty = [];pt1y = [];pt2y = [];pt3y = [];

   document.getElementById("datatable1").style.display="inline";
   document.getElementById("datatable2").style.display="none";
   if ($(window).width() < 944) {
    // Apply styles for small screens
    $('#variables').css('width', '100%');
    } else {
    // Apply styles for larger screens
    $('#variables').css('width', '200%');
    }

   $('#simscreen').show(); 
    $('#experiments').hide();
  $('#startExperiment').hide(); 
  $('#controls').hide(); 
	$('#playpausebutton').show(); 
  $('#playbutton').show();
	$('#rotationbutton').show(); 
  $('#rotate').show();
	  $('#startExperiment').hide(); 
    $('#playpausebutton').css({
      "opacity": 1,
      "pointer-events": "auto"
    });
    
    $('#rotationbutton').css({
      "opacity": 1,
      "pointer-events": "auto"
    }); 
  draw3();
  document.getElementById("commentboxleft1").innerHTML = "";
 printcomment("Finl2=Inertial Force acting on Link 2<br>Finl3 = Inertial Force acting on Link 3<br>Finl4 = Inertial Force acting on Link 4",1);
//  printcomment("Navigate to various other pages through the buttons",2);
}
else if(screenchanges==3) 
{

document.getElementById("datatable1").style.display="inline";
document.getElementById("datatable2").style.display="none";

if ($(window).width() < 944) {
	// Apply styles for small screens
	$('#variables').css('width', '100%');
  } else {
	// Apply styles for larger screens
	$('#variables').css('width', '200%');
  }
draw();
drawdyn(ctx);
document.getElementById("commentboxleft1").innerHTML = "Respective x and y components of<br> forces in datatable";
// printcomment("",1);
// printcomment("Navigate to various other pages through the buttons",2);
$('#simscreen').show(); 
    $('#experiments').hide(); 
	  $('#startExperiment').hide(); 
    $('#controls').hide(); 
 $('#Finl2').hide(); 
    $('#Finl3').hide(); 
    $('#Finl4').hide(); 
    $('#hfl2').hide();
    $('#hfl3').hide();
    $('#hfl4').hide();
	$('#playpausebutton').show(); 
  $('#playbutton').show();
	$('#rotationbutton').show(); 
  $('#rotate').show();
  $('#playpausebutton').css({
    "opacity": 1,
    "pointer-events": "auto"
  });
  
  $('#rotationbutton').css({
    "opacity": 1,
    "pointer-events": "auto"
  }); 

}
else if(screenchanges == 4) {
  // printcomment("",4);
  document.getElementById("commentboxleft1").innerHTML = "";
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
		// $('#linkings').show();	
		$('#titleincanvas').show(); 
	}
	ptx = [];pt1x = []; pt2x = [];pt3x = [];
	pty = [];pt1y = [];pt2y = [];pt3y = [];
  $('#variables').css("width", "100%");
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
	
	document.getElementById('commentboxright').innerHTML = "";
}
}
//Simulation graphics
function draw()
{
  canvas = document.getElementById("simscreen");
  ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,550,400);  //clears the complete canvas#simscreen everytime
  
  pointtrans(o,trans);
  pointtrans(a,trans);
  pointtrans(b,trans);
  
//Crank Center and Sliding base 
   ctx.beginPath();  
   ctx.strokeStyle="#000000";
   ctx.lineWidth=10;
	ctx.moveTo(o.xcoord,o.ycoord);	//crank center
	ctx.lineTo(o.xcoord,o.ycoord+5);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
   ctx.lineWidth=5;
	ctx.strokeStyle= "#666666";
	ctx.moveTo(25,o.ycoord+10);	//sliding base line
	ctx.lineTo(200,o.ycoord+10);
	ctx.stroke();
	ctx.closePath();	

//Position Diagram	
  pointjoin(o,a,ctx,"#FF0000",5);

  pointdisp(o,ctx,2,"#000000","#000",'','','');
 
  pointjoin(a,b,ctx,"#330099",5);
  
  pointdisp(a,ctx,8,"#00FFCC","#00FFCC",'','','');

  pointdisp(b,ctx,5,"#000000","#003366",'','','');

  if(screenchanges==0)
  {
    drawremva(ctx);
  }
  else
  {
  drawrem(ctx);
  }
// displaying sliding link  
  ctx.globalAlpha=0.7; 
  drawrect(b,30,15,5,ctx,"#808080","#808080",1);  
  ctx.globalAlpha=1;  
// Displaying points A and B
  ctx.strokeStyle="#000";	
  ctx.strokeText('B', b.xcoord-3,b.ycoord+3);	
  ctx.strokeText('A', a.xcoord-3,a.ycoord+3);	

  ctx.restore();

//displaying scale values
  ctx.save();
  ctx.translate(0.75,0.75);
   ctx.lineWidth=1;
   ctx.font="18px 'Nunito', sans-serif";
   ctx.fillStyle="#000000";
  if(scaleP>=1)
  ctx.fillText("Scale = 1:"+scaleP,15,30);
  if(scaleP<1)
  ctx.fillText("Scale = "+1/scaleP+":1",15,30);

// Free Body Diagram Title  
  ctx.save();
   ctx.lineWidth=1;
   ctx.font="18px 'Nunito', sans-serif";
   ctx.strokeStyle="#000000";

  ctx.restore();   

  

}

function draw2()
{
  
  canvas = document.getElementById("simscreen");
  ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,550,400);  //clears the complete canvas#simscreen everytime
  
 ol2 = pointtrans(ol2,trans2);
 al2 = pointtrans(al2,trans2);
 al3 = pointtrans(al3,trans2);
 bl3 = pointtrans(bl3,trans2);
 bl4 = pointtrans(bl4,trans2);
 cgl2 = pointtrans(cgl2,trans2);
 cgl3 = pointtrans(cgl3,trans2);
 cgl4 = pointtrans(cgl4,trans2);
 accl2 = pointtrans(accl2,trans2);
 accl3 = pointtrans(accl3,trans2);
 accl4 = pointtrans(accl4,trans2);

pointjoin(ol2,al2,ctx,"blue");
pointdisp(ol2,ctx);
// pointdisp(cgl2,ctx);
pointdisp(al3,ctx);


pointjoin(al3,bl3,ctx,"blue");
pointdisp(al3,ctx);
//pointdisp(cgl3,ctx);
pointdisp(bl3,ctx);

drawrect(bl3,30,15,5,ctx,"#808080","#808080",4);
pointdisp(bl3,ctx);

pointjoin(accl2,cgl2,ctx,"red",2);
drawArrow(accl2.xcoord,accl2.ycoord,ctx,-finl2theta,15,30,"red");
pointjoin(accl3,cgl3,ctx,"red",2);
drawArrow(accl3.xcoord,accl3.ycoord,ctx,-finl3theta,15,30,"blue");
pointjoin(accl4,bl3,ctx,"red",2);
drawArrow(accl4.xcoord,accl4.ycoord,ctx,-finl4theta,15,30,"blue");

A2cg.xcoord=(accl2.xcoord + cgl2.xcoord)/2;
  A2cg.ycoord=(accl2.ycoord + cgl2.ycoord)/2;
  pointdisp(A2cg, ctx, 2, "blue", "white", "black", "12px", "12px");

  A3cg.xcoord=(accl3.xcoord + cgl3.xcoord)/2;
  A3cg.ycoord=(accl3.ycoord + cgl3.ycoord)/2;
  pointdisp(A3cg, ctx, 2, "blue", "white", "black", "12px", "12px");


  A4cg.xcoord=(accl4.xcoord + cgl4.xcoord)/2;
  A4cg.ycoord=(accl4.ycoord + cgl4.ycoord)/2;
  pointdisp(A4cg, ctx, 2, "blue", "white", "black", "12px", "12px");
document.getElementById("aa").style.position = 'absolute';
document.getElementById("aba").style.position = 'absolute';
document.getElementById("ab").style.position = 'absolute';

document.getElementById("aa").style.margin = '0';
document.getElementById("aba").style.margin = '0';
document.getElementById("ab").style.margin = '0';

document.getElementById("aa").style.width = '20px';
document.getElementById("aba").style.width = '20px';
document.getElementById("ab").style.width = '20px';

document.getElementById("aba").style.height = '20px';
document.getElementById("aa").style.height = '20px';
document.getElementById("ab").style.height = '20px';

document.getElementById("aa").style.fontSize = '11px';
document.getElementById("aba").style.fontSize = '11px';
document.getElementById("ab").style.fontSize = '11px';


document.getElementById("aa").style.left = ""+(-10+Math.round(40+accl2.xcoord))+"px";
document.getElementById("aba").style.left = ""+(-10+Math.round(40+accl3.xcoord))+"px";
document.getElementById("ab").style.left = ""+(-10+Math.round(40+accl4.xcoord))+"px";

document.getElementById("aa").style.top = ""+(-10+Math.round(90+accl2.ycoord))+"px";
document.getElementById("aba").style.top = ""+(-10+Math.round(90+accl3.ycoord))+"px";
document.getElementById("ab").style.top = ""+(-10+Math.round(90+accl4.ycoord))+"px";

if(screenchanges == 4) {
	document.getElementById("datatable1").innerHTML = " ";
} else {
document.getElementById("datatable1").innerHTML="\
<table>\
<tr><th>Acceleration</th><th>Value(ms-2)</th></tr>\
<tr><th>A2cgx</th><th>"+roundd(a2cgx,5)+"</tr>\
<tr><th>A2cgy</th><th>"+roundd(a2cgy,5)+"</th></tr>\
<tr><th>A3cgx</th><th>"+roundd(a3cgx,5)+"</th></tr>\
<tr><th>A3cgy</th><th>"+roundd(a3cgy,5)+"</th></tr>\
<tr><th>A4cgx</th><th>"+roundd(a4cgx,5)+"</th></tr>\
<tr><th>A4cgy</th><th>"+roundd(a4cgy,5)+"</th></tr>\
</table>";  
}

  if(screenchanges==0)
  {
    drawremva(ctx);
  }
  else
  {
  drawrem(ctx);
  }
 


  ctx.restore();   

 
}


function draw3()
{
                 
  canvas = document.getElementById("simscreen");
  ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,550,400);  //clears the complete canvas#simscreen everytime

 ol2 = pointtrans(ol2,trans2);
 al2 = pointtrans(al2,trans2);
 al3 = pointtrans(al3,trans2);
 bl3 = pointtrans(bl3,trans2);
 bl4 = pointtrans(bl4,trans2);

 cgl2 = pointtrans(cgl2,trans2);
 cgl3 = pointtrans(cgl3,trans2);
 cgl4 = pointtrans(cgl4,trans2);

 hfl2 = pointtrans(hfl2,trans2);
 hfl3 = pointtrans(hfl3,trans2);
 hfl4 = pointtrans(hfl4,trans2);

 hl2 = pointtrans(hl2,trans2);
 hl3 = pointtrans(hl3,trans2);
 hl4 = pointtrans(hl4,trans2);

 accl2 = pointtrans(accl2,trans2);
 accl3 = pointtrans(accl3,trans2);
 accl4 = pointtrans(accl4,trans2);



pointjoin(ol2,al2,ctx,"blue");
pointdisp(ol2,ctx);
//pointdisp(cgl2,ctx);
pointdisp(al3,ctx);


pointjoin(al3,bl3,ctx,"blue");
pointdisp(al3,ctx);
//pointdisp(cgl3,ctx);
pointdisp(bl3,ctx);

drawrect(bl3,30,15,5,ctx,"#808080","#808080",4);
pointdisp(bl3,ctx);

pointjoin(accl2,cgl2,ctx,"red",2);
drawArrow(accl2.xcoord,accl2.ycoord,ctx,-finl2theta,15,30,"red");
pointjoin(accl3,cgl3,ctx,"red",2);
drawArrow(accl3.xcoord,accl3.ycoord,ctx,-finl3theta,15,30,"blue");
pointjoin(accl4,bl3,ctx,"red",2);
drawArrow(accl4.xcoord,accl4.ycoord,ctx,-finl4theta,15,30,"blue");



A2cg.xcoord=(accl2.xcoord + cgl2.xcoord)/2;
  A2cg.ycoord=(accl2.ycoord + cgl2.ycoord)/2;
  pointdisp(A2cg, ctx, 2, "blue", "white", "black", "12px", "12px");

  A3cg.xcoord=(accl3.xcoord + cgl3.xcoord)/2;
  A3cg.ycoord=(accl3.ycoord + cgl3.ycoord)/2;
  pointdisp(A3cg, ctx, 2, "blue", "white", "black", "12px", "12px");


  A4cg.xcoord=(accl4.xcoord + cgl4.xcoord)/2;
  A4cg.ycoord=(accl4.ycoord + cgl4.ycoord)/2;
  pointdisp(A4cg, ctx, 2, "blue", "white", "black", "12px", "12px");





pointjoin(hfl2,hl2,ctx,"red",2);
drawArrow(hfl2.xcoord,hfl2.ycoord,ctx,-finl2theta+180,15,30,"red");
pointjoin(hfl3,cgl3,ctx,"red",2);
drawArrow(hfl3.xcoord,hfl3.ycoord,ctx,-finl3theta+180,15,30,"blue");
pointjoin(hfl4,bl4,ctx,"red",2);
drawArrow(hfl4.xcoord,hfl4.ycoord,ctx,-finl4theta+180,15,30,"blue");

finl2.xcoord=(hfl2.xcoord + hl2.xcoord)/2;
  finl2.ycoord=(hfl2.ycoord + hl2.ycoord)/2;
  pointdisp(finl2, ctx, 2, "blue", "white", "black", "12px", "12px");

  finl3.xcoord=(hfl3.xcoord + hl3.xcoord)/2;
  finl3.ycoord=(hfl3.ycoord + hl3.ycoord)/2;
  pointdisp(finl3, ctx, 2, "blue", "white", "black", "12px", "12px");

  finl4.xcoord=(hfl4.xcoord + hl4.xcoord)/2;
  finl4.ycoord=(hfl4.ycoord + hl4.ycoord)/2;
  pointdisp(finl4, ctx, 2, "blue", "white", "black", "12px", "12px");


document.getElementById("hfl2").style.position = 'absolute';
document.getElementById("hfl3").style.position = 'absolute';
document.getElementById("hfl4").style.position = 'absolute';

document.getElementById("hfl2").style.margin = '0';
document.getElementById("hfl3").style.margin = '0';
document.getElementById("hfl4").style.margin = '0';

document.getElementById("hfl2").style.width = '20px';
document.getElementById("hfl3").style.width = '20px';
document.getElementById("hfl4").style.width = '20px';

document.getElementById("hfl2").style.height = '20px';
document.getElementById("hfl3").style.height = '20px';
document.getElementById("hfl4").style.height = '20px';

document.getElementById("hfl2").style.fontSize = '11px';
document.getElementById("hfl3").style.fontSize = '11px';
document.getElementById("hfl4").style.fontSize = '11px';


document.getElementById("hfl2").style.left = ""+(-10+Math.round(40+hfl2.xcoord))+"px";
document.getElementById("hfl3").style.left = ""+(-10+Math.round(40+hfl3.xcoord))+"px";
document.getElementById("hfl4").style.left = ""+(-10+Math.round(40+hfl4.xcoord))+"px";

document.getElementById("hfl2").style.top = ""+(-10+Math.round(90+hfl2.ycoord))+"px";
document.getElementById("hfl3").style.top = ""+(-10+Math.round(90+hfl3.ycoord))+"px";
document.getElementById("hfl4").style.top = ""+(-10+Math.round(90+hfl4.ycoord))+"px";

if(screenchanges == 4) {
	document.getElementById("datatable1").innerHTML = " ";
} else {

document.getElementById("datatable1").innerHTML="\
<table>\
<tr><th>Link</th><th>Offset(mm)</th></tr>\
<tr><th>OA</th><th>0</th></tr>\
<tr><th>AB</th><th>"+roundd(pointdist(hl3,cgl3),5)+"</th></tr>\
</table>";  
}

  if(screenchanges==0)
  {
    drawremva(ctx);
  }
  else
  {
  drawrem(ctx);
  }
  
  ctx.restore();   

 

}

function drawvel(context)
{


//Velocity Diagram
  vo=pointtrans(vo,transV);
  va=pointtrans(va,transV);
  vba=pointtrans(vba,transV);
  vb=pointtrans(vb,transV);
 
  pointjoin(vo,va,context,"#FF0000",2);
  drawArrow(va.xcoord,va.ycoord,context,180-theta2-rotstatus*90,15,30,"#FF0000");

  pointjoin(va,vba,context,"#330099",2);
  drawArrow(vba.xcoord,vba.ycoord,context,180-(theta3+signof(velba)*90),15,30,"#330099");

  pointjoin(vo,vb,context,"#000000",2);
  drawArrow(vb.xcoord,vb.ycoord,context,90+signof(velb)*90,15,30,"#000000");

  Va.xcoord=(vo.xcoord + va.xcoord)/2;
  Va.ycoord=(vo.ycoord + va.ycoord)/2;
  pointdisp(Va, ctx, 2, "blue", "white", "black", "12px", "12px");

  
  Vb.xcoord=(vo.xcoord + vb.xcoord)/2;
  Vb.ycoord=(vo.ycoord + vb.ycoord)/2;
  pointdisp(Vb, ctx, 2, "blue", "white", "black", "12px", "12px");


  Vba.xcoord=(va.xcoord + vba.xcoord)/2;
  Vba.ycoord=(va.ycoord + vba.ycoord)/2;
  pointdisp(Vba, ctx, 2, "blue", "white", "black", "12px", "12px");


 
}
function drawrem(context)
{	

// Analysis Titles	
	context.save();
   context.translate(0.5,0.5);
    ctx.lineWidth=1;
   ctx.font="18px 'Nunito', sans-serif";
   ctx.fillStyle="#000000";
   
   if(screenchanges==1)
    context.fillText("Acceleration Vectors of Links", 200,15);
  else if(screenchanges==2)
   context.fillText("Offset Analysis", 200,15);
  else if(screenchanges==3 || screenchanges == 0 )
	{
		context.font="18px 'Nunito', sans-serif";
		context.fillText("Position Diagram", 15,15);
   }
   else if(screenchanges == 4 && $('#force').is(':checked')) {
	context.font="18px 'Nunito', sans-serif";
		context.fillText("Position Diagram", 15,15);
   }
   
   context.restore();
   context.save();
   context.translate(0.5,0.5);
   ctx.lineWidth=1;
   ctx.font="18px 'Nunito', sans-serif";
   ctx.fillStyle="#000000";
   // context.fillText("Velocity Diagram", 315,15);
   context.restore();
   context.save();
   context.translate(0.5,0.5);
    ctx.lineWidth=1;
   ctx.font="18px 'Nunito', sans-serif";
   ctx.fillStyle="#000000";
   //context.fillText("Acceleration Diagram", 355,150);
   context.restore();
// r, l, d display
if(screenchanges==3)
{
	context.save();
	 ctx.lineWidth=1;
   ctx.font="18px 'Nunito', sans-serif";
   ctx.fillStyle="#000000";
//	context.fillText('d', (o.xcoord+b.xcoord)/2,o.ycoord-offset-10);	
	context.fillText('r',(o.xcoord+a.xcoord)/2-1,(o.ycoord+a.ycoord)/2+1);
	context.fillText('l',(a.xcoord+b.xcoord)/2-1,(a.ycoord+b.ycoord)/2+3);
	context.restore();
}

}

function drawremva(context)
{
  // Analysis Titles  
  context.save();
   context.translate(0.5,0.5);
    ctx.lineWidth=1;
   ctx.font="18px 'Nunito', sans-serif";
   context.fillStyle="#000000";
   context.fillText("Position Diagram", 15,15);
   context.restore();
   context.save();
   context.translate(0.5,0.5);
   ctx.lineWidth=1;
   ctx.font="18px 'Nunito', sans-serif";
   ctx.fillStyle="#000000";
   context.fillText("Velocity Diagram", 345,15);
   context.restore();
   context.save();
   context.translate(0.5,0.5);
   ctx.lineWidth=1;
   ctx.font="18px 'Nunito', sans-serif";
   ctx.fillStyle="#000000";
   context.fillText("Acceleration Diagram", 250,200);
   context.restore();
// r, l, d display
  context.save();
   ctx.lineWidth=1;
   ctx.font="18px 'Nunito', sans-serif";
   ctx.fillStyle="#000000";
//  context.fillText('d', (o.xcoord+b.xcoord)/2,o.ycoord-offset-10);  
  context.fillText('r',(o.xcoord+a.xcoord)/2-1,(o.ycoord+a.ycoord)/2+1);
  context.fillText('l',(a.xcoord+b.xcoord)/2-1,(a.ycoord+b.ycoord)/2+3);
  context.restore();

  context.save();
   context.translate(0.5,0.5);
    ctx.lineWidth=1;
   ctx.font="14px 'Nunito', sans-serif";
   context.fillStyle="#000000";
   context.fillText("Centripetal Acc", 435,345);
   context.restore();

   context.save();
   context.translate(0.5,0.5);
    ctx.lineWidth=1;
   ctx.font="14px 'Nunito', sans-serif";
   context.fillStyle="#000000";
   context.fillText("Tangential Acc", 435,365);
   context.restore();

   context.save();
   context.translate(0.5,0.5);
    ctx.lineWidth=1;
   ctx.font="14px 'Nunito', sans-serif";
   context.fillStyle="#000000";
   context.fillText("Total Acc", 435,385);
   context.restore();
}

function drawacc(context)
{
document.getElementById("datatable1").innerHTML="\
<table>\
<tr><th>Variable</th><th>Value</th></tr>\
<tr><td>A<sub>a</sub><sup>t</sup></td><td>"+roundd(accta,2)+"mm/s<sup>2</sup></td></tr>\
<tr><td>A<sub>a</sub><sup>c</sup></td><td>"+roundd(accca,2)+"mm/s<sup>2</sup></td></tr>\
<tr><td>A<sub>a</sub></td><td>"+roundd(acca,2)+"mm/s<sup>2</sup></td></tr>\
<tr><td>A<sub>ba</sub><sup>t</sup></td><td>"+roundd(acctba,2)+"mm/s<sup>2</sup></td></tr>\
<tr><td>A<sub>ba</sub><sup>c</sup></td><td>"+roundd(acccba,2)+"mm/s<sup>2</sup></td></tr>\
<tr><td>A<sub>ba</sub></td><td>"+roundd(accba,2)+"mm/s<sup>2</sup></td></tr>\
<tr><td>A<sub>b</sub></td><td>"+roundd(accb,2)+"mm/s<sup>2</sup></td></tr>\
<tr><td>&alpha;<sub>BA</sub></td><td>"+roundd(alpha3,2)+"rad/s<sup>2</sup></td></tr>\
<tr><td>&omega;<sub>3</sub></td><td>"+roundd(omega3,2)+"rad/s<sup>2</sup></td></tr>\
</table>";



//Acceleration Diagram
  ao= pointtrans(ao,transA);
  aa= pointtrans(aa,transA);
  ab= pointtrans(ab,transA);
  aba= pointtrans(aba,transA);
  acba= pointtrans(acba,transA);
  atba= pointtrans(atba,transA);
  angba=deg(Math.atan((aba.ycoord-aa.ycoord)/(aba.xcoord-aa.xcoord)));
  pointjoin(ao,aa,context,"#FF0000",2);
  drawArrow(aa.xcoord,aa.ycoord,context,-theta2,15,30,"#FF0000");
  pointjoin(ao,ab,context,"#000000",2);  
  drawArrow(ab.xcoord,ab.ycoord,context,90+(signof(accb))*90,15,30,"#000000");

  pointjoin(aa,aba,context,"#330099",2);
  context.moveTo(380,382);
  context.lineTo(430,382);
  context.stroke();
  drawArrow(aba.xcoord,aba.ycoord,context,90-(signof(aa.xcoord-aba.xcoord))*90+angba,15,30,"#330099");

  drawArrow(atba.xcoord,atba.ycoord,context,phi+signof(acctba)*90,15,30,"#330099");
  drawArrow(acba.xcoord,acba.ycoord,context,-theta3,15,30,"#330099");  

  context.save();

  context.beginPath();
  context.strokeStyle="#330099";
  context.setLineDash([5, 5]);
  context.moveTo(380,342);
  context.lineTo(430,342);
  context.stroke();
  pointjoin(aa,acba,context,"#330099",1);

  context.closePath();
  context.beginPath();
  context.strokeStyle="#330099";
  context.setLineDash([10, 10]);
  context.moveTo(380,362);
  context.lineTo(430,362);
  context.stroke();
  pointjoin(acba,atba,context,"#330099",1);
  context.closePath();
  context.restore();

}

function drawdyn(context)
{
if(screenchanges == 4) {
	document.getElementById("datatable1").innerHTML=" " ;
} else {
document.getElementById("datatable1").innerHTML="\
<table>\
<tr><th>Force</th><th>Value(N)</th></tr>\
<tr><th>F12x</th><th>"+roundd($result[0],5)+"</tr>\
<tr><th>F12y</th><th>"+roundd($result[1],5)+"</th></tr>\
<tr><th>F32x</th><th>"+roundd($result[2],5)+"</th></tr>\
<tr><th>F32y</th><th>"+roundd($result[3],5)+"</th></tr>\
<tr><th>F43x</th><th>"+roundd($result[4],5)+"</th></tr>\
<tr><th>F43y</th><th>"+roundd($result[5],5)+"</th></tr>\
<tr><th>F14y</th><th>"+roundd($result[6],5)+"</th></tr>\
<tr><th>T12</th><th>"+roundd($result[7],5)+"</th></tr>\
</table>"; 
} 

//  <!-- displaying scale values -->
  if(scaleP>=1)
  ctx.fillText("Free Body Diagram of Link 2 (Scale = 2)",230,13);
  if(scaleP<1)
  ctx.fillText("Free Body Diagrams Link 2 (Scale = 2)",230,13);


if(scaleP>=1)
  ctx.fillText("Free Body Diagram of Link 4 (Scale = 2)",130,230);
  if(scaleP<1)
  ctx.fillText("Free Body Diagram of Link 4 (Scale = 2)",130,230);


if(scaleP>=1)
  ctx.fillText("Free Body Diagram of Link 3 (Scale = 1)",230,265);
  if(scaleP<1)
  ctx.fillText("Free Body Diagram of Link 3 (Scale = 1)",230,265);

//Dynamic Force Free Body Diagram

//Link 2
ol2=pointtrans(ol2,transl1);
al2=pointtrans(al2,transl1);
f12=pointtrans(f12,transl1);
f32=pointtrans(f32,transl1);
 ptx.push(al2.xcoord);
 pty.push(al2.ycoord);

//Force Coordinates Link2
pointjoin(ol2,al2,ctx,"blue");
pointdisp(ol2,ctx);
pointdisp(al2,ctx);
pointjoin(ol2,f12,ctx,"brown",2);
pointjoin(al2,f32,ctx,"red",2);

drawArrow(f12.xcoord,f12.ycoord,ctx,-f12theta+180,15,30,"brown");
drawArrow(f32.xcoord,f32.ycoord,ctx,-f32theta-180,15,30,"red");
// <!-- //to trace point -->
 pointtrace(ptx,pty,ctx,"blue",2);

 f12.xcoord=(ol2.xcoord + f12.xcoord+10)/2;
  f12.ycoord=(ol2.ycoord + f12.ycoord+20)/2;
  pointdisp(f12, ctx, 1, "blue", "white", "black", "12px", "12px");

 f32.xcoord=(al2.xcoord + f32.xcoord+10)/2;
  f32.ycoord=(al2.ycoord + f32.ycoord+20)/2;
  pointdisp(f32, ctx, 1, "blue", "white", "black", "12px", "12px");
//Link 3

al3=pointtrans(al3,transl3);
bl3=pointtrans(bl3,transl3);
f23=pointtrans(f23,transl3);
f43=pointtrans(f43,transl3);
pt2x.push(al3.xcoord);
 pt2y.push(al3.ycoord);
 
 pt3x.push(bl3.xcoord);
 pt3y.push(bl3.ycoord);

// fpval=pointtrans(fpval,transl2);
//Force Coordinates Link 3
pointjoin(al3,bl3,ctx,"blue");
pointdisp(al3,ctx);
pointdisp(bl3,ctx);
pointjoin(al3,f23,ctx,"brown",2);
pointjoin(bl3,f43,ctx,"green",2);
// pointjoin(bl3,fpval,ctx,"blue",2);
drawArrow(f23.xcoord,f23.ycoord,ctx,-f23theta+180,15,30,"blue");
drawArrow(f43.xcoord,f43.ycoord,ctx,-f43theta+180,15,30,"blue");


f23.xcoord=(al3.xcoord + f23.xcoord)/2;
  f23.ycoord=(al3.ycoord + f23.ycoord+30)/2;
  pointdisp(f23, ctx, 1, "blue", "white", "black", "12px", "12px");


  f43.xcoord=(bl3.xcoord + f43.xcoord)/2;
  f43.ycoord=(bl3.ycoord + f43.ycoord+20)/2;
  pointdisp(f43, ctx, 1, "blue", "white", "black", "12px", "12px");
// <!-- //to trace point -->
 pointtrace(pt2x,pt2y,ctx,"red",2);
 pointtrace(pt3x,pt3y,ctx,"green",2);
//Link 4


bl4=pointtrans(bl4,transl2);
f14=pointtrans(f14,transl2);
f34=pointtrans(f34,transl2);
fpval=pointtrans(fpval, transl2);
 pt1x.push(bl4.xcoord);
 pt1y.push(bl4.ycoord);
//Force coordinates Link 4
drawrect(bl4,30,15,5,ctx,"#808080","#808080",4);
pointdisp(bl4,ctx);
pointjoin(bl4,f14,ctx,"brown",2);
pointjoin(bl4,f34,ctx,"green",2);
pointjoin(bl4,fpval,ctx,"red",2);
drawArrow(f14.xcoord,f14.ycoord,ctx,-f14theta+180,15,30,"blue");
drawArrow(f34.xcoord,f34.ycoord,ctx,-f34theta+180,15,30,"blue");
drawArrow(fpval.xcoord,fpval.ycoord,ctx,-fpvaltheta-180,15,30,"blue");
 //to trace point -->
 pointtrace(pt1x,pt1y,ctx,"grey",2);

 F34.xcoord=(bl4.xcoord + f34.xcoord)/2;
  F34.ycoord=(bl4.ycoord + f34.ycoord-30)/2;
  pointdisp(F34, ctx, 1, "blue", "white", "black", "12px", "12px");

  F14.xcoord=(bl4.xcoord + f14.xcoord+30)/2;
  F14.ycoord=(bl4.ycoord + f14.ycoord)/2;
  pointdisp(F14, ctx, 1, "blue", "white", "black", "12px", "12px");

  Fp.xcoord=(bl4.xcoord + fpval.xcoord)/2;
  Fp.ycoord=(bl4.ycoord + fpval.ycoord+30)/2;
  pointdisp(Fp, ctx, 1, "blue", "white", "black", "12px", "12px");




//FBD Labels

//Link 2

document.getElementById("F12").style.position = 'absolute';
document.getElementById("F32").style.position = 'absolute';
//document.getElementById("Finl2").style.position = 'absolute';

document.getElementById("F12").style.margin = '0';
document.getElementById("F32").style.margin = '0';
//document.getElementById("Finl2").style.margin = '0';

document.getElementById("F12").style.width = '20px';
//document.getElementById("Finl2").style.width = '20px';
document.getElementById("F32").style.width = '20px';

document.getElementById("F32").style.height = '20px';
document.getElementById("F12").style.height = '20px';
//document.getElementById("Finl2").style.height = '20px';

document.getElementById("F12").style.fontSize = '11px';
document.getElementById("F32").style.fontSize = '11px';
//document.getElementById("Finl2").style.fontSize = '11px';


document.getElementById("F12").style.left = ""+(-10+Math.round(40+f12.xcoord))+"px";
document.getElementById("F32").style.left = ""+(-10+Math.round(40+f32.xcoord))+"px";
//document.getElementById("Finl2").style.left = ""+(-10+Math.round(40+finl2.xcoord))+"px";

document.getElementById("F12").style.top = ""+(-10+Math.round(90+f12.ycoord))+"px";
document.getElementById("F32").style.top = ""+(-10+Math.round(90+f32.ycoord))+"px";
//document.getElementById("Finl2").style.top = ""+(-10+Math.round(90+finl2.ycoord))+"px";


//Link 3

document.getElementById("F23").style.position = 'absolute';
document.getElementById("F43").style.position = 'absolute';
//document.getElementById("Finl3").style.position = 'absolute';

document.getElementById("F23").style.margin = '0';
document.getElementById("F43").style.margin = '0';
//document.getElementById("Finl3").style.margin = '0';

document.getElementById("F23").style.width = '20px';
document.getElementById("F43").style.width = '20px';
//document.getElementById("Finl3").style.width = '20px';

document.getElementById("F23").style.height = '20px';
document.getElementById("F43").style.height = '20px';
//document.getElementById("Finl3").style.height = '20px';

document.getElementById("F23").style.fontSize = '11px';
document.getElementById("F43").style.fontSize = '11px';
//document.getElementById("Finl3").style.fontSize = '11px';


document.getElementById("F23").style.left = ""+(-10+Math.round(40+f23.xcoord))+"px";
document.getElementById("F43").style.left = ""+(-10+Math.round(40+f43.xcoord))+"px";
//document.getElementById("Finl3").style.left = ""+(-10+Math.round(40+finl3.xcoord))+"px";

document.getElementById("F23").style.top = ""+(-10+Math.round(90+f23.ycoord))+"px";
document.getElementById("F43").style.top = ""+(-10+Math.round(90+f43.ycoord))+"px";
//document.getElementById("Finl3").style.top = ""+(-10+Math.round(90+finl3.ycoord))+"px";

//Link 4

document.getElementById("F14").style.position = 'absolute';
document.getElementById("F34").style.position = 'absolute';
//document.getElementById("Finl4").style.position = 'absolute';
document.getElementById("Fp").style.position = 'absolute';

document.getElementById("F14").style.margin = '0';
document.getElementById("F34").style.margin = '0';
//document.getElementById("Finl4").style.margin = '0';
document.getElementById("Fp").style.margin = '0';

document.getElementById("F14").style.width = '20px';
document.getElementById("F34").style.width = '20px';
//document.getElementById("Finl4").style.width = '20px';
document.getElementById("Fp").style.width = '20px';

document.getElementById("F14").style.height = '20px';
document.getElementById("F34").style.height = '20px';
//document.getElementById("Finl4").style.height = '20px';
document.getElementById("Fp").style.height = '20px';

document.getElementById("F14").style.fontSize = '11px';
document.getElementById("F34").style.fontSize = '11px';
//document.getElementById("Finl4").style.fontSize = '11px';
document.getElementById("Fp").style.fontSize = '11px';

document.getElementById("F14").style.left = ""+(-10+Math.round(40+f14.xcoord))+"px";
document.getElementById("F34").style.left = ""+(-10+Math.round(40+f34.xcoord))+"px";
//document.getElementById("Finl4").style.left = ""+(-10+Math.round(40+finl4.xcoord))+"px";
document.getElementById("Fp").style.left = ""+(-10+Math.round(40+fpval.xcoord))+"px";

document.getElementById("F14").style.top = ""+(-10+Math.round(90+f14.ycoord))+"px";
document.getElementById("F34").style.top = ""+(-10+Math.round(90+f34.ycoord))+"px";
//document.getElementById("Finl4").style.top = ""+(-10+Math.round(90+finl4.ycoord))+"px";
document.getElementById("Fp").style.top = ""+(-10+Math.round(90+fpval.ycoord))+"px";
}

// prints comments passed as 'commenttext' in location specified by 'commentloc' in the comments box;
// 0 : Single comment box, 1 : Left comment box, 2 : Right comment box
function printcomment(commenttext,commentloc)
{
  if(commentloc==0)
  {
  document.getElementById('commentboxright').style.visibility='hidden';
  document.getElementById('commentboxleft').style.width='620px';
  document.getElementById('commentboxleft').innerHTML = commenttext;
  }
  else if(commentloc==1)
  {
  document.getElementById('commentboxright').style.visibility='visible';
  document.getElementById('commentboxleft').style.width='550px';
  document.getElementById('commentboxleft').innerHTML = commenttext;
  }
  else if(commentloc==2)
  {
  document.getElementById('commentboxright').style.visibility='visible';
  document.getElementById('commentboxleft').style.width='300px';
  document.getElementById('commentboxright').innerHTML = commenttext;
  }
  else
  {
  document.getElementById('commentboxright').style.visibility='hidden';
  document.getElementById('commentboxleft').style.width='620px';
  document.getElementById('commentboxleft').innerHTML = "<center>please report this issue to adityaraman@gmail.com</center>"; 
  // <!-- // ignore use of deprecated tag <center> . Code is executed only if printcomment function receives inappropriate commentloc value -->
  }
}


// <!-- to set the experiments -->
function setExperiment()
{
	  document.getElementById('commentboxleft').style.width='620px';
	if(!$("input:radio[name='expt']").is(":checked"))
	{
		document.getElementById('commentboxleft').innerHTML = "You have not selected any experiment";
	}
	else
	{
		exptSelected = 1;
		// <!-- do{ -->
			generateRandomValues();
		// <!-- }while(flaggrashof == false); -->
		varupdate();
		setQuestions();
		// $('#screenchangesforward').hide();
		// $('#screenchangesbackward').hide();
		$('#stopExperiment').show();
		$("#resetExperiment").hide();
		$("#stopExperiment").text("Stop Experiment");
		$("#startExperiment").text("Reset Experiment");
		// <!-- ctx2.clearRect(0,0,500,400); -->
	}
}
function generateRandomValues()
{
	m2 = [1, 1.2, 1.4, 1.6, 1.8,2][Math.floor(Math.random()*6)];
	m3 = [1, 1.2, 1.4, 1.6, 1.8,2][Math.floor(Math.random()*6)]; 
	m4 = [1, 1.2, 1.4, 1.6, 1.8,2][Math.floor(Math.random()*6)];   
	theta2 = Math.floor(Math.random() * (360 - 0 + 1) ) + 0;  
	r = Math.floor(Math.random() * (40 - 20 + 1) ) + 20;   
	$('#m2spinner').spinner("value",m2);
	$('#m2slider').slider("value", m2);	
	$('#m3spinner').spinner("value",m3);
	$('#m3slider').slider("value", m3);	
	$('#m4spinner').spinner("value",m4);
	$('#m4slider').slider("value", m4);	
	$('#theta2spinner').spinner("value",theta2);
	$('#theta2slider').slider("value", theta2);
	$('#r2spinner').spinner("value",r);
	$('#r2slider').slider("value", r);		
	// <!-- checkGrashof(); -->
	// document.getElementById('playpausebutton').src="sins/blueplaydull.svg";
	clearInterval(simTimeId);
	clearInterval(pauseTime);	
    simstatus=1;
    $('#theta2spinner').spinner("value",theta2);			
	// <!-- to set simulation parameters on pause -->
    pauseTime=setInterval("varupdate();",'10');
    $("#startExperiment").attr("disabled", true);
	setValuesDisabled();
}

function setValuesDisabled()
{
	$("#m2spinner").spinner( "disable" );
	$("#m2slider").slider( "disable" );		
	$("#m3spinner").spinner( "disable" );
	$("#m3slider").slider( "disable" );		
	$("#m4spinner").spinner( "disable" );
	$("#m4slider").slider( "disable" );	
	$("#theta2spinner").spinner( "disable" );
	$("#theta2slider").slider( "disable" );	
	$("#r2spinner").spinner( "disable" );
	$("#r2slider").slider( "disable" );	
	$("#r3spinner").spinner( "disable" );
	$("#r3slider").slider( "disable" );	
	$("#fpxspinner").spinner( "disable" );
	$("#fpxslider").slider( "disable" );	
	$("#fpyspinner").spinner( "disable" );
	$("#fpyslider").slider( "disable" );	
	$("#omega2spinner").spinner( "disable" );
	$("#omega2slider").slider( "disable" );	
	clearSpan();
	clearText();
}
function clearSpan()
{
	$("#lx span").html(" ");
	$("#ly span").html(" ");
	$("#linkspan").html(" ");
	$("#fx span").html(" ");
	$("#fy span").html(" ");
	document.getElementById("commentboxleft").innerHTML = "";
}
function clearText()
{
	if($( "#forceSelect option:selected" ).val() == "t12")
		$("#fy").hide();
	else	
		$("#fy").show();
	if($( "#forceSelect option:selected" ).val() == "f14")
		$("#fx").hide();
	else	
		$("#fx").show();
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
	document.getElementById("commentboxleft").innerHTML = "";
	// <!-- document.getElementById("offsett").onselect = setZoomOffsetLink(); -->
	// <!-- setZoomOffsetLink($("#offsett option:selected" ).val()); -->
}
function setQuestions()
{
  $('#questions').show();
  if($('#acc').is(':checked'))
  {
	displayForceAccelerationLinks(1);
	draw2(ctx); 
	$('#questionsAcc').show();
	document.getElementById('commentboxleft').style.width='620px';
	document.getElementById("commentboxleft").innerHTML = "";
  }
  else if($('#offset').is(':checked'))
  {
  	displayForceAccelerationLinks(2);
  	draw3(ctx); 
	$('#questionsOffset').show();
	document.getElementById('commentboxleft').style.width='620px';
	document.getElementById("commentboxleft").innerHTML = "";
	// <!-- imageZoom("toZoom", "myresult"); -->
  }
  else if($('#force').is(':checked'))
  {
  	displayForceAccelerationLinks(3);
	draw();
    drawdyn(ctx);
	$('#questionsForce').show();
	document.getElementById('commentboxleft').style.width='620px';
	document.getElementById("commentboxleft").innerHTML = "";
  }
}

function resetExperiments()
{
	exptSelected = 0;
	$('#questions').hide();
	$("#startExperiment").attr("disabled", false);	
	$("#r2spinner").spinner( "enable" );  
	$("#r2slider").slider( "enable" );		
	$("#r3spinner").spinner( "enable" );
	$("#r3slider").slider( "enable" );		
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
	document.getElementById("commentboxleft").innerHTML = "";	
}
function stopExperiment()
{
	
	$("#startExperiment").attr("disabled", false);
	$("#startExperiment").text("Reset Experiment");
	$("#stopExperiment").hide();
	$("#resetExperiment").show();
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
	$('#screenchangesforward').show();
	$('#screenchangesbackward').show();
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
	$('#tabchangeforward').show(); 
	$('#tabchangebackward').show();
	$('#startExperiment').show(); 
	$('#datatable1').hide(); 
	$('#datatable2').hide(); 
	$('#datatable3').hide(); 
	$('#datatable4').hide(); 
	$('#linklenght').show();
  	// document.getElementById('playpausebutton').src="images/blueplaydull.svg";
	document.getElementById('commentboxright').innerHTML = "";
	document.getElementById("commentboxleft").innerHTML = "";
}

function displayForceAccelerationLinks(link) {
	switch(link) {
		case 1:showAccLink();
				break;
		case 2: showOffsetLink();
				break;
		case 3: showForceLink();
				break;
	
	}
}
function showAccLink() {
	document.getElementById("va").style.display="none";
    document.getElementById("vba").style.display="none";
    document.getElementById("vb").style.display="none";
    document.getElementById("F12").style.display="none";
	document.getElementById("F32").style.display="none";
	document.getElementById("Finl2").style.display="none";
	document.getElementById("F23").style.display="none";
	document.getElementById("F43").style.display="none";
	document.getElementById("F14").style.display="none";
	document.getElementById("F34").style.display="none";
	document.getElementById("Finl3").style.display="none";
	document.getElementById("Finl4").style.display="none";
	document.getElementById("Fp").style.display="none";
	document.getElementById("legend").style.display="none";
	document.getElementById("datatable1").style.display="inline";
	document.getElementById("datatable2").style.display="none";
	document.getElementById("aa").style.display="inline";
	document.getElementById("aba").style.display="inline";
	document.getElementById("ab").style.display="inline";
	document.getElementById("hfl2").style.display="none";
	document.getElementById("hfl3").style.display="none";
	document.getElementById("hfl4").style.display="none";
} 

function showOffsetLink() {
	document.getElementById("va").style.display="none";
    document.getElementById("vba").style.display="none";
    document.getElementById("vb").style.display="none";
    document.getElementById("F12").style.display="none";
	document.getElementById("F32").style.display="none";
	document.getElementById("Finl2").style.display="none";
	document.getElementById("F23").style.display="none";
	document.getElementById("F43").style.display="none";
	document.getElementById("F14").style.display="none";
	document.getElementById("F34").style.display="none";
	document.getElementById("Finl3").style.display="none";
	document.getElementById("Finl4").style.display="none";
	document.getElementById("Fp").style.display="none";
	document.getElementById("legend").style.display="none";
	document.getElementById("datatable1").style.display="inline";
	document.getElementById("datatable2").style.display="none";
	document.getElementById("aa").style.display="inline";
	document.getElementById("aba").style.display="inline";
	document.getElementById("ab").style.display="inline";
	document.getElementById("hfl2").style.display="inline";
	document.getElementById("hfl3").style.display="inline";
	document.getElementById("hfl4").style.display="inline";
}

function showForceLink() {
	ctx.font="18px 'Nunito', sans-serif";
	ctx.fillText("Position Diagram", 15,15);
	document.getElementById("F12").style.display="inline";
	document.getElementById("F32").style.display="inline";
	// <!-- document.getElementById("Finl2").style.display="inline"; -->
	document.getElementById("F23").style.display="inline";
	document.getElementById("F43").style.display="inline";
	document.getElementById("F14").style.display="inline";
	document.getElementById("F34").style.display="inline";
	// <!-- document.getElementById("Finl3").style.display="inline"; -->
	// <!-- document.getElementById("Finl4").style.display="inline"; -->
	document.getElementById("Fp").style.display="inline";
	document.getElementById("legend").style.display="none";
	document.getElementById("datatable1").style.display="inline";
	document.getElementById("datatable2").style.display="none";
	document.getElementById("aa").style.display="none";
	document.getElementById("aba").style.display="none";
	document.getElementById("ab").style.display="none";
	document.getElementById("hfl2").style.display="none";
	document.getElementById("hfl3").style.display="none";
	document.getElementById("hfl4").style.display="none";
}

// <!-- Evaluate Acceleration -->
function evalAcceleration()
{
	var accAxis = $( "#accSelect option:selected" ).val();
	var x = $( "#xAxis").val();
	var y = $( "#yAxis").val();
	document.getElementById('commentboxleft').style.width='300px';
	if(accAxis == "acg2")
	{
		if(x == roundd(a2cgx,5))
			$("#lx span").html("&#10004;");
		else
			$("#lx span").html("&#10008;");
		if(y == roundd(a2cgy,5))
			$("#ly span").html("&#10004;");
		else
			$("#ly span").html("&#10008;");
		document.getElementById('commentboxleft').style.width='620px';
		document.getElementById("commentboxleft").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Axis: Acg2<br>Acg2x: "+roundd(a2cgx,5)+"mm/s<sup>2</sup> <br> Acg2y: "+roundd(a2cgy,5)+"mm/s<sup>2</sup>";
	}
	else if(accAxis == "acg3")
	{
		if(x == roundd(a3cgx,5))
			$("#lx span").html("&#10004;");
		else
			$("#lx span").html("&#10008;");
		if(y == roundd(a3cgy,5))
			$("#ly span").html("&#10004;");
		else
			$("#ly span").html("&#10008;");
		document.getElementById('commentboxleft').style.width='620px';
		document.getElementById("commentboxleft").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Axis: Acg3<br>Acg3x: "+roundd(a3cgx,5)+"mm/s<sup>2</sup> <br> Acg3y: "+roundd(a3cgy,5)+"mm/s<sup>2</sup>";
	}
	else if(accAxis == "acg4")
	{
		if(x == roundd(a4cgx,5))
			$("#lx span").html("&#10004;");
		else
			$("#lx span").html("&#10008;");
		if(y == roundd(a4cgy,5))
			$("#ly span").html("&#10004;");
		else
			$("#ly span").html("&#10008;");
		document.getElementById('commentboxleft').style.width='620px';
	document.getElementById("commentboxleft").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Axis: Acg4<br>Acg4x: "+roundd(a4cgx,5)+"mm/s<sup>2</sup><br>  Acg4y: "+roundd(a4cgy,5)+"mm/s<sup>2</sup>";
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
	document.getElementById('commentboxleft').style.width='300px';
	if(selectedOffset == 2)
	{
		// <!-- setZoomLink = 2; -->
		// <!-- linkZoom(); -->
		// <!-- console.log(offsetValue); -->
		if(offsetValue == 0)
			$("#linkspan").html("&#10004;");
		else
			$("#linkspan").html("&#10008;");
		document.getElementById("commentboxleft").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Perpendicular distance of the inertial force from the CG point for OA: "+ 0;
	}
	else if(selectedOffset == 3)
	{
			// <!-- setZoomLink = 3; -->
			// <!-- linkZoom(); -->
		if(offsetValue == roundd(pointdist(hl3,cgl3),5))
			$("#linkspan").html("&#10004;");
		else
			$("#linkspan").html("&#10008;");
		document.getElementById("commentboxleft").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Perpendicular distance of the inertial force from the CG point for AB "+roundd(pointdist(hl3,cgl3),5);
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
		if(xforce == roundd($result[0],5))
			$("#xfspan").html("&#10004;");
		else
			$("#xfspan").html("&#10008;");
		if(yforce == roundd($result[1],5))
			$("#yfspan").html("&#10004;");
		else
			$("#yfspan").html("&#10008;");

		document.getElementById("commentboxleft").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Force: F12<br>F12x: "+roundd($result[0],5)+"N <br>F12y: "+roundd($result[1],5)+"N";
	}
	else if(forceAxis == "f32")
	{
		if(xforce == roundd($result[2],5))
			$("#xfspan").html("&#10004;");
		else
			$("#xfspan").html("&#10008;");
		if(yforce == roundd($result[3],5))
			$("#yfspan").html("&#10004;");
		else
			$("#yfspan").html("&#10008;");
		document.getElementById("commentboxleft").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Force: F32<br>F32x: "+roundd($result[2],5)+"N <br>F32y: "+roundd($result[3],5)+"N";
	}
	else if(forceAxis == "f43")
	{
		if(xforce == roundd($result[4],5))
			$("#xfspan").html("&#10004;");
		else
			$("#xfspan").html("&#10008;");
		if(yforce == roundd($result[5],5))
			$("#yfspan").html("&#10004;");
		else
			$("#yfspan").html("&#10008;");
		document.getElementById("commentboxleft").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Force: F43<br>F43x: "+roundd($result[4],5)+"N <br>F43y: "+roundd($result[5],5)+"N";
	}
	else if(forceAxis == "f14")
	{
		if(yforce == roundd($result[6],5))
			$("#yfspan").html("&#10004;");
		else
			$("#yfspan").html("&#10008;");
		document.getElementById("commentboxleft").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Force: F14<br>F14y: "+roundd($result[6],5)+"N";
	}
	else if(forceAxis == "t12")
	{
		if(xforce == roundd($result[7],2))
			$("#xfspan").html("&#10004;");
		else
			$("#xfspan").html("&#10008;");
		document.getElementById("commentboxleft").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Torque: T12: "+roundd($result[7],2)+"N";
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
function validateNumber(input) {
  // Replace non-numeric characters with empty string
  input.value = input.value.replace(/[^0-9]/g, '');
}