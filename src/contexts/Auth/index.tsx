import { ISignInData, ISignUpData, IUser } from "../../types/User";
import { createContext, useContext, ReactNode } from "react";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

interface IChildren {
  children: ReactNode;
}

interface IAuthState {
  user: IUser;
  accessToken: string;
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

const AuthProvider = ({ children }: IChildren) => {
  const history = useHistory();

  const [data, setData] = useState<IAuthState>(() => {
    const user = localStorage.getItem("@Hamburgueria:user");
    const accessToken = localStorage.getItem("@Hamburgueria:accessToken");

    if (user && accessToken) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = async (data: ISignInData) => {
    const { email, password } = data;

    try {
      const response = await api.post("/signin", { email, password });

      const { accessToken, user } = response.data;

      localStorage.setItem("@Hamburgueria:accessToken", accessToken);
      localStorage.setItem("@Hamburgueria:user", JSON.stringify(user));

      toast.success(`Bem-vindo de volta, ${user.name}!`);

      setData({ accessToken, user });

      history.push("/dashboard");
    } catch (error) {
      toast.error("Email ou senha iválido(s).");
    }
  };

  const signUp = async (data: ISignUpData) => {
    delete data.confirm_password;

    try {
      await api.post("/signup", data);

      toast.success("Usuário registrado com sucesso.");

      history.push("/");
    } catch (error) {
      toast.error("Email já registrado.");
    }
  };

  const signOut = useCallback(() => {
    localStorage.removeItem("@Hamburgueria:accessToken");
    localStorage.removeItem("@Hamburgueria:user");

    toast.warning("Usuário desconectado.");

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
