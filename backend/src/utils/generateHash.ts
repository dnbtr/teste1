import { createHash } from 'crypto';

const generateSHA256FromString = async (string: string) => {
  const stringBuffer = Buffer.from(string, 'binary');
  try {
    const hash = await createHash('sha256').update(stringBuffer).digest('hex');

    return hash;

  } catch (error) {
    return error;
  }

}

export { generateSHA256FromString };