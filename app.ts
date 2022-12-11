import express from 'express';
import DictionaryController from './controllers/dictionary.controller';
import TestController from './controllers/test.controller';
import UserController from './controllers/user.controller';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('dotenv').config();

console.log(new DictionaryController(app).define());
console.log(new TestController(app).define());
console.log(new UserController(app).define());

(async () => {
  await app.listen(process.env.APP_PORT, () => {
    console.log('Launched at ' + process.env.APP_PORT);
  });
})();