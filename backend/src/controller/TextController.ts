import { Request, Response } from 'express';
import { getTextFile } from '../utils';

export default class TextController {

  public async get_text(req: Request, res: Response): Promise<Response> {
    const { filename } = req.params;
    const data = await getTextFile(filename);

    // Tratativa de erro
    if (data instanceof Error) {
      return res.status(500).json({ status: 'error', string: '', message: data.message }).send();
    } else {
      const stringData = data.toString();
      return res.json({ status: 'ok', string: stringData, message: '' }).send();
    }
  }
}