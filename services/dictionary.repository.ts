import { dbInstanse } from "../database";

export default class DictionaryRepository {
  public async addStatus(status) {
    return await dbInstanse.query(`INSERT INTO statuses (name) VALUES ('${status}');`);
  }
  public async getStatusById(id) {
    return await dbInstanse.query(`SELECT name FROM statuses WHERE id = ${id};`);
  }
  public async addUserType(userType) {
    return await dbInstanse.query(`INSERT INTO user_types (name) VALUES ('${userType}');`);
  }
  public async getUserTypeById(id) {
    return await dbInstanse.query(`SELECT name FROM user_types WHERE id = ${id};`);
  }
}