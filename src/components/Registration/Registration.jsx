import { Form, Label } from "./Registration.styled";
import { Input, Button, InputRightElement, InputGroup } from '@chakra-ui/react';


import React from "react";


export const Registration = () => {
   

    return (<Form  autoComplete="off">
      <Label>
        Username
        <Input spacing={3} size="lg" type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input spacing={3} size="lg" type="email" name="email" />
          </Label>

          <Label>
        Password
          <InputGroup size='md'>
     
        <Input
          spacing={3}
          size="lg"
       width="100%"
          name="password"
        />
      <InputRightElement width='4.5rem'>
      </InputRightElement>
    </InputGroup>
</Label>
      <Button  size='lg' colorScheme='green' type="submit">Register</Button>
    </Form>
  );
};
