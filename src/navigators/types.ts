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
  Auth: { type: string };
  BasicAnimation: undefined;
  Firebase: undefined;
  Login: undefined;
  Register: undefined;
  Settings: undefined;
}