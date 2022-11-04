import { createContext } from "react";

interface UserProps {
  name: String;
  avatarUrl: String;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider ({ children }: AuthProviderProps) {

  async function signIn(){
    console.log("entrou minuto 41:40");
    
   }

  return (
    <AuthContext.Provider value={{
      signIn,
      user: {
        name: 'Guilherme',
        avatarUrl: 'https://github.com/guilhermeaugustodsd.png'
      }
    }}>
      {children}
    </AuthContext.Provider>
  );
}