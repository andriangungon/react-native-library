import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// tab
import AppTab from './tabs/AppTab';

// screens
import AnimationScreen from 'screens/AnimationScreen';
import AuthScreen from 'screens/AuthScreen';
import BasicAnimationScreen from 'screens/animation/BasicAnimationScreen';
import FirebaseScreen from 'screens/FirebaseScreen';

// redux
import { useAppSelector } from 'app/store';
import { authStatusSelector } from 'features/auth/authSlice';

// types
import { RootStackParamList } from './types';

const DEFAULT_CONFIG = {
  headerShown: false,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AnimationGroup = (
  <Stack.Group screenOptions={{ headerShown: true }}>
    <Stack.Screen
      component={AnimationScreen}
      name='Animation'
    />
    <Stack.Screen
      component={BasicAnimationScreen}
      name='BasicAnimation'
      options={{ title: 'Basic Animation' }}
    />
  </Stack.Group>
);

const AuthGroup = (
  <Stack.Group>
    <Stack.Screen
      component={FirebaseScreen}
      name='Firebase'
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      component={AuthScreen}
      name='Auth'
    />
  </Stack.Group>
);

const AppContainer: FC = () => {
  const isLoggedIn = useAppSelector(authStatusSelector);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Group screenOptions={DEFAULT_CONFIG}>
          <Stack.Screen
            component={AppTab}
            name='App'
          />
          {AnimationGroup}
        </Stack.Group>
        ) : AuthGroup }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;