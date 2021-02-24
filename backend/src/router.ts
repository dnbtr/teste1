import Router, { Request, Response } from 'express';

const router = Router();

router.get('/get-txt', (req: Request, res: Response) => {
  res.json({
    message: 'oi'
  }).send()
})

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

module.exports = router;