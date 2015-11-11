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
        $('.main').hide(1);
        $('#contacts').hide(1);
        $('.project').show(1);
        $('#main').show(1);
    })

    $("#main").click(function() {
        $('.project').hide(1);
        $('#main').hide(1);
        $('.main').show(1);
        $('#contacts').show(1);
    })

    $('.col-md-3').hover(function() {
        if( this.id ) {
            $('#project'+this.id).show();   
        };
    }, function() {
        $('.info-project').hide();
    });

})
