import { Request, Response } from 'express';
import { verifyPassword, generateJWTToken } from '../utils';

import mockDatabase from '../db/mockDatabase.json';

export default class HashController {

  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password }: { email: string, password: string } = req.body;

    let foundUser = mockDatabase.find((user) => {
      if (user.email == email) {
        return user;
      }
    });

    if (!foundUser) {
      return res.status(403).json({ status: 'error', message: 'email and/or password incorrect or user does not exist' }).send();
    }

    // Se encontrar o usuário, verificar a senha
    const isPasswordValid: boolean = await verifyPassword(password, foundUser.password);
    
    if (!isPasswordValid) {
      return res.status(403).json({ status: 'error', message: 'email and/or password incorrect or user does not exist' }).send();
    } else {
      const token = generateJWTToken({ email });
      return res.status(200).json({ status: 'sucess', message: 'login feito com sucesso!', token: token, user: email }).send();
    }
  }
}