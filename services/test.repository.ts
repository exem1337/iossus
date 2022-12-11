import { dbInstanse } from "../database";

export default class TestRepository {
  public async addCourse(name, descritpion) {
    return await dbInstanse.query(`INSERT INTO course (name, description) VALUES ('${name}', '${descritpion}');`);
  }
  public async addTopic(name, description, file, statusId, courseId) {
    return await dbInstanse.query(``);
  }
  public async getCourseById(id) {
    return await dbInstanse.query(`SELECT * FROM course WHERE id = ${id};`);
  }
  public async connectUserCourse(userId, courseId) {
    return await dbInstanse.query(`INSERT INTO user_course (users_id, course_id) VALUES (${userId}, ${courseId});`);
  }
}