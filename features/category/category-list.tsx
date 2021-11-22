import { ListItem, UnorderedList, Link } from "@chakra-ui/react";
import { default as NextLink } from 'next/link';
import { categories } from "../../services/article.type";
import { getCategoryLabel } from '../../services/article.service';

interface Props {
  categories: typeof categories;
}

export const CategoryList = (props: Props) => {
  return (
    <UnorderedList listStyleType={'none'}>
      {props.categories.map((category, index) => (
        <ListItem key={index}>
          <NextLink href={`/${category}`} passHref>
            <Link d={'block'} py={4}>{getCategoryLabel(category)}</Link>
          </NextLink>
        </ListItem>
      ))}
    </UnorderedList>
  );
};
