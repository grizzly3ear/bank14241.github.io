let playlist = [];
let list = ['at-beach', 'bird', 'ShapeOfYou', 'เริ่มกินเหล้า', 'เปิดตู้เย็น', 'joe die', 
            'แมนนี่ตาย เล่นจนดินเถียงพลอย', 'shock', 'wind', 'ทุบหัว', 'โดนแทง', 'ฝนตกฟ้าร้อง', 
            'เดินวน', 'ตอนจบ', 'ตำรวจ']; //ไฟล์ต้องเรียงนะ
$(document).ready(function () {
    for (var index = 0; index < list.length; index++) {
        $('#content').append('  <div class="row">'+
                                    '<div class="col-md-offset-1 col-md-2">'+
                                        '<span>' + (index+1) + '. ' + list[index] + '</span>'+
                                    '</div>'+
                                    '<div class="col-md-4">'+
                                        '<audio controls id="audio' + (index+1) + '">'+
                                            '<source src="audio/' + (index+1) + '.mp3" type="audio/mpeg">'+
                                            '<source src="audio/' + (index+1) + '.wav" type="audio/wav">'+
                                            '<source src="audio/' + (index+1) + '.ogg" type="audio/ogg">'+
                                            '<source src="audio/' + (index+1) + '.m4a" type="audio/mp4">'+
                                        '</audio>'+
                                    '</div>'+
                                    '<div class="col-md-5">'+
                                        '<input type="number" id="fadeId'+(index+1)+'" style="width: 15%" min="1" value="1">'+
                                        '<button class="btn btn-warning" onclick="fadeOut(' + (index+1) + ')">fade out</button>'+
                                    '</div>'+
                                '</div>'+
                                '<br>');
    }
    
});


function playAudio(task) {
    if (task == 'play') {
        let x = $('#audioInput').val();
        playlist = x.split(" ");
        for (var index = 0; index < playlist.length; index++) {
            $('#audio' + playlist[index]).animate({ volume: 1}, 10);
            $('#audio' + playlist[index]).trigger('play');
        }
        playlist = [];
    } else if (task == 'stopAll') {
        for (var index = 0; index < list.length; index++) {
            $('#audio' + (index+1)).trigger('pause');
            $('#audio' + (index+1)).prop('currentTime', 0);
        }
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
    let sec = $('#fadeId'+id).val() +0;
    let fade = sec*100;
    $('#audio' + id).animate({ volume: 0 }, fade);
    setTimeout(function () {
        $('#audio' + id).trigger('pause');
    }, fade);
}

function fadeCustom(){
    let x = $('#audioStopInput').val();
    let fadelist = x.split(" ");
    for (var index = 0; index < fadelist.length; index++) {
        fadeOut(fadelist[index]);   
    }
    
}
