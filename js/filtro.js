$(function () {
    $('.filter').click(function () { /*cuando se dé clic en los elementos de clase filter*/
        /*al elemento que se le da clic se le agrega la clase active y los demás la pierden*/
        $(this).addClass('active').siblings().removeClass('active');
        /*data-nombre aparece en index.html. Buscar en internet sobre atributos de datos*/
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') { /*si se dio clic en 'todos' hacer lo siguiente...*/
            $('.cont-work').show('1000');  /*se muestran todos las cajas que tengan la clase cont-work*/
        } else {  /*sino, se muestran las cajas según donde se dio clic*/
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    let equipo = $('#equipo').offset().top,  /*se llama al section que se llama equipo*/
        servicio = $('#servicio').offset().top,  /*se llama al section que se llama servicio*/
        trabajo = $('#trabajo').offset().top,  /*como en los casos anteriores*/
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let equipo = $('#equipo').offset().top,
        servicio = $('#servicio').offset().top,
        trabajo = $('#trabajo').offset().top,
        contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-equipo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: equipo -100
        },600);
    });

    $('#enlace-servicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio -100
        },600);
    });

    $('#enlace-trabajo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajo -100
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
});