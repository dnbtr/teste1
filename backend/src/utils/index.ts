import * as jwt from 'jsonwebtoken';
import { readFile } from 'fs/promises';
import { createHash, randomBytes, scrypt } from 'crypto';

const getTextFile = async (filename: string): Promise<Buffer> => {
  try {
    return await readFile(`./src/data/${filename}.txt`);
  } catch (error) {
    console.error('getTextFile', error);
    return error;
  }
};

const generateSHA256FromString = async (string: string) => {
  const stringBuffer = Buffer.from(string, 'binary');
  try {
    const hash = createHash('sha256').update(stringBuffer).digest('hex');

    return hash;
  } catch (error) {
    console.error('generateSHA256FromString', error);
    return error;
  }
}

const generateJWTToken = (payload: object): string => {
  const token = jwt.sign(payload, process.env.APP_NORMAL_SECRET || 'default_normal', {
    expiresIn: '60000',
  });
  return token;
}

const hashPassword = async (password: string) => {
  return new Promise((resolve, reject) => {
    // generate random 16 bytes long salt
    const salt = randomBytes(16).toString("hex")

    scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(salt + ":" + derivedKey.toString('hex'))
    });
  })
}

const verifyPassword = (password: string, hash: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const [salt, key] = hash.split(":")
    scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(key == derivedKey.toString('hex'))
    });
  })
}

export { getTextFile, generateSHA256FromString, generateJWTToken, hashPassword, verifyPassword };