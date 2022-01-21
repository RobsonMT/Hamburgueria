import { createContext, useContext, ReactNode } from "react";
import { useCallback, useState } from "react";
import { api } from "../../services/api";

interface IProps {
  children: ReactNode;
}

interface IUser {
  id: number;
  name: string;
  email: string;
}

interface IAuthState {
  user: IUser;
  accessToken: string;
}

interface ISignInData {
  email: string;
  password: string;
}

interface ISignUpData {
  name: string;
  email: string;
  password: string;
  confirm_password?: string;
}

interface IAuthContext {
  user: IUser;
  accessToken: string;
  signIn(data: ISignInData): Promise<void>;
  signUp(data: ISignUpData): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }: IProps) => {
  const [data, setData] = useState<IAuthState>(() => {
    const user = localStorage.getItem("@Hamburgueria:user");
    const accessToken = localStorage.getItem("@Hamburgueria:accessToken");

    if (user && accessToken) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async (data: ISignInData) => {
    const { email, password } = data;

    try {
      const response = await api.post("/signin", { email, password });

      const { accessToken, user } = response.data;

      localStorage.setItem("@Doit:accessToken", accessToken);
      localStorage.setItem("@Doit:user", JSON.stringify(user));

      setData({ accessToken, user });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const signUp = useCallback(async (data: ISignUpData) => {
    delete data.confirm_password;
    try {
      const response = await api.post("/signup", data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Doit:accessToken");
    localStorage.removeItem("@Doit:user");

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
