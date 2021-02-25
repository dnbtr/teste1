import { Request, Response } from 'express';
import { generateSHA256FromString } from '../utils';

export default class HashController {

  public async get_hash(req: Request, res: Response): Promise<void> {
    const { string: string } = req.query;

    if (typeof string == 'string') {
      const hash = await generateSHA256FromString(string);

      res.json({ status: 'ok', string: string, hashedString: hash }).send();
    } else {
      res.status(500).json({ status: 'error', string: '', message: 'Internal server error' }).send();
    }
  }
}