/*
  Warnings:

  - You are about to drop the `ContentsByChannel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ContentsByChannel" DROP CONSTRAINT "ContentsByChannel_channelId_fkey";

-- DropTable
DROP TABLE "ContentsByChannel";

-- CreateTable
CREATE TABLE "contents_by_channel" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT,
    "url" TEXT NOT NULL,
    "channelId" INTEGER NOT NULL,

    CONSTRAINT "contents_by_channel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "contents_by_channel" ADD CONSTRAINT "contents_by_channel_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "channels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
