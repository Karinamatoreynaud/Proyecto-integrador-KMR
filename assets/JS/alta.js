

const inputsArray = [
    {
        name: "name",
        validation: value => value.length > 2,
        errorText: "El nombre es incorrecto"
    }, 
    {
        name: "price",
        validation: value => value > 0,
        errorText: "El precio debe ser mayor a cero"
    }, 
    {
        name: "stock",
        validation: value => value > 0,
        errorText: "El stock ser mayor a cero"
    }, 
    {
        name: "brand",
        validation: value => value.length > 0,
        errorText: "Campo requerido"
    }, 
    {
        name: "category",
        validation: value => value.length > 3,
        errorText: "La categoría debe contener al menos 4 caracteres"
    }, 
    {
        name: "short_description",
    }, 
    {
        name: "large_description",
    }, 
    {
        name: "free_delivery",
    }, 
    {
        name: "age_from",
        validation: value => value >= 0,
        errorText: "La edad no puede ser menor a cero"
    }, 
    {
        name: "age_to",
        validation: value => value >= 0 && value <= 100,
        errorText: "La edad no puede ser menor a cero ni mayor a 100 años"
    }, 
]

const uploadSubmit = (event) => {
    event.preventDefault()
    const values = {};
    let isValid = true

    for (let index = 0; index < inputsArray.length; index++) {
        const input = inputsArray[index];
        const inputName = input.name;
        const fieldElement = document.getElementById(inputName);
        const errorElement = document.getElementById(`${inputName}-error`)
        
        if ( !input.validation || input.validation(fieldElement.value)) {
            values[inputName] = fieldElement.type === 'checkbox' ? fieldElement.checked : fieldElement.value
            if (fieldElement) fieldElement.className = fieldElement.className.replace(' with-error', '')
            if (errorElement) errorElement.innerText = ''
        } else {
            if (fieldElement) fieldElement.className = fieldElement.className.concat(' with-error')
            if (errorElement) errorElement.innerText = input.errorText
            isValid = false
        }
    }

    if (isValid) {
        console.log(values)
    }
}