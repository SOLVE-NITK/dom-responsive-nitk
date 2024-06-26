var canvas = document.getElementById("simscreen");//gets canvas id
var ctx = canvas.getContext("2d");//gets canvas context

//Array to hold datapoints to plot graph
var datapoints1 = [];
var datapoints2 = [];

//rotation variables
var gr = 0;
var simstatus = 1;
var rotstatus = 1;

//animation variables
var theta= 0;
var omega= 1;
var r=0;
var h=0;
var m=4;
var m1=20;
var r1=0;
var g=0;
var r2=0;
var r3=0;
var ar=0;
var arm=0;
var r22=0;
var h1=0;
var om1=0;
var n=100;
var omega1 = 1;
var h2 = 0;

//Here the point() is defind function in proell.js file to define a point
var trans = new point(150,150);//top view center point
var transa = new point(150,310);//front view center point
var transaa = new point(200,450);//graph location

//points of proell governor to be drawn in canvas uses point() is defind function in proell.js file
var y= new point(0,0,"");
var z= new point(0,0,"");
var o= new point(0,0,"");
var a= new point(0,0,"");
var b= new point(0,0,"");
var d= new point(0,0,"");
var c= new point(0,0,"");
var c1= new point(0,0,"");
var c2= new point(0,0,"");
var e= new point(0,0,"");
var f= new point(0,0,"");
var f1= new point(0,0,"");
var e1= new point(0,0,"");
var ii= new point(0,0,"");
var kk= new point(0,0,"");
var l= new point(0,0,"S");
var v= new point(0,0,"");
var va=new point(0,0,"");
var ga= new point(0,0,"");
var ga1= new point(0,0,"");
var colorGraph = "#35b1d0";
document.getElementById("cb").checked = false;
var exptSelected = 0;//For experiments
var randCal = 0;// for choosing calculation
var userHeight = 0, userMass = 0, userRpm = 0;//User entered values
var randomRpm = 0,randomHeight = 0, randomOmega = 0;
var dropArray = [3,4,3,2,4,4,2];
var countSpan = 0;
var ansSpan0 = document.createElement("span");
var ansSpan1 = document.createElement("span");
var ansSpan2 = document.createElement("span");
var ansSpan3 = document.createElement("span");
var ansSpan4 = document.createElement("span");
var ansSpan5 = document.createElement("span");
var ansSpan6 = document.createElement("span");
function editcss()
{
$('.variable').css('padding-top','20px');
$('.usercheck').css('left','30px');
$('#container').css("top",0);
$('#container').css("left",0);
$('#legendicon').css("top",471);
}

function startsim()
{
simTimeId=setInterval("varupdate();",8);
}

function varinit()
{
varchange();		
$('#lengthSlider').slider("value", 100);	
$('#lengthSpinner').spinner("value", 100);

$('#dampSlider').slider("value", 4);	
$('#dampSpinner').spinner("value", 4);


}

function varchange()
{
//Variable n,om1, om2, m slider and number input types
$('#lengthSlider').slider({ max : 130, min : 100, step : 0.5 });		// slider initialisation : jQuery widget
$('#lengthSpinner').spinner({ max : 130, min : 100, step : 0.5 });		// number initialisation : jQuery widget
// number initialisation : jQuery widget 
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#lengthSlider" ).on( "slide", function( e, ui ) { $('#lengthSpinner').spinner("value",ui.value);colorGraph="#35b1d0";sliderGraph();});
$( "#lengthSpinner" ).on( "spin", function( e, ui ) { $('#lengthSlider').slider("value",ui.value);colorGraph="#35b1d0";sliderGraph();});
$( "#lengthSpinner" ).on( "change", function() {  varchange() } );

$('#dampSlider').slider({ max : 6, min : 4, step : 0.5 });		// slider initialisation : jQuery widget
$('#dampSpinner').spinner({ max : 6, min : 4, step : 0.5 });		// number initialisation : jQuery widget
// number initialisation : jQuery widget 
// monitoring change in value and connecting slider and number
// setting trace point coordinate arrays to empty on change of link length
$( "#dampSlider" ).on( "slide", function( e, ui ) { $('#dampSpinner').spinner("value",ui.value);colorGraph="#a23827";sliderGraph();});
$( "#dampSpinner" ).on( "spin", function( e, ui ) { $('#dampSlider').slider("value",ui.value);colorGraph="#a23827";sliderGraph();});
$( "#dampSpinner" ).on( "change", function() {  varchange() } );


varupdate();
}

function varupdate()
{ 
n=$('#lengthSpinner').spinner("value");
m = $('#dampSpinner').spinner("value");
omega=(2*3.14*n)/600;
theta=theta+(rotstatus*0.05*deg(omega));//rotation
h=((m+m1)*9.81/(omega*omega*m*2));
g=(40*40)-(h*h);
r1= Math.sqrt(g);
r2= r1*Math.cos(rad(theta));
ar= (30*30)-(h*h);
arm= Math.sqrt(ar);
r22= (arm+r1)*Math.cos(rad(theta));
r3= 10*Math.cos(rad(theta));
o.xcoord=0;
o.ycoord=0;			
z.xcoord=10*Math.cos(rad(theta));
z.ycoord=10*Math.sin(rad(theta));
y.xcoord=-10*Math.cos(rad(theta));
y.ycoord=-10*Math.sin(rad(theta));
c.xcoord=0;
c.ycoord=0;
c1.xcoord=8*Math.cos(rad(theta));
c1.ycoord=0;
c2.xcoord=-8*Math.cos(rad(theta));
c2.ycoord=0;
d.xcoord=0;
d.ycoord=-2*h;
e.xcoord=r2;
e.ycoord=-h;
f.xcoord=-r2;
f.ycoord=-h;
e1.xcoord=r22;
e1.ycoord=0;
f1.xcoord=-r22;
f1.ycoord=0;
ii.xcoord=r3;
ii.ycoord=-2*h;
kk.xcoord=-r3;
kk.ycoord=-2*h;
l.xcoord=0;
l.ycoord=-2*h-20;
v.xcoord=r3
v.ycoord=-2*h-20;
va.xcoord=-r3;
va.ycoord=-2*h-20;
a.xcoord=(arm+r1)*Math.cos(rad(theta));
a.ycoord=(arm+r1)*Math.sin(rad(theta));
b.xcoord=-(arm+r1)*Math.cos(rad(theta));
b.ycoord=-(arm+r1)*Math.sin(rad(theta));


document.getElementById("hval").value = (h*10).toFixed(3);//To update the height field as per the updated n value
draw();//This function draws the contents on the canvas
}

// fix scaling of canavs as per media
let mediaQuery1 = window.matchMedia("screen and (max-width: 540px)");
let mediaQuery2 = window.matchMedia("screen and (max-width: 704px)");
let mediaQuery3 = window.matchMedia("screen and (max-width: 820px)");
let mediaQuery4 = window.matchMedia("screen and (max-width: 943px)");
let mediaQuery5 = window.matchMedia("screen and (max-width: 1200px)");
let scaleX = 0.5;
let scaleY = 0.5;

const setMediaQueries = function (ctx) {
    let originalX = 20;
    if (mediaQuery1.matches) {
      scaleX = 1.5;
      // originalX = 20;
      originalX = canvas.width / 4 - 10;
      scaleY = 0.9;
    } else if (mediaQuery2.matches) {
      scaleX = 1;
      // originalX = canvas.width / 4 - 10;
      scaleY = 0.9;
    } else if (mediaQuery3.matches) {
      scaleX = 1;
      originalX = canvas.width / 4 - 10;
      scaleY = 0.9;
    } else if (mediaQuery4.matches) {
      scaleX = 1;
      originalX = canvas.width / 4 - 10;
      scaleY = 0.9;
    } else if (mediaQuery5.matches) {
      scaleX = 0.5;
      originalX = canvas.width / 4 - 10;
      scaleY = 0.9;
    } else {
      // originalX = canvas.width / 4 - 20;
      scaleX = 0.3;
      scaleY = 0.7;
    }
    ctx.canvas.width = document.documentElement.clientWidth * scaleX;
    ctx.canvas.height = document.documentElement.clientHeight * scaleY;
    return originalX;
};

function draw()
{
    
    let originalX = setMediaQueries(ctx);
    ctx.canvas.width = document.documentElement.clientWidth * scaleX;
    ctx.canvas.height = document.documentElement.clientHeight * scaleY;
    ctx.clearRect(0,0,595,550);
    ctx.font = "14pt Verdana";
    ctx.fillText("Top View",20,80);
    ctx.fillText("Front View",20,280);
    
    //pointtrans() function defined in proell.js file to upadte the each canvas points with the origin points
    pointtrans(o,trans);
    pointtrans(b,trans);
    pointtrans(a,trans);
    pointtrans(z,trans);
    pointtrans(y,trans);
    pointtrans(c,transa);
    pointtrans(c1,transa);
    pointtrans(c2,transa);
    pointtrans(d,transa);
    pointtrans(e,transa);
    pointtrans(e1,transa);
    pointtrans(f1,transa);
    pointtrans(f,transa);
    pointtrans(ii,transa);
    pointtrans(kk,transa);
    pointtrans(l,transa);
    pointtrans(v,transa);
    pointtrans(va,transa);
    pointtrans(ga,transaa);
    pointtrans(ga1,transaa);
      
    //Plotting the co-ordinates 
    ctx.beginPath();
    ctx.lineWidth=1;
    ctx.strokeStyle= "#666666"; 
    ctx.moveTo(150,o.xcoord);
    ctx.lineTo(150,50);
    ctx.lineTo(150,500);
    ctx.moveTo(150,250);
    ctx.lineTo(50,250);
    ctx.lineTo(250,250);
    ctx.stroke();
    ctx.closePath();
    
    //Plotting all the points and connections	
    //Pivot and centre 
    
    //pointjoin() function defined in proell.js file to join the points in canvas to form a line
    pointjoin(o,a,ctx,"#0885d8",5);
    pointjoin(o,b,ctx,"#0885d8",5);
    pointjoin(o,z,ctx,"#0885d8",5);
    pointjoin(o,y,ctx,"#0885d8",5);
    //pointdisp() function defined in proell.js file to display a point
    pointdisp(b,ctx,m+7,'#600217','#600217');
    pointdisp(a,ctx,m+7,'#600217','#600217');
    pointjoin(z,y,ctx,"#b47dd8",20);
    pointjoin(c,c1,ctx,"#b47dd8",15);
    pointjoin(c,c2,ctx,"#b47dd8",15);
    pointjoin(c1,e,ctx,"#0885d8",5);
    pointjoin(c2,f,ctx,"#0885d8",5);
    pointjoin(e,e1,ctx,10,'#CCCC00',5);
    pointjoin(f,f1,ctx,10,'#CCCC00',5);
    pointdisp(f1,ctx,m+7,'#600217','#600217');
    pointdisp(e1,ctx,m+7,'#600217','#600217');
    pointjoin(e,ii,ctx,"#0885d8",5);
    pointjoin(f,kk,ctx,"#0885d8",5);
    pointjoin(ii,kk,ctx,"#CCCC00",20);
    pointjoin(d,l,ctx,"#015b0d",10);
    pointjoin(v,va,ctx,"#ad4d08",10);
    pointdisp(l,ctx,5,"#000000","#003366",'','','');
}
//This function used for plotting graph
function drawgraphh() {
    let originalX = setMediaQueries(ctx);
    ctx.canvas.width = document.documentElement.clientWidth * scaleX;
    ctx.canvas.height = document.documentElement.clientHeight * scaleY;
    document.getElementById("graph").innerHTML = "";
    if(gr == 0) {
        document.getElementById("cb").checked = true;
        document.getElementById("graph").style.visibility = "visible";
        document.getElementById("eqn").style.visibility = "visible";
        document.getElementById("myImg").style.visibility = "hidden";
        document.getElementById("fb").style.visibility = "hidden";
        gr = 1;
        for(plott=100;plott<=130;plott++) {
            omega1=(2*3.14*(plott))/600;
            h2=(m+m1)*9.81/(omega1*omega1*m*2)*10;//calculates h value
            datapoints1.push({x:h2,y:plott});
            datapoints2.push({x:h2,y:plott});
        }
        drawgraph("graph", datapoints1, "height(mm)", "n(rpm)",colorGraph);//Used graph.ob.js and graph_use.ob.js files plot graph	
        if(colorGraph == "#35b1d0") {
            drawgraph("graph", datapoints1, "height(mm)", "n(rpm)",colorGraph);
        }
        else if(colorGraph == "#a23827") {
            drawgraph("graph", datapoints2, "height(mm)", "n(rpm)",colorGraph);
        }//Used graph.ob.js and graph_use.ob.js files plot graph 
    }
    else if(gr == 1) {
        document.getElementById("cb").checked = false;
        document.getElementById("graph").style.visibility = "hidden";
        document.getElementById("eqn").style.visibility = "hidden";
        document.getElementById("myImg").style.visibility = "visible";
        document.getElementById("fb").style.visibility = "visible";
        gr = 0;
        datapoints1.length = 0;//clears the datapoints
        datapoints2.length = 0;//clears the datapoints
    }
}
function sliderGraph() {
    document.getElementById("graph").innerHTML = "";
    datapoints1 = [];
    datapoints2 = [];
    n=$('#lengthSpinner').spinner("value");
    m = $('#dampSpinner').spinner("value");
    $('#dampSpinner').spinner("value", m);
    omega=(2*3.14*n)/600;
    theta=theta+(rotstatus*0.6*deg(omega));//rotation
    h=((m+m1)*9.81/(omega*omega*m*2));
    for(plott=100;plott<=130;plott++)
    {
        omega1=(2*3.14*(plott))/600;
        h2=(m+m1)*9.81/(omega1*omega1*m*2)*10;//calculates h value
        datapoints1.push({x:h2,y:plott});
        datapoints2.push({x:h2,y:plott});
    }
    if(document.getElementById("cb").checked == true || randCal == 2 && colorGraph == "#35b1d0") {
        drawgraph("graph", datapoints1, "height(mm)", "n(rpm)",colorGraph);
    }
    else if(document.getElementById("cb").checked == true || randCal == 2 && colorGraph == "#a23827") {
        drawgraph("graph", datapoints2, "height(mm)", "n(rpm)",colorGraph);
    }//Used graph.ob.js and graph_use.ob.js files plot graph 
    else {
            datapoints1 = [];
            datapoints2 = [];
            document.getElementById("graph").innerHTML = "";
    }
}
function printcomment()
{
  document.getElementById('commentboxleft').innerHTML = "s stands for shaft; change rpm to see the change in height"; 
  // ignore use of deprecated tag <center> . Code is executed only if printcomment function receives inappropriate commentloc value
}
//To set Experiments
function setExperiments() {
    document.getElementById("simscreen").style.visibility = "hidden";
    document.getElementById("graph").style.visibility = "hidden";
    document.getElementById("variables").style.display = "none";
    document.getElementById("canvas-container").style.display = "none";
    document.getElementById("graphbutton").classList.toggle("graphDisabled");
    document.getElementById("comments").style.width = "200%";
    document.getElementById("myImg").style.visibility = "hidden";
    document.getElementById("fb").style.visibility = "hidden";
    document.getElementById("eqn").style.visibility = "hidden";
    document.getElementById("cb").style.visibility = "hidden";
    document.getElementById("sg").style.visibility = "hidden";
    document.getElementById("exp").style.display = "inline-block";
    document.getElementById("commentboxleft").innerHTML = "";
    document.getElementById("goToExperiment").style.display = "none";
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
        document.getElementById("exitExperiment").style.display = "block";
        document.getElementById("resetExperiment").style.display = "block";
        document.getElementById("goSimulator").style.display = "none";
        document.getElementById("startExperiment").style.display = "none";
        selectExperiments();
    }
}
//To set questions for calculation and Parts
function selectExperiments() {
    $("#exp").hide();
    if($('#calc').is(':checked'))
    {
        document.getElementById("commentboxleft").innerHTML = "Calculation Selected";
        document.getElementById("simscreen").style.visibility = "visible";
        randomizeValues();
        varupdate();
        randomizeExperiments();
    }
    else if($('#gParts').is(':checked'))
    {
        document.getElementById("commentboxleft").innerHTML = "Identify parts of governor using dropdown";
        document.getElementById("resetExperiment").style.display = "none";
        document.getElementById("canvas-container").style.display = "none";
        document.getElementById("partImage").style.visibility = "visible";
        document.getElementById("dropDownSet").style.display = "block";
        document.getElementById("comments").style.width = "200%";
        if (mediaQuery4.matches) {
            document.getElementById("comments").style.width = "100%";
        }
    }
} 

//function to randomize calculation experiments
function randomizeExperiments() {
    randCal = [1, 2, 3][Math.floor(Math.random()*3)];
    switch(randCal) {
        case 1: calculateHeight();
                break;
        case 2: calculateMass();
                break;
        case 3: calculateRpm();
                break;
    }
}
//function to randomize parameter values
function randomizeValues() {
    n = Math.floor(Math.random() * (130 - 100 + 1) ) + 100;   
    m = [4, 4.5, 5, 5.5, 6][Math.floor(Math.random()*3)]; 
    $('#lengthSpinner').spinner("value",n);
    $('#lengthSlider').slider("value", n);	
    $('#dampSpinner').spinner("value",m);
    $('#dampSlider').slider("value", m);
    setValuesDisabled();
}
//To disable variables
function setValuesDisabled() {
    $("#lengthSpinner").spinner( "disable" );
    $("#lengthSlider").slider( "disable" );		
    $("#dampSpinner").spinner( "disable" );
    $("#dampSlider").slider( "disable" );
    $("#dampSpinner").spinner( "disable" );
    $("#dampSlider").slider( "disable" );
} 
//Set questions for height calculation
function calculateHeight() {
    $("#mset").show();
    $("#massset").show();
    $("#nset").hide();
    $("#qMass").hide();
    $("#qRpm").hide();
    $("#questionsSet").show();
    $("#qHeight").show();
    document.getElementById("variables").style.display = "block";
    document.getElementById("comments").style.width = "100%";
    document.getElementsByClassName("circuit-dia")[0].style.display = "none";
    document.getElementById("commentboxleft").innerHTML = "<span style='color:green'>Constant Variables</span>:<br> FM/BM = 0.5<br>M = 20kg";
    document.getElementById("commentboxright").innerHTML = "";
}
//Set questions for mass calculation
function calculateMass() {
    $("#mset").hide();
    $("#massset").hide();
    $("#nset").hide();
    $("#qHeight").hide();
    $("#qRpm").hide();
    $("#questionsSet").show();
    $("#qMass").show();
    gr = 0;
    document.getElementById("variables").style.display = "none";
    document.getElementsByClassName("circuit-dia")[0].style.display = "block";
    document.getElementById("graph").style.visibility = "visible";
    document.getElementById("eqn").style.visibility = "hidden";
    sliderGraph();
    document.getElementById("commentboxleft").innerHTML = "<span style='color:green'>Constant Variables</span>:<br> FM/BM = 0.5<br>M = 20kg";
    document.getElementById("commentboxright").innerHTML = "";
    document.getElementById("comments").style.width = "200%";
    if (mediaQuery4.matches) {
        document.getElementById("comments").style.width = "100%";
    }
}
//Set questions for rpm calculation
function calculateRpm() {
    $("#massset").show();
    $("#nset").show();
    $("#mset").hide();
    $("#qMass").hide();
    $("#qHeight").hide();
    $("#questionsSet").show();
    $("#qRpm").show();
    document.getElementById("variables").style.display = "block";
    document.getElementById("comments").style.width = "100%";
    document.getElementsByClassName("circuit-dia")[0].style.display = "none";
    document.getElementById("commentboxleft").innerHTML = "<span style='color:green'>Constant Variables</span>:<br> FM/BM = 0.5<br>M = 20kg";
    document.getElementById("commentboxright").innerHTML = "";
}
//To identify parts
function identifyingParts() {
    document.getElementById("commentboxleft").innerHTML = "Parts of Governor Selected";
}
//To exit from experiments
function exitExperiments() {
    document.getElementById("canvas-container").style.display = "none";
    document.getElementById("simscreen").style.visibility = "hidden";
    document.getElementById("graph").style.visibility = "hidden";
    document.getElementById("variables").style.display = "none";
    document.getElementById("comments").style.width = "200%";
    if (mediaQuery4.matches) {
        document.getElementById("comments").style.width = "100%";
    }
    document.getElementById("myImg").style.visibility = "hidden";
    document.getElementById("partImage").style.visibility = "hidden";
    document.getElementById("dropDownSet").style.display = "none";
    document.getElementById("fb").style.visibility = "hidden";
    document.getElementById("eqn").style.visibility = "hidden";
    document.getElementById("cb").style.visibility = "hidden";
    document.getElementById("sg").style.visibility = "hidden";
    document.getElementById("exp").style.display = "inline-block";
    document.getElementsByClassName("circuit-dia")[0].style.display = "block";
    document.getElementById('commentboxright').innerHTML = ""; 
    document.getElementById("commentboxleft").innerHTML = "";
    document.getElementById("exitExperiment").style.display = "none";
    document.getElementById("resetExperiment").style.display = "none";
    document.getElementById("goToExperiment").style.display = "none";
    document.getElementById("questionsSet").style.display = "none";
    document.getElementById("calcHeight").value= "";
    document.getElementById("calcMass").value= "";
    document.getElementById("calcRpm").value= "";
    document.getElementById("startExperiment").style.display = "inline-block";
    document.getElementById("goSimulator").style.display = "inline-block";
    $("input:radio[name='expt']").prop('checked', false);
    resetValues();
    resetSelect();
}
//Back to Simulator
function goToSimulator() {
    gr = 0;
    exptSelected = 0;
    randCal = 0;
    clearGraph();
    document.getElementById("simscreen").style.visibility = "visible";
    document.getElementById("canvas-container").style.display = "block";
    document.getElementById("variables").style.display = "block";
    document.getElementById("myImg").style.visibility = "visible";
    document.getElementById("fb").style.visibility = "visible";
    document.getElementById("cb").style.visibility = "visible";
    document.getElementById("cb").checked = false;
    document.getElementById("sg").style.visibility = "visible";
    document.getElementById("eqn").style.visibility = "hidden";
    document.getElementById("partImage").style.visibility = "hidden";
    document.getElementById("dropDownSet").style.display = "none";
    document.getElementById("exp").style.display = "none";
    document.getElementById("commentboxleft").innerHTML = "";
    document.getElementById("goToExperiment").style.display = "inline-block";
    document.getElementById("startExperiment").style.display = "none";
    document.getElementById("exitExperiment").style.display = "none";
    document.getElementById("goSimulator").style.display = "none";
    document.getElementById("graphbutton").classList.toggle("graphDisabled");
    document.getElementById("comments").style.width = "100%";
    document.getElementById("questionsSet").style.display = "none";
    document.getElementById("calcHeight").value= "";
    document.getElementById("calcMass").value= "";
    document.getElementById("calcRpm").value= "";
    document.getElementById('commentboxright').innerHTML = ""; 
    document.getElementById('commentboxleft').innerHTML = "s stands for shaft; change rpm to see the change in height"; 
    $("input:radio[name='expt']").prop('checked', false);
    enableVariables();
    resetValues();
}
function clearGraph()
{
    datapoints1= [];
    datapoints2= [];
    document.getElementById("graph").innerHTML = "";
}
function enableVariables() {

    $("#lengthSpinner").spinner( "enable" );
    $("#lengthSlider").slider( "enable" );		
    $("#dampSpinner").spinner( "enable" );
    $("#dampSlider").slider( "enable" );
    $("#dampSpinner").spinner( "enable" );
    $("#dampSlider").slider( "enable" );
    $("#massset").show();
    $("#nset").show();
    $("#mset").show();
}
//To evaluate Height
function evalHeight() {
    userHeight = document.getElementById("calcHeight").value;
    randomRpm = n;
    randomOmega=(2*3.14*(randomRpm))/600;
    randomHeight=(m+m1)*9.81/(randomOmega*randomOmega*m*2)*10;//calculates h value
    if(userHeight == randomHeight.toFixed(3) || (userHeight>= (randomHeight-0.5) && userHeight<=(randomHeight+0.5)))
    {
        document.getElementById("hspan").innerHTML = "<span style='color:green'>&#10004;</span>";
    } else {
        document.getElementById("hspan").innerHTML = "<span style='color:red'>&#10008;</span>";
        document.getElementById("commentboxright").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Height(mm) = "+randomHeight.toFixed(3);
    }
}
//To evaluate Mass
function evalMass() {
    userMass = document.getElementById("calcMass").value;
    if(userMass == m)
    {
        document.getElementById("mspan").innerHTML = "<span style='color:green'>&#10004;</span>";
    } else {
        document.getElementById("mspan").innerHTML = "<span style='color:red'>&#10008;</span>";
        document.getElementById("commentboxright").innerHTML = "<span style='color:green'>Correct Answer:</span><br>Mass(kg) = "+m;
    }
}
//To evaluate Rpm
function evalRpm() {
    userRpm = document.getElementById("calcRpm").value;
    if(userRpm == n)
    {
        document.getElementById("rspan").innerHTML = "<span style='color:green'>&#10004;</span>";
    } else {
        document.getElementById("rspan").innerHTML = "<span style='color:red'>&#10008;</span>";
        document.getElementById("commentboxright").innerHTML = "<span style='color:green'>Correct Answer:</span><br>n(rpm) = "+n;
    }
}
function resetValues() {
    userHeight = 0;
    userMass = 0;
    userRpm = 0;
    document.getElementById("hspan").innerHTML = "";
    document.getElementById("mspan").innerHTML = "";
    document.getElementById("rspan").innerHTML = "";
    document.getElementById("commentboxright").innerHTML = "";
}
function resetExperiments() {
    $("#questionsSet").hide();
    $("#qHeight").hide();
    $("#qMass").hide();
    $("#qRpm").hide();
    $("#massset").hide();
    $("#nset").hide();
    $("#mset").hide();
    document.getElementById("graph").style.visibility = "hidden";
    resetValues();
    selectExperiments();
}
function evaluateParts(ele) {
    var userSelected = ele.selectedIndex;
    var selectedList = ele.id;
    countSpan = 1;
    switch(ele.id) {
        case "pivot": if(userSelected == dropArray[0]){
                        spanHighlight("dropPivot","<span style='color:green'>&#10004;</span>",ansSpan0);
                    } else {
                        spanHighlight("dropPivot","<span style='color:red'>&#10008;</span>",ansSpan0);
                    }
                    break;
        case "flyBall": if(userSelected == dropArray[1]){
                        spanHighlight("dropFlyBall","<span style='color:green'>&#10004;</span>",ansSpan1);
                    } else {
                        spanHighlight("dropFlyBall","<span style='color:red'>&#10008;</span>",ansSpan1);
                    }
                    break;
        case "connectingRod": if(userSelected == dropArray[2]){
                        spanHighlight("dropConnectingRod","<span style='color:green'>&#10004;</span>",ansSpan2);
                    } else {
                        spanHighlight("dropConnectingRod","<span style='color:red'>&#10008;</span>",ansSpan2);
                    }
                    break;
        case "spindle": if(userSelected == dropArray[3]){
                        spanHighlight("dropSpindle","<span style='color:green'>&#10004;</span>",ansSpan3);
                    } else {
                        spanHighlight("dropSpindle","<span style='color:red'>&#10008;</span>",ansSpan3);
                    }
                    break;
        case "sleeve": if(userSelected == dropArray[4]){
                        spanHighlight("dropSleeve","<span style='color:green'>&#10004;</span>",ansSpan4);
                    } else {
                        spanHighlight("dropSleeve","<span style='color:red'>&#10008;</span>",ansSpan4);
                    }
                    break;
        case "extendedArm": if(userSelected == dropArray[5]){
                        spanHighlight("dropExtendedArm","<span style='color:green'>&#10004;</span>",ansSpan5);
                    } else {
                        spanHighlight("dropExtendedArm","<span style='color:red'>&#10008;</span>",ansSpan5);
                    }
                    break;
        case "arm": if(userSelected == dropArray[6]){
                        spanHighlight("dropArm","<span style='color:green'>&#10004;</span>",ansSpan6);
                    } else {
                        spanHighlight("dropArm","<span style='color:red'>&#10008;</span>",ansSpan6);
                    }
                    break;
    }	
    
}
function resetSelect() 
{
    ansSpan0.innerHTML = " ";
    ansSpan1.innerHTML = " ";
    ansSpan2.innerHTML = " ";
    ansSpan3.innerHTML = " ";
    ansSpan4.innerHTML = " ";
    ansSpan5.innerHTML = " ";
    ansSpan6.innerHTML = " ";
    
}
function spanHighlight(divTag,ans,ansSpan) {
    ansSpan.innerHTML = " ";
    ansSpan.innerHTML = ans;
    document.getElementById(divTag).appendChild(ansSpan);
}