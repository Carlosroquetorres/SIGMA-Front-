import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from 'react-native';

function CustomHeader() {
  const navigation = useNavigation();

  return (
    <Header>
      <Header.BackButton onPress={() => navigation.goBack()} />
      <Header.Title>{navigation.getCurrentRoute().name}</Header.Title>
    </Header>
  );
}

export default CustomHeader;