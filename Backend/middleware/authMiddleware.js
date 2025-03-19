import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(404).json({
      message: "No token found! Authorization Denied",
      success: false,
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
      }
};
