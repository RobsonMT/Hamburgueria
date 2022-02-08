import { Button, Grid, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Input } from "../../components/Form/input";
import { ISignUpData } from "../../types";

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
      boxShadow="1.5px 1px 4px 1px rgba(194, 194, 194, 0.5)"
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
          icon={FaUserAlt}
          {...register("name")}
        />
        <Input
          type="email"
          placeholder="Digite seu email"
          label="Email"
          error={errors.email}
          icon={FaEnvelope}
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
          icon={BsShieldFillCheck}
          {...register("confirm_password")}
        />
      </VStack>
      <VStack mt="6">
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
          _active={{
            filter: "brightness(.8)",
          }}
          type="submit"
          mb="1"
        >
          Cadastrar
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
