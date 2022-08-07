import { NextApiRequest, NextApiResponse } from "next";
import { getAllBooks } from "../../../controllers/books.controller";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const allBooks = await getAllBooks();
  console.log("allBooks", allBooks);
  res.send(allBooks);
}
