import { Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

import { SignInForm } from "./SignInForm";
import { FormInfo } from "../../components/Form/FomInfo";

const signInSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório."),
  password: yup.string().required("Campo obrigatório."),
});

interface ISignInData {
  name: string;
  password: string;
}

export const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ISignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: ISignInData) => {
    console.log(data);
  };

  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0px", "0px"]}
      alignItems="center"
      justifyContent="center"
      height={["auto", "auto", "100vh", "100vh"]}
    >
      <Flex
        w={["100%", "100%", "100%", "80%"]}
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
  );
};
