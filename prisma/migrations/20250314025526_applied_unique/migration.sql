/*
  Warnings:

  - A unique constraint covering the columns `[courseId,customerId]` on the table `Purchase` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Purchase_courseId_customerId_key" ON "Purchase"("courseId", "customerId");
