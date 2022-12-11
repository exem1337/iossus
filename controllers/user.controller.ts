import HashService from "../services/hash.service";
import UserRepository from "../services/user.repository";
import { checkJWT } from "../middlewares/jwt.mw";

export default class UserController {
  private app;

  constructor(app) {
    this.app = app;
  }

  public define() {
    this.app.get('/resolveLoggedUser', async (req, res) => {
      try {
        res.json(await checkJWT(req.headers.authorization));
      } catch(e) {
        res.send("Oshibka: " + e);
      }
    });
    this.app.post('/addUser', async (req, res) => {
      try {
        const hashService = new HashService();
        const userRepo = new UserRepository();
        const {username, password, typeId, statusId} = req.body;
        await userRepo.registerNewUser(
          username,
          hashService.encrypt(password),
          typeId,
          statusId
        );
        res.send("Done");
      } catch(e) {
        res.send("Oshibka: " + e);
      }
    });
    this.app.get('/getUser/:username', async (req, res) => {
      try {
        const hashService = new HashService();
        const userRepo = new UserRepository();
        const {username} = req.params;
        const {password} = req.body;
        const [users] = await userRepo.getUserInfoByUsername(username);
        if(users[0] && users[0]['password'] == hashService.encrypt(password)) {
          console.log('Password is correct!');
          const token = await hashService.getToken({id: users[0]['id'], username, typeId: users[0]['user_types_id'], statusId: users[0]['statuses_id']});
          res.json({token});
        } else {
          res.send("Wrong password or user doesn't exist");
        }
      } catch(e) {
        res.send("Oshibka: " + e);
      }
    });
    return 'User endpoints have been defined!';
  }

};