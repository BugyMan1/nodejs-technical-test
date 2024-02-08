import { express } from 'express';
import { logisticsController } from '../controllers/logisticsController.js';
const router = express.Router();

router.post('/process-order', logisticsController.processOrder); // todo: implement this route 

export default router;