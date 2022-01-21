import { Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Input } from "../../components/Form/input";

interface ISignInData {
  name: string;
  password: string;
}

interface ISignInFormProps {
  handleSignIn: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<ISignInData>;
  loading: boolean;
}

export const SignInForm = ({
  handleSignIn,
  errors,
  register,
  loading,
}: ISignInFormProps) => {
  const history = useHistory();

  return (
    <Grid
      onSubmit={handleSignIn}
      as="form"
      padding="30px 10px"
      border="2px solid"
      borderColor="gray.100"
      borderRadius="5px"
      bg="white"
      color="gray.900"
      mt={["4", "4", "0"]}
      w={["100%", "100%", "40%", "40%"]}
    >
      <Heading as="h2" size="lg">
        Login
      </Heading>
      <VStack mt="5" spacing="2">
        <Input
          placeholder="Digite seu Nome"
          type="text"
          label="Nome"
          error={errors.name}
          icon={FaEnvelope}
          {...register("name")}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          label="Senha"
          error={errors.password}
          icon={FaLock}
          {...register("password")}
        />
      </VStack>
      <VStack mt="7" spacing="2">
        <Button
          isLoading={loading}
          bg="green.300"
          color="white"
          w="100%"
          h="50px"
          borderRadius="8px"
          _hover={{
            filter: "brightness(1.1)",
            transition: "filter .1s linear ",
          }}
          _active={{ filter: "brightness(.8)" }}
          type="submit"
        >
          Logar
        </Button>
        <Text color="gray.400" textAlign="center">
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </Text>
        <Button
          bg="gray.100"
          w="100%"
          color="gray.300"
          h="50px"
          borderRadius="8px"
          onClick={() => history.push("/signup")}
          transition="filter .1s linear "
          _hover={{ filter: "brightness(.9)" }}
          _active={{ filter: "brightness(1.1)" }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
