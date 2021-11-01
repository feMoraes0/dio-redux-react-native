import 'intl';
import 'intl/locale-data/jsonp/en';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

const App = () => (
  <>
    <Routes />
    <StatusBar backgroundColor="#312e38" barStyle="light-content" />
  </>
);

export default App;
