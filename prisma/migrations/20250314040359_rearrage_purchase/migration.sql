/*
  Warnings:

  - A unique constraint covering the columns `[customerId,courseId]` on the table `Purchase` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Purchase_courseId_customerId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_customerId_courseId_key" ON "Purchase"("customerId", "courseId");
