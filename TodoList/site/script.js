$(function(){
    var nameValues
    var textValues
    var newElems

    function nameandtextWorks(){
        nameValues = $('input').val();
        console.log('имя -' + nameValues);
        textValues = $("#texarea").val();
        console.log('описание -' + textValues);   
    };

    function abbel(){
        newElems = $('.works').prepend('<div class="list"><div class="nameWorks"><span class="nameFack">'+nameValues+'</span><button class="lik">X</button><img class="degs" src="стрелка.png" alt="cursir"></div><div class="textWorks"><p>'+textValues+'</p></div></div>');
    };

    $('.wsr').on('click', function(){
        nameandtextWorks();
        abbel();
    });

    // $('.lik').click(function () {
    //     // получим блок с .content в котором находится эта кнопка и удалим всё его содержимое
    //     $(this).closest('.list').empty();
    // })
    
    $('html').on('click','.lik', function () {
        $(this).parent().parent().remove()
    })

    $('html').on('click','img', function (){
        var hh = $(this).parent().next();
        if(hh.is(':visible')){
            hh.hide();

        }else{
            hh.show();
        };
    })
    $('html').on('click','img', function (){
        $(this).toggleClass('transform');
    })
})