import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Catalog from './pages/Catalog';

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Navigator>
      <Screen
        name={Catalog.name}
        component={Catalog.component}
        options={{ title: 'Catálogo', headerTitleAlign: 'center' }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
