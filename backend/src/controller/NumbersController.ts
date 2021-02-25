import { Request, Response } from 'express';

export default class NumbersController {

  public async numbers(req: Request, res: Response): Promise<Response> {
    const { number1, number2, number3 } = req.body;

    console.log(`${number1}, ${number2}, ${number3}`);

    return res.send('Hello World!');
  }
}