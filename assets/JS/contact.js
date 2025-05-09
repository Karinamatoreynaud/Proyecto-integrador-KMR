
const inputsArray = [
    {
        name: 'name',
        validation: value => value.length > 2,
        errorText: 'Nombre incorrecto'
    },
    {
        name: 'email',
        validation: value => {
            const regexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
            return regexp.test(value);
        },
        errorText: 'Formato de email incorrecto'
    },
    {
        name:'subject',
        validation: value => value.length > 0,
        errorText: 'Asunto obligatorio'
    },
    {
        name:'body',
        validation: value => value.length > 0,
        errorText: 'Ingrese un texto'
    }
]

const contactSubmit = (event) => {
    event.preventDefault()
    const values = {};
    let isValid = true

    for (let index = 0; index < inputsArray.length; index++) {
        const input = inputsArray[index];
        const inputName = input.name;
        const fieldElement = document.getElementById(inputName);
        const errorElement = document.getElementById(`${inputName}-error`)
        
        if (input.validation(fieldElement.value)) {
            values[inputName] = fieldElement.value
            fieldElement.className = fieldElement.className.replace('with-error', '')
            errorElement.innerText = ''
        } else {
            fieldElement.className = fieldElement.className.concat('with-error')
            errorElement.innerText = input.errorText
            isValid = false
        }
    }

    if (isValid) {
        console.log(values)
    }
}