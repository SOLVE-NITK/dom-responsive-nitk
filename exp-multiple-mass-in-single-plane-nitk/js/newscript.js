var simstatus = 0;
var rotstatus = 1;
var rtst = false;
var flag = 0;
var commenttext = "Some Text";
var commentloc = 0;
var tabchanges = 0;

var trans = new point(150, 200);
var o = new point(0, 0, " ");
var a = new point(0, 0, "1");
var b = new point(0, 0, "2");
var c = new point(0, 0, "B");
var a1 = new point(0, 0, "t1");
var b1 = new point(0, 0, "t2");
var trans1 = new point(320, 200);
var z = new point(0, 0, " ");
var w = new point(0, 0, " ");
var u = new point(0, 0, " ");
var t = new point(0, 0, " ");
var s = new point(0, 0, " ");
var a1 = new point(0, 0, "1");
var b1 = new point(0, 0, "2");
var c1 = new point(0, 0, "B");

var r1 = 20;
var r2 = 20;
var l1 = 20;
var la = 20;
var m1 = 0,
  m2 = 0;
var omega = 2;
var theta = 0;
var B;
var Fh;
var Fv;
var Fu;
var r;
var m;
var th;
var submitbut = 0;
var flaggrashof = true;
var offset = 0;
var canvas;
var ctx;

//timing section
var simTimeId = setInterval("", "1000");
var pauseTime = setInterval("", "1000");
var time = 0;

//point tracing section
var ptx = [];
var pty = [];
ptxdot = [];
ptxddot = [];
ptxdddot = [];

//click status of legend and quick reference
// var legendCS = false;
var quickrefCS = false;
var temp = 0;
var offset = 0;
var acc, vel, jerk;
var j = 20;
var tempPt = new point(0, 0, "");
var truncate = 290;
var forvar = 0;

var canvas = document.getElementById("simscreen");
var ctx = canvas.getContext("2d");

function editcss() {
  $(".variable").css("padding-top", "5px");
  $(".usercheck").css("left", "40px");
  $(".submitbutton").css("padding-top", "5px");
  $(".submitbutton").css("padding-left", "60px");
  $(".text").css("padding-left", "10px");
}

function startsim() {
  simTimeId = setInterval("time=time+0.1; varupdate(); ", "100");
}

function simstate() {
  var imgfilename = document.getElementById("playpausebutton").src;
  imgfilename = imgfilename.substring(
    imgfilename.lastIndexOf("/") + 1,
    imgfilename.lastIndexOf(".")
  );
  if (imgfilename == "bluepausedull") {
    document.getElementById("playpausebutton").src = "images/blueplaydull.svg";
    clearInterval(simTimeId);
    simstatus = 1;
    $("#theta1spinner").spinner("value", theta); //to set simulation parameters on pause
    pauseTime = setInterval("varupdate();", "100");
    document.querySelector(".playPause").textContent = "Play";
    drawrem(ctx);
  }
  if (imgfilename == "blueplaydull") {
    time = 0;
    clearInterval(pauseTime);
    document.getElementById("playpausebutton").src = "images/bluepausedull.svg";
    simTimeId = setInterval("time=time+0.1; varupdate(); ", "100");
    document.querySelector(".playPause").textContent = "Pause";
    simstatus = 0;
  }
}

function rotstate() {
  var imgfilename = document.getElementById("rotationbutton").src;
  imgfilename = imgfilename.substring(
    imgfilename.lastIndexOf("/") + 1,
    imgfilename.lastIndexOf(".")
  );
  if (imgfilename == "bluecwdull") {
    document.getElementById("rotationbutton").src = "images/blueccwdull.svg";
    rotstatus = -1;
    rtst = true;
  }
  if (imgfilename == "blueccwdull") {
    document.getElementById("rotationbutton").src = "images/bluecwdull.svg";
    rotstatus = 1;
    rtst = false;
  }
}
function tabchangeb() {
  tabchanges--;
  if (tabchanges < 0) tabchanges = 0;
}
function tabchangef() {
  tabchanges++;
  if (tabchanges > 1) tabchanges = 1;
}
function tabchange() {
  if (tabchanges >= 1) {
    tabchanges = 1;
  } else {
    document.getElementById("tabchangeforward").src = "images/bluebkwdulls.svg";
  }

  if (tabchanges <= 0) {
    tabchanges = 0;
  } else {
    document.getElementById("tabchangebackward").src = "images/bluebkdulls.svg";
  }
}

function varinit() {
  varchange();
  //Variable m1 slider and number input types
  $("#m1spinner").spinner("value", 300);
  $("#m1slider").slider("value", 300);

  //Variable m2 slider and number input types
  $("#m2spinner").spinner("value", 300);
  $("#m2slider").slider("value", 300);

  //Variable r1 slider and number input types
  $("#r1spinner").spinner("value", 20);
  $("#r1slider").slider("value", 20);

  //Variable r2 slider and number input types
  $("#r2spinner").spinner("value", 20);
  $("#r2slider").slider("value", 20);

  //Variable theta1 slider and number input types
  $("#theta1spinner").spinner("value", 100);
  $("#theta1slider").slider("value", 100);

  //Variable r slider and number input types
  $("#rspinner").spinner("value", 30);
  $("#rslider").slider("value", 30);
}

function varchange() {
  //Variable m1 slider and number input types
  $("#m1slider").slider({ max: 500, min: 0, step: 1 }); // slider initialisation : jQuery widget
  $("#m1spinner").spinner({ max: 500, min: 100, step: 1 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  $("#m1slider").on("slide", function (e, ui) {
    $("#m1spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m1spinner").on("spin", function (e, ui) {
    $("#m1slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m1spinner").on("change", function () {
    varchange();
  });

  //Variable m2 slider and number input types
  $("#m2slider").slider({ max: 500, min: 0, step: 1 }); // slider initialisation : jQuery widget
  $("#m2spinner").spinner({ max: 500, min: 100, step: 1 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  $("#m2slider").on("slide", function (e, ui) {
    $("#m2spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m2spinner").on("spin", function (e, ui) {
    $("#m2slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#m2spinner").on("change", function () {
    varchange();
  });

  //Variable r1 slider and number input types
  $("#r1slider").slider({ max: 45, min: 0, step: 1 }); // slider initialisation : jQuery widget
  $("#r1spinner").spinner({ max: 45, min: 0, step: 1 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  $("#r1slider").on("slide", function (e, ui) {
    $("#r1spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#r1spinner").on("spin", function (e, ui) {
    $("#r1slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#r1spinner").on("change", function () {
    varchange();
  });

  //Variable r2 slider and number input types
  $("#r2slider").slider({ max: 45, min: 0, step: 1 }); // slider initialisation : jQuery widget
  $("#r2spinner").spinner({ max: 45, min: 0, step: 1 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  $("#r2slider").on("slide", function (e, ui) {
    $("#r2spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#r2spinner").on("spin", function (e, ui) {
    $("#r2slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#r2spinner").on("change", function () {
    varchange();
  });

  //Variable theta1 slider and number input types
  $("#theta1slider").slider({ max: 360, min: 0, step: 1 }); // slider initialisation : jQuery widget
  $("#theta1spinner").spinner({ max: 360, min: 0, step: 1 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  $("#theta1slider").on("slide", function (e, ui) {
    $("#theta1spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#theta1spinner").on("spin", function (e, ui) {
    $("#theta1slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#theta1spinner").on("change", function () {
    varchange();
  });

  //Variable m2 slider and number input types
  $("#mslider").slider({ step: 0.1 }); // slider initialisation : jQuery widget
  $("#mspinner").spinner({ step: 0.1 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  $("#mslider").on("slide", function (e, ui) {
    $("#mspinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#mspinner").on("spin", function (e, ui) {
    $("#mslider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#mspinner").on("change", function () {
    varchange();
  });

  //Variable r2 slider and number input types
  $("#rslider").slider({ max: 45, min: 0, step: 1 }); // slider initialisation : jQuery widget
  $("#rspinner").spinner({ max: 45, min: 0, step: 1 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  $("#rslider").on("slide", function (e, ui) {
    $("#rspinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#rspinner").on("spin", function (e, ui) {
    $("#rslider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#rspinner").on("change", function () {
    varchange();
  });

  //Variable theta1 slider and number input types
  $("#thetaslider").slider({ max: 360, min: 0, step: 1 }); // slider initialisation : jQuery widget
  $("#thetaspinner").spinner({ max: 360, min: 0, step: 1 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  $("#thetaslider").on("slide", function (e, ui) {
    $("#thetaspinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#thetaspinner").on("spin", function (e, ui) {
    $("#thetaslider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#thetaspinner").on("change", function () {
    varchange();
  });
}

function varupdate() {
  m1 = $("#m1spinner").spinner("value");
  m2 = $("#m2spinner").spinner("value");
  theta1 = $("#theta1spinner").spinner("value");
  if (simstatus) {
    if (flag == 0) {
      jj = 1;
      theta = 0;
      ptx = [];
      pty = [];
      ptxdot = [];
      ptxddot = [];
      ptxdddot = [];
      j = 20;
      ptx.push(30);
      ptxdot.push(270);
      ptxddot.push(270 - ptx);
      pty.push(300);
      omega2 =
        (omega * Math.cos(rad(beta))) /
        (1 -
          Math.pow(Math.sin(rad(beta)), 2) * Math.pow(Math.cos(rad(theta)), 2));
      ptxdddot.push(150 - 50 * (omega2 - omega));
    }
    flag = 1;
  }
  tabchange();
  if (tabchanges == 0) {
    $("#mass1").show();
    $("#mass2").show();
    $("#radius1").show();
    $("#radius2").show();
    $("#tt1").show();
    $("#radius").hide();
    $("#balanceMass").hide();
    $("#angle").hide();
    $("#resultdata").hide();
  }
  if (tabchanges == 1) {
    $("#mass1").hide();
    $("#mass2").hide();
    $("#radius1").hide();
    $("#radius2").hide();
    $("#tt1").hide();
    $("#radius").show();
    $("#balanceMass").show();
    $("#angle").show();
    $("#resultdata").show();
  }
  if (tabchanges == 2) {
    $("#mass1").hide();
    $("#mass2").hide();
    $("#radius1").hide();
    $("#radius2").hide();
    $("#tt1").hide();
    $("#radius").hide();
    $("#balanceMass").show();
    $("#angle").show();
    $("#commentDisplay").show();
    perror();
  }
  if (simstatus) {
    //if(flag==1){jj=1;theta=0;ptx=[]; pty=[]; ptxdot=[]; ptxddot=[]; ptxdddot=[]; j=20; ptx.push(30); ptxdot.push(270);ptxddot.push(270-ptx);};
    flag = 0;
    $("#thetaslider").slider("enable");
    $("#thetaspinner").spinner("enable");
    $("#omegaslider").slider("disable");
    $("#omegaspinner").spinner("disable");
    theta = $("#thetaspinner").spinner("value");
    //jj=1;ptx=[]; pty=[]; ptxdot=[]; ptxddot=[]; ptxdddot=[]; j=20; ptx.push(30); ptxdot.push(270);ptxddot.push(270-ptx);
  }
  $("#r2spinner").spinner("enable");
  $("#r1spinner").spinner("enable");
  r1 = $("#r1spinner").spinner("value");
  r2 = $("#r2spinner").spinner("value");
  theta = theta + rotstatus * 0.1 * deg(omega);
  theta = theta % 360;
  if (theta < 0) theta += 360;

  $("#r1spinner").spinner("enable");
  $("#r2spinner").spinner("enable");
  m = $("#mspinner").spinner("value");
  r = $("#rspinner").spinner("value");
  th = $("#thetaspinner").spinner("value");

  Fh = (m1 * r1 * Math.cos(rad(0)) + m2 * r2 * Math.cos(rad(theta1))) / 100;
  Fv = (m1 * r1 * Math.sin(rad(0)) + m2 * r2 * Math.sin(rad(theta1))) / 100;
  Fu = Math.sqrt(Fh * Fh + Fv * Fv);
  B = Fu / (r * 0.01);
  thetab = 180 + deg(Math.atan(Fv / Fh));

  o.xcoord = 0;
  o.ycoord = 0;
  a.xcoord = 3 * r1 * Math.cos(rad(theta));
  a.ycoord = 3 * r1 * Math.sin(rad(theta));
  b.xcoord = 3 * r2 * Math.cos(rad(theta + theta1));
  b.ycoord = 3 * r2 * Math.sin(rad(theta + theta1));
  c.xcoord = 3 * r * Math.cos(rad(theta + th));
  c.ycoord = 3 * r * Math.sin(rad(theta + th));

  z.xcoord = -20;
  z.ycoord = 0;
  w.xcoord = 180;
  w.ycoord = 0;
  u.xcoord = 80;
  u.ycoord = 0;
  t.xcoord = u.xcoord;
  t.ycoord = 0;
  s.xcoord = u.xcoord;
  s.ycoord = 0;
  a1.xcoord = u.xcoord;
  a1.ycoord = 4 * r1 * Math.sin(rad(theta));
  b1.xcoord = 80;
  b1.ycoord = 4 * r2 * Math.sin(rad(theta + theta1));
  c1.xcoord = u.xcoord;
  c1.ycoord = 4 * r * Math.sin(rad(theta + th));
  draw();
}

function perror() {
  var errorm = 0;
  errorm = ((m - B) * 100) / B;
  var errm = errorm.toFixed(2);
  var errorp = 0;
  errorp = ((th - thetab) * 100) / thetab;
  var errp = errorp.toFixed(2);
  var iput1 = document.getElementById("mspinner").value;
  if (iput1.trim() == "") {
    printcomment("", 3);
  } else {
    printcomment(
      "Percentage Error in Mass: " +
        errm +
        "%" +
        "<br>Percentage Error in Position: " +
        errp +
        "%",
      1
    );
    printcomment(
      "Balancing Mass: " +
        roundd(B, 2) +
        " kg<br>Position of Balancing Mass: " +
        roundd(thetab, 1) +
        " deg",
      2
    );
    if (submitbut) submitbut = 0;
    if (!submitbut) submitbut = 1;
  }
}


function draw() {
  ctx.clearRect(0, 0, 550, 400); //clears the complete canvas#simscreen everytime

  pointtrans(o, trans);
  pointtrans(a, trans);
  pointtrans(b, trans);

  pointtrans(z, trans1);
  pointtrans(w, trans1);
  pointtrans(t, trans1);
  pointtrans(u, trans1);
  pointtrans(s, trans1);
  pointtrans(a1, trans1);
  pointtrans(b1, trans1);
  pointtrans(c1, trans1);

  var o1 = new point(0, 0, "o");
  o1.xcoord = o.xcoord;
  o1.ycoord = o.ycoord + 7.5;
  drawrect(o1, 10, 15, 0, ctx, "#CC9933", "#CC9933", 1);

  var z1 = new point(0, 0, "z");
  z1.xcoord = z.xcoord;
  z1.ycoord = z.ycoord + 7.5;
  drawrect(z1, 10, 15, 0, ctx, "#CC9933", "#CC9933", 1);

  var w1 = new point(0, 0, "w");
  w1.xcoord = w.xcoord;
  w1.ycoord = w.ycoord + 7.5;
  drawrect(w1, 10, 15, 0, ctx, "#CC9933", "#CC9933", 1);

  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#666666";
  ctx.moveTo(30, o.ycoord + 15);
  ctx.lineTo(550, o.ycoord + 15);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.moveTo(o.xcoord - 100, o.ycoord);
  ctx.lineTo(o.xcoord + 100, o.ycoord);
  ctx.stroke();

  ctx.closePath();

  if (m > 0) {
    pointtrans(c, trans);
    pointjoin(o, c, ctx, "#f92c4b", 5); //B
    pointdisp(c, ctx, 10, "#000000", "#660000", "", "", "");
    pointjoin(s, c1, ctx, "#f92c4b", 5); //green//leftside A,B
    pointdisp(c1, ctx, 10, "#000000", "#660000", "", "", "");
  }

  //Pivot and centre
  pointjoin(o, a, ctx, "#2285a3", 5);
  pointjoin(o, b, ctx, "#2285a3", 5);

  //To mark angle
  //   <!-- drawrem(ctx); -->

  pointdisp(o, ctx, 6, "#000000", "#003366", "", "", ""); //circle
  pointdisp(a, ctx, 10, "#000000", "#003366", "", "", "");
  pointdisp(b, ctx, 10, "#000000", "#003366", "", "", "");

  pointjoin(z, w, ctx, "#003366", 7);
  pointjoin(u, b1, ctx, "#2285a3", 5); //right side 1,2 //purple
  pointjoin(t, a1, ctx, "#2285a3", 5); //right side 1,2//purple

  pointdisp(b1, ctx, 10, "#000000", "#003366", "", "", "");
  pointdisp(a1, ctx, 10, "#000000", "#003366", "", "", "");
}

function drawrem(context) {
  if (theta1 % 360 <= 180) offset = -45;
  else offset = 20;

  //To draw Angle
  var PI2 = Math.PI * 2;
  var corners = [];
  var corners1 = [];
  var corners2 = [];
  var corners3 = [];
  corners.push({
    x: a.xcoord,
    y: a.ycoord,
  });
  corners.push({
    x: o.xcoord,
    y: o.ycoord,
  });
  corners.push({
    x: b.xcoord,
    y: b.ycoord,
  });
  corners1.push({
    x: b.xcoord,
    y: b.ycoord,
  });
  corners1.push({
    x: o.xcoord,
    y: o.ycoord,
  });
  corners1.push({
    x: o.xcoord,
    y: o.ycoord,
  });
  corners2.push({
    x: a.xcoord,
    y: a.ycoord,
  });
  corners2.push({
    x: o.xcoord,
    y: o.ycoord,
  });
  corners2.push({
    x: o.xcoord,
    y: o.ycoord,
  });
  corners3.push({
    x: a.xcoord,
    y: a.ycoord,
  });
  corners3.push({
    x: o.xcoord,
    y: o.ycoord,
  });
  corners3.push({
    x: c.xcoord,
    y: c.ycoord,
  });

  var rectStrokeStyle = "black";
  //  between a and b
  for (var i = 0; i < corners.length - 2; i++) {
    drawAngleSymbol(
      corners[i],
      corners[i + 1],
      corners[i + 2],
      "red",
      10,
      rtst,
      280,
      100
    );
  }
  //  between o and a
  for (var i = 0; i < corners2.length - 2; i++) {
    drawAngleSymbol(
      corners2[i + 1],
      corners2[i + 1],
      corners2[i],
      "green",
      20,
      rtst,
      280,
      120
    );
  }
  //  between o and b
  for (var i = 0; i < corners1.length - 2; i++) {
    drawAngleSymbol(
      corners1[i + 1],
      corners1[i + 1],
      corners1[i],
      "blue",
      30,
      rtst,
      280,
      140
    );
  }
  if (m > 0) {
    //  between a and c
    for (var i = 0; i < corners3.length - 2; i++) {
      drawAngleSymbol(
        corners3[i],
        corners3[i + 1],
        corners3[i + 2],
        "orange",
        40,
        rtst,
        280,
        160
      );
    }
  }
}

function printcomment(commenttext, commentloc) {
  if (commentloc == 0) {
    document.getElementById("commentboxright").style.display = "none";
    document.getElementById("commentboxleft").innerHTML = commenttext;
  } else if (commentloc == 1) {
    document.getElementById("commentboxright").style.display = "block";
    document.getElementById("commentboxleft").style.display = "block";
    document.getElementById("commentboxcorrect").style.display = "block";
    document.getElementById("commentboxleft1").style.display = "none";
    document.getElementById("commentboxleft").innerHTML = commenttext;
    document.getElementById("commentboxcorrect").innerHTML =
      "Correct Answer is:";
  } else if (commentloc == 2) {
    document.getElementById("commentboxright").style.display = "block";
    document.getElementById("commentboxleft").style.display = "block";
    document.getElementById("commentboxcorrect").style.display = "block";
    document.getElementById("commentboxleft1").style.display = "none";
    document.getElementById("commentboxright").innerHTML = commenttext;
    document.getElementById("commentboxcorrect").innerHTML =
      "Correct Answer is:";
  } else if (commentloc == 3) {
    document.getElementById("commentboxright").style.display = "none";
    document.getElementById("commentboxleft").style.display = "none";
    document.getElementById("commentboxleft1").style.display = "block";
    document.getElementById("commentboxleft1").innerHTML =
      "Please enter value to the masses.";
    // ignore use of deprecated tag <center> . Code is executed only if printcomment function receives inappropriate commentloc value
  }
}
function isNumberKey(el) {
  var charCode = el.which ? el.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
  var ex = "/^[0-9]+.?[0-9]*$/";
  if (ex.test(el.value) == false) {
    el.value = el.value.substring(0, el.value.length - 1);
  }
}
