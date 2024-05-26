var xwinner = 0;
var owinner = 0;
function setwinner(winner) {
    if (winner === "x") {
        xwinner = xwinner + 1;
        var s = document.getElementById("firstplayer").value + " is the winner for this round 🎖";
        alert(s);
        resetg();
        document.getElementById("xplayerpoint").value = xwinner;
    }
    else if (winner === "o") {
        owinner = owinner + 1;
        var s = document.getElementById("secondplayer").value + " is the winner for this round🎖";
        alert(s);
        resetg();
        document.getElementById("oplayerpoint").value = owinner;
    }
    else if (winner === "exit") {
        xwinner = 0;
        ywinner = 0;
        document.getElementById("xplayerpoint").value = xwinner;
        document.getElementById("oplayerpoint").value = owinner;
    }
    else if (winner === "nowinner") {
        resetg()
    }
    else {
        //alert("Wrong parameters to punction "+winner)
    }
}
function fetchImg(imgsrc) {
    return imgsrc.src.split("/").pop().split(".")[0]
}
function setPlayers(inp) {
    var p1 = document.getElementById("firstplayer").value;
    var p2 = document.getElementById("secondplayer").value;
    if (p1.length > 0 && p2.length > 0) {
        document.getElementById("xplayer").innerHTML = p1;
        document.getElementById("oplayer").innerHTML = p2;
        dispb(inp);
        undispb(document.getElementById('nametemp'));
        undispb(document.getElementById('nametemp1'));
    }
    else {
        alert("Enter Both Players name");
    }
}
function changImg(img, imgobj) {
    if (img == "bg") {
        if (document.getElementById("tern1").checked) {
            imgobj.src = "x.png";
            document.getElementById("xplayerpoint").style.backgroundColor = "#e9ecef";
            document.getElementById("oplayerpoint").style.backgroundColor = "lightGreen";
            document.getElementById("tern2").checked = true;
            document.getElementById("tern1").checked = false;
        }
        else {
            imgobj.src = "o.png";
            document.getElementById("xplayerpoint").style.backgroundColor = "lightGreen";
            document.getElementById("oplayerpoint").style.backgroundColor = "#e9ecef";
            document.getElementById("tern1").checked = true;
            document.getElementById("tern2").checked = false;
        }
        //alert(checkall())
        setwinner(checkall());
    }
}
function allobjinarr() {
    var arrofobj = [];
    for (i = 1; i < 10; i++) {
        var s = "c" + i;
        arrofobj.push(document.getElementById(s));
    }
    return arrofobj;
}
function checkall() {
    var plate = allobjinarr();
    var arrimg = [];
    for (i = 0; i < 9; i++) {
        arrimg.push(fetchImg(plate[i]));
    }
    plate = 0;
    //alert(arrimg);
    //main logic
    if (arrimg[0] != "bg" && arrimg[0] == arrimg[1] && arrimg[1] == arrimg[2] && arrimg[0] == arrimg[2
    ]) {
        return arrimg[0];
    }
    if (arrimg[3] != "bg" && arrimg[3] == arrimg[4] && arrimg[4] == arrimg[5] && arrimg[0] == arrimg[2
    ]) {
        return arrimg[3];
    }
    if (arrimg[6] != "bg" && arrimg[6] == arrimg[7] && arrimg[7] == arrimg[8] && arrimg[6] == arrimg[8
    ]) {
        return arrimg[6];
    }
    if (arrimg[2] != "bg" && arrimg[2] == arrimg[5] && arrimg[5] == arrimg[8] && arrimg[2] == arrimg[8
    ]) {
        return arrimg[2];
    }
    if (arrimg[1] != "bg" && arrimg[1] == arrimg[4] && arrimg[4] == arrimg[7] && arrimg[1] == arrimg[7
    ]) {
        return arrimg[1];
    }
    if (arrimg[0] != "bg" && arrimg[0] == arrimg[3] && arrimg[3] == arrimg[6] && arrimg[6] == arrimg[0
    ]) {
        return arrimg[0];
    }
    if (arrimg[0] != "bg" && arrimg[0] == arrimg[4] && arrimg[4] == arrimg[8] && arrimg[8] == arrimg[0
    ]) {
        return arrimg[0];
    }
    if (arrimg[2] != "bg" && arrimg[2] == arrimg[4] && arrimg[4] == arrimg[6] && arrimg[2] == arrimg[6
    ]) {
        return arrimg[2];
    }
    else {
        var status = true;
        for (i = 0; i < 9; i++) {
            if (arrimg[i] == "bg") {
                status = false;
            }
        }
        if (status) {
            resetg();
        }
        else {
            return "ashu";
        }
    }
    return "nowinner";
    //winnervarible
}
function resetg() {
    var plate = allobjinarr();
    for (i = 0; i < 9; i++) {
        plate[i].src = "bg.png";
    }
}
function gameEnd() {
    resetg();
    var st = finalwinner();
    alert(st);
    setwinner("exit");
    location.reload();
}
function finalwinner() {
    if (xwinner == owinner) {
        return "Both have equal points";
    }
    else {
        if (xwinner > owinner) {
            var w = document.getElementById("firstplayer").value + " is the winner of the game 🏆 " ;
            return w;
        }
        else if (xwinner < owinner) {
            var w = document.getElementById("secondplayer").value + " is the winner of the game 🏆";
            return w;
        }
    }
}
function dispb(msb) {
    msb.style.display = "none";
}
function undispb(msb) {
    msb.style.display = "flex";
}
function start(p, r) {
    dispb(p);
    undispb(document.getElementById('nameblock'));
}