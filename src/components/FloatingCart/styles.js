import styled from 'styled-components';

export const Container = styled.View`
  bottom: 0;
  position: absolute;
  background-color: #e83f5b;
  padding: 0px 18px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const CartPricing = styled.Text`
  padding: 20px;
`;

export const CartTotalPrice = styled.Text`
  color: #f3f9ff;
  font-size: 16px;
  font-weight: bold;
`;

export const CartButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const CartButtonText = styled.Text`
  flex: 1;
  color: #f3f9ff;
  font-weight: bold;
  margin-left: 15px;
  margin-right: auto;
`;
