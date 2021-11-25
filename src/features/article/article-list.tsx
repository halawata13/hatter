import { Article } from "../../services/article.type";
import { Box } from "@chakra-ui/react";
import { ArticleListItem } from "./article-list-item";

interface Props {
  articles: Article[];
}

export const ArticleList = (props: Props) => {
  return (
    <Box d={['flex', 'flex', 'flex', 'grid']} p={4} flexDirection={'column'} gridTemplateColumns={'calc(50% - 8px) calc(50% - 8px)'} gridColumnGap={4}>
      {props.articles.map(article => (
        <ArticleListItem key={article.link} article={article} />
      ))}
    </Box>
  );
};
