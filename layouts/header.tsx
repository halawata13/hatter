import { Heading, HStack } from "@chakra-ui/react";

export const Header = () => {
  return (
    <HStack as={'header'} justifyContent={'flex-start'} alignItems={'center'} h={12} bgColor={'#6E6E6E'} color={'#fff'} px={4}>
      <Heading as={'h1'} fontWeight={300} fontSize={24}>Hatter</Heading>
    </HStack>
  );
};
