export const validateName = (name: string) => {
    const errors = [];
    if (name.length < 3) {
        errors.push("Nombre debe tener más de 3 caracteres");
    }
    if (!/^[a-zA-Z]+$/.test(name)) {
        errors.push("Sólo se permiten letras");
    }
    return errors;
};

export const validateWeight = (weight: string) => {
    const errors = [];

    if (weight.length === 0) {
        errors.push("El peso debe tener al menos un dígito");
    }

    if (!/^\d*\.?\d+$/.test(weight)) {
        errors.push("El campo solo debe contener números enteros o decimales");
    }

    return errors;
};

export const validateHeight = (height: string) => {
    const errors = [];
    if (height.length === 0) {
        errors.push("El peso debe tener al menos un dígito");
    }

    if (!/^\d*\.?\d+$/.test(height)) {
        errors.push("El campo solo debe contener números enteros o decimales");
    }

    return errors;
};

export const validateAge = (age: string) => {
    const errors = [];
    if (age.length === 0) {
        errors.push("El peso debe tener al menos un dígito");
    }
    if (!/^\d+$/.test(age)) {
        errors.push("El peso solo debe contener números enteros");
    }

    if (age.length >= 4) {
        errors.push("El peso no debe tener más de 3 dígitos");
    }
    return errors;
};

export const validateBreed = (breed: string) => {
    const errors = [];
    if (breed.length < 3) {
        errors.push("Nombre debe tener más de 3 caracteres");
    }
    if (!/^[a-zA-Z]+$/.test(breed)) {
        errors.push("Sólo se permiten letras");
    }
    return errors;
};

export default {
    validateName,
    validateWeight,
    validateHeight,
    validateAge,
    validateBreed,
}