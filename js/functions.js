$(function(){
    menu();

    function menu(){
        $('nav.mobile').click(function(){
            $(this).find('ul').slideToggle();
        })
    }
    $('nav.mobile ul').click(function(){
            var href =   $(this).find('a').attr('href');

            window.location.href = href;
        })
        
        $('nav li').click(function(){
            var anchor = $(this/*this = nav li*/ ).find('a'); // ao clicar no li encontre o link a
            var href = anchor.attr('href'); // atribui ao link encontrado o valor do href
            var offSetTop = $(href).offset().top;

            $('html,body').animate({'scrollTop': offSetTop}, 500);
            return false
    })
})