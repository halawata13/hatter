import {
  Box,
  Button, DrawerBody,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack, useDisclosure
} from "@chakra-ui/react";
import { IoMenuOutline } from 'react-icons/io5';
import { Side } from './side';
import { categories } from '../services/article.type';
import { useRef } from 'react';

interface Props {
  categories: typeof categories;
}

export const Header = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <HStack as={'header'} justifyContent={['space-between', 'space-between', 'flex-start']} alignItems={'center'} position={'relative'} zIndex={2} h={12} bgColor={'#6E6E6E'} color={'#fff'} px={4}>
        <Button ref={btnRef} d={['block', 'block', 'none']} bgColor={'initial'} _hover={{ bgColor: 'initial' }} onClick={onOpen}>
          <IoMenuOutline />
        </Button>
        <Heading as={'h1'} fontWeight={300} fontSize={24} fontFamily={'"Nunito Sans", sans-serif'}>Hatter</Heading>
        <Box />
      </HStack>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Side categories={props.categories} onClick={() => onClose()} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
