var i = 0; // song index
var songList = [
    'songs/loop1.mp3', 'songs/loop2.mp3', 'songs/loop3.mp3', 'songs/loop4.mp3',
    'songs/loop5.mp3', 'songs/loop6.mp3', 'songs/loop7.mp3', 'songs/loop8.mp3'
];
// create audio element
var ae = document.createElement('audio');
ae.id = 'audioplayer';
ae.src = songList[0];
document.body.appendChild(ae);
// create controls
var btnPlay = document.createElement('button');
var btnPrev = document.createElement('button');
var btnNext = document.createElement('button');
var testDiv = document.createElement('div');
btnPlay.innerHTML = 'Play/Pause';
btnPrev.innerHTML = 'Previous song';
btnNext.innerHTML = 'Next song';
testDiv.id = "test";
document.body.appendChild(btnPlay);
document.body.appendChild(btnPrev);
document.body.appendChild(btnNext);
document.body.appendChild(testDiv);
//add event handlers
ae.onplay = function () {
    testDiv.innerHTML = 'Now playing #' + (i + 1) + ' ' + songList[i];
};
ae.onended = function () {
    NextSong();
};
btnPlay.onclick = function () {
    if (ae.paused)
        ae.play();
    else
        ae.pause();
};
btnPrev.onclick = PrevSong;
btnNext.onclick = NextSong;
ae.play();
function PrevSong() {
    i = (i > 0) ? i - 1 : songList.length - 1; // choose previous index
    ae.setAttribute("src", songList[i]);
    ae.play();
}
function NextSong() {
    i = (i < songList.length - 1) ? i + 1 : 0; // choose next index
    ae.setAttribute("src", songList[i]);
    ae.play();
}
//# sourceMappingURL=test.js.map