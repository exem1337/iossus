import { dbInstanse } from "../database";

export default class DictionaryRepository {
  public async addStatus(status) {
    await dbInstanse.query(`INSERT INTO statuses (name) VALUES '${status};'`);
  }
  public async getStatusById(id) {
    await dbInstanse.query(`SELECT name FROM statuses WHERE id = ${id};`);
  }
}