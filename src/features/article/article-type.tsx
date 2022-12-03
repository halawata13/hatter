import { Box, Link } from "@chakra-ui/react";
import { Type, types } from "../../services/article.type";
import { useRouter } from "next/router";
import { getTypeLabel } from "../../services/article.service";
import { useRecoilState } from "recoil";
import { categoryState } from "../../states/category.state";

interface Props {
  types: typeof types;
}

export const ArticleType = (props: Props) => {
  const router = useRouter();
  const [ state, setState ] = useRecoilState(categoryState);

  const selected = (type: string) => {
    if (state.type === type) {
      return {
        fontWeight: 'bold',
      };
    }
    return {};
  };

  const onTypeClicked = (type: Type) => {
    setState({
      category: state.category,
      type: type,
    });

    void router.push(`/${state.category}/${type}`);
  };

  return (
    <Box as={'ul'} pos={'fixed'} top={12} left={0} display={'flex'} justifyContent={'center'} alignItems={'center'} w={'100%'} h={'44px'} ps={[0, 0, 60]} listStyleType={'none'} bgColor={'#F8F8F8'}>
      {props.types.map((type, index) => (
        <Box as={'li'} key={index} mx={6} fontSize={14}>
          <Link _hover={{ textDecoration: 'none' }} {...selected(type)} onClick={() => onTypeClicked(type)}>{getTypeLabel(type as Type)}</Link>
        </Box>
      ))}
    </Box>
  );
};
