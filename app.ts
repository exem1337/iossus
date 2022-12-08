import express, { Router } from 'express';
import DictionaryController from './controllers/dictionary.controller';
import TestController from './controllers/test.controller';
import UserController from './controllers/user.controller';

const app = express();
require('dotenv').config();

new DictionaryController(app).define();
new TestController(app).define();
new UserController(app).define();

(async () => {
  await app.listen(3000, () => {
    console.log('Launched');
  });
})();