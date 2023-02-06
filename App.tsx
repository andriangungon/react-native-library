import React from 'react'
import { View } from 'react-native'

import RootStack from './src/navigators/RootStack'

// Redux
import { Provider } from 'react-redux';
import { persistor, store } from 'app/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootStack />
        </PersistGate>
      </Provider>
    </View>
  )
}
