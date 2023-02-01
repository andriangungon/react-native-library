import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type AppTabParamList = {
  Library: undefined;
  Settings: undefined;
}

export type RootStackParamList = {
  App: NavigatorScreenParams<AppTabParamList>;
}