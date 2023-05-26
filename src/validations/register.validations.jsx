import * as yup from 'yup';
import { validationRegisterMsg } from '../helpers/validationMsg';

export const registerValidations = yup.object().shape({
  name: yup.string().required(validationRegisterMsg.name.required),
  email: yup
    .string()
    .required(validationRegisterMsg.email.required)
    .email(validationRegisterMsg.email.isEmail),
  password: yup
    .string()
    .required(validationRegisterMsg.password.required)
    .min(6, validationRegisterMsg.password.isSixLength),
  passwordConfirmation: yup
    .string()
    .required(validationRegisterMsg.passwordConfirmation.required)
    .oneOf([yup.ref('password')], validationRegisterMsg.passwordConfirmation.isEqualToPassword),
});
