import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Feather } from '@expo/vector-icons';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: { backgroundColor: '#313746' },
      }}
      initialRouteName={Catalog.name}
    >
      <Screen
        name={Catalog.name}
        component={Catalog.component}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => <Header />,
        }}
      />

      <Screen
        name={Cart.name}
        component={Cart.component}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => <Header />,
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {
            marginLeft: 20.0,
            headerBackImage: () => {
              <Feather name="chevron-left" size={24} color="#f3f9ff" />;
            },
          },
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
