import { Button, Grid, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Input } from "../../components/Form/input";

interface ISignUpData {
  name: string;
  email: string;
  password: string;
  confirm_password?: string;
}

interface ISignUpFormProps {
  handleSignUp: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<ISignUpData>;
  loading: boolean;
}

export const SignUpForm = ({
  handleSignUp,
  errors,
  register,
  loading,
}: ISignUpFormProps) => {
  return (
    <Grid
      onSubmit={handleSignUp}
      as="form"
      padding="20px 10px"
      border="2px solid"
      borderColor="gray.100"
      borderRadius="5px"
      bg="white"
      color="gray.900"
      mt={["4", "4", "0"]}
      w={["100%", "100%", "40%", "40%"]}
    >
      <Heading as="h2" size="lg">
        Cadastro
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
          type="email"
          placeholder="Digite seu email"
          label="Email"
          error={errors.email}
          icon={FaLock}
          {...register("email")}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          label="Senha"
          error={errors.password}
          icon={FaLock}
          {...register("password")}
        />
        <Input
          type="password"
          placeholder="Confirme sua senha"
          label="Confirmar Senha"
          error={errors.confirm_password}
          icon={FaLock}
          {...register("confirm_password")}
        />
      </VStack>
      <VStack mt="6">
        <Button
          isLoading={loading}
          bg="green.500"
          color="white"
          w="100%"
          h="50px"
          borderRadius="8px"
          _hover={{
            filter: "brightness(1.2)",
            transition: "filter .1s linear ",
          }}
          _active={{
            filter: "brightness(.8)",
          }}
          type="submit"
          mb="1"
        >
          Logar
        </Button>

        <HStack>
          <Text fontSize="sm">Já possui uma conta?</Text>
          <Link to="/">
            <Text fontSize="sm" fontWeight="medium">
              Retornar para o login.
            </Text>
          </Link>
        </HStack>
      </VStack>
    </Grid>
  );
};
