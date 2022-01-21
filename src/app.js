import express from "express";
const app = express();

import bodyParser from "body-parser";

import router from './api/resumePoint.js';


app.use(bodyParser.json());
app.use('/api/v1/', router);


 
export default app;