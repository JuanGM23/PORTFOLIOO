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
