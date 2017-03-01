var pic = document.getElementById("vimage");

var prevX = -1;
var prevY = -1;
//var lastdot = function(e) {
//    var prevX = e.offsetX;
//    var prevX = e.offsetY;
//}

var dots = function(x, y) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "10");
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
};

var line = function(x, y) {
    var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute("x1", prevX);
    l.setAttribute("y1", prevY);
    l.setAttribute("x2", x);
    l.setAttribute("y2", y);
    l.setAttribute("stroke", "black");
    pic.appendChild(l);
}

var connect = function(e) {
    line(e.offsetX, e.offsetY);
    dots(e.offsetX, e.offsetY);
    prevX = e.offsetX;
    prevY = e.offsetY;
}

var clear = function() {
    while (pic.lastChild) {
	pic.removeChild(pic.lastChild);
    }
}

var clr = document.getElementById("clr")
clr.addEventListener("click",clear);

pic.addEventListener("click",connect);

