var canvas = document.getElementById("simscreen");
var ctx = canvas.getContext("2d");

var simstatus=0; 
var rotstatus=1;
//Origin points to draw images
var trans= new point(125,100);
var transa= new point(125,150);
var transaa= new point(350,600);

//initialisation of variables

var y= new point(0,0,"y");
var z= new point(0,0,"z");
var y1= new point(0,0,"y1");
var z1= new point(0,0,"z1");
var y2= new point(0,0,"y2");
var z2= new point(0,0,"z2");
var y3= new point(0,0,"y3");
var z3= new point(0,0,"z3");
var y4= new point(0,0,"y4");
var z4= new point(0,0,"z4");
var y5= new point(0,0,"y5");
var z5= new point(0,0,"z5");
var y6= new point(0,0,"y6");
var z6= new point(0,0,"z6");
var y7= new point(0,0,"y7");
var z7= new point(0,0,"z7");
var o= new point(0,0,"0");
var a= new point(0,0,"a");
var b= new point(0,0," b");
var d= new point(0,0,"d");
var c= new point(0,0,"c");
var e= new point(0,0," e");
var f= new point(0,0," f");
var i= new point(0,0,"");
var k= new point(0,0,"");
var l= new point(0,0,"");
var l1=new point(0,0,"");
var v= new point(0,0,"v");
var va= new point(0,0,"va");
var ga= new point(0,0,"ga");
var ga1= new point(0,0,"ga1");
var s01= new point(0,0,"s01"); 
var s= new point(0,0,"s");
var s1= new point(0,0,"s1");
var s2= new point(0,0,"s2");
var s3= new point(0,0,"s3");
var s4= new point(0,0,"s4");
var s5= new point(0,0,"s5");
var s6= new point(0,0,"s6");
var s7= new point(0,0,"s7");
var s8= new point(0,0,"s8");
var s9= new point(0,0,"s9");
var s10= new point(0,0,"s10");
var s11= new point(0,0,"s11");
var s12= new point(0,0,"s12");
var s13= new point(0,0,"s13");
var s14= new point(0,0,"s14");
var s15= new point(0,0,"s15");
var s16= new point(0,0,"s16");
var s17= new point(0,0,"s17");
var s18= new point(0,0,"s18");
var s19= new point(0,0,"s19");
var s20= new point(0,0,"s20");
var s21= new point(0,0,"s21");
var s22= new point(0,0,"s22");
var s23= new point(0,0,"s23");
var s24= new point(0,0,"s24");
var s25= new point(0,0,"s25");

//variable initialization for calculation
var h1=0;
var om1=1.885; 
var om1=1.9;
var om2=2.1;
var theta = 0;
var omega=0;
var omega1=0;
var r=0;
var h=0;
var m=4;
var S=0;
   var m1=20; 
var r1=70;
var g=0; 
var r2=110;
var r3=0;
var n=0;
var r11=0;
var r22=0;
var ra=90;
var ra1=0;
var xx=90;
var yy=90;
var th=0;
var ra11=0; 
var r111=0; 
var th1=0; 
var canvas;
var ctx;
//timing section
var simTimeId = setInterval("",'1000');
var pauseTime = setInterval("",'1000');
var time=0;


var exptSelected = 0;//For experiments
var userStiffness = 0, userLift = 0, userRadius = 0;//User entered values
var dropArray = [3,2,4,1,4,3,2,3,4];
var countSpan = 0;
var ansSpan0 = document.createElement("span");
var ansSpan1 = document.createElement("span");
var ansSpan2 = document.createElement("span");
var ansSpan3 = document.createElement("span");
var ansSpan4 = document.createElement("span");
var ansSpan5 = document.createElement("span");
var ansSpan6 = document.createElement("span");
var ansSpan7 = document.createElement("span");
var ansSpan8 = document.createElement("span");

function editcss()
{
$('.variable').css('padding-top','20px');
$('.usercheck').css('left','30px');
// $('#legend').css("width",document.getElementById('legendimg').width+"px");
// $('#legend').css("top",419);
// $('#legend').css("left",342);
$('#container').css("top",0);
$('#container').css("left",0);
$('#legendicon').css("top",471);
}

function startsim()
{
simTimeId=setInterval("time=time+0.6; varupdate();",8);
}

function varinit()
{
varchange();		
$('#nslider').slider("value", 370);	
$('#nspinner').spinner("value", 370);
$('#mslider').slider("value",4);
$('#mspinner').spinner("value",4);
}

function varchange()
{
//Variable n,om1, om2, m slider and number input types
$('#nslider').slider({ max : 400, min : 365, step : 2 });		// slider initialisation : jQuery widget
$('#nspinner').spinner({ max : 400, min : 365, step : 2 });		// number initialisation : jQuery widget
$('#mslider').slider({ max :6, min : 1, step : 1});             // slider initialisation : jQuery widget
$('#mspinner').spinner({ max :6, min : 1, step : 1});           // number initialisation : jQuery widget 
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#nslider" ).on( "slide", function( e, ui ) { $('#nspinner').spinner("value",ui.value); ptx=[]; pty=[]; ptxdot=[]; ptxddot=[]; ptxdddot=[]; j=20;	ptx.push(b.ycoord-50); pty.push(o.xcoord+j);disp();} );
$( "#nspinner" ).on( "spin", function( e, ui ) { $('#nslider').slider("value",ui.value); ptx=[]; pty=[]; ptxdot=[]; ptxddot=[]; ptxdddot=[]; j=20;	ptx.push(b.ycoord-50); pty.push(o.xcoord+j);disp();} );
$( "#nspinner" ).on( "change", function() {  varchange(); } );

$( "#mslider" ).on( "slide", function( e, ui ) { $('#mspinner').spinner("value",ui.value); ptx=[]; pty=[]; ptxdot=[]; ptxddot=[]; ptxdddot=[]; j=20;	ptx.push(b.ycoord-50); pty.push(o.xcoord+j);disp();} );
$( "#mspinner" ).on( "spin", function( e, ui ) { $('#mslider').slider("value",ui.value); ptx=[]; pty=[]; ptxdot=[]; ptxddot=[]; ptxdddot=[]; j=20;	ptx.push(b.ycoord-50); pty.push(o.xcoord+j);disp();} );
$( "#mspinner" ).on( "change", function() {  varchange() } );
varupdate();
}

function varupdate()
{ 
n=$('#nspinner').spinner("value");
m=$('#mspinner').spinner("value");
omega=(2*3.14*n)/1200;
theta=theta+(rotstatus*0.04*deg(omega));
theta=theta%360;
//if(theta<0)theta+=360;
//Equation to obtain the required simulation

r11= ((r1*r2*om1*om1-r1*r2*om2*om2)/(omega*omega*r2-omega*omega*r1+om1*om1*r1-om2*om2*r2));
ra1= ((r11-ra)/xx);
th= Math.asin((ra1));
h=xx*Math.cos(th);
h1=yy*Math.sin(th);
r22= r11*Math.cos(rad(theta));
r3= ra*Math.cos(rad(theta));
S= 2*((m*r2*om2*om2-m*r1*om1*om1)*0.4)/(r2-r1);
o.xcoord=0;
o.ycoord=0;
z.xcoord=10;
z.ycoord=70;
y.xcoord=-10;
y.ycoord=70;
z1.xcoord=20*Math.cos(rad(theta));
z1.ycoord=50;
y1.xcoord=-20*Math.cos(rad(theta));
y1.ycoord=50;
z3.xcoord=20*Math.cos(rad(theta));
z3.ycoord=60;
y3.xcoord=-20*Math.cos(rad(theta));
y3.ycoord=60;
z4.xcoord=20*Math.cos(rad(theta));
z4.ycoord=40;
y4.xcoord=-20*Math.cos(rad(theta));
y4.ycoord=40;
z5.xcoord=10*Math.cos(rad(theta));
z5.ycoord=-90+h1;
y5.xcoord=-10*Math.cos(rad(theta));
y5.ycoord=-90+h1;
z6.xcoord=15;
z6.ycoord=-120+h1;
y6.xcoord=-15;
y6.ycoord=-120+h1;
z7.xcoord=15*Math.cos(rad(theta));;
z7.ycoord=-80+h1;
y7.xcoord=-15*Math.cos(rad(theta));;
y7.ycoord=-80+h1;
s01.xcoord= -10;
s01.ycoord= 35+(h1/8);
s.xcoord= 10*Math.cos(rad(theta));
s.ycoord= 35+(h1/8);
s1.xcoord=-10*Math.cos(rad(theta));
s1.ycoord= 25+(h1/4);
s2.xcoord= 10*Math.cos(rad(theta));
s2.ycoord= 25+(h1/8);
s3.xcoord= -10*Math.cos(rad(theta));
s3.ycoord= 15+(h1/4);
s4.xcoord= 10*Math.cos(rad(theta));
s4.ycoord= 15+(h1/8);

s5.ycoord= 5+(h1/4);
s5.xcoord= -10*Math.cos(rad(theta));
s6.ycoord= 5+(h1/8);
s6.xcoord= 10*Math.cos(rad(theta));
s7.ycoord= -5+(h1/4);
s7.xcoord= -10*Math.cos(rad(theta));
s8.ycoord= -5+(h1/8);
s8.xcoord= 10*Math.cos(rad(theta));
s9.ycoord= -15+(h1/4);
s9.xcoord= -10*Math.cos(rad(theta));
s10.ycoord= -15+(h1/8);
s10.xcoord= 10*Math.cos(rad(theta));
s11.ycoord= -25+(h1/4);
s11.xcoord= -10*Math.cos(rad(theta));
s12.ycoord= -25+(h1/8);
s12.xcoord= 10*Math.cos(rad(theta));
s13.ycoord= -35+(h1/4);
s13.xcoord= -10*Math.cos(rad(theta));
s14.ycoord= -35+(h1/8);
s14.xcoord= 10*Math.cos(rad(theta));
s15.ycoord= -45+(h1/4);
s15.xcoord= -10*Math.cos(rad(theta));
s16.ycoord= -45+(h1/8);
s16.xcoord= 10*Math.cos(rad(theta));
s17.ycoord= -55+(h1/4);
s17.xcoord= -10*Math.cos(rad(theta));
s18.ycoord= -55+(h1/8);
s18.xcoord= 10*Math.cos(rad(theta));
s19.ycoord= -65+(h1/4);
s19.xcoord= -10*Math.cos(rad(theta));
s20.ycoord= -65+(h1/8);
s20.xcoord= 10*Math.cos(rad(theta));
s21.ycoord= -75+(h1/4);
s21.xcoord= -10*Math.cos(rad(theta));
s22.xcoord= 10*Math.cos(rad(theta));
s22.ycoord= -75+(h1/8);
s23.xcoord= -10*Math.cos(rad(theta));
s23.ycoord= -85+(h1/4);
s24.xcoord= 10;
s24.ycoord= -70+(h1);
s25.xcoord= -10;
s25.ycoord= -70+(h1);


z2.xcoord=20*Math.cos(rad(theta));
z2.ycoord=0;
y2.xcoord=-20*Math.cos(rad(theta));
y2.ycoord=0;

c.xcoord=0;
c.ycoord=33;
d.xcoord=0;
e.xcoord=r22;
e.ycoord=-100+h;
f.xcoord=-r22;
f.ycoord=-100+h;
d.ycoord=-160;
i.xcoord=r3;
i.ycoord=-100;
k.xcoord=-r3;
k.ycoord=-100;
l.xcoord=10*Math.cos(rad(theta));
l.ycoord=-100+h1;
l1.xcoord=-10*Math.cos(rad(theta));
l1.ycoord=-100+h1;
//v.xcoord=r3
//v.ycoord=-2*h-30;
//va.xcoord=-r3;file:///media/csd/ACHARYA/dynamics-of-machines-lab-nitk-master/src/lab/images/simulation/Hartnell%20Governor/Hartnell%20Governor.html
//va.ycoord=-2*h-30;
a.xcoord=r11*Math.cos(rad(theta));
a.ycoord=r11*Math.sin(rad(theta));
b.xcoord=-r11*Math.cos(rad(theta));
b.ycoord=-r11*Math.sin(rad(theta));

ga.xcoord=h*10;
ga.ycoord=n;
draw();
}


// fix scaling of canavs as per media
let mediaQuery1 = window.matchMedia("screen and (max-width: 540px)");
let mediaQuery2 = window.matchMedia("screen and (max-width: 704px)");
let mediaQuery3 = window.matchMedia("screen and (max-width: 820px)");
let mediaQuery4 = window.matchMedia("screen and (max-width: 912px)");
let scaleX = 0.5;
let scaleY = 0.5;

const setMediaQueries = function (ctx) {
  let originalX = 20;
  if (mediaQuery1.matches) {
    scaleX = 1.5;
    // originalX = 20;
    originalX = canvas.width / 4 - 10;
    scaleY = 0.6;
  } else if (mediaQuery2.matches) {
    scaleX = 1;
    // originalX = canvas.width / 4 - 10;
    scaleY = 0.6;
  } else if (mediaQuery3.matches) {
    scaleX = 1;
    originalX = canvas.width / 4 - 10;
    scaleY = 0.6;
  } else if (mediaQuery4.matches) {
    scaleX = 1;
    originalX = canvas.width / 4 - 10;
    scaleY = 0.6;
  } else {
    // originalX = canvas.width / 4 - 20;
    scaleX = 0.4;
    scaleY = 0.6;
  }
  ctx.canvas.width = document.documentElement.clientWidth * scaleX;
  ctx.canvas.height = document.documentElement.clientHeight * scaleY;
  return originalX;
};


//Displaying the result as we change the mass and  n value
function disp()
{
// document.getElementById('commentboxleft').style.width='575px';
        document.getElementById('commentboxleft').innerHTML = "Stiffness of spring: "+roundd(S,2)+" N/mm"+"<br>Lift of sleeve: "+roundd(h1,2)+" mm";

}

function draw()
{
    let originalX = setMediaQueries(ctx);
    ctx.canvas.width = document.documentElement.clientWidth * scaleX;
    ctx.canvas.height = document.documentElement.clientHeight * scaleY;
ctx.clearRect(0,0,550,400);  //clears the complete canvas#simscreen everytime
//Transfering the point in the required axis

pointtrans(o,trans);
pointtrans(b,trans);
pointtrans(a,trans);
pointtrans(z,transa);
pointtrans(y,transa);
pointtrans(z1,transa);
pointtrans(y1,transa)
pointtrans(z2,transa);
pointtrans(y2,transa);
pointtrans(z3,transa);
pointtrans(y3,transa);
pointtrans(z4,transa);
pointtrans(y4,transa);
pointtrans(z5,transa);
pointtrans(y5,transa);
pointtrans(c,transa);
pointtrans(d,transa);
pointtrans(e,transa);
pointtrans(f,transa);
pointtrans(i,transa);
pointtrans(k,transa);
pointtrans(z6,transa);
pointtrans(y6,transa);
pointtrans(l,transa);
pointtrans(l1,transa);
pointtrans(s,transa);
pointtrans(s1,transa);
pointtrans(s01,transa);
pointtrans(s2,transa);
pointtrans(s3,transa);
pointtrans(s4,transa);
pointtrans(s5,transa);
pointtrans(s6,transa);
pointtrans(s7,transa);
pointtrans(s8,transa);
pointtrans(s9,transa);
pointtrans(s10,transa);
pointtrans(s11,transa);
pointtrans(s12,transa);
pointtrans(s13,transa);
pointtrans(s14,transa);
pointtrans(s15,transa);
pointtrans(s16,transa);
pointtrans(s17,transa);
pointtrans(s18,transa);
pointtrans(s19,transa);
pointtrans(s20,transa);
pointtrans(s21,transa);
pointtrans(s22,transa);
pointtrans(s23,transa);
pointtrans(s24,transa);
pointtrans(s25,transa);
pointtrans(z7,transa);
pointtrans(y7,transa);
pointtrans(ga,transaa);
pointtrans(ga1,transaa);

ctx.beginPath();
ctx.closePath();
ctx.beginPath();
ctx.lineWidth=1;
ctx.strokeStyle= "#666666";
//ctx.setLineDash([5, 15]);

ctx.moveTo(125,o.xcoord);
ctx.lineTo(125,-400);
ctx.lineTo(125,400);
//ctx.moveTo(150,200);
//ctx.lineTo(50,200);
//ctx.lineTo(250,200);
ctx.stroke();
ctx.closePath();

// Plotting lines to make simulation
pointjoin(z,y,ctx,"#018713",15);
pointjoin(z1,y1,ctx,"#000000",10);
pointjoin(z3,y3,ctx,"#000000",10);
pointjoin(z4,y4,ctx,"#000000",10);
pointjoin(y3,y2,ctx,"#ea7927",10);//square
pointjoin(z3,z2,ctx,"#ea7927",10);
pointjoin(z2,i,ctx,"#ea7927",6);//cone line1
pointjoin(y2,k,ctx,"#ea7927",6);//cone line2
pointjoin(c,d,ctx,"#8b95ef",10);//straiht line
pointjoin(s01,s,ctx,"#018713",5);//spring initial point
pointjoin(s,s1,ctx,"#CCCC00",5);
pointjoin(s2,s3,ctx,"#CCCC00",5);
pointjoin(s4,s5,ctx,"#CCCC00",5);
pointjoin(s6,s7,ctx,"#CCCC00",5);
pointjoin(s8,s9,ctx,"#CCCC00",5);
pointjoin(s10,s11,ctx,"#CCCC00",5);
pointjoin(s12,s13,ctx,"#CCCC00",5);
pointjoin(s14,s15,ctx,"#CCCC00",5);
pointjoin(s16,s17,ctx,"#CCCC00",5);
pointjoin(s18,s19,ctx,"#CCCC00",5);
pointjoin(s20,s21,ctx,"#CCCC00",5);
pointjoin(s22,s23,ctx,"#CCCC00",5);
pointjoin(z6,y6,ctx,"#c40367",10);//cross dash
pointjoin(z7,y7,ctx,"#000000",15);
pointjoin(s25,s24,ctx,"#018713",5);
pointjoin(z5,y5,ctx,"#018713",10);
pointdisp(f,ctx,10+m,'#f2341f','#f2341f');
pointdisp(e,ctx,10+m,'#f2341f','#f2341f');
pointjoin(e,i,ctx,"#0885d8",8);//#057212
pointjoin(f,k,ctx,"#0885d8",8);
pointjoin(i,l,ctx,"#0885d8",8);
pointjoin(k,l1,ctx,"#0885d8",8);//violet
//pointjoin(l,l1,ctx,"#CCCC00",5);
pointjoin(v,va,ctx,"#CCCC00",10);
pointdisp(l,ctx,4,"","",'','','');
pointdisp(l1,ctx,4,"","",'','','');
pointdisp(i,ctx,4,"","",'','','');
pointdisp(k,ctx,4,"","",'','','');
}
function selectPos(elem){
var imgId = elem.id;
if(imgId == "cb1") {
    document.getElementById("imgTitle").innerHTML = "Minimum Position";
    document.getElementById("myImg").src = "./images/minPosition.png";
    // document.getElementById("myImg").style.height= exptSelected == 0 ?"350px" : "255px";
    // document.getElementById("myImg").style.width= exptSelected == 0 ?"350px" : "350px";
    // document.getElementById("imgTitle").style.left= exptSelected == 0 ?"340px" : "100px";

} else if(imgId == "cb2") {
    document.getElementById("imgTitle").innerHTML = "Maximum Position";
    document.getElementById("myImg").src = "./images/maxPosition.png";
    console.log("max")
    // document.getElementById("myImg").style.height= exptSelected == 0 ?"350px" : "255px";
    // document.getElementById("myImg").style.width= exptSelected == 0 ?"350px" : "355px";
    // document.getElementById("imgTitle").style.left= exptSelected == 0 ?"340px" : "100px";
}

}

function selectPos1(elem){
    var imgId = elem.id;
    if(imgId == "cb11") {
        document.getElementById("imgTitle1").innerHTML = "Minimum Position";
        document.getElementById("myImg1").src = "./images/minPosition.png";
        console.log("min1")
        // document.getElementById("myImg").style.height= exptSelected == 0 ?"350px" : "255px";
        // document.getElementById("myImg").style.width= exptSelected == 0 ?"350px" : "350px";
        // document.getElementById("imgTitle").style.left= exptSelected == 0 ?"340px" : "100px";
    
    } else if(imgId == "cb21") {
        document.getElementById("imgTitle1").innerHTML = "Maximum Position";
        document.getElementById("myImg1").src = "./images/maxPosition.png";
        console.log("max1")
        // document.getElementById("myImg").style.height= exptSelected == 0 ?"350px" : "255px";
        // document.getElementById("myImg").style.width= exptSelected == 0 ?"350px" : "355px";
        // document.getElementById("imgTitle").style.left= exptSelected == 0 ?"340px" : "100px";
    }
    
    }

//To set Experiments
function setExperiments() {
    document.getElementById("simscreen").style.visibility = "hidden";
    document.getElementById("variables").style.display="none";
    document.getElementById("canvas-container").style.display = "none";
    document.getElementById("comments").style.width="200%";
    document.getElementById("myImg").style.visibility = "hidden";
    document.getElementById("imgTitle").style.visibility = "hidden";
    document.getElementById("fb").style.visibility = "hidden";
    document.getElementById("exp").style.display = "inline-block";
    document.getElementById("commentboxleft").innerHTML = "";
    document.getElementById("fbd").style.display = "none";
    document.getElementById("minMaxPos").style.display = "none";
    document.getElementById("goToExperiment").style.display = "none";
    // document.getElementById("exitExperiment").style.display = "none";
    // document.getElementById("resetExperiment").style.display = "none";
    document.getElementById("startExperiment").style.display = "inline-block";
    document.getElementById("goSimulator").style.display = "inline-block";
    if (mediaQuery4.matches) {
        document.getElementById("comments").style.width = "100%";
    }
}
function startExperiments() {
if(!$("input:radio[name='expt']").is(":checked"))
{
    document.getElementById('commentboxleft').innerHTML = "You have not selected any experiment";
}
else
{
    exptSelected = 1;
    document.getElementById("canvas-container").style.display = "block";
    console.log("block")
    document.getElementById("imgTitle1").style.display = "block";
    document.getElementById("fb1").style.display = "block";
    document.getElementById("imgTitle").style.visibility = "hidden";
    document.getElementById("fb").style.visibility = "hidden";
    // document.getElementById("myImg").style.visibility = "hidden";
    document.getElementById("exitExperiment").style.display = "block";
    document.getElementById("resetExperiment").style.display = "block";
    document.getElementById("fbd").style.display = "block";
    document.getElementById("minMaxPos").style.display="none";
    document.getElementById("minMaxPos1").style.display="block";
    document.getElementById("goSimulator").style.display = "none";
    document.getElementById("startExperiment").style.display = "none";

    // document.getElementById("myImg").style.top = "-408px";

    document.getElementById("myImg1").style.display = "block";
    // document.getElementById("myImg").style.left= "-87px";
    // document.getElementById("myIm    g1").style.top= "-408px";
    // document.getElementById("myImg").style.width= "299px";
    // document.getElementById("commentboxleft").style.visibility = "hidden";
     document.getElementById("questionsSet").style.display = "block";
     document.getElementById("comments").style.width = "100%";
    document.getElementById("commentboxleft").innerHTML = "<span style='color:green'>Constant Variables</span>:<br> X & Y = 90mm&nbsp;&nbsp;<br>&omega;<sub>1</sub> = 38rad/s &nbsp;&nbsp;<br>&omega;<sub>2</sub> = 42rad/s<br>r= 90mm&nbsp;&nbsp;<br>r<sub>1</sub> = 70mm&nbsp;&nbsp;<br>r<sub>2</sub> = 110mm";
    document.getElementById("commentboxright").innerHTML = "";
    selectExperiments();
}
}
//To set questions for calculation and Parts
function selectExperiments() {
    $("#exp").hide();
    if($('#calc').is(':checked'))
    {
        // document.getElementById("questionsSet").style.display = "block";
        // document.getElementById("questionsSet").style.backgroundColor= "red";
        // console.log("left")
        // document.getElementById("resetExperiment").style.display = "block";
        // document.getElementById("variables").style.visibility = "visible";
        document.getElementById("fb").style.visibility = "hidden";
        // document.getElementById("fb").style.left= "200px";
        // document.getElementById("posControls").style.visibility = "visible";
        document.getElementById("imgTitle").style.visibility = "hidden";
        // document.getElementById("imgTitle").style.left = "100px";
        document.getElementById("imgTitle").innerHTML = "Minimum Position";
        document.getElementById("myImg1").style.display = "block";
        document.getElementById("variables").style.display = "block";
        document.getElementById("canvas-container").style.display = "block";
        // document.getElementById("myImg").style.height= "255px";
        // document.getElementById("myImg").style.width= "303px";
        // document.getElementById("myImg").style.left= "-px";
        // document.getElementById("myImg").style.visibility = "visible";
        // document.getElementById("myImg").style.left= "500px";
        document.getElementById("cb1").checked = true;
        document.getElementById("myImg1").src = "./images/minPosition.png";
        randomizeValues();
        varupdate();
    }
    else if($('#gParts').is(':checked'))
    {
        document.getElementById("commentboxleft").innerHTML = "Identify parts of governor using dropdown";
        document.getElementsByClassName("comment-sections")[0].style.paddingBottom = "95px";
        // document.getElementsById("exitExperiment")[0].style.paddingBottom = "150px";

        document.getElementById("fbd").style.display = "none";
        document.getElementById("fbd").style.display = "none";
    document.getElementById("minMaxPos").style.display="none";
    document.getElementById("minMaxPos1").style.display="none";
    document.getElementById("imgTitle1").style.display = "none";
    document.getElementById("fb1").style.display = "none";
    document.getElementById("myImg1").style.display = "none";
    document.getElementById("comments").style.width = "200%";

        document.getElementById("resetExperiment").style.display = "none";
         document.getElementById("questionsSet").style.display = "none";
        // document.getElementById("variables").style.display= "none";
        document.getElementById("canvas-container").style.display = "none";
        // document.getElementById("commentboxleft").style.display= "none";
        // document.getElementById("resetExperiment").style.display = "none";
        document.getElementById("partImage").style.display = "block";
        document.getElementById("dropDownSet").style.display = "block";
        if (mediaQuery4.matches) {
            document.getElementById("comments").style.width = "100%";
        }
    }
} 
//function to randomize parameter values
function randomizeValues() {
    m = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;   
    n = Math.floor(Math.random() * (400 - 360 + 1) ) + 360;   
    $('#nspinner').spinner("value",n);
    $('#nslider').slider("value", n);	
    $('#mspinner').spinner("value",m);
    $('#mslider').slider("value", m);
    setValuesDisabled();
}
//To disable variables
function setValuesDisabled() {
    $("#nspinner").spinner( "disable" );
    $("#nslider").slider( "disable" );		
    $("#mspinner").spinner( "disable" );
    $("#mslider").slider( "disable" );
} 
//To evaluate stiffness
function evalStiffness() {
    userStiffness = document.getElementById("calcStiffness").value;
    // <!-- if(userStiffness == roundd(S,2)) -->
    if(userStiffness == roundd(S,2) || ((userStiffness>= roundd((S-0.05),2)) && userStiffness<=roundd((S+0.05),2)))
    {
        document.getElementById("sspan").innerHTML = "<span style='color:green'>&#10004;</span>";
    } else {
        document.getElementById("sspan").innerHTML = "<span style='color:red'>&#10008;</span>";
        document.getElementById("commentboxright").innerHTML = "<span style='color:green'>Correct Answer:</span><br><span >Stiffness of Spring(N/mm) = "+roundd(S,2)+"</span>";
    }
}
//To evaluate Lift
function evalLift() {
    userLift = document.getElementById("calcLift").value;
    // <!-- if(userLift == roundd(h1,2)) -->
    if(userLift == roundd(h1,2) || ((userLift>= roundd((h1-1),2)) && userLift<=roundd((h1+1),2)))
    {
        document.getElementById("lspan").innerHTML = "<span style='color:green'>&#10004;</span>";
    } else {
        document.getElementById("lspan").innerHTML = "<span style='color:red'>&#10008;</span>";
        document.getElementById("commentboxright").innerHTML = "<span style='color:green'>Correct Answer:</span><br><span >Lift of Sleeve(mm) = "+roundd(h1,2)+"</span>";
    }
}
//To evaluate radius
function evalRadius() {
    userRadius = document.getElementById("calcRadius").value;
    // <!-- if(userRadius == roundd(r11,2)) -->
    if(userRadius == roundd(r11,2) || ((userRadius>= roundd((r11-0.05),2)) && userRadius<=roundd((r11+0.05),2)))
    {
        document.getElementById("rspan").innerHTML = "<span style='color:green'>&#10004;</span>";
    } else {
        document.getElementById("rspan").innerHTML = "<span style='color:red'>&#10008;</span>";
        document.getElementById("commentboxright").innerHTML = "<span style='color:green'>Correct Answer:</span><br><span >Radius of Rotation(mm) = "+roundd(r11,2)+"</span>";
    }
}
//To reset user enetred values and span
function resetValues(ele) {
    userStiffness = 0;
    userLift = 0;
    userRadius = 0;
    if(ele.id == "calcStiffness") {
        document.getElementById("sspan").innerHTML = "";
    } else if(ele.id == "calcLift") {
        document.getElementById("lspan").innerHTML = "";
    } else if(ele.id == "calcRadius") {
        document.getElementById("rspan").innerHTML = "";
    }
    document.getElementById("commentboxright").innerHTML = "";
}
//To reset values
function resetExperiments() {
    userStiffness = 0;
    userLift = 0;
    userRadius = 0;
    document.getElementById("calcStiffness").value = "";
    document.getElementById("calcLift").value = "";
    document.getElementById("calcRadius").value = "";
    document.getElementById("sspan").innerHTML = "";
    document.getElementById("lspan").innerHTML = "";
    document.getElementById("rspan").innerHTML = "";
    document.getElementById("commentboxright").innerHTML = "";
    selectExperiments();
}
//To exit from experiments
function exitExperiments() {
    userStiffness = 0;
    userLift = 0;
    userRadius = 0;
      document.getElementById("canvas-container").style.display = "none";
      document.getElementById("fbd").style.display = "none";
      document.getElementById("imgTitle1").style.display = "none";
      document.getElementById("fb1").style.display = "none";
      document.getElementById("myImg1").style.display = "none";
      document.getElementById("minMaxPos").style.display="none";
    document.getElementById("minMaxPos1").style.display="none";
    document.getElementById("simscreen").style.visibility = "hidden";
    document.getElementById("variables").style.display= "none";
    document.getElementById("comments").style.width = "200%";
    document.getElementById("exp").style.display = "inline-block";
    document.getElementById("myImg").style.visibility = "hidden";
    document.getElementById("partImage").style.display = "none";
    document.getElementById("dropDownSet").style.display = "none";
    document.getElementsByClassName("circuit-dia")[0].style.display = "block";
    document.getElementById("commentboxleft").innerHTML = "";
    document.getElementById("commentboxright").innerHTML = "";
    document.getElementById("goToExperiment").style.display = "none";
    document.getElementById("resetExperiment").style.display = "none";
    document.getElementById("exitExperiment").style.display = "none";
    document.getElementById("questionsSet").style.display = "none";
    document.getElementById("startExperiment").style.display = "inline-block";
    document.getElementById("goSimulator").style.display = "inline-block";
    document.getElementById("exp").style.display = "inline-block";
    document.getElementById("comments").style.width = "200%";
    if (mediaQuery4.matches) {
        document.getElementById("comments").style.width = "100%";
    }

    // document.getElementById("questionsSet").style.display= "none";
    // document.getElementById("commentboxleft1").style.display= "none";
    // document.getElementById("commentboxright").style.display= "none";
    // document.getElementById("canvas-container").style.height= "200px";
    document.getElementById("imgTitle").style.visibility = "hidden";
    document.getElementById("imgTitle").innerHTML = "Minimum Position";
    
    document.getElementById("fb").style.visibility = "hidden";
    // document.getElementById("posControls").style.visibility = "hidden";

    // document.getElementById("startExperiment").style.display = "inline-block";
    // document.getElementById("goSimulator").style.display = "inline-block";
    document.getElementById("cb1").checked = true;
    document.getElementById("myImg").src = "./images/minPosition.png";
    $("input:radio[name='expt']").prop('checked', false);
    resetCalcValues();
    resetSelect();
}
//Back to Simulator

function goToSimulator() {
    exptSelected = 0;
    document.getElementById("simscreen").style.visibility = "visible";
    document.getElementById("canvas-container").style.display = "block";
    document.getElementById("variables").style.display = "block";
    document.getElementById("myImg").style.visibility = "visible";
    document.getElementById("fb").style.visibility = "visible";
    document.getElementById("fbd").style.display = "block";
    document.getElementById("partImage").style.display = "none";
    document.getElementById("minMaxPos").style.display = "block";
    // document.getElementById("canvas-container").style.display = "block";
    // document.getElementById("fb").style.left= "340px";
    // document.getElementById("posControls").style.visibility = "visible";
    document.getElementById("imgTitle").style.visibility = "visible";
    // document.getElementById("imgTitle").style.left = "340px";
    document.getElementById("imgTitle").innerHTML = "Minimum Position";

    // document.getElementById("myImg").style.height= "350px";
    // document.getElementById("myImg").style.width= "350px";
    // document.getElementById("myImg").style.left= "255px";
   
    // document.getElementById("commentboxleft11").style.display = "none";
    document.getElementById("dropDownSet").style.display = "none";
    document.getElementById("exp").style.display = "none";
    document.getElementById("commentboxleft").innerHTML = "";
    document.getElementById("goToExperiment").style.display = "inline-block";
    document.getElementById("startExperiment").style.display = "none";
    document.getElementById("exitExperiment").style.display = "none";
    document.getElementById("goSimulator").style.display = "none";
    document.getElementById("questionsSet").style.display = "none";
    document.getElementById("comments").style.width = "100%";
    document.getElementById('commentboxright').innerHTML = ""; 
    // document.getElementById('commentboxleft').style.width='570px';	
    document.getElementById('commentboxleft').innerHTML = "Stiffness of spring: "+roundd(S,2)+" N/mm"+"<br>Lift of sleeve: "+roundd(h1,2)+" mm";		
    $("input:radio[name='expt']").prop('checked', false);
    document.getElementById("cb1").checked = true;
    document.getElementById("myImg").src = "./images/minPosition.png";
    enableVariables();
    resetCalcValues();
}
function resetCalcValues() {
    document.getElementById("calcStiffness").value = "";
    document.getElementById("calcLift").value = "";
    document.getElementById("calcRadius").value = "";
    document.getElementById("sspan").innerHTML = "";
    document.getElementById("lspan").innerHTML = "";
    document.getElementById("rspan").innerHTML = "";
}

function enableVariables() {

    $("#nspinner").spinner( "enable" );
    $("#nslider").slider( "enable" );		
    $("#mspinner").spinner( "enable" );
    $("#mslider").slider( "enable" );
    $("#mset").show();
    $("#nset").show();
}
function evaluateParts(ele) {
    var userSelected = ele.selectedIndex;
    var selectedList = ele.id;
    countSpan = 1;
    switch(ele.id) {
        case "nut": if(userSelected == dropArray[0]){
                        spanHighlight("dropNut","<span style='color:green'>&#10004;</span>",ansSpan0);
                    } else {
                        spanHighlight("dropNut","<span style='color:red'>&#10008;</span>",ansSpan0);
                    }
                    break;
        case "frame": if(userSelected == dropArray[1]){
                        spanHighlight("dropFrame","<span style='color:green'>&#10004;</span>",ansSpan1);
                    } else {
                        spanHighlight("dropFrame","<span style='color:red'>&#10008;</span>",ansSpan1);
                    }
                    break;
    
        case "collar": if(userSelected == dropArray[2]){
                        spanHighlight("dropCollar","<span style='color:green'>&#10004;</span>",ansSpan2);
                    } else {
                        spanHighlight("dropCollar","<span style='color:red'>&#10008;</span>",ansSpan2);
                    }
                    break;
        case "rollar": if(userSelected == dropArray[3]){
                        spanHighlight("dropRollar","<span style='color:green'>&#10004;</span>",ansSpan3);
                    } else {
                        spanHighlight("dropRollar","<span style='color:red'>&#10008;</span>",ansSpan3);
                    }
                    break;
        case "spindle": if(userSelected == dropArray[4]){
                        spanHighlight("dropSpindle","<span style='color:green'>&#10004;</span>",ansSpan4);
                    } else {
                        spanHighlight("dropSpindle","<span style='color:red'>&#10008;</span>",ansSpan4);
                    }
                    break;
        case "sleeve": if(userSelected == dropArray[5]){
                        spanHighlight("dropSleeve","<span style='color:green'>&#10004;</span>",ansSpan5);
                    } else {
                        spanHighlight("dropSleeve","<span style='color:red'>&#10008;</span>",ansSpan5);
                    }
                    // document.getElementById("dropSleeve").style.left = "110px";
                    break;
        case "bevel": if(userSelected == dropArray[6]){
                        spanHighlight("dropBevel","<span style='color:green'>&#10004;</span>",ansSpan6);
                    } else {
                        spanHighlight("dropBevel","<span style='color:red'>&#10008;</span>",ansSpan6);
                    }
                    // document.getElementById("dropBevel").style.left = "32px";
                    break;
        case "ball": if(userSelected == dropArray[7]){
                        spanHighlight("dropBall","<span style='color:green'>&#10004;</span>",ansSpan7);
                    } else {
                        spanHighlight("dropBall","<span style='color:red'>&#10008;</span>",ansSpan7);
                    }
                    // document.getElementById("dropBall").style.left = "65px";
                    break;
        case "spring": if(userSelected == dropArray[8]){
                        spanHighlight("dropSpring","<span style='color:green'>&#10004;</span>",ansSpan8);
                    } else {
                        spanHighlight("dropSpring","<span style='color:red'>&#10008;</span>",ansSpan8);
                    }
                    // document.getElementById("dropSpring").style.left = "152px";
                    break;
                    
    }	
    
}
function resetSelect() 
{
    document.getElementById("nut").selectedIndex = "0";
    document.getElementById("frame").selectedIndex = "0";
    document.getElementById("collar").selectedIndex = "0";
    document.getElementById("rollar").selectedIndex = "0";
    document.getElementById("spindle").selectedIndex = "0";
    document.getElementById("sleeve").selectedIndex = "0";
    document.getElementById("bevel").selectedIndex = "0";
    document.getElementById("ball").selectedIndex = "0";
    document.getElementById("spring").selectedIndex = "0";
    // document.getElementById("dropSleeve").style.left = "123px";
    // document.getElementById("dropBevel").style.left = "45px";
    // document.getElementById("dropBall").style.left = "78px";
    // document.getElementById("dropSpring").style.left = "165px";
    ansSpan0.innerHTML = " ";
    ansSpan1.innerHTML = " ";
    ansSpan2.innerHTML = " ";
    ansSpan3.innerHTML = " ";
    ansSpan4.innerHTML = " ";
    ansSpan5.innerHTML = " ";		
    ansSpan6.innerHTML = " ";		
    ansSpan7.innerHTML = " ";		
    ansSpan8.innerHTML = " ";		
}
function spanHighlight(divTag,ans,ansSpan) {
    ansSpan.innerHTML = " ";
    ansSpan.innerHTML = ans;
    document.getElementById(divTag).appendChild(ansSpan);
}

// old code



// const draw = function () {
//   let originalX = setMediaQueries(ctx);
//   ctx.canvas.width = document.documentElement.clientWidth * scaleX;
//   ctx.canvas.height = document.documentElement.clientHeight * scaleY;
//   let ball = {
//     xpos: beamlength / 10 + originalX + 25,
//     ypos: 210 + actdisplace(time) / 10,
//     size: endmass === 0 ? 0 : 15 + endmass / 5,
//     draw: function () {
//       ctx.beginPath();
//       ctx.arc(ball.xpos, ball.ypos, ball.size, 0, 2 * Math.PI, false);
//       ctx.lineWidth = 3;
//       ctx.strokeStyle = "brown";
//       ctx.stroke();
//       ctx.fillStyle = "brown";
//       ctx.fill();
//     },
//   };

//   function beamdef(y) {
//     ctx.fillStyle = "blue";
//     for (let i = 0; i <= beamlength / 10; i++) {
//       ctx.fillRect(
//         i + originalX + 25,
//         ((y * i * i) / 2 / Math.pow(beamlength / 10, 3)) *
//           ((3 * beamlength) / 10 - i) -
//           10 +
//           210,
//         1,
//         20
//       );
//     }

//     ctx.beginPath();
//     ctx.arc(
//       ball.xpos + 1,
//       ball.ypos,
//       9.5,
//       (3 * Math.PI) / 2,
//       Math.PI / 2,
//       false
//     );
//     ctx.lineWidth = 1;
//     ctx.strokeStyle = "blue";
//     ctx.stroke();
//     ctx.fill();
//   }
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   beamdef(ball.ypos - 210);
//   ctx.fillStyle = "black";
//   ctx.fillRect(originalX, 105, 25, 200);
//   ball.draw();
//   generateGraph();
// };

// function generateGraph() {
//   // Graph 1
//   let graph1X = setMediaQueries(graphctx1);
//   graphctx1.canvas.width = document.documentElement.clientWidth * scaleX;
//   graphctx1.canvas.height = document.documentElement.clientHeight * scaleY;
//   graphctx1.clearRect(0, 0, graphCanvas1.width, graphCanvas1.height);
//   graphctx1.font = "2rem Comic sans MS";
//   graphctx1.save();
//   graphctx1.translate(0, 225);
//   graphctx1.rotate(-Math.PI / 2);
//   graphctx1.fillText("Displacement", 0, 15);
//   graphctx1.restore();
//   graphctx1.fillText("Time", 150, 350);
//   graphctx1.beginPath();

//   graphctx1.moveTo(20, 100);
//   graphctx1.lineTo(20, 350);
//   graphctx1.moveTo(20, 225);
//   graphctx1.lineTo(graphCanvas1.width, 225);
//   graphctx1.strokeStyle = "black";
//   graphctx1.stroke();
//   graphctx1.closePath();

//   graphctx1.beginPath();
//   graphctx1.moveTo(20, 225);
//   let i = 0;
//   graphctx1.strokeStyle = "green";
//   graphctx1.lineWidth = 1;
//   while (i < graphCanvas1.width) {
//     graphctx1.lineTo(i + 20, 225 - (0.9 * actdisplace(0.003 * i)) / 5);
//     graphctx1.moveTo(i + 20, 225 - (0.9 * actdisplace(0.003 * i)) / 5);
//     i += 0.01;
//   }
//   graphctx1.stroke();

//   // Graph 2
//   let graph2X = setMediaQueries(graphctx2);
//   graphctx2.canvas.width = document.documentElement.clientWidth * scaleX;
//   graphctx2.canvas.height = document.documentElement.clientHeight * scaleY;
//   graphctx2.clearRect(0, 0, graphCanvas2.width, graphCanvas2.height);
//   graphctx2.font = "2rem Comic sans MS";
//   graphctx2.beginPath();
//   graphctx2.strokeStyle = "black";
//   graphctx2.moveTo(20, 330);
//   graphctx2.lineTo(20, 135);
//   graphctx2.moveTo(20, 330);
//   graphctx2.lineTo(520, 330);
//   graphctx2.stroke();
//   graphctx2.save();
//   graphctx2.translate(10, 345);
//   graphctx2.rotate(-Math.PI / 2);
//   graphctx2.fillText("Amplitude", 45, 5);
//   graphctx2.restore();
//   graphctx2.fillText("Frequency(rad/s)", 170, 350);
//   graphctx2.strokeStyle = "#800080";
//   graphctx2.lineWidth = 1;
//   graphctx2.moveTo(350, 345);
//   function amplitude(n) {
//     return 20 / Math.sqrt(Math.pow(1 - n * n, 2) + Math.pow(2 * 0.05 * n, 2));
//   }
//   let j = 0;
//   graphctx2.beginPath();
//   while (j < 300) {
//     graphctx2.lineTo(j + 50, 325 - 0.9 * amplitude(0.01 * j));
//     graphctx2.moveTo(j + 50, 325 - 0.9 * amplitude(0.01 * j));
//     j += 0.01;
//   }
//   graphctx2.stroke();
//   graphctx2.beginPath();
//   graphctx2.strokeStyle = "green";
//   graphctx2.moveTo(150, 360);
//   graphctx2.lineTo(150, 100);
//   graphctx2.stroke();
//   graphctx2.font = "2rem Comic sans MS";
//   graphctx2.fillText("\u03C9d= " + wd.toFixed(3) + "rad/s", 260, 300);
// }

// function plotgraph() {
//   const graphDiv = document.querySelectorAll(".graph-div");
//   console.log(graphDiv);
//   graphDiv.forEach((graph) => {
//     graph.classList.toggle("display-hide");
//   });
//   generateGraph();
//   graphDiv[0].scrollIntoView({
//     behavior: "smooth",
//   });
// }

// window.addEventListener("load", varinit);

// const selectSection = function () {
//   otherSec.classList.remove("display-flex");
//   otherSec.classList.add("display-hide");
//   let value = sections.value;
//   if (value != 6) {
//     sectionImg.src = beamInfo[value].path;
//     const infos = Object.entries(beamInfo[value]);
//     sectionTooltip.innerHTML = "";
//     for (const [key, value] of infos.slice(0, -3)) {
//       const text = `${key}:${value}, `;
//       sectionTooltip.insertAdjacentHTML("beforeend", text);
//     }
//     for (const [key, value] of infos) {
//       if (key == "A") {
//         A = value;
//       }
//       if (key == "I") {
//         I = value;
//       }
//     }
//     varupdate();
//   } else {
//     otherSec.classList.add("display-flex");
//     otherSec.classList.remove("display-hide");
//     sectionImg.src = "images/crossOth.PNG";
//     A = 0.01;
//     I = 0.01;
//     sectionTooltip.innerHTML = "";
//     sectionTooltip.innerHTML = `Area = ${A} m<sup>2</sup>, I = ${I} m<sup>4</sup>`;
//     $("#CsArea").spinner({
//       spin: function (event, ui) {
//         A = ui.value;
//         I = $("#Ivalue").spinner("value");
//         sectionTooltip.innerHTML = `Area = ${A} m<sup>2</sup>, I = ${I} m<sup>4</sup>`;
//       },
//     });
//     $("#Ivalue").spinner({
//       spin: function (event, ui) {
//         I = ui.value;
//         A = $("#CsArea").spinner("value");
//         sectionTooltip.innerHTML = `Area = ${A} m<sup>2</sup>, I = ${I} m<sup>4</sup>`;
//       },
//     });
//   }
// };

// sections.addEventListener("change", selectSection);
// const selectMaterial = function () {
//   let value = materials.value;
//   const infos = Object.entries(matInfo[value]);
//   cirTooltip.innerHTML = "";
//   for (const [key, value] of infos) {
//     const text = `${key}:${value}, `;
//     if (key == "E") {
//       E = +value;
//     }
//     if (key == "rho") {
//       rho = +value;
//     }
//     cirTooltip.insertAdjacentHTML("beforeend", text);
//   }
//   varupdate();
// };
// materials.addEventListener("change", selectMaterial);
