import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

// Funciones de validación para cada campo
const validateName = (name: string) => {
  const errors = [];
  if (name.length < 3) {
    errors.push("Nombre debe tener más de 3 caracteres");
  }
  if (!/^[a-zA-Z]+$/.test(name)) {
    errors.push("Sólo se permiten letras");
  }
  return errors;
};

// Hook personalizado con lógica de validación incluida
export const useAddPetForm = (initialState: any) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<any>({});

  const reset = () => {
    setValues(initialState);
    setErrors({});
  };

  const handleInputChange = (name: string, value: string) => {
    // Actualizar el estado de valores del formulario
    setValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));

    // Validar el campo específico y actualizar los errores
    validateField(name, value);
  };

  // Función para validar un campo específico
  const validateField = (name: any, value: any) => {
    let newErrors: string[] = [];

    switch (name) {
      case "name":
        newErrors = validateName(value);
        break;
      case "email":
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: newErrors,
    }));

    return newErrors;
  };

  // Función para validar todos los campos
  const validateAll = () => {
    const nameErrors = validateName(values.name);

    setErrors({
      name: nameErrors,
    });

    return nameErrors.length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateAll()) {
      // Aquí puedes manejar el envío de datos del formulario
      console.log("Formulario enviado con éxito:", values);
    }
  };

  return {
    values,
    errors,
    handleInputChange,
    reset,
    handleSubmit,
    validateField,
    validateAll,
  };
};
