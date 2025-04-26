// create hash password and compare password use the bcryptjs
import bcrypt from 'bcryptjs';

export const createHash = (password: string) => {
  return bcrypt.hashSync(password, 10);
};

export const compareHash = (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash);
};