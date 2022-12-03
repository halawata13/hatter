import { ListItem, UnorderedList, Link } from "@chakra-ui/react";
import { categories, Category } from "../../services/article.type";
import { getCategoryLabel } from '../../services/article.service';
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { categoryState } from "../../states/category.state";

interface Props {
  categories: typeof categories;
  onClick?: () => void;
}

export const CategoryList = (props: Props) => {
  const router = useRouter();
  const [ state, setState ] = useRecoilState(categoryState);

  const selected = (category: string) => {
    if (state.category === category) {
      return {
        bgColor: '#fff',
        fontWeight: 'bold',
      };
    }
    return {};
  };

  const onCategoryClicked = (category: Category) => {
    setState({
      category: category,
      type: state.type,
    });

    void router.push(`/${category}/${state.type}`);
  };

  return (
    <UnorderedList listStyleType={'none'} m={0} px={4}>
      {props.categories.map((category, index) => (
        <ListItem key={index} borderRadius={8} fontSize={14} _hover={{ bgColor: '#fff' }} { ...selected(category) } onClick={() => props.onClick?.()}>
          <Link display={'block'} p={4} _hover={{ textDecoration: 'none', boxShadow: 'none' }} onClick={() => onCategoryClicked(category)}>{getCategoryLabel(category as Category)}</Link>
        </ListItem>
      ))}
    </UnorderedList>
  );
};
