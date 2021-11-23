import { ListItem, UnorderedList, Link } from "@chakra-ui/react";
import { default as NextLink } from 'next/link';
import { categories, Category, Type, types } from "../../services/article.type";
import { getCategoryLabel } from '../../services/article.service';
import { useRouter } from "next/router";

interface Props {
  categories: typeof categories;
}

export const CategoryList = (props: Props) => {
  const router = useRouter();
  const type = ((types as ReadonlyArray<string>).includes(String(router.query?.[1])) ? String(router.query?.[1]) : 'entrylist') as Type;

  const selected = (category: string) => {
    if (router.asPath.includes(category) || (router.asPath === '' && category === 'it')) {
      return {
        bgColor: '#fff',
        fontWeight: 'bold',
      };
    }
    return {};
  };

  return (
    <UnorderedList listStyleType={'none'} m={0} px={4}>
      {props.categories.map((category, index) => (
        <ListItem key={index} borderRadius={8} fontSize={14} _hover={{ bgColor: '#fff' }} { ...selected(category) }>
          <NextLink href={`/${category}/${type}`} passHref>
            <Link d={'block'} p={4} _hover={{ textDecoration: 'none' }}>{getCategoryLabel(category as Category)}</Link>
          </NextLink>
        </ListItem>
      ))}
    </UnorderedList>
  );
};
