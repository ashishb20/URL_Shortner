import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

//  Routes add
import urlRoutes from './routes/url.routes.js';    

const app = express();
// Rate Limiting
const limiter = rateLimit({
    windowMs : 15*60*1000,
    max:100,
    message:" Too many requests from this IP, please try again later"
});
app.use(limiter);
app.use(cors());
app.use(express.json());

app.use('/api/url', urlRoutes);

export default app ;