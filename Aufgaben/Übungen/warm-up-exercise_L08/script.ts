var colors: string[] = ["rgb(1,88,224)", "#ff0088", "yellow", "rgba(0,0,100,0.5)","rgba(2,200,9,90)","pink","#gf1297","green","rgb(60,22,3)","#000000"];
var activeIndex: number = 0;

window.addEventListener('load', function () {
    document.querySelector("#buttonA").addEventListener('click', colorize );

});

function colorize() {
    document.body.style.backgroundColor = colors[activeIndex];
    activeIndex++;

}