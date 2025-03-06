import { createUploadthing } from "uploadthing/next";
import { auth } from "@clerk/nextjs/server";

const f = createUploadthing();

const handleAuth = async () => {
  const { userId } = await auth();

  if (!userId) throw new Error("Unauthorized");
  return { userId };
};

export const ourFileRouter = {
  courseVideo: f({
    video: { maxFileSize: "25GB", maxFileCount: 1 },
  })
    .middleware(handleAuth)
    .onUploadComplete(async ({ file, metadata }) => {
      console.log("file :>> ", file);
      return { fileUrl: file.ufsUrl };
    }),
};

export default ourFileRouter;
