import { PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";

export const Page = (props: PropsWithChildren<{}>) => {
  return (
    <Box minH={'100vh'}>
      {props.children}
    </Box>
  );
};
