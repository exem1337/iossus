import TestRepository from "../services/test.repository";
import FileProcessor from "../services/fp.service";
import { checkJWT } from "../middlewares/jwt.mw";

require('dotenv').config();

export default class TestController {
  private app;

  constructor(app) {
    this.app = app;
  }

  public define() {
    this.app.post('/addCourse', async (req, res) => {
      try {
        const testRepo = new TestRepository();
        const {name, description} = req.body;
        await testRepo.addCourse(name, description);
        res.send("Done");
      } catch(e) {
        res.send("Oshibka: " + e);
      }
    });
    this.app.post('/addTopic', async (req, res) => {
      try {
        const testRepo = new TestRepository();
        const fileProc = new FileProcessor(process.env.STATIC_STORAGE);
        const {name, description, fileBuffer, courseId, statusId} = req.body;
        const filePath = fileProc.bufferToStatic(fileBuffer);
        await testRepo.addTopic(name, description, filePath, statusId, courseId);
        res.send("Done");
      } catch(e) {
        res.send("Oshibka: " + e);
      }
    });
    this.app.get('/getCourse/:id', async (req, res) => {
      try {
        const testRepo = new TestRepository();
        const {id} = req.params;
        const [result] = await testRepo.getCourseById(id);
        res.json(result[0]);
      } catch(e) {
        res.send("Oshibka: " + e);
      }
    });
    this.app.patch('/connectUserCourse', async (req, res) => {
      try {
        const testRepo = new TestRepository();
        const {userId, courseId} = req.body;
        await testRepo.connectUserCourse(userId, courseId);
        res.send("Done");
      } catch(e) {
        res.send("Oshibka: " + e);
      }
    });
    this.app.get('/getTest/:id', async (req, res) => {
      
    });
    this.app.get('/getTestByCourse/:id', async (req, res) => {
      
    });
    return 'Test endpoints have been defined!';
  }

};