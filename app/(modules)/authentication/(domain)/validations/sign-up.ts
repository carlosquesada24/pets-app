export const signUpValidations = {
    email: (value: string) => {
        const errors: string[] = [];
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
            errors.push("El correo electrónico es obligatorio.");
        } else if (!emailRegex.test(value)) {
            errors.push("El correo electrónico no es válido.");
        }
        return errors;
    },
    password: (value: string) => {
        const errors: string[] = [];
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

        if (!value) {
            errors.push("La contraseña es obligatoria.");
        } else if (value.length < 8) {
            errors.push("La contraseña debe tener al menos 8 caracteres.");
        } else if (!specialCharRegex.test(value)) {
            errors.push("La contraseña debe contener al menos un carácter especial.");
        }
        return errors;
    },
};