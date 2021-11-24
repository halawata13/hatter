import { Box } from "@chakra-ui/react";
import { CategoryList } from "../features/category/category-list";
import { categories } from "../services/article.type";
import { useRecoilValue } from 'recoil';
import { sideNavStateAtom } from '../states/side-nav.state';

interface Props {
  categories: typeof categories;
}

export const Side = (props: Props) => {
  const sideNavState = useRecoilValue(sideNavStateAtom);
  const display = sideNavState.open ? 'block': 'none';

  return (
    <Box as={'aside'} d={[display, display, 'block']} position={'fixed'} left={0} top={0} w={60} h={'100vh'} zIndex={1} pt={92} bgColor={'#F0F0F0'}>
      <Box as={'nav'}>
        <CategoryList categories={props.categories} />
      </Box>
    </Box>
  );
};
