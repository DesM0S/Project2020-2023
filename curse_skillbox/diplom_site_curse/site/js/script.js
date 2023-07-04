$(document).ready(function(){
    $('.list_my_work').slick({
        arrows:false,//стрелки
        dots: true,
        adaptiveHeight:true,
        slidesToShow: 3,
        slidesToScrol: 3,
        speed: 1000,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 400,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
        responsive:[{
            breakpoint: 1024,
            settings: {
                arrows:true,
                slidesToShow: 2,
                slidesToScrol: 2,
            }
        }],
        mobileFirst:true,
    });
    var txt = $('.qw').html();
    var x = 'X';
    if ($("nav").css('display')=='none'){
        $(".burger").on('click',function(){
            $(".burger").css('display','none');
            $('.bsl').prepend('<div class="list"><div class="List_left">'+ txt+'</div><div class="List_right">'+ x +'</div></div>');
            $('.bsl').css('display', 'flex')
        });
    $('html').on('click','.bsl', function () {
            $(".burger").css('display','block');
            $(this).css('display', 'none')
        })
    }else{
        $(".burger").css('display','none');
    }
})