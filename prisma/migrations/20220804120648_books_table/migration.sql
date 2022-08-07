-- CreateTable
CREATE TABLE "Books" (
    "id" TEXT NOT NULL,
    "bookName" TEXT NOT NULL,
    "bookPublisher" TEXT NOT NULL,
    "bookShelf" INTEGER NOT NULL,
    "bookCatagory" TEXT NOT NULL,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);
