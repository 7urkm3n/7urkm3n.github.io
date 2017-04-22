$(document).ready(function () {
    $('body').css('min-height', $(window).height());
    var ph = $('.project').hide();
    var ip = $('.info-project').hide();
    var mn = $('#main').hide();
    var ct = $('.contacts').hide();

    $('#contacts').click(function () {
        $('.contacts').toggle('slow');
    });

    $('#projects').click(function () {
        $('#contacts, .contacts').hide('slow');
        $('.main').hide('slow');
        $('.project').show('slow');
        $('#main').show('slow');
    })

    $("#main").click(function() {
        $('.project').hide('slow');
        $('#main').hide('slow');
        $('.main').show('slow');
        $('#contacts').show('slow');
    })

    $('.col-md-3').hover(function() {
        if( this.id ) {
            $('#project'+this.id).show();   
        };
    }, function() {
        $('.info-project').hide();
    });
    
    $('div.thumbnail > a, div.info-project > p > a').attr('target', "_blank");
})
