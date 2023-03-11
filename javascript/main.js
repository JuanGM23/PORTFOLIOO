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
