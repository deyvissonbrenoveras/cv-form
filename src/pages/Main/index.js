import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { Container } from './styles';
import InputCard from '../../components/InputCard';
import Card from '../../components/Card';
import RadioCard from '../../components/RadioCard';

const schema = Yup.object().shape({
  email: Yup.string().required('O e-mail é obrigatório'),
  name: Yup.string().required('O nome é obrigatório'),
  phone: Yup.number('Número inválido')
    .typeError('Número inválido')
    .positive('Número inválido')
    .required('O número é obrigatório'),
  interest: Yup.string('Obrigatório')
    .typeError('Obrigatório')
    .required('Obrigatório'),
});

function Main() {
  function handleSubmit(values) {
    console.log(values);
  }
  return (
    <Container>
      <Card>
        <h1>Banco de Talentos - AM3 Soluções</h1>
        <p>
          Aqui você poderá deixar sua informações para receber notificações
          quando novas oportunidades forem abertas. Ao se inscrever você
          concorda com as nossas políticas de privacidade. O nome e a foto
          associados à sua Conta do Google serão registrados quando você fizer
          upload de arquivos e enviar este formulário
        </p>
      </Card>
      <Formik
        initialValues={{ email: '', name: '', phone: '', interest: null }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <InputCard
            name="email"
            type="email"
            label=" Endereço de e-mail"
            placeholder="Seu e-mail"
          />
          <InputCard
            name="name"
            type="text"
            label=" Digite seu nome completo"
            placeholder="Seu nome"
          />
          <InputCard
            name="phone"
            type="text"
            label="Informe o número de telefone"
            placeholder="(DDD) X XXXX-XXXX"
          />
          <RadioCard
            label="Qual a sua área de interesse?"
            name="interest"
            options={[
              { label: 'Administração', value: 'Administração' },
              {
                label: 'Analista de suporte de sistemas',
                value: 'Analista de suporte de sistemas',
              },
              { label: 'Desenvolvimento web', value: 'Desenvolvimento web' },
              {
                label: 'Desenvolvimento de sistemas',
                value: 'Desenvolvimento de sistemas',
              },
              { label: 'Marketing', value: 'Marketing' },
              { label: 'Vendas', value: 'Vendas' },
              {
                label: 'Técnico em infraestrutura de TI',
                value: 'Técnico em infraestrutura de TI',
              },
            ]}
          />
          <button type="submit">Enviar</button>
        </Form>
      </Formik>
    </Container>
  );
}

export default Main;
