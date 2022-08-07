import {
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import MyInput from "./UI_kit/Input";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import BooksTables from "./BooksTables";
import APIProvider from "../../utils/getSearchResults";
import { Field, Formik, FormikProps, FormikProvider, useFormik } from "formik";

// type props = {
//   books?: {
//     id: number;
//     bookName: string;
//     bookCatagory: string;
//     bookPublisher: String;
//     bookShelf: string;
//   }[];
// };

type props = {
  books: {
    id: number;
    bookName: string;
    bookCatagory: string;
    bookPublisher: String;
    bookShelf: string;
  }[];
};

type field = {
  name: string;
  onBlur: () => void;
  onChange: ChangeEventHandler;
  value: string;
};

export default function Search({ books }: props) {
  const [searchBy, setSearchBy] = useState("bookname");
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(books);
  const [placeholder, setPlaceholder] = useState("חפש לפי ספר");
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      searchBy: searchBy,
      searchValue: "",
    },
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      const res = await APIProvider.getSearchResults(
        values.searchBy,
        values.searchValue
      );
      console.log("res from formik", res);
      if (res.success === false) {
        console.log("we have an error");
        console.log(res);
        toast({
          title: "שגיאה",
          description: "נא להכניס ערך חיפוש",
          status: "error",
          duration: 5000,
          containerStyle: {
            display: "flex",
            direction: "rtl",
          },
          isClosable: true,
        });
        return setSearchResult(books);
      }
      setSearchResult(res);
    },
  });

  const handleSearchBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selection = e.target.value;
    console.log(selection);
    setSearchBy(selection);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchBy, searchValue);
    const result = await APIProvider.getSearchResults(searchBy, searchValue);
    console.log("search results", result[0]);
    setSearchResult(result[0].data);
  };

  const validateValue = (value: string) => {
    if (value.length === 0) {
      return "This field is required";
    }
    return undefined;
  };

  return (
    <>
      <FormikProvider value={formik}>
        <Flex
          w="100%"
          mt="20px"
          mr="10px"
          direction="column"
          borderColor="red.500"
          border="20px"
        >
          <Heading
            mx={["0", "0", "auto"]}
            // mx="10px"
            my="10px"
            textColor="gray.800"
          >
            בוטיק הספרים של ישיבת
          </Heading>
          <Divider textColor="gray.900" bg="gray.900" w="90%" mx="auto" />
        </Flex>
        <Flex
          w="100%"
          mt="15px"
          alignItems="center"
          justifyContent="center"
          direction="row"
        >
          <Flex
            direction="column"
            w={["100%", "80%"]}
            mt={["0", "10px"]}
            alignItems="center"
          >
            <Heading mr="15px" mb="40px" fontSize={["lg", "2xl"]}>
              ספרים רבותיי, ספרים, רק היום, ספרי לימוד במחיר הכרם!
            </Heading>

            <form onSubmit={formik.handleSubmit}>
              <Flex w="100%" alignItems="center" justifyContent="center">
                <Flex w="95%" alignItems="center">
                  <FormControl
                    w="240px"
                    as={Flex}
                    flexDir="row"
                    alignItems="center"
                  >
                    <Flex
                      h="40px"
                      alignItems="center"
                      borderStartRadius={"md"}
                      p="5px"
                      bg="gray.200"
                    >
                      <FormLabel
                        htmlFor="searchBy"
                        m="0"
                        mr="5px"
                        minW="60px"
                        borderEndRadius={"0"}
                      >
                        חפש לפי
                      </FormLabel>
                    </Flex>
                    <Select
                      w="120px"
                      id="searchBy"
                      defaultValue={searchBy}
                      borderRadius="0"
                      _focus={{ border: "none", outline: "none" }}
                      onChange={formik.handleChange}
                    >
                      <option value="bookname">שם ספר</option>
                      <option value="bookpublisher">הוצאה</option>
                      <option value="bookcatagory">קטגוריה</option>
                    </Select>
                  </FormControl>

                  <FormControl>
                    <Input
                      name="searchValue"
                      id="searchValue"
                      borderRadius="0"
                      onChange={formik.handleChange}
                      _focus={{ border: "none", outline: "none" }}
                      placeholder={placeholder}
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="gray"
                    borderStartRadius={"none"}
                  >
                    חפש
                  </Button>
                </Flex>
              </Flex>
            </form>
          </Flex>
        </Flex>
        <BooksTables books={searchResult || books} />
      </FormikProvider>
    </>
  );
}
