import {Router, Request, Response} from 'express';
import {NoteRouter} from './note/routes/notes.router';
import {UserRouter} from './user/routes/users.router';

const router: Router = Router();

router.use('/note', NoteRouter);
router.use('/users', UserRouter);

router.get('/', async (req: Request, res: Response) => {
  res.send(`V0`);
});

export const IndexRouter: Router = router;
