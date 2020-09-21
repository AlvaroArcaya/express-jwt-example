import * as userRepository from '../repository/user';
import * as jwt from '../jwt';

export const signup = (req, res) => {
  const user = userRepository.create(req.body);

  res.status(201).send(user);
};

export const signin = (req, res) => {
  const user = userRepository.get(req.body);

  if (user) {
    const token = jwt.generateJWT(user, req.app.settings.jwtSecret, req.app.settings.jwtExpiresIn);

    res.status(200).send({
      data: { ...user, token },
    });
  } else {
    res.status(400).send({
      error: 'Wrong credentials',
    });
  }
};

export const me = (req, res) => {
  const verified = jwt.verifyToken(req.headers['access-token'], req.app.settings.jwtSecret);

  if (verified) {
    res.status(200).send({
      data: { ...verified, verified: true },
    });
  } else {
    res.status(400).send({
      error: "JWT expired or can't be verified",
    });
  }
};

export const signout = (req, res) => {
  res.send('signout');
};
