import { MotionContainer } from "../../components/MotionContainer";
import { Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SignUpForm } from "./SignUpForm";
import { FormInfo } from "../../components/Form/FomInfo";
import { useAuth } from "../../contexts/Auth";
import { ISignUpData } from "../../types";

const signUpSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Digite um email válido."),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/,
      "A senha deve conter min 6 dígitos e incluir ao menos uma letra maiúscula,um número e um caractere especial"
    ),
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

export const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ISignUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = (data: ISignUpData) => {
    setLoading(true);
    signUp(data)
      .then((_) => setLoading(false))
      .catch((error) => setLoading(false));
  };

  return (
    <MotionContainer>
      <Flex
        padding={["10px 15px", "10px 15px", "0px", "0px"]}
        alignItems="center"
        justifyContent="center"
        height={["auto", "auto", "100vh", "100vh"]}
      >
        <Flex
          w={["100%", "85%", "100%", "85%"]}
          gap={["0px", "0px", "10px", "40px"]}
          justifyContent="center"
          flexDirection={["column", "column", "row", "row"]}
          alignItems="center"
        >
          <FormInfo />
          <SignUpForm
            errors={errors}
            handleSignUp={handleSubmit(handleSignUp)}
            loading={loading}
            register={register}
          />
        </Flex>
      </Flex>
    </MotionContainer>
  );
};
