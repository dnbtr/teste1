import Router from 'express';
import HashController from './controller/HashController';
import NumbersController from './controller/NumbersController';
import TextController from './controller/TextController';

const hashController = new HashController();
const numbersController = new NumbersController();
const textController = new TextController();

const router = Router();

router.get('/get_hash', hashController.get_hash);
router.get('/get_text/:filename', textController.get_text);
router.post('/numbers', numbersController.numbers);

module.exports = router;