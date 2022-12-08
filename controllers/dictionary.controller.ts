import DictionaryRepository from "../services/dictionary.repository";

export default class DictionaryController {
  private app;

  constructor(app) {
    this.app = app;
  }

  public define() {
    this.app.post('/addStatus', async (req, res) => {
      const dickRepo = new DictionaryRepository();
      const {status} = req.body;
      res.send(await dickRepo.addStatus(status));
    });
    this.app.get('/getStatus/:id', async (req, res) => {
      const dickRepo = new DictionaryRepository();
      const {id} = req.params;
      res.send(await dickRepo.getStatusById(id));
    });
  }

};