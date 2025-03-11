import { createUploadthing } from "uploadthing/next";
import { auth } from "@clerk/nextjs/server";

const f = createUploadthing();

const handleAuth = async () => {
  const { userId } = await auth();

  if (!userId) throw new Error("Unauthorized");
  return { userId };
};

export const ourFileRouter = {
  courseImage: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .middleware(handleAuth)
    .onUploadComplete(async ({ file, metadata }) => {
      return { fileUrl: file.ufsUrl, fileType: file.type };
    }),
  courseVideo: f({
    video: { maxFileSize: "25GB", maxFileCount: 1 },
  })
    .middleware(handleAuth)
    .onUploadComplete(async ({ file, metadata }) => {
      return { fileUrl: file.ufsUrl, fileType: file.type };
    }),
};

export default ourFileRouter;
