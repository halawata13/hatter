import { Article } from "../../services/article.type";
import { VStack } from "@chakra-ui/react";
import { ArticleListItem } from "./article-list-item";

interface Props {
  articles: Article[];
}

export const ArticleList = (props: Props) => {
  return (
    <VStack as={'ul'}>
      {props.articles.map((article, index) => (
        <ArticleListItem key={index} article={article} />
      ))}
    </VStack>
  );
};
