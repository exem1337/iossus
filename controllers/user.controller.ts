export default class UserController {
  private app;

  constructor(app) {
    this.app = app;
  }

  public define() {
    this.app.get('/suka', (req, res) => {
      
    });
  }

};