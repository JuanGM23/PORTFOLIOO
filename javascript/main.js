 release/1.3.0
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
=======
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
release/1.3.0

const asuntoInput = document.getElementById('asunto');
const ccInput = document.getElementById('cc');
const cuerpoInput = document.getElementById('cuerpo');

const validateInput = (inputElement, validationFunction) => {
    const inputValue = inputElement.value;
    const isValid = validationFunction(inputValue);
    if (isValid) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
        const errorElement = inputElement.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error')) {
            errorElement.remove();
        }
    } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');
        const errorElement = inputElement.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error')) {
            errorElement.textContent = 'Este campo no cumple los requisitos.';
        } else {
            const newErrorElement = document.createElement('div');
            newErrorElement.classList.add('error');
            newErrorElement.textContent = 'Este campo no cumple los requisitos.';
            inputElement.parentNode.insertBefore(newErrorElement, inputElement.nextSibling);
        }
    }
};

const validateAsunto = (asunto) => {
    return asunto.trim() !== '';
};

const validateCC = (cc) => {
    return cc.trim() === '' || /\S+@\S+\.\S+/.test(cc);
};

const validateCuerpo = (cuerpo) => {
    return cuerpo.trim() !== '';
};

asuntoInput.addEventListener('blur', () => {
    validateInput(asuntoInput, validateAsunto);
});

ccInput.addEventListener('blur', () => {
    validateInput(ccInput, validateCC);
});

cuerpoInput.addEventListener('blur', () => {
    validateInput(cuerpoInput, validateCuerpo);
});
=======
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
