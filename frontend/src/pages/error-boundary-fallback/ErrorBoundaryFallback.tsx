import { Box, Text, Button, VStack, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import _ from "lodash";

const ErrorBoundaryFallback = () => {
  return (
    <Flex height="100vh" justify="center" align="center">
      <Box
        maxW="lg"
        w="full"
        p={8}
        borderWidth={1}
        borderRadius="xl"
        boxShadow="lg"
        textAlign="center"
      >
        <VStack gap={4}>
          <Text fontSize="2xl" fontWeight="bold" color="red.500">
            Error
          </Text>
          <Text color="gray.600">An error happened</Text>
          <Link to={"/products"}>
            <Button colorScheme="blue">Back to Products</Button>
          </Link>
        </VStack>
      </Box>
    </Flex>
  );
};

export default ErrorBoundaryFallback;
