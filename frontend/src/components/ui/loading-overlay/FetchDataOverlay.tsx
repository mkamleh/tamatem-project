import { Flex, Spinner } from "@chakra-ui/react";
import { IFetchData } from "./interface";
import ItemNotFound from "../item-not-found/ItemNotFound";

const FetchDataOverlay = ({
  isLoading,
  itemNotFound,
  children,
  itemType,
}: IFetchData) => {
  if (isLoading) {
    return (
      <Flex
        justify="center"
        align="center"
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100vh"
        backgroundColor="rgba(255, 255, 255, 0.7)"
        zIndex="2"
      >
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (itemNotFound) {
    return <ItemNotFound item={itemType} />;
  }

  return children;
};

export default FetchDataOverlay;
