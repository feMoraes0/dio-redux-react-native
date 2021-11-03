import { Feather } from '@expo/vector-icons';
/**
 * useMemo atualiza o component apenas quando a variavel de dependencia dele muda
 */
import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import formatValue from '../../utils/formatValue';
import {
  ActionButton,
  ActionContainer,
  Container,
  Product,
  ProductContainer,
  ProductImage,
  ProductList,
  ProductPrice,
  ProductPriceContainer,
  ProductQuantity,
  ProductSinglePrice,
  ProductTitle,
  ProductTitleContainer,
  SubTotalValue,
  TotalContainer,
  TotallProductsText,
  TotalProductsContainer,
} from './styles';

const Cart = () => {
  const [products] = useState([
    {
      id: '1',
      title: 'Assinatura Trimestral',
      image_url:
        'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
      price: 150,
      quantity: 1,
    },
    {
      id: '2',
      title: 'Assinatura Anual',
      image_url:
        'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/annual_subscription_qyolci.png',
      price: 540,
      quantity: 2,
    },
  ]);

  const cartSize = useMemo(() => products.length || 0, [products]);

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce((accumulator, product) => {
      const totalPrice = accumulator + product.price * product.quantity;
      return totalPrice;
    }, 0);
    return formatValue(cartAmount);
  }, [products]);

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80.0,
          }}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image_url }} />
              <ProductTitleContainer>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPriceContainer>
                  <ProductSinglePrice>
                    {formatValue(item.price)}
                  </ProductSinglePrice>
                  <TotalContainer>
                    <ProductQuantity>{`${item.quantity}x`}</ProductQuantity>
                    <ProductPrice>
                      {formatValue(item.price * item.quantity)}
                    </ProductPrice>
                  </TotalContainer>
                </ProductPriceContainer>
              </ProductTitleContainer>
              <ActionContainer>
                <ActionButton onPress={() => {}}>
                  <Feather name="plus" color="#e83f5b" size={16} />
                </ActionButton>
                <ActionButton onPress={() => {}}>
                  <Feather name="minus" color="#e83f5b" size={16} />
                </ActionButton>
              </ActionContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <TotalProductsContainer>
        <Feather name="shopping-cart" color="#fff" size={24} />
        <TotallProductsText>
          {cartSize} {cartSize === 1 ? 'item' : 'itens'}
        </TotallProductsText>
        <SubTotalValue>{cartTotal}</SubTotalValue>
      </TotalProductsContainer>
    </Container>
  );
};

export default {
  name: 'Cart',
  component: Cart,
};
