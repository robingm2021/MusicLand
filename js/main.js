// Variables

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open'); /*icono pequeño de las 3 barritas en el nav*/
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

function menus () {
    let Desplazamiento_Actual = window.pageYOffset; /*retorna el número de píxeles que han sido desplazados en el documento mediante el scroll vertical*/

    if (Desplazamiento_Actual <= 300) {
        nav.classList.remove('nav2'); /*se remueve el nombre de la clase*/
        nav.className = ('nav1');
        nav.style.transition = '1s'; /*velocidad con que cambia de un estilo a otro*/
        menu.style.top = '80px'; /*margen superior del div que contiene los enlaces*/
        abrir.style.color = '#fff'; /*se cambia el color de las 3 barritas en el nav*/

    } else {
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = '#000'; /*se cambia el color de las 3 barritas en el nav*/
    }
}

function apertura () {
    if (cerrado) { /*al inicio se declaró como verdadero (true)*/
        menu.style.width = '70vw'; /*vw hace referencia al ancho, en este caso del div que contiene los enlaces. Su efecto solo se ve al hacerse más pequeña la página. En el css width está en 0*/
        cerrado = false;

    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('load', function () {  /*para que cuando cargue la página realice lo programado*/
    menus();
});

/*el siguiente evento es para cuando se dé click en cualquier parte de la ventana hacer...*/

window.addEventListener('click', function (e) {  /*apertura función. e será el parámetro del evento*/
    console.log(e.target);  /*el target me dice a qué le doy clic, debería aparecer en consola*/

    if (cerrado == false) {
        let span = document.querySelector('span');  /*se asigna el elemento span de html al span aquí*/
        /*recordar que span es el elemento en sí mismo y open es el div pero es donde están las 3 barritas*/
        
        if (e.target !== span && e.target !== abrir) {  /*en pocas palabras estamos diciendo que si se apunta a un elemento diferente a las 3 barritas, haga lo siguiente*/
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    } /*cierro el if padre*/
/*cierro la función*/ }); /*paréntesis de cierre del evento*/

window.addEventListener('scroll', function () { /*al hacer scroll, se activa la función menus() ya programada*/
    console.log(window.pageYOffset); /*esto solo se verá si se abre la ventana de Inspección, pestaña console*/
    menus();
});

window.addEventListener('resize', function () { /*en caso de que el usuario cambie el tamaño de la pantalla, haga esto*/
    if (screen.width >= 700) { /*si el ancho de pantalla es igual o mayor a 700 haga*/
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

abrir.addEventListener('click', function () { /*al dar clic en abrir (id 'open' en el html) haga lo siguiente*/
    apertura();
});