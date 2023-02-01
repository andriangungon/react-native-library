import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// tab
import AppTab from './tabs/AppTab';

// types
import { RootStackParamList } from './types';

const DEFAULT_CONFIG = {
  headerShown: false,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppContainer: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={DEFAULT_CONFIG}>
        <Stack.Group>
          <Stack.Screen
            component={AppTab}
            name='App'
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;