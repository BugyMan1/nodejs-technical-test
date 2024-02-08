import { express } from 'express';
import { crmController } from '../controllers/crmController.js';
const router = express.Router();

router.post('/client', crmController.getClientInfo); // todo: implement this route 

export default router;
