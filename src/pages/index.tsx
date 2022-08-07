import { Flex } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import BooksTable from "../components/BooksTable";
import BooksTables from "../components/BooksTables";
import { GetServerSideProps, NextPage } from "next";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const index: NextPage = ({ books }) => {
  console.log("props", books);
  return (
    <Flex
      direction="column"
      w="100vw"
      h="100vh"
      bg="gray.700"
      alignItems="center"
    >
      <Navbar />
      <Flex
        w={["90%", "80%"]}
        bg="gray.300"
        my="10px"
        borderRadius="md"
        direction="column"
        pb="15px"
        mb="15px"
      >
        <Search books={books} />
      </Flex>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios("http://localhost:3000/api/books/allbooks");
  return {
    props: {
      books: res?.data.data,
    },
  };
};

export default index;
