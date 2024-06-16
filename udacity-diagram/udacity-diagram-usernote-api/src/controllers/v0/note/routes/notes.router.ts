import {Router, Request, Response} from 'express';
import {NoteItem} from '../models/NoteItem';
import {NextFunction} from 'connect';
import * as jwt from 'jsonwebtoken';
import * as c from '../../../../config/config';

const router: Router = Router();

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.headers || !req.headers.authorization) {
    return res.status(401).send({message: 'No authorization headers.'});
  }

  const tokenBearer = req.headers.authorization.split(' ');
  if (tokenBearer.length != 2) {
    return res.status(401).send({message: `Malformed token. ${tokenBearer.length}`});
  }

  const token = tokenBearer[1];
  return jwt.verify(token, c.config.jwt.secret, (err, decoded) => {
    if (err) {
      return res.status(500).send({auth: false, message: 'Failed to authenticate.'});
    }
    return next();
  });
}

// Get all note items
router.get('/', async (req: Request, res: Response) => {
  const items = await NoteItem.findAndCountAll({order: [['id', 'DESC']]});
  res.send(items);
});

// Get a note resource
router.get('/:id',
    async (req: Request, res: Response) => {
      const {id} = req.params;
      const item = await NoteItem.findByPk(id);
      res.send(item);
    });
    
// Create note with metadata
router.post('/',
    requireAuth,
    async (req: Request, res: Response) => {
      const taskName = req.body.taskName;
      const toDo = req.body.toDo;

      if (!taskName) {
        return res.status(400).send({message: 'Task name is required or malformed.'});
      }
      
      if (!toDo) {
        return res.status(400).send({message: 'To Do is required or malformed.'});
      }

      //@ts-ignore
      const item = await new NoteItem({
        taskName: taskName,
        toDo: toDo
      });

      const savedItem = await item.save();
      res.status(201).send(savedItem);
    });

export const NoteRouter: Router = router;
