import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Catalog from './pages/Catalog';

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
          header: () => {},
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
