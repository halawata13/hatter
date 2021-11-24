import { Box, Button, Heading, HStack } from "@chakra-ui/react";
import { IoMenuOutline } from 'react-icons/io5';
import { useRecoilState } from 'recoil';
import { sideNavStateAtom } from '../states/side-nav.state';

export const Header = () => {
  const [ sideNavState, setSideNavState ] = useRecoilState(sideNavStateAtom);

  return (
    <HStack as={'header'} justifyContent={['space-between', 'space-between', 'flex-start']} alignItems={'center'} position={'relative'} zIndex={2} h={12} bgColor={'#6E6E6E'} color={'#fff'} px={4}>
      <Button d={['block', 'block', 'none']} bgColor={'initial'} _hover={{ bgColor: 'initial' }} onClick={() => setSideNavState({ open: !sideNavState.open })}>
        <IoMenuOutline />
      </Button>
      <Heading as={'h1'} fontWeight={300} fontSize={24} fontFamily={'"Nunito Sans", sans-serif'}>Hatter</Heading>
      <Box />
    </HStack>
  );
};
