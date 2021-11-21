import { Article } from "../../services/article.type";
import { Box, Heading, HStack, Image, Link } from "@chakra-ui/react";

interface Props {
  article: Article;
}

export const ArticleListItem = (props: Props) => {
  return (
    <Link href={props.article.link} isExternal>
      <HStack as={'article'}>
        <Image src={props.article.imageUrl} alt={props.article.title} />
        <Box>
          <HStack as={'header'}>
            <Heading as={'h2'}>{props.article.title}</Heading>
            <Box as={'time'}>{props.article.date}</Box>
          </HStack>
          <Box as={'p'}>{props.article.description}</Box>
        </Box>
      </HStack>
    </Link>
  );
};
