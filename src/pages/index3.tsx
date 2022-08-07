import { Box, Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const boxes = [
    { bg: "red", content: "hello" },
    { bg: "green", content: "world" },
    { bg: "green", content: "YAELLLL" },
    { bg: "pink", content: "IDOO" },
  ];

  return (
    <Flex
      bg={"white"}
      w={"100%"}
      h={"100vh"}
      // justifyContent={"center"}
      // alignItems={"center"}
    >
      <Flex
        w="100%"
        h="100%"
        justifyContent={"center"}
        alignItems={"center"}
        direction={["column", "column", "row", "row"]}
      >
        <SimpleGrid columns={[1, 2, 4, 8]}>
          {/* <Box bg="tomato" w="120px" height="80px"></Box>
          <Box bg="tomato" w="120px" height="80px"></Box>
          <Box bg="tomato" w="120px" height="80px"></Box>
          <Box bg="tomato" w="120px" height="80px"></Box>
          <Box bg="tomato" w="120px" height="80px"></Box>
          <Box bg="tomato" w="120px" height="80px"></Box>
          <Box bg="tomato" w="120px" height="80px"></Box>
          <Box bg="tomato" w="120px" height="80px"></Box> */}
          {boxes.map((box) => (
            <Card box={box} />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Home;
