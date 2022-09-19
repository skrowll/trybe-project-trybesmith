import jwt from 'jsonwebtoken';

const JWT_SECRET = 'SenhaSecreta123';

export const createToken = (username: string) => {
  const token = jwt.sign({ data: username }, JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

export const validateToken = (token: string) => {
  try {
    const data = jwt.verify(token, JWT_SECRET);
    return data;
  } catch (error) {
    const err = new Error('Expired or invalid token');
    // err.code = 'Unauthorized';
    throw err;
  }
};
