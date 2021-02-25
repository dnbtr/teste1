import { Request, Response } from 'express';
import { getTextFile } from '../utils';

export default class TextController {

  public async get_text(req: Request, res: Response): Promise<Response> {
    const { filename } = req.params;
    const { html } = req.query;
    const data = await getTextFile(filename);

    // Tratativa de erro
    if (data instanceof Error) {
      return res.status(500).json({ status: 'error', string: '', message: data.message }).send();
    } else {
      const stringData = data.toString();

      // Se query string html == true
      if (html == 'true') {
        return res.status(200).send(`<p>${stringData}</p>`)
      } else {
        return res.json({ status: 'ok', string: stringData, message: '' }).send();
      }
    }
  }
}