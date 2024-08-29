import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import validations from "../domain/validations";

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
        newErrors = validations.validateName(value);
        break;
      case "weight":
        newErrors = validations.validateWeight(value);
        break;
      case "height":
        newErrors = validations.validateHeight(value);
        break;
      case "age":
        newErrors = validations.validateAge(value);
        break;
      case "breed":
        newErrors = validations.validateBreed(value);
        break;
      default:
        break;
    }

    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: newErrors,
    }));

    return newErrors;
  };

  // Función para validar todos los campos
  const validateAll = () => {
    const nameErrors = validations.validateName(values.name);

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
    setValues,
    errors,
    handleInputChange,
    reset,
    handleSubmit,
    validateField,
    validateAll,
  };
};
