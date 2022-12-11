import DictionaryRepository from "../services/dictionary.repository";

export default class DictionaryController {
  private app;

  constructor(app) {
    this.app = app;
  }

  public define() {
    this.app.post("/addStatus", async (req, res) => {
      try {
        const dickRepo = new DictionaryRepository();
        const { status } = req.body;
        await dickRepo.addStatus(status);
        res.send('Done');
      } catch (e) {
        res.send("Oshibka: " + e);
      }
    });
    this.app.get("/getStatus/:id", async (req, res) => {
      try {
        const dickRepo = new DictionaryRepository();
        const { id } = req.params;
        const [results] = await dickRepo.getStatusById(id);
        res.json(results[0]);
      } catch (e) {
        res.send("Oshibka: " + e);
      }
    });
    this.app.post("/addUserType", async (req, res) => {
      try {
        const dickRepo = new DictionaryRepository();
        const { type } = req.body;
        await dickRepo.addUserType(type);
        res.send('Done');
      } catch (e) {
        res.send("Oshibka: " + e);
      }
    });
    this.app.get("/getUserType/:id", async (req, res) => {
      try {
        const dickRepo = new DictionaryRepository();
        const { id } = req.params;
        const [results] = await dickRepo.getUserTypeById(id);
        res.json(results[0]);
      } catch (e) {
        res.send("Oshibka: " + e);
      }
    });
    return 'Dictionary endpoints have been defined!';
  }
}
