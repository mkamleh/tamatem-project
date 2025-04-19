import {
  VStack,
  Heading,
  HStack,
  Button,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useOrderDetails from "./useOrderDetails";
import FetchDataOverlay from "@/components/ui/loading-overlay/FetchDataOverlay";

const orderDetails = () => {
  const { isLoading, order } = useOrderDetails();

  return (
    <FetchDataOverlay
      isLoading={isLoading}
      itemNotFound={!order}
      itemType="order"
    >
      <Flex height="100vh" justify="center" align="center" p={6}>
        <Box
          maxW="2xl"
          w={"full"}
          mx="auto"
          mt={10}
          p={6}
          boxShadow="md"
          borderRadius="lg"
          border="1px solid"
          borderColor="gray.200"
        >
          <VStack gap={4} align="start">
            <Heading size="md">Order Details</Heading>

            <HStack justifyContent="space-between" w="full">
              <Text fontWeight="medium">Product:</Text>
              <Text>{order?.product}</Text>
            </HStack>

            <HStack justifyContent="space-between" w="full">
              <Text fontWeight="medium">Price:</Text>
              <Text>${order?.price}</Text>
            </HStack>

            <HStack justifyContent="space-between" w="full">
              <Text fontWeight="medium">Status:</Text>
              <Text color="green.500" fontWeight="semibold">
                Order Placed
              </Text>
            </HStack>

            <Link to={"/products"}>
              <Button mt={4} colorScheme="blue">
                Back to Products
              </Button>
            </Link>
          </VStack>
        </Box>
      </Flex>
    </FetchDataOverlay>
  );
};

export default orderDetails;
