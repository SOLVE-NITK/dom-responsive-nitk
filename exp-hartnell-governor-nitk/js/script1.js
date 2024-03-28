function selectPos(elem){
    var imgId = elem.id;
    if(imgId == "cb1") {
        document.getElementById("imgTitle").innerHTML = "Minimum Position";
        document.getElementById("myImg").src = "./images/minPosition.png";
        // document.getElementById("myImg").style.height= exptSelected == 0 ?"350px" : "255px";
        // document.getElementById("myImg").style.width= exptSelected == 0 ?"350px" : "350px";
        document.getElementById("imgTitle").style.left= exptSelected == 0 ?"340px" : "100px";
    
    } else if(imgId == "cb2") {
        document.getElementById("imgTitle").innerHTML = "Maximum Position";
        document.getElementById("myImg").src = "./images/maxPosition.png";
        // document.getElementById("myImg").style.height= exptSelected == 0 ?"350px" : "255px";
        // document.getElementById("myImg").style.width= exptSelected == 0 ?"350px" : "355px";
        document.getElementById("imgTitle").style.left= exptSelected == 0 ?"340px" : "100px";
    }
    
    }