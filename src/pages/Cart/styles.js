import styled from 'styled-components';
import { FlatList } from 'react-native';

export const Container = styled.SafeAreaView`
  background-color: #333;
  flex: 1;
`;

export const ProductContainer = styled.View`
  background-color: #e83f5b;
  border-radius: 20px;
  flex-direction: row;
  flex: 1;
  margin-top: 60px;
`;

export const ProductList = styled(FlatList)`
  flex: 1;
  padding: 30px 10px;
`;

export const Product = styled.View`
  background-color: #fff;
  border-radius: 20px;
  flex-direction: row;
  flex: 1;
  margin: 5px;
  min-height: 130px;
  min-width: 350px;
  padding: 15px 10px;
`;

export const ProductImage = styled.Image`
  height: 92px;
  width: 140px;
`;

export const ProductTitleContainer = styled.View`
  font-size: 16px;
  margin-left: 5px;
  margin-top: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPriceContainer = styled.View`
  flex-direction: column;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const ProductSinglePrice = styled.Text`
  color: #414756;
  font-size: 12px;
  margin-top: 8px;
`;

export const ProductPrice = styled.Text`
  color: #e83f5b;
  font-weight: bold;
  font-size: 16px;
  margin-top: 5px;
`;

export const ProductQuantity = styled.Text`
  color: #e83f5b;
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
  margin-top: 5px;
`;

export const ActionContainer = styled.View`
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
`;

export const ActionButton = styled.TouchableOpacity`
  background-color: rgba(232, 63, 91, 0.1);
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 5px;
`;

export const TotalProductsContainer = styled.View`
  align-items: center;
  background-color: #e83f5b;
  border-radius: 10px;
  bottom: 0;
  flex-direction: row;
  justify-content: space-between;
  padding: 36px 40px;
  position: absolute;
`;

export const TotallProductsText = styled.Text`
  color: #fff;
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
`;

export const SubTotalValue = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
