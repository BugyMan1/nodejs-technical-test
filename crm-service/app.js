import { express } from 'express';
import { crmRoutes } from './routes/crmRoutes.js';

const app = express();
app.use(express.json());

app.use('/crm', crmRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`CRM server listening on port ${PORT}`);
});