import { Box } from "@chakra-ui/react";
import { CategoryList } from "../features/category/category-list";
import { categories } from "../services/article.type";

interface Props {
  categories: typeof categories;
}

export const Side = (props: Props) => {
  return (
    <Box as={'aside'} position={'fixed'} left={0} top={0} w={60} h={'100vh'} zIndex={1} bgColor={'#F0F0F0'}>
      <Box as={'nav'}>
        <CategoryList categories={props.categories} />
      </Box>
    </Box>
  );
};
