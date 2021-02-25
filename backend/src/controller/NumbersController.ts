import { Request, Response } from 'express';

export default class NumbersController {

  public async numbers(req: Request, res: Response): Promise<Response> {
    const { number1, number2, number3 } = req.body;
    const { signed } = req.query;

    // Buffer.alloc(n), onde N é a quantidade de bytes
    let num1 = Buffer.alloc(4);
    let num2 = Buffer.alloc(2);
    let num3 = Buffer.alloc(1);

    try {
      if (signed == 'true') {
        num1.writeInt32BE(number1, 0);
        num2.writeInt16BE(number2, 0);
        num3.writeInt8(number3, 0);
      } else {
        num1.writeUInt32BE(number1, 0);
        num2.writeUInt16BE(number2, 0);
        num3.writeUInt8(number3, 0);
      }
    } catch (error) {
      return res.status(400).send({ error: error, message: error.message });
    }

    return res.send('Hello World!');
  }
}