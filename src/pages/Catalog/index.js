import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';
import {
  Container,
  PriceContainer,
  Product,
  ProductButton,
  ProductButtonText,
  ProductContainer,
  ProductImage,
  ProductList,
  ProductPrice,
  ProductTitle,
} from './styles';
import formatValue from '../../utils/formatValue';
import FloatingCart from '../../components/FloatingCart';

const Catalog = () => {
  const [products] = useState([
    {
      id: '1',
      title: 'Assinatura Trimestral',
      image_url:
        'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
      price: 150,
    },
    {
      id: '2',
      title: 'Assinatura Anual',
      image_url:
        'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png',
      price: 540,
    },
  ]);

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image_url }} />
              <ProductTitle>{item.title}</ProductTitle>
              <PriceContainer>
                <ProductPrice>{formatValue(item.price)}</ProductPrice>
                <ProductButton onPress={() => {}}>
                  <ProductButtonText>adicionar</ProductButtonText>
                  <Feather size={30} name="plus-circle" color="#d1d7e9" />
                </ProductButton>
              </PriceContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default {
  name: 'Catalog',
  component: Catalog,
};
