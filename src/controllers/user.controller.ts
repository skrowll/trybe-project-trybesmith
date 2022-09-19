import { Request, Response } from 'express';
import { IUser } from '../interfaces/IUser';
import * as userService from '../services/user.service';

const create = async (req: Request, res: Response) => {
  const user = req.body as IUser;
  const { status, token } = await userService.create(user);
  res.status(status).json({ token });
};

export default create;