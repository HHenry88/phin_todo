// express middleware to check if they have a valid token

// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";

// export const auth = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.header("x-auth-token");
//   if (!token) {
//     return res.status(401).json({ msg: "No token, authorization denied" });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.body.user = decoded;
//     next();
//   } catch (err) {
//     res.status(401).json({ msg: "Token is not valid" });
//   }
// };
