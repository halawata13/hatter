import { Box } from "@chakra-ui/react";
import { CategoryList } from "../features/category/category-list";
import { categories } from "../services/article.type";

interface Props {
  categories: typeof categories;
  onClick?: () => void;
}

export const Side = (props: Props) => {
  return (
    <Box as={'aside'} display={['block']} position={'fixed'} left={0} top={0} w={['100%', '100%', 60]} h={'100vh'} zIndex={1} pt={92} bgColor={'#F0F0F0'}>
      <Box as={'nav'}>
        <CategoryList categories={props.categories} onClick={() => props.onClick?.()} />
      </Box>
    </Box>
  );
};
