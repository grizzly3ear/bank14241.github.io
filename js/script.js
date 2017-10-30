let playlist = [];
let list = ['ฟ้าร้อง', 'แมนนี่ช๊อค']; //ไฟล์ต้องเรียงนะ
$(document).ready(function () {
    for (var index = 0; index < list.length; index++) {
        $('#content').append('  <div class="row">'+
                                    '<div class="col-md-offset-2 col-md-1">'+
                                        '<span>' + (index+1) + '. ' + list[index] + '</span></div><div class="col-md-3">'+
                                        '<audio controls id="audio' + (index+1) + '">'+
                                            '<source src="audio/' + (index+1) + '.mp3" type="audio/mpeg">'+
                                        '</audio>'+
                                    '</div>'+
                                    '<div class="col-md-3">'+
                                        '<button class="btn btn-warning" onclick="fadeOut(' + (index+1) + ')">fade out</button>'+
                                    '</div>'+
                                '</div>'+
                                '<br>');
    }
})


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
