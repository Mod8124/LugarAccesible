import * as yup from 'yup';
import { validationRegisterMsg } from '../helpers/validationMsg';

export const loginValidations = yup.object().shape({
  email: yup
    .string()
    .required(validationRegisterMsg.email.required)
    .email(validationRegisterMsg.email.isEmail),
  password: yup
    .string()
    .required(validationRegisterMsg.password.required)
    .min(6, validationRegisterMsg.password.isSixLength),
});
