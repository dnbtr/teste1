import fs from 'fs/promises';

const getTextFile = async (filename: string): Promise<Buffer> => {
  try {
    return await fs.readFile(`./src/data/${filename}.txt`);
  } catch (error) {
    return error;
  }
};

export default getTextFile;