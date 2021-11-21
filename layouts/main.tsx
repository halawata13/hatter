import { Box, HStack } from "@chakra-ui/react";
import { ArticleType } from "../features/article/article-type";
import { ArticleList } from "../features/article/article-list";
import { Article, categories, types } from "../services/article.type";
import { Side } from "./side";

interface Props {
  categories: typeof categories;
  types: typeof types;
  articles: Article[];
}

export const Main = (props: Props) => {
  return (
    <HStack as={'main'} flexGrow={1}>
      <Side categories={props.categories} />
      <Box>
        <ArticleType types={props.types} />
        <ArticleList articles={props.articles} />
      </Box>
    </HStack>
  );
};
