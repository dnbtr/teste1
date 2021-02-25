import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

const generateSHA256FromString = async (string: string) => {
  const stringBuffer = Buffer.from(string, 'binary');
  try {
    const hash = await createHash('sha256').update(stringBuffer).digest('hex');

    return hash;
  } catch (error) {
    console.error('generateSHA256FromString', error);

    return error;
  }
}

const getTextFile = async (filename: string): Promise<Buffer> => {
  try {
    return await readFile(`./src/data/${filename}.txt`);
  } catch (error) {
    return error;
  }
};

export { getTextFile, generateSHA256FromString };