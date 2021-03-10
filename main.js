var element;


document.getElementById("header").innerHTML = "<h1>wow</h1>";

document.getElementById("header").setAttribute("style","border:5px dotted blue");

element = document.getElementById("header").getAttribute("class");

console.log(element);
