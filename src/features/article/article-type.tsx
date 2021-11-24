import { Box, HStack, Link } from "@chakra-ui/react";
import { categories, Category, Type, types } from "../../services/article.type";
import { useRouter } from "next/router";
import { default as NextLink } from 'next/link';
import { getTypeLabel } from "../../services/article.service";

interface Props {
  types: typeof types;
}

export const ArticleType = (props: Props) => {
  const router = useRouter();
  const category = ((categories as ReadonlyArray<string>).includes(String(router.query.params?.[0])) ? String(router.query.params?.[0]) : 'it') as Category;

  const selected = (type: string) => {
    if (router.asPath.includes(type) || (router.asPath === '' && type === 'entrylist')) {
      return {
        fontWeight: 'bold',
      };
    }
    return {};
  };

  return (
    <Box as={'ul'} d={'flex'} justifyContent={'center'} alignItems={'center'} w={'100%'} h={'44px'} listStyleType={'none'} bgColor={'#F8F8F8'}>
      {props.types.map((type, index) => (
        <Box as={'li'} key={index} mx={6} fontSize={14}>
          <NextLink href={`/${category}/${type}`} passHref>
            <Link _hover={{ textDecoration: 'none' }} { ...selected(type) }>{getTypeLabel(type as Type)}</Link>
          </NextLink>
        </Box>
      ))}
    </Box>
  );
};
