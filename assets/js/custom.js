$(document).ready(function () {
    $('body').css('min-height', $(window).height());
    $('.project').hide();
    $('.info-project').hide();
    $('#main').hide();
    $('.contacts').hide();

    $('#contacts').click(function () {
        $('.contacts').toggle('slow');
    });

    $('#projects').click(function () {
        $('.main').hide('slow');
        $('#contacts, .contacts').hide('slow');
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
