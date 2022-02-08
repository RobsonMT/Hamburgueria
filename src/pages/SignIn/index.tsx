import { Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SignInForm } from "./SignInForm";
import { FormInfo } from "../../components/Form/FomInfo";
import { useAuth } from "../../contexts/Auth";
import { ISignInData } from "../../types";
import { MotionContainer } from "../../components/MotionContainer";

const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("E-mail obrigatório. Ex: nome@email.com.")
    .email("E-mail inválido"),
  password: yup.string().required("Campo obrigatório."),
});

export const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ISignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: ISignInData) => {
    setLoading(true);
    signIn(data)
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
          flexDirection={["column", "column", "row-reverse", "row-reverse"]}
          alignItems="center"
        >
          <FormInfo />
          <SignInForm
            errors={errors}
            handleSignIn={handleSubmit(handleSignIn)}
            loading={loading}
            register={register}
          />
        </Flex>
      </Flex>
    </MotionContainer>
  );
};
