let playlist = [];
function playMultiAudio(){
    let x = document.getElementById('audioInput').value;
    for (var index = 0; index < x.length; index++) {
        if (x.charAt(index)!=' ') {
            playlist.push(x.charAt(index));
        }        
    }
    for (var index = 0; index < playlist.length; index++) {
        var audio = new Audio(document.getElementById('audio'+index).src);
        audio.play();
    }
    playlist = [];
}
function playAudio(task){
    if (task == 'play') {
        let x = $('#audioInput').val();
        for (var index = 0; index < x.length; index++) {
            if (x.charAt(index) != ' ') {
                playlist.push(x.charAt(index));
            }
        }
        for (var index = 0; index < playlist.length; index++) {
            $('.audio'+playlist[index]).trigger('play');
        }
    } else if(task == 'stop'){
        for (var index = 0; index < playlist.length; index++) {
            $('.audio'+playlist[index]).trigger('pause');
        }
        playlist = [];
    }
}