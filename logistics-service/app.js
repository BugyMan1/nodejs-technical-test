import { express } from 'express';
import { logisticsRoutes } from './routes/logisticsRoutes.js';

const app = express();
app.use(express.json());

app.use('/crlogisticsm', logisticsRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Logistics server listening on port ${PORT}`);
});