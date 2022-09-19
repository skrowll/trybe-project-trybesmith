import { IUser } from '../interfaces/IUser';
import * as userModel from '../models/user.model';
import { createToken } from './jwt.service';

export const create = async (user: IUser) => {
  const userExists = await userModel.getByUsername(user.username);
  if (userExists) return { status: 400, error: { message: 'Esse usuário já existe' } };

  const token = createToken(user.username);
  await userModel.create(user);
  return { status: 201, token };
};

export default create;