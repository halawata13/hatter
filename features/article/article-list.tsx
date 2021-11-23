import { Article } from "../../services/article.type";
import { VStack } from "@chakra-ui/react";
import { ArticleListItem } from "./article-list-item";

interface Props {
  articles: Article[];
}

export const ArticleList = (props: Props) => {
  return (
    <VStack p={4} spacing={4}>
      {props.articles.map((article, index) => (
        <ArticleListItem key={index} article={article} />
      ))}
    </VStack>
  );
};
