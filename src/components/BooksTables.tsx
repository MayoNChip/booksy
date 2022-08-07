import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

type props = {
  searchResult: {
    id: number;
    bookName: string;
    bookCatagory: string;
    bookPublisher: String;
    bookShelf: string;
  }[];
};

type book = {
  id: number;
  bookName: string;
  bookCatagory: string;
  bookPublisher: String;
  bookShelf: string;
};

export default function BooksTables({ searchResult }: props) {
  console.log(searchResult);
  return (
    <div>
      <Table mt="20px" variant="striped" colorScheme="green">
        <Thead>
          <Tr>
            <Th>מספר מדף</Th>
            <Th>שם הספר</Th>
            <Th>קטגוריה</Th>
            <Th>מוציא לאור</Th>
          </Tr>
        </Thead>
        <Tbody>
          {searchResult &&
            searchResult.map((book: book) => {
              return (
                <Tr key={book.id}>
                  <Td>{book.bookShelf}</Td>
                  <Td>{book.bookName}</Td>
                  <Td>{book.bookCatagory}</Td>
                  <Td>{book.bookPublisher}</Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </div>
  );
}
