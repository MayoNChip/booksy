import { Box, Flex } from "@chakra-ui/react";

export default function Card({
  box,
}: {
  box: { bg: string; content: string };
}) {
  return (
    <Flex
      h="300px"
      //   w={["100px", "200px", "300px", null]}
      bg={["transparent", "transparent", "gray.500", null]}
      mx="15px"
      my="15px"
    >
      <Box bg={["red", "green", "transparent", box.bg]} w="120px" height="80px">
        {box.content}
      </Box>
    </Flex>
  );
}
