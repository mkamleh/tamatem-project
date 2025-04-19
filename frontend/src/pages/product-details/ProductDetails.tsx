import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  VStack,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FetchDataOverlay from "@/components/ui/loading-overlay/FetchDataOverlay";
import useProductDetails from "./useProductDetails";

const ProductDetails = () => {
  const { isPending, product, isLoading, handleOnBuyClick } =
    useProductDetails();

  return (
    <FetchDataOverlay
      isLoading={isLoading}
      itemNotFound={!product}
      itemType="product"
    >
      <Flex minH="100vh" justify="center" align="center" bg="gray.50" px={4}>
        <Box w={["100%", "90%", "80%"]} p={[0, 6, 6]}>
          <Heading as="h1" size="xl" textAlign="center" mb={6}>
            Product Details
          </Heading>

          <VStack gap={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
              <Text fontSize="lg" fontWeight="semibold">
                Title:
              </Text>
              <Text fontSize="md">{product?.title}</Text>
            </Box>

            <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
              <Text fontSize="lg" fontWeight="semibold">
                Description:
              </Text>
              <Text fontSize="md">{product?.description}</Text>
            </Box>

            <SimpleGrid columns={[1, 1, 2]} gap={4}>
              <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
                <Text fontSize="lg" fontWeight="semibold">
                  Price:
                </Text>
                <Text fontSize="md">${product?.price}</Text>
              </Box>

              <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
                <Text fontSize="lg" fontWeight="semibold">
                  Location:
                </Text>
                <Text fontSize="md">{product?.location}</Text>
              </Box>
            </SimpleGrid>
            <Link to="/products">
              <Button variant="outline" w={"full"} colorScheme="gray" size="lg">
                ← Back to All Products
              </Button>
            </Link>

            <Button
              colorScheme="teal"
              size="lg"
              mt={4}
              onClick={handleOnBuyClick}
              disabled={isPending}
            >
              Buy
            </Button>
          </VStack>
        </Box>
      </Flex>
    </FetchDataOverlay>
  );
};

export default ProductDetails;
