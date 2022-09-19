import { Router } from 'express';
import create from '../controllers/user.controller';

const userRouter = Router();

userRouter.post('/', create);

export default userRouter;