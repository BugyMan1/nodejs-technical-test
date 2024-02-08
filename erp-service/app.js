import { express } from 'express';
import { erpRoutes } from './routes/erpRoutes.js';

const app = express();
app.use(express.json());

app.use('/erp', erpRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`ERP server listening on port ${PORT}`);
});
