function getStuff() {
    var list = document.querySelectorAll("#first");
    for(var i=0; i<list.length;i++){
        list[i].onclick=talk;
    }
}
function talk() {
    alert("Helllllllllloooo!");
}
window.onload=getStuff;