import * as yup from 'yup';
import { validationRegisterMsg } from '../helpers/validationMsg';

export const passwordValidation = yup.object().shape({
  currentPassword: yup.string().required(validationRegisterMsg.password.required),
  newPassword: yup
    .string()
    .required('La contraseña nueva es obligatoria')
    .min(6, validationRegisterMsg.password.isSixLength),
  passwordConfirmation: yup
    .string()
    .required(validationRegisterMsg.passwordConfirmation.required)
    .oneOf([yup.ref('newPassword')], validationRegisterMsg.passwordConfirmation.isEqualToPassword),
});
