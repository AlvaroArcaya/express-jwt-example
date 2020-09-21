import jwt from 'jsonwebtoken';

export const generateJWT = (userData, key, expiresIn) => jwt.sign(userData, key, { expiresIn });

export const verifyToken = (jwtToken, key) => {
  try {
    const meh = jwt.verify(jwtToken, key);

    return meh;
  } catch (e) {
    console.log('e:', e);
    return null;
  }
};
