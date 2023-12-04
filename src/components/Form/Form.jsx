import { ContainerForm } from 'components/Container/ContainerForm';
import {
  Button,
  DivForm,
  Forma,
  Input,
  Text,
  Textarea,
  Title,
  Image,
} from './Form.styles';
import { useState } from 'react';
import Img from '../../assets/images/Form/Subtract.png';
import { Element } from 'react-scroll';



export const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      comment: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!isValidEmail(formData.email)) {
      alert('Plesase write corect email');
      return;
    }
    console.log('Message', formData);
    resetForm();
  };

    const isValidEmail = email => {
        const emailRegex = /^\w+(\.?\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        
    return emailRegex.test(email);
  };
  return (
    <ContainerForm>
      <DivForm>
        <Element name="SendMail"></Element>
        <Title>
          Are you ready
          <br />
          to board this rocket ship?
        </Title>

        <Text>Share your excitement with us.</Text>
        <Forma onSubmit={handleSubmit}>
          <label>
            <Input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              required
            />
          </label>

          <label>
            <Textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Message*"
              required
            />
          </label>

          <Button type="submit">Shoot us a message</Button>
        </Forma>
        <Image src={Img} alt="" />
      </DivForm>
    </ContainerForm>
  );
};
