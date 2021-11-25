import { Article } from "../../services/article.type";
import { Box, Heading, HStack, Image, Link } from "@chakra-ui/react";
import { useState } from 'react';

interface Props {
  article: Article;
}

export const ArticleListItem = (props: Props) => {
  const [ imageUrl, setImageUrl ] = useState(props.article.imageUrl);

  return (
    <Link href={props.article.link} isExternal mb={4} p={4} borderRadius={8} bgColor={'#F8F8F8'} _hover={{ textDecoration: 'none' }}>
      <HStack as={'article'} spacing={4} alignItems={'flex-start'}>
        {imageUrl ?
          <Image src={imageUrl} onError={() => setImageUrl('vercel.svg')} alt={''} flexShrink={'0'} w={'112px'} h={'112px'} borderRadius={6} bgColor={'#D8D8D8'} objectFit={'cover'} />
        :
          <Box flexShrink={'0'} w={'112px'} h={'112px'} borderRadius={6} bgColor={'#D8D8D8'} />
        }
        <Box flexGrow={1}>
          <HStack as={'header'} justifyContent={'space-between'} alignItems={'flex-start'} mb={4}>
            <Heading as={'h2'} flexGrow={1} fontWeight={'normal'} fontSize={24} lineHeight={1.4}>{props.article.title}</Heading>
            <Box as={'time'} fontSize={12}>{props.article.date}</Box>
          </HStack>
          <Box as={'p'} fontSize={14} color={'#555'}>{props.article.description}</Box>
        </Box>
      </HStack>
    </Link>
  );
};
