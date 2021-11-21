import { Box, HStack } from "@chakra-ui/react";
import { types } from "../../services/article.type";

interface Props {
  types: typeof types;
}

export const ArticleType = (props: Props) => {
  return (
    <HStack as={'ul'}>
      {props.types.map((type, index) => (
        <Box as={'li'} key={index}>{type}</Box>
      ))}
    </HStack>
  );
};
