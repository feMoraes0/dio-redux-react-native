import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Container, EmptyCartText } from './styles';

const EmptyCart = () => (
  <Container>
    <Feather name="slash" size={38} color="#f3f9ff" />
    <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
  </Container>
);

export default EmptyCart;
