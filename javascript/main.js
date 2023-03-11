release/1.2.0
function filtrarProyectos() {
    var filtro = document.getElementById('filtro');
    var proyectos = document.getElementById('proyectos');

    var tecnologiaSeleccionada = filtro.value;

    var cards = proyectos.getElementsByClassName('card');

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];

        var tecnologias = card.getAttribute('data-tecnologias');

        if (tecnologiaSeleccionada === 'todos' || tecnologias.includes(tecnologiaSeleccionada)) {
            card.style.display = 'inline-block';
        } else {
            card.style.display = 'none';
        }
    }
}
=======
var botones = document.querySelectorAll('.tema');
for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', function () {
        var botonPresionado = this.id;

        switch (botonPresionado) {
            case 'rojo':
                document.body.className = 'rojo';
                break;
            case 'azul':
                document.body.className = 'azul';
                break;
            case 'verde':
                document.body.className = 'verde';
                break;
            case 'reset':
                document.body.className = '';
                break;
        }
    });
}
main
