import { dbInstanse } from "../database";

export default class UserRepository {
  public async registerNewUser(username, password, typeId, statusId) {
    return await dbInstanse.query(`INSERT INTO users (login, password, user_types_id, statuses_id) VALUES ('${username}', '${password}', ${typeId}, ${statusId})`);
  }
  public async getUserInfoByUsername(username) {
    return await dbInstanse.query(`SELECT * FROM users WHERE login = '${username}';`);
  }
};