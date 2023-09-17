import React from 'react';
import { useFormik } from 'formik';

import { Button, Form, Label } from './Login.styled';

export const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
    console.log(values);
    },
  });
   
    return (<div>
      <h1>Sing in</h1>
    <Form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Button type="submit">Sign In</Button>
        </Form>
        </div>
  );
};

// import { Button, Input } from "@chakra-ui/react"
// import { Form, Label } from "./Login.styled"

// export const Login = () => {
//     return (  <Form  autoComplete="off">
//       <Label>
//         Email
//         <Input spacing={3} size="lg" type="email" name="email" />
//       </Label>
//       <Label>
//         Password

//           <Input
//             spacing={3}
//             size="lg"

//             name="password"
//           />

//       </Label>
//       <Button
//         size="lg"
//         colorScheme="green"
//         padding={10}
//         type="submit"
//       >
//         Log In
//       </Button>
//     </Form>)
// }
