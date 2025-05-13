// authMiddleware.js

const AUTH_ID = process.env.DEVELOPER_ID;
const AUTH_PASSWORD = process.env.DEVELOPER_PASSWORD;

const authMiddleware = (req, res, next) => {
    

  const {devId,devPassword} = req.body;

  if (devId === AUTH_ID && devPassword === AUTH_PASSWORD) {
    return next(); 
  } else {
    return res.status(401).json({ message: "Unauthorized: you are not allowed to perform this action " });
  }
};

export default authMiddleware;
