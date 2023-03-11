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