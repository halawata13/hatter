import { Box } from "@chakra-ui/react";
import { CategoryList } from "../features/category/category-list";
import { categories } from "../services/article.type";

interface Props {
  categories: typeof categories;
}

export const Side = (props: Props) => {
  return (
    <Box as={'aside'} bgColor={'#F0F0F0'} w={60}>
      <Box as={'nav'}>
        <CategoryList categories={props.categories} />
      </Box>
    </Box>
  );
};
