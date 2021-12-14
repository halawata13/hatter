import { ArticleType } from "../features/article/article-type";
import { ArticleList } from "../features/article/article-list";
import { Article, categories, types } from "../services/article.type";
import { Box, useBreakpoint } from '@chakra-ui/react';
import { Side } from './side';

interface Props {
  categories: typeof categories;
  types: typeof types;
  articles: Article[];
}

export const Main = (props: Props) => {
  const breakpoint = useBreakpoint();

  return (
    <Box as={'main'}>
      {breakpoint !== 'sm' && breakpoint !== 'base' && (
        <Side categories={props.categories} />
      )}
      <Box ps={[0, 0, 60]} pt={24}>
        <ArticleType types={props.types} />
        <ArticleList articles={props.articles} />
      </Box>
    </Box>
  );
};
