// msg for registering users errors
export const validationRegisterMsg = {
  name: {
    required: 'El nombre es requerido',
  },
  email: {
    required: 'El email es obligatorio',
    isEmail: 'El email no es válido',
  },
  password: {
    required: 'La contraseña es obligatorio',
    isSixLength: 'La contraseña debe ser de al menos 6 caracteres',
  },
  passwordConfirmation: {
    required: 'La confirmación de la contraseña es requerida',
    isEqualToPassword: 'Tus contraseñas no coinciden',
  },
};
