import {Sequelize} from 'sequelize-typescript';

const {DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD} = process.env;

export const dbInstanse = new Sequelize({
  database: DB_DATABASE,
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  dialect: "mysql"
});