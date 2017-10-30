let playlist = [];
function playMultiAudio(){
    let x = document.getElementById('audioInput').value;
    for (var index = 0; index < x.length; index++) {
        if (x.charAt(index)!=' ') {
            playlist.push(x.charAt(i));
        }        
    }
    for (var index = 0; index < playlist.length; index++) {
        var audio = new Audio(document.getElementById('audio'+index).src);
        audio.play();
    }
    playlist = [];
}