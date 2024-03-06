import bcrypt, { hash } from "bcrypt";
export const passwordHash = async (password: string) => {
  const salt = await bcrypt.genSaltSync(1);
  const hashedPassword = await bcrypt.hashSync(password, salt);
  return hashedPassword;
};

export const compareHash = async (password: string, hashedPassword: string) => {
  const isItRight = await bcrypt.compareSync(password, hashedPassword);
  return isItRight;
};
