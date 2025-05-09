-- CreateTable
CREATE TABLE "ContentsByChannel" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT,
    "url" TEXT NOT NULL,
    "channelId" INTEGER NOT NULL,

    CONSTRAINT "ContentsByChannel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ContentsByChannel" ADD CONSTRAINT "ContentsByChannel_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "channels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
