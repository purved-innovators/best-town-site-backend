import jwt from "jsonwebtoken";

export const verifyJwt = async (req, res, next) => {
  try {
    const token =
      req?.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(300).json({ message: "unauthorized access",isSuccess:false });
    }

    const userId = jwt.verify(token, process.env.JWT_SECRET);

    if (!userId) {
      return res.status(300).json({ message: "Invalid token detail",isSuccess:false });
    }

    req.userId = userId;

    next();
  } catch (error) {
    return res.status(500).json({ message: error.message, error,isSuccess:false });
  }
};
