import React, { FC, Fragment } from 'react';
import { View } from 'react-native';
import { Field, Formik } from 'formik';

import { ToDoSchema } from './schemas/ToDoSchema';

// redux
import { useAppDispatch } from 'app/store';
import { saveToDoItem } from './toDoListSlice';

// Custom Components
import CustomInput from 'components/common/custom_input';
import Button from 'components/common/button/button';
import { MainContainer } from 'components/containers';

interface FieldProps {
  description: string;
}

const AddToDoItem: FC = () => {
  const dispatch = useAppDispatch();

  const initValues = { description: '' };

  const handleOnSubmitPress = async (values: FieldProps) => {
    await dispatch(saveToDoItem(values));
  }

  return (
    <MainContainer>
      <Formik
        initialValues={initValues}
        onSubmit={handleOnSubmitPress}
        validationSchema={ToDoSchema}
      >
        {(props) => (
          <Fragment>
            <Field
              component={CustomInput}
              name='description'
              placeholder='Enter to do item here...'
            />
            <Button
              onPress={props.handleSubmit}
              solid
              text={'Submit'}
              type='primary'
            />
          </Fragment>
        )}
      </Formik>
    </MainContainer>
  );
};

export default AddToDoItem;