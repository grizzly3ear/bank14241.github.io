let playlist = [];

function playAudio(task) {
    if (task == 'play') {
        let x = $('#audioInput').val();
        playlist = x.split(" ");
        for (var index = 0; index < playlist.length; index++) {
            $('#audio' + playlist[index]).trigger('play');
        }
    } else if (task == 'stop') {
        for (var index = 0; index < playlist.length; index++) {
            $('#audio' + playlist[index]).trigger('pause');
            $('#audio' + playlist[index]).prop('currentTime', 0);
        }
        playlist = [];
    }
}

function stopCustom() {
    let x = $('#audioStopInput').val();
    let stoplist = x.split(" ");
    for (var index = 0; index < stoplist.length; index++) {
        $('#audio' + stoplist[index]).trigger('pause');
        $('#audio' + stoplist[index]).prop('currentTime', 0);

    }
}

function fadeOut(id) {
    $('#audio' + id).animate({ volume: 0 }, 1000);
    setTimeout(function () {
        $('#audio' + id).trigger('pause');
    }, 1000);
}
