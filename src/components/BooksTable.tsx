import { Flex } from "@chakra-ui/react";
import DataTable, { TableColumn } from "react-data-table-component";
interface DataTableProps {
  id: number;
  bookName: string;
  bookCatagory: string;
  bookPublisher: String;
}

const columns: TableColumn<DataTableProps>[] = [
  {
    name: "שם הספר",
    selector: (row) => row.bookName,
    sortable: true,
  },
  {
    name: "קטגוריה",
    selector: (row) => row.bookCatagory,
    sortable: true,
  },
  {
    name: "הוצאה",
    selector: (row) => row.bookCatagory,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    bookName: "א שולחן ערוך",
    bookCatagory: "הלכות",
    bookPublisher: "ספרייה העברית",
  },
  {
    id: 2,
    bookName: "ב קדוש אחר",
    bookCatagory: "משניות",
    bookPublisher: "הספרייה של יוסי",
  },
  {
    id: 3,
    bookName: "ת קדוש אחר",
    bookCatagory: "משניות",
    bookPublisher: "הספרייה של יוסי",
  },
];

export default function BooksTable(): JSX.Element {
  return (
    <Flex w="100%" justifyContent="center" mt="20px">
      <Flex w="80%" minH={["500px", "700px", "1000px"]} justifyContent="center">
        <DataTable columns={columns} dense pagination data={data} />
      </Flex>
    </Flex>
  );
}
