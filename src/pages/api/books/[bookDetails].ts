import { contains } from "@chakra-ui/utils";
import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // const bookName = req.query.bookName as string;
  const bookName = req.query.bookName as string;
  const words = bookName.split(" ");
  const wordsNoComma = words.toString().replace(/,/g, " ");

  try {
    const book = await prisma.books.findMany({
      where: { bookName: { contains: wordsNoComma } },
    });
    // console.log("res", book);
    res.status(200).json(book);
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
