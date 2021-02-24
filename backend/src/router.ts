import Router, { Request, Response } from 'express';
import getTextFile from './utils/fileReader';
import { generateSHA256FromString } from './utils/generateHash';

const router = Router();

router.get('/get_text/:filename', async (req: Request, res: Response) => {
  const { filename } = req.params;

  const data = await getTextFile(filename);

  // Tratativa de erro
  if (data instanceof Error) {
    res.status(500).json({ status: 'error', string: '', message: data.message }).send()
  } else {
    const stringData = data.toString();
    res.json({ status: 'ok', string: stringData, message: '' }).send()
  }
})

router.get('/get_hash/', async (req: Request, res: Response) => {
  const { string: string } = req.query;

  if (typeof string == 'string') {
    const hash = await generateSHA256FromString(string);

    res.json({ status: 'ok', string: string, hashedString: hash }).send()
  }
  console.log(string);

});


router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

module.exports = router;