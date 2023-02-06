import * as yup from 'yup';

export const ToDoSchema = yup.object().shape({
  description: yup
    .string()
    .required('Description is required'),
});