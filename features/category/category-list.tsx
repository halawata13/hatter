import { ListItem, UnorderedList } from "@chakra-ui/react";
import Link from 'next/link';
import { categories } from "../../services/article.type";

interface Props {
  categories: typeof categories;
}

export const CategoryList = (props: Props) => {
  return (
    <UnorderedList>
      {props.categories.map((category, index) => (
        <ListItem key={index}>
          {category}
        </ListItem>
      ))}
    </UnorderedList>
  );
};
