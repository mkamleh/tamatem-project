import { Box, Button, Center, Input, Text, VStack } from "@chakra-ui/react";
import useLogin from "./useLogin";

const Login = () => {
  const { handleChange, handleSubmit, values, errors, touched } = useLogin();

  return (
    <Center h="100vh" w="100vw">
      <Box
        maxW="md"
        width="80%"
        mx="auto"
        mt="10"
        p="6"
        boxShadow="lg"
        borderRadius="lg"
      >
        <form onSubmit={handleSubmit}>
          <VStack align="stretch">
            <Box>
              <Text mb="1">Username</Text>
              <Input
                name="username"
                type="username"
                onChange={handleChange}
                value={values.username}
                placeholder="Enter username"
              />
              {errors.username && touched.username && (
                <Text fontSize="sm" color="red.500">
                  {errors.username}
                </Text>
              )}
            </Box>

            <Box>
              <Text mb="1">Password</Text>
              <Input
                name="password"
                type="password"
                onChange={handleChange}
                value={values.password}
                placeholder="Enter password"
              />
              {errors.password && touched.password && (
                <Text fontSize="sm" color="red.500">
                  {errors.password}
                </Text>
              )}
            </Box>

            <Button colorScheme="blue" type="submit">
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Center>
  );
};

export default Login;
