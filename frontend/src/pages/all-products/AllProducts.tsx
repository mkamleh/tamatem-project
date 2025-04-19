import {
  Box,
  Button,
  Flex,
  Text,
  Skeleton,
  SimpleGrid,
  Select,
  Portal,
} from "@chakra-ui/react";
import useAllProducts from "./useAllProducts";

const AllProducts = () => {
  const {
    isLoading,
    data,
    page,
    totalPages,
    changePage,
    handleCountryOnChange,
    itemsPerPage,
    handleOnItemClick,
    countries,
    gridRef,
  } = useAllProducts();

  return (
    <Flex direction="column" minH="100vh" justify="space-between">
      <Box mx="auto" px={[2, 4]} py={4} flex="1" w="full">
        <Select.Root
          size={"lg"}
          collection={countries}
          mb={10}
          onValueChange={(item) => handleCountryOnChange(item.value[0])}
        >
          <Select.HiddenSelect />
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select country" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.ClearTrigger />
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {countries.items.map((country) => (
                  <Select.Item item={country} key={country.value}>
                    {country.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>

        {isLoading ? (
          <SimpleGrid columns={[1, 2, 3]} gap={4} h={"80vh"}>
            {Array.from({ length: itemsPerPage }).map((_, i) => (
              <Skeleton key={i} borderRadius="md" h="24vh" />
            ))}
          </SimpleGrid>
        ) : (
          <SimpleGrid
            columns={[1, 2, 3]}
            gap={4}
            h={["70vh", "80vh"]}
            overflow={"scroll"}
            ref={gridRef}
          >
            {data.map((item) => (
              <Box
                key={item.id}
                p={4}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="sm"
                h={"24vh"}
                display="flex"
                flexDirection="column"
                onClick={handleOnItemClick(item.id)}
                _hover={{ bg: "gray.50", cursor: "pointer" }}
              >
                <Text fontSize="sm" color="gray.500">
                  ID: {item.id}
                </Text>
                <Text fontWeight="bold" fontSize="lg" mt={2}>
                  {item.title}
                </Text>
                <Text fontSize="sm" mt={1}>
                  {item.description}
                </Text>
                <Flex justify="space-between" mt={4} marginTop="auto">
                  <Text fontWeight="medium">${item.price}</Text>
                  <Text fontSize="sm" color="gray.600">
                    {item.location}
                  </Text>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </Box>

      {/* Pagination */}
      <Flex
        direction={["column", "row"]}
        justify="space-between"
        align="center"
        mt={6}
        gap={2}
        w="full"
        mx="auto"
        px={[2, 4]}
        pb={4}
        position={"fixed"}
        bottom={0}
        bg="white"
        zIndex={10}
      >
        <Button
          w={["full", "auto"]}
          disabled={page === 1}
          onClick={changePage(false)}
        >
          Previous
        </Button>

        <Text textAlign="center" w={["full", "auto"]}>
          {!!totalPages && `${page} of ${totalPages}`}
        </Text>

        <Button
          w={["full", "auto"]}
          disabled={page === totalPages}
          onClick={changePage(true)}
        >
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

export default AllProducts;
