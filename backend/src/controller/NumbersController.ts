import { Request, Response } from 'express';

export default class NumbersController {

  public async numbers(req: Request, res: Response): Promise<Response> {
    const { number1, number2, number3 } = req.body;
    const { signed } = req.query;

    // Buffer.alloc(N), where N is the ammount of bytes
    let num1 = Buffer.alloc(4);
    let num2 = Buffer.alloc(2);
    let num3 = Buffer.alloc(1);

    // Response variables
    let buffer;
    let bufferString;
    let bufferNumeric;

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

      // Creating the final buffer (with 7 bytes)
      buffer = Buffer.concat([
        num1,
        num2,
        num3,
      ]);

      bufferString = buffer.toString('hex');
      bufferNumeric = parseInt(bufferString, 16);

      console.log(bufferNumeric)

    } catch (error) {
      return res.status(400).send({ status: 'error', error: error, message: error.message });
    }

    return res.status(200).json({
      status: 'ok',
      buffer: {
        length: buffer.length,
        string: bufferString,
        numeric: bufferNumeric,
        raw: buffer
      }
    });
  }
}