import { PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";

export const Page = (props: PropsWithChildren<{}>) => {
  return (
    <Box minH={'100vh'} color={'#1E1E1E'}>
      {props.children}
    </Box>
  );
};
