import { Article } from "../../services/article.type";
import { Box, Heading, HStack, Image, Link } from "@chakra-ui/react";

interface Props {
  article: Article;
}

export const ArticleListItem = (props: Props) => {
  return (
    <Link href={props.article.link} isExternal mb={4} p={4} borderRadius={8} bgColor={'#F8F8F8'} _hover={{ textDecoration: 'none' }}>
      <HStack as={'article'} spacing={4} alignItems={'flex-start'}>
        {props.article.imageUrl ?
          <Image src={props.article.imageUrl} alt={''} w={'112px'} h={'112px'} borderRadius={6} bgColor={'#D8D8D8'} objectFit={'cover'} />
        :
          <Box flexShrink={'0'} w={'112px'} h={'112px'} borderRadius={6} bgColor={'#D8D8D8'} />
        }
        <Box>
          <HStack as={'header'} justifyContent={'space-between'} alignItems={'flex-start'} mb={4}>
            <Heading as={'h2'} fontWeight={'normal'} fontSize={24}>{props.article.title}</Heading>
            <Box as={'time'} fontSize={12}>{props.article.date}</Box>
          </HStack>
          <Box as={'p'} fontSize={14}>{props.article.description}</Box>
        </Box>
      </HStack>
    </Link>
  );
};
