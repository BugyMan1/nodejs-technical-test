import { express } from 'express';
import { erpController } from '../controllers/erpController.js';
const router = express.Router();

router.post('/order', erpController.getOrder); // todo: implement this route 

export default router;