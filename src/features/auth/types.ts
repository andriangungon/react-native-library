export interface AuthState {
  error: string | null;
  isLoggedIn: boolean;
  status: string;
  user: User | null;
}

export interface AuthFields {
  email: string;
  password: string;
}

export interface User {
  displayName: string | null;
  email: string;
  emailVerified: boolean;
  isAnonymous: false;
  phoneNumber: string | null;
  uid: string;
}