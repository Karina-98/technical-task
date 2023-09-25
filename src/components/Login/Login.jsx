import React from 'react';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { Button, ContainerField, ContainerSingIn, DivSingUp, LinkSingUp, Text, TextBtn, TextSingUp } from './Login.styled';
import { Title } from 'components/Title/Title';


const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordRegex =
  /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/;

const initialValues = {
  email: '',
  password: '',
};

const schema = object({
  email: string()
    .email()
    .matches(emailRegex, 'Invalid email format')
    .required(),
  password: string()
    .matches(passwordRegex, 'Must contain at least 1 capital and 1 digit')
    .required(),
});


export const Login = () => {
  // const dispatch = useDispatch();

  // const onSubmit = (values, { resetForm }) => {
  //   dispatch(logIn(values));
  //   resetForm();
  // };
   
  return (<>
    <ContainerSingIn>
      <Title>Sign In</Title>
      <Text>
        Welcome! Please enter your credentials to login to the platform:
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        // onSubmit={onSubmit}
      >
        <Form>
          <ContainerField>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              label="Email"
              autoComplete="off"
            />
          </ContainerField>
          <Field
            type="password"
            name="password"
            placeholder="Password"
            label="Password"
            passwordBtn
            autoComplete="off"
            inputStyles={{ gap: '20px',  }}
          />
          <Button type="submit">
            <TextBtn>Sign In</TextBtn>
          </Button>
        </Form>
      </Formik>
      <DivSingUp>
        <TextSingUp>Don’t have an account? </TextSingUp>
        <LinkSingUp to={'/signup'}>Sign Up</LinkSingUp>
      </DivSingUp>
    </ContainerSingIn>
    
  </>
  )
}

