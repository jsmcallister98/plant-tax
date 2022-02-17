// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from "fs";
import path from "path";

const IMAGE_FOLDER_NAME = "images";

export const getFolderLength = (family) => {
  const IMAGES_DIRECTORY = path.join(
    process.cwd(),
    "public",
    IMAGE_FOLDER_NAME,
    family
  );
  console.log(IMAGES_DIRECTORY);
  return fs.readdirSync(IMAGES_DIRECTORY).length;
};
