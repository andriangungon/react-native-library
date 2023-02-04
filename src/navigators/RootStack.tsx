import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// tab
import AppTab from './tabs/AppTab';

// screens
import AnimationScreen from 'screens/AnimationScreen';
import BasicAnimationScreen from 'screens/animation/BasicAnimationScreen';

// types
import { RootStackParamList } from './types';

const DEFAULT_CONFIG = {
  headerShown: false,
};
const FIREBASE_CONFIG = {
  headerShown: true,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AnimationGroup = (
  <Stack.Group screenOptions={FIREBASE_CONFIG}>
    <Stack.Screen
      component={BasicAnimationScreen}
      name='BasicAnimation'
      options={{ title: 'Basic Animation' }}
    />
  </Stack.Group>
);

const FirebaseGroup = (
  <Stack.Group screenOptions={FIREBASE_CONFIG}>
    <Stack.Screen
      component={AnimationScreen}
      name='Animation'
    />
  </Stack.Group>
);

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
        {AnimationGroup}
        {FirebaseGroup}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;