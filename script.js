
var bar = document.getElementById("prog")
window.onscroll = function(){scrollfun()};

function scrollfun(){
    var theight =document.documentElement.scrollTop;
    var cheight =document.documentElement.clientHeight;
    var height = document.documentElement.scrollHeight - cheight;

    var per = (theight/height) * 100
    console.log(per);
    bar.style.width =per +"%";
    console.log('scroll top he:' + theight);
    console.log(document.documentElement.scrollHeight);
}


