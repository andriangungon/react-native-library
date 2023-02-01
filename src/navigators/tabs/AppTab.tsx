import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// screens
import LibraryScreen from '../../screens/LibraryScreen';
import SettingScreen from '../../screens/SettingScreen';

import { AppTabParamList } from '../types';

const DEFAULT_CONFIG = {
  headerShadowVisible: false,
};

const Tab = createBottomTabNavigator<AppTabParamList>();

const AppTab: FC = () => {
  return (
    <Tab.Navigator screenOptions={DEFAULT_CONFIG}>
      <Tab.Screen
          component={LibraryScreen}
          name='Library'
          options={{
            tabBarIcon: function tabBarIcon ({ color, size }) {
              return (
                <Icon
                  color={color}
                  name='view-dashboard-outline'
                  size={size}
                />
              );
            },
            title: 'Library',
          }}
        />
        <Tab.Screen
          component={SettingScreen}
          name='Settings'
          options={{
            tabBarIcon: function tabBarIcon ({ color, size }) {
              return (
                <Icon
                  color={color}
                  name='cog'
                  size={size}
                />
              );
            },
            title: 'Settings',
          }}
        />
    </Tab.Navigator>
  )
}

export default AppTab;