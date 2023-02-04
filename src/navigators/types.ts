import {
  NavigatorScreenParams,
} from '@react-navigation/native';

export type AppTabParamList = {
  Library: undefined;
  Settings: undefined;
}

export type RootStackParamList = {
  Animation: undefined;
  App: NavigatorScreenParams<AppTabParamList>;
  BasicAnimation: undefined;
  FirebaseFetchData: undefined;
  GestureAnimation: undefined;
}