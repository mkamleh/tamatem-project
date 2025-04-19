import { Box, Text, Button, VStack, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IItemNotFound } from "./interface";
import _ from "lodash";

const ItemNotFound = ({ item = "item" }: IItemNotFound) => {
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
            {_.capitalize(item)} Not Found
          </Text>
          <Text color="gray.600">
            The {item} you're looking for doesn't exist or has been removed.
          </Text>
          <Link to={"/products"}>
            <Button colorScheme="blue">Back to Products</Button>
          </Link>
        </VStack>
      </Box>
    </Flex>
  );
};

export default ItemNotFound;
