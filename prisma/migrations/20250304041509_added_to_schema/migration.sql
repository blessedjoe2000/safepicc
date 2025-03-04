/*
  Warnings:

  - Added the required column `muxDataId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "muxDataId" TEXT NOT NULL,
ADD COLUMN     "videoUrl" TEXT;

-- CreateTable
CREATE TABLE "MuxData" (
    "id" TEXT NOT NULL,
    "assetId" TEXT,
    "playbackId" TEXT,

    CONSTRAINT "MuxData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Course_muxDataId_idx" ON "Course"("muxDataId");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_muxDataId_fkey" FOREIGN KEY ("muxDataId") REFERENCES "MuxData"("id") ON DELETE CASCADE ON UPDATE CASCADE;
